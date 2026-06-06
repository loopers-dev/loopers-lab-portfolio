import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;      // Max requests per window
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour window

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (!entry || now > entry.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return false;
    }

    entry.count++;
    if (entry.count > RATE_LIMIT_MAX) {
        return true;
    }
    return false;
}

async function ensureSheetExists(sheets: any, spreadsheetId: string, sheetName: string): Promise<number> {
    const response = await sheets.spreadsheets.get({ spreadsheetId });
    const sheet = response.data.sheets?.find((s: any) => s.properties.title === sheetName);

    if (sheet) {
        return sheet.properties.sheetId!;
    }

    console.log(`Monthly sheet tab "${sheetName}" not found. Creating and formatting it...`);

    // 1. Create the sheet
    const addResult = await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
            requests: [{
                addSheet: {
                    properties: {
                        title: sheetName,
                        gridProperties: { rowCount: 1000, columnCount: 15 }
                    }
                }
            }]
        }
    });

    const sheetId = addResult.data.replies![0].addSheet!.properties!.sheetId!;

    // 2. Write headers
    const HEADERS = [
        'Timestamp', 'Name', 'Email', 'Company', 'Service', 'Budget', 'Message', 'Source',
        'Status', 'Priority', 'Assigned To', 'Follow-up Date', 'Notes'
    ];
    await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `'${sheetName}'!A1:M1`,
        valueInputOption: 'RAW',
        requestBody: { values: [HEADERS] },
    });

    // 3. Apply styles & validations
    const STATUS_OPTIONS = ['New', 'Contacted', 'In Progress', 'Qualified', 'Closed Won', 'Closed Lost'];
    const PRIORITY_OPTIONS = ['High', 'Medium', 'Low'];
    const COLUMN_WIDTHS = [170, 140, 200, 140, 200, 100, 350, 110, 120, 90, 130, 130, 280];
    const HEADER_BG = { red: 0.15, green: 0.15, blue: 0.22, alpha: 1 };
    const HEADER_TEXT = { red: 1, green: 1, blue: 1, alpha: 1 };

    const requests: any[] = [];

    // Freeze header row
    requests.push({
        updateSheetProperties: {
            properties: { sheetId, gridProperties: { frozenRowCount: 1 } },
            fields: 'gridProperties.frozenRowCount',
        },
    });

    // Format header row
    requests.push({
        repeatCell: {
            range: { sheetId, startRowIndex: 0, endRowIndex: 1, startColumnIndex: 0, endColumnIndex: HEADERS.length },
            cell: {
                userEnteredFormat: {
                    backgroundColor: HEADER_BG,
                    textFormat: { foregroundColor: HEADER_TEXT, bold: true, fontSize: 11 },
                    horizontalAlignment: 'CENTER',
                    verticalAlignment: 'MIDDLE',
                },
            },
            fields: 'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment,verticalAlignment)',
        },
    });

    // Column widths
    COLUMN_WIDTHS.forEach((width, i) => {
        requests.push({
            updateDimensionProperties: {
                range: { sheetId, dimension: 'COLUMNS', startIndex: i, endIndex: i + 1 },
                properties: { pixelSize: width },
                fields: 'pixelSize',
            },
        });
    });

    // Header row height
    requests.push({
        updateDimensionProperties: {
            range: { sheetId, dimension: 'ROWS', startIndex: 0, endIndex: 1 },
            properties: { pixelSize: 40 },
            fields: 'pixelSize',
        },
    });

    // Status dropdown (col I = index 8)
    requests.push({
        setDataValidation: {
            range: { sheetId, startRowIndex: 1, endRowIndex: 1000, startColumnIndex: 8, endColumnIndex: 9 },
            rule: {
                condition: { type: 'ONE_OF_LIST', values: STATUS_OPTIONS.map(s => ({ userEnteredValue: s })) },
                showCustomUi: true, strict: true,
            },
        },
    });

    // Priority dropdown (col J = index 9)
    requests.push({
        setDataValidation: {
            range: { sheetId, startRowIndex: 1, endRowIndex: 1000, startColumnIndex: 9, endColumnIndex: 10 },
            rule: {
                condition: { type: 'ONE_OF_LIST', values: PRIORITY_OPTIONS.map(p => ({ userEnteredValue: p })) },
                showCustomUi: true, strict: true,
            },
        },
    });

    // Status & Priority Conditional Formatting
    const STATUS_COLORS: Record<string, any> = {
        'New': { red: 0.85, green: 0.92, blue: 1.0 },
        'Contacted': { red: 0.95, green: 0.90, blue: 0.70 },
        'In Progress': { red: 0.80, green: 0.90, blue: 1.0 },
        'Qualified': { red: 0.78, green: 0.95, blue: 0.78 },
        'Closed Won': { red: 0.60, green: 0.90, blue: 0.60 },
        'Closed Lost': { red: 0.95, green: 0.78, blue: 0.78 },
    };

    const PRIORITY_COLORS: Record<string, any> = {
        'High': { red: 0.95, green: 0.75, blue: 0.75 },
        'Medium': { red: 0.98, green: 0.92, blue: 0.73 },
        'Low': { red: 0.85, green: 0.93, blue: 0.85 },
    };

    for (const [status, color] of Object.entries(STATUS_COLORS)) {
        requests.push({
            addConditionalFormatRule: {
                rule: {
                    ranges: [{ sheetId, startRowIndex: 1, endRowIndex: 1000, startColumnIndex: 8, endColumnIndex: 9 }],
                    booleanRule: {
                        condition: { type: 'TEXT_EQ', values: [{ userEnteredValue: status }] },
                        format: { backgroundColor: color, textFormat: { bold: true } },
                    },
                },
                index: 0,
            },
        });
    }

    for (const [priority, color] of Object.entries(PRIORITY_COLORS)) {
        requests.push({
            addConditionalFormatRule: {
                rule: {
                    ranges: [{ sheetId, startRowIndex: 1, endRowIndex: 1000, startColumnIndex: 9, endColumnIndex: 10 }],
                    booleanRule: {
                        condition: { type: 'TEXT_EQ', values: [{ userEnteredValue: priority }] },
                        format: { backgroundColor: color, textFormat: { bold: true } },
                    },
                },
                index: 0,
            },
        });
    }

    // Alternating row colors
    requests.push({
        addBanding: {
            bandedRange: {
                range: { sheetId, startRowIndex: 0, endRowIndex: 1000, startColumnIndex: 0, endColumnIndex: HEADERS.length },
                rowProperties: {
                    headerColor: HEADER_BG,
                    firstBandColor: { red: 1, green: 1, blue: 1 },
                    secondBandColor: { red: 0.96, green: 0.96, blue: 0.97 },
                },
            },
        },
    });

    // Apply batch updates
    await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: { requests },
    });

    return sheetId;
}

export async function POST(req: NextRequest) {
    try {
        // Rate limiting
        const forwardedFor = req.headers.get('x-forwarded-for');
        const ip = forwardedFor?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'unknown';

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        const body = await req.json();
        const { name, email, company, service, budget, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required fields.' },
                { status: 400 }
            );
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please provide a valid email address.' },
                { status: 400 }
            );
        }

        const now = new Date();
        // Formatted timestamp in ICT (UTC+7) for local logging compatibility
        const nowVietnam = new Date(now.getTime() + 7 * 60 * 60 * 1000);
        const timestamp = nowVietnam.toISOString().replace('T', ' ').substring(0, 19);

        // Detect source/UTM from referer
        const referer = req.headers.get('referer') || '';
        let source = 'Direct';
        try {
            if (referer) {
                const refUrl = new URL(referer);
                const utmSource = refUrl.searchParams.get('utm_source');
                if (utmSource) {
                    source = utmSource;
                } else if (refUrl.hostname !== req.headers.get('host')) {
                    source = refUrl.hostname;
                }
            }
        } catch {
            // Invalid referer URL, keep as Direct
        }

        // Sheet columns:
        // Timestamp | Name | Email | Company | Service | Budget | Message | Source | Status | Priority | Assigned To | Follow-up Date | Notes
        const rowData = [
            timestamp,
            name,
            email,
            company || '',
            service || '',
            budget || '',
            message,
            source,
            'New',      // Status
            '',         // Priority (admin fills manually)
            '',         // Assigned To (admin fills manually)
            '',         // Follow-up Date (admin fills manually)
            '',         // Notes (admin fills manually)
        ];

        // 1. Log to Google Sheets (if configured)
        let sheetLogged = false;
        let sheetError = null;

        const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const privateKey = process.env.GOOGLE_PRIVATE_KEY;
        const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
        const nowSheet = new Date();
        const year = nowSheet.getFullYear();
        const month = String(nowSheet.getMonth() + 1).padStart(2, '0');
        const sheetName = `Log-${year}-${month}`;

        if (serviceAccountEmail && privateKey && spreadsheetId) {
            try {
                const formattedPrivateKey = privateKey.replace(/\\n/g, '\n');

                const auth = new google.auth.JWT({
                    email: serviceAccountEmail,
                    key: formattedPrivateKey,
                    scopes: ['https://www.googleapis.com/auth/spreadsheets']
                });

                const sheets = google.sheets({ version: 'v4', auth });

                // Ensure the monthly log sheet exists and is formatted
                await ensureSheetExists(sheets, spreadsheetId, sheetName);

                await sheets.spreadsheets.values.append({
                    spreadsheetId,
                    range: `'${sheetName}'`,
                    valueInputOption: 'USER_ENTERED',
                    requestBody: {
                        values: [rowData],
                    },
                });
                sheetLogged = true;
            } catch (err: any) {
                console.error('Error logging to Google Sheets:', err);
                sheetError = err.message || 'Unknown Sheets API error';
            }
        } else {
            console.warn('Google Sheets configuration is incomplete. Skipping sheets logging.');
            sheetError = 'Missing credentials in environment variables.';
        }

        // 2. Send Email Notification via SMTP (if configured)
        let emailSent = false;
        let emailError = null;

        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = process.env.SMTP_PORT;
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const smtpFrom = process.env.SMTP_FROM || smtpUser;
        const contactReceiver = process.env.CONTACT_RECEIVER_EMAIL;

        if (smtpHost && smtpPort && smtpUser && smtpPass && contactReceiver) {
            try {
                const transporter = nodemailer.createTransport({
                    host: smtpHost,
                    port: parseInt(smtpPort, 10),
                    secure: process.env.SMTP_SECURE === 'true',
                    auth: {
                        user: smtpUser,
                        pass: smtpPass,
                    },
                });

                const mailOptions = {
                    from: smtpFrom,
                    to: contactReceiver,
                    subject: `[Loopers Lab Lead] ${service || 'General Inquiry'} — ${name}`,
                    text: `
New submission received from the Loopers Lab contact form.

Timestamp: ${timestamp}
Name: ${name}
Email: ${email}
Company: ${company || 'Not specified'}
Service Interest: ${service || 'Not specified'}
Budget Range: ${budget || 'Not specified'}
Source: ${source}

Message:
--------------------------------------------
${message}
                    `,
                    html: `
<div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff; color: #1a202c;">
  
  <div style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 24px 28px;">
    <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600;">🚀 New Lead Received</h2>
    <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 14px;">${timestamp}</p>
  </div>

  <div style="padding: 24px 28px;">
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr>
        <td style="padding: 10px 12px; font-weight: 600; width: 140px; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #f1f5f9;">Name</td>
        <td style="padding: 10px 12px; color: #1e293b; font-size: 15px; border-bottom: 1px solid #f1f5f9;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 10px 12px; font-weight: 600; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #f1f5f9;">Email</td>
        <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #4f46e5; text-decoration: none; font-size: 15px;">${email}</a></td>
      </tr>
      <tr>
        <td style="padding: 10px 12px; font-weight: 600; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #f1f5f9;">Company</td>
        <td style="padding: 10px 12px; color: #1e293b; font-size: 15px; border-bottom: 1px solid #f1f5f9;">${company || '<span style="color:#94a3b8;">Not specified</span>'}</td>
      </tr>
      <tr>
        <td style="padding: 10px 12px; font-weight: 600; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #f1f5f9;">Service</td>
        <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9;">
          ${service ? `<span style="display: inline-block; background: #eef2ff; color: #4f46e5; padding: 3px 10px; border-radius: 6px; font-size: 13px; font-weight: 500;">${service}</span>` : '<span style="color:#94a3b8;">Not specified</span>'}
        </td>
      </tr>
      <tr>
        <td style="padding: 10px 12px; font-weight: 600; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #f1f5f9;">Budget</td>
        <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9;">
          ${budget ? `<span style="display: inline-block; background: #f0fdf4; color: #16a34a; padding: 3px 10px; border-radius: 6px; font-size: 13px; font-weight: 500;">${budget}</span>` : '<span style="color:#94a3b8;">Not specified</span>'}
        </td>
      </tr>
      <tr>
        <td style="padding: 10px 12px; font-weight: 600; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Source</td>
        <td style="padding: 10px 12px; color: #1e293b; font-size: 15px;">${source}</td>
      </tr>
    </table>
    
    <div style="background-color: #f8fafc; padding: 16px 18px; border-radius: 8px; border-left: 4px solid #4f46e5;">
      <p style="margin: 0; font-weight: 600; margin-bottom: 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b;">Message</p>
      <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #334155; font-size: 14px;">${message}</p>
    </div>
  </div>
  
  <div style="background-color: #f8fafc; padding: 16px 28px; text-align: center; border-top: 1px solid #e2e8f0;">
    <p style="margin: 0; font-size: 12px; color: #94a3b8;">Loopers Lab Lead Management System • Auto-generated notification</p>
  </div>
</div>
                    `,
                };

                await transporter.sendMail(mailOptions);
                emailSent = true;
            } catch (err: any) {
                console.error('Error sending email:', err);
                emailError = err.message || 'Unknown SMTP error';
            }
        } else {
            console.warn('SMTP configuration is incomplete. Skipping email transmission.');
            emailError = 'Missing credentials in environment variables.';
        }

        // 3. Assemble Response
        const hasSheetsConfig = !!(serviceAccountEmail && privateKey && spreadsheetId);
        const hasSmtpConfig = !!(smtpHost && smtpPort && smtpUser && smtpPass && contactReceiver);

        if (!hasSheetsConfig && !hasSmtpConfig) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Server is not configured to process contact submissions. Both Google Sheets and SMTP environment variables are missing.',
                },
                { status: 500 }
            );
        }

        if ((hasSheetsConfig && !sheetLogged) && (hasSmtpConfig && !emailSent)) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Failed to record contact submission.',
                    details: { sheetError, emailError }
                },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Contact form processed successfully.',
                sheetLogged,
                emailSent,
                warnings: {
                    ...(sheetError ? { sheetError } : {}),
                    ...(emailError ? { emailError } : {})
                }
            },
            { status: 200 }
        );

    } catch (error: any) {
        console.error('Contact API handler error:', error);
        return NextResponse.json(
            { error: 'An unexpected internal server error occurred.' },
            { status: 500 }
        );
    }
}
