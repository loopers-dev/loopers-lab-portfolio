/**
 * Loopers Lab - Google Sheet Setup Script (v2)
 * 
 * Thiết lập cấu trúc CRM sheet quản lý leads chuyên nghiệp:
 * - 13 cột đầy đủ thông tin
 * - Header formatting (dark navy, white text, bold)
 * - Freeze hàng tiêu đề
 * - Dropdown cho Status, Priority, Service, Budget
 * - Conditional formatting cho Status & Priority
 * - Alternating row colors
 * - Text wrapping cho Message & Notes
 * - Tạo sheet "Dashboard" thống kê tổng quan
 * 
 * Chạy: node scripts/setup-sheet.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { google } = require('googleapis');

const HEADERS = [
    'Timestamp',        // A - auto
    'Name',             // B - auto
    'Email',            // C - auto
    'Company',          // D - auto
    'Service',          // E - auto
    'Budget',           // F - auto
    'Message',          // G - auto
    'Source',            // H - auto
    'Status',           // I - dropdown
    'Priority',         // J - dropdown (admin)
    'Assigned To',      // K - manual (admin)
    'Follow-up Date',   // L - date (admin)
    'Notes',            // M - manual (admin)
];

const STATUS_OPTIONS = ['New', 'Contacted', 'In Progress', 'Qualified', 'Closed Won', 'Closed Lost'];
const PRIORITY_OPTIONS = ['High', 'Medium', 'Low'];
const BUDGET_OPTIONS = ['<$1K', '$1K-5K', '$5K-10K', '$10K+', 'TBD'];
const SERVICE_OPTIONS = [
    'Web Design & UX Systems',
    'Website Building & System Architecture',
    'Hosting, DevOps & Infrastructure',
    'Maintenance & Performance',
    'AI Agents & Workflow Automation',
    'Data Analysis & Reporting',
    'Content Operations & CMS',
    'Other',
];

// Column widths in pixels
const COLUMN_WIDTHS = [170, 140, 200, 140, 200, 100, 350, 110, 120, 90, 130, 130, 280];

// Header style
const HEADER_BG = { red: 0.15, green: 0.15, blue: 0.22, alpha: 1 };
const HEADER_TEXT = { red: 1, green: 1, blue: 1, alpha: 1 };

// Status colors
const STATUS_COLORS = {
    'New': { red: 0.85, green: 0.92, blue: 1.0 },
    'Contacted': { red: 0.95, green: 0.90, blue: 0.70 },
    'In Progress': { red: 0.80, green: 0.90, blue: 1.0 },
    'Qualified': { red: 0.78, green: 0.95, blue: 0.78 },
    'Closed Won': { red: 0.60, green: 0.90, blue: 0.60 },
    'Closed Lost': { red: 0.95, green: 0.78, blue: 0.78 },
};

// Priority colors
const PRIORITY_COLORS = {
    'High': { red: 0.95, green: 0.75, blue: 0.75 },
    'Medium': { red: 0.98, green: 0.92, blue: 0.73 },
    'Low': { red: 0.85, green: 0.93, blue: 0.85 },
};

async function setupSheet() {
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const sheetName = `Log-${year}-${month}`;

    if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
        console.error('❌ Missing Google Sheets env vars. Check .env file.');
        process.exit(1);
    }

    const formattedPrivateKey = privateKey.replace(/\\n/g, '\n');

    const auth = new google.auth.JWT({
        email: serviceAccountEmail,
        key: formattedPrivateKey,
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // 1. Get spreadsheet info
    console.log('📊 Fetching spreadsheet info...');
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
    let sheetMeta = spreadsheet.data.sheets.find(s => s.properties.title === sheetName);
    let sheetId;

    if (!sheetMeta) {
        console.log(`ℹ️ Sheet tab "${sheetName}" not found. Creating it...`);
        const addResult = await sheets.spreadsheets.batchUpdate({
            spreadsheetId,
            requestBody: {
                requests: [{
                    addSheet: {
                        properties: {
                            title: sheetName,
                            gridProperties: { rowCount: 1000, columnCount: 15 },
                        },
                    },
                }],
            },
        });
        sheetId = addResult.data.replies[0].addSheet.properties.sheetId;
        console.log(`✅ Created sheet tab "${sheetName}" (sheetId: ${sheetId})`);
    } else {
        sheetId = sheetMeta.properties.sheetId;
        console.log(`✅ Found sheet "${sheetName}" (sheetId: ${sheetId})`);
    }

    // 2. Clear existing data (from row 2 down)
    console.log('🧹 Clearing existing data (rows 2 to 1000)...');
    try {
        await sheets.spreadsheets.values.clear({
            spreadsheetId,
            range: `'${sheetName}'!A2:M1000`,
        });
        console.log('✅ Existing data cleared');
    } catch (err) {
        console.warn('⚠️ Warning: Could not clear existing data:', err.message);
    }

    // 2b. Write headers
    console.log('📝 Writing headers...');
    await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `'${sheetName}'!A1:M1`,
        valueInputOption: 'RAW',
        requestBody: { values: [HEADERS] },
    });
    console.log(`✅ ${HEADERS.length} headers written`);

    // 3. Build batch update requests
    const requests = [];

    // 3a. Freeze header row
    requests.push({
        updateSheetProperties: {
            properties: { sheetId, gridProperties: { frozenRowCount: 1 } },
            fields: 'gridProperties.frozenRowCount',
        },
    });

    // 3b. Format header row
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

    // 3c. Column widths
    COLUMN_WIDTHS.forEach((width, i) => {
        requests.push({
            updateDimensionProperties: {
                range: { sheetId, dimension: 'COLUMNS', startIndex: i, endIndex: i + 1 },
                properties: { pixelSize: width },
                fields: 'pixelSize',
            },
        });
    });

    // 3d. Header row height
    requests.push({
        updateDimensionProperties: {
            range: { sheetId, dimension: 'ROWS', startIndex: 0, endIndex: 1 },
            properties: { pixelSize: 40 },
            fields: 'pixelSize',
        },
    });

    // 3d2. Clear all existing data validations on the sheet
    requests.push({
        setDataValidation: {
            range: { sheetId, startRowIndex: 1, endRowIndex: 1000, startColumnIndex: 0, endColumnIndex: HEADERS.length },
            // Omit rule to clear existing validation rules
        },
    });

    // 3e. Status dropdown (col I = index 8)
    requests.push({
        setDataValidation: {
            range: { sheetId, startRowIndex: 1, endRowIndex: 1000, startColumnIndex: 8, endColumnIndex: 9 },
            rule: {
                condition: { type: 'ONE_OF_LIST', values: STATUS_OPTIONS.map(s => ({ userEnteredValue: s })) },
                showCustomUi: true, strict: true,
            },
        },
    });

    // 3f. Priority dropdown (col J = index 9)
    requests.push({
        setDataValidation: {
            range: { sheetId, startRowIndex: 1, endRowIndex: 1000, startColumnIndex: 9, endColumnIndex: 10 },
            rule: {
                condition: { type: 'ONE_OF_LIST', values: PRIORITY_OPTIONS.map(s => ({ userEnteredValue: s })) },
                showCustomUi: true, strict: true,
            },
        },
    });

    // 3g. Follow-up Date formatting (col L = index 11)
    requests.push({
        repeatCell: {
            range: { sheetId, startRowIndex: 1, endRowIndex: 1000, startColumnIndex: 11, endColumnIndex: 12 },
            cell: {
                userEnteredFormat: {
                    numberFormat: { type: 'DATE', pattern: 'dd/MM/yyyy' },
                },
            },
            fields: 'userEnteredFormat.numberFormat',
        },
    });

    // 3h. Status conditional formatting
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

    // 3i. Priority conditional formatting
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

    // 3j. Remove existing banding first (for re-runs), then add new
    const existingBandings = (sheetMeta && sheetMeta.bandedRanges) || [];
    for (const band of existingBandings) {
        requests.push({
            deleteBanding: { bandedRangeId: band.bandedRangeId },
        });
    }
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

    // 3k. Text wrap for Message (G=6) and Notes (M=12)
    [6, 12].forEach(colIndex => {
        requests.push({
            repeatCell: {
                range: { sheetId, startRowIndex: 1, endRowIndex: 1000, startColumnIndex: colIndex, endColumnIndex: colIndex + 1 },
                cell: { userEnteredFormat: { wrapStrategy: 'WRAP' } },
                fields: 'userEnteredFormat.wrapStrategy',
            },
        });
    });

    // 4. Execute batch update
    console.log('🎨 Applying formatting...');
    await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: { requests },
    });

    // ============================================================
    // 5. Create "Dashboard" tab with summary formulas
    // ============================================================
    console.log('\n📊 Setting up Dashboard tab...');

    // Check if Dashboard tab already exists
    const dashboardMeta = spreadsheet.data.sheets.find(s => s.properties.title === 'Dashboard');
    let dashboardSheetId;

    if (dashboardMeta) {
        dashboardSheetId = dashboardMeta.properties.sheetId;
        console.log('   Dashboard tab already exists, updating...');
    } else {
        // Create new Dashboard tab
        const addResult = await sheets.spreadsheets.batchUpdate({
            spreadsheetId,
            requestBody: {
                requests: [{
                    addSheet: {
                        properties: {
                            title: 'Dashboard',
                            gridProperties: { rowCount: 50, columnCount: 10 },
                        },
                    },
                }],
            },
        });
        dashboardSheetId = addResult.data.replies[0].addSheet.properties.sheetId;
        console.log('   ✅ Dashboard tab created');
    }

    // Write dashboard content with formulas
    // NOTE: Using semicolons (;) as argument separators for non-US Google Sheets locale
    const sn = sheetName; // shorthand for formula references
    const dashboardData = [
        ['📊 LOOPERS LAB - LEAD DASHBOARD', '', '', ''],
        ['', '', '', ''],
        ['OVERVIEW', '', '', ''],
        ['Total Leads', `=COUNTA('${sn}'!A:A)-1`, '', ''],
        ['New (Unprocessed)', `=COUNTIF('${sn}'!I:I;"New")`, '', ''],
        ['In Progress', `=COUNTIF('${sn}'!I:I;"In Progress")`, '', ''],
        ['Qualified', `=COUNTIF('${sn}'!I:I;"Qualified")`, '', ''],
        ['Closed Won', `=COUNTIF('${sn}'!I:I;"Closed Won")`, '', ''],
        ['Closed Lost', `=COUNTIF('${sn}'!I:I;"Closed Lost")`, '', ''],
        ['', '', '', ''],
        ['BY PRIORITY', '', '', ''],
        ['High Priority', `=COUNTIF('${sn}'!J:J;"High")`, '', ''],
        ['Medium Priority', `=COUNTIF('${sn}'!J:J;"Medium")`, '', ''],
        ['Low Priority', `=COUNTIF('${sn}'!J:J;"Low")`, '', ''],
        ['', '', '', ''],
        ['BY SERVICE', '', 'Count', ''],
        ['Web Design & UX Systems', '', `=COUNTIF('${sn}'!E:E;"Web Design & UX Systems")`, ''],
        ['Website Building & System Architecture', '', `=COUNTIF('${sn}'!E:E;"Website Building & System Architecture")`, ''],
        ['Hosting, DevOps & Infrastructure', '', `=COUNTIF('${sn}'!E:E;"Hosting, DevOps & Infrastructure")`, ''],
        ['Maintenance & Performance', '', `=COUNTIF('${sn}'!E:E;"Maintenance & Performance")`, ''],
        ['AI Agents & Workflow Automation', '', `=COUNTIF('${sn}'!E:E;"AI Agents & Workflow Automation")`, ''],
        ['Data Analysis & Reporting', '', `=COUNTIF('${sn}'!E:E;"Data Analysis & Reporting")`, ''],
        ['Content Operations & CMS', '', `=COUNTIF('${sn}'!E:E;"Content Operations & CMS")`, ''],
        ['Other', '', `=COUNTIF('${sn}'!E:E;"Other")`, ''],
        ['', '', '', ''],
        ['BY BUDGET', '', 'Count', ''],
        ['Under $1K', '', `=COUNTIF('${sn}'!F:F;"<$1K")`, ''],
        ['$1K – $5K', '', `=COUNTIF('${sn}'!F:F;"$1K-5K")`, ''],
        ['$5K – $10K', '', `=COUNTIF('${sn}'!F:F;"$5K-10K")`, ''],
        ['$10K+', '', `=COUNTIF('${sn}'!F:F;"$10K+")`, ''],
        ['TBD', '', `=COUNTIF('${sn}'!F:F;"TBD")`, ''],
        ['', '', '', ''],
        ['BY SOURCE (Top 5)', '', 'Count', ''],
        ['Direct', '', `=COUNTIF('${sn}'!H:H;"Direct")`, ''],
        ['', '', '', ''],
        ['MONTHLY TREND', '', '', ''],
        [`=TEXT(TODAY();"MMMM YYYY")`, `=SUMPRODUCT((MONTH('${sn}'!A2:A1000)=MONTH(TODAY()))*(YEAR('${sn}'!A2:A1000)=YEAR(TODAY())))`, '', ''],
        [`=TEXT(EDATE(TODAY();-1);"MMMM YYYY")`, `=SUMPRODUCT((MONTH('${sn}'!A2:A1000)=MONTH(EDATE(TODAY();-1)))*(YEAR('${sn}'!A2:A1000)=YEAR(EDATE(TODAY();-1))))`, '', ''],
        [`=TEXT(EDATE(TODAY();-2);"MMMM YYYY")`, `=SUMPRODUCT((MONTH('${sn}'!A2:A1000)=MONTH(EDATE(TODAY();-2)))*(YEAR('${sn}'!A2:A1000)=YEAR(EDATE(TODAY();-2))))`, '', ''],
    ];

    await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `'Dashboard'!A1:D${dashboardData.length}`,
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: dashboardData },
    });

    // Format dashboard
    const dashRequests = [];

    // Title formatting
    dashRequests.push({
        repeatCell: {
            range: { sheetId: dashboardSheetId, startRowIndex: 0, endRowIndex: 1, startColumnIndex: 0, endColumnIndex: 4 },
            cell: {
                userEnteredFormat: {
                    textFormat: { bold: true, fontSize: 16, foregroundColor: { red: 0.31, green: 0.27, blue: 0.90 } },
                },
            },
            fields: 'userEnteredFormat.textFormat',
        },
    });

    // Section headers formatting (rows 3, 11, 16, 26, 33, 36)
    [2, 10, 15, 25, 32, 35].forEach(row => {
        dashRequests.push({
            repeatCell: {
                range: { sheetId: dashboardSheetId, startRowIndex: row, endRowIndex: row + 1, startColumnIndex: 0, endColumnIndex: 4 },
                cell: {
                    userEnteredFormat: {
                        textFormat: { bold: true, fontSize: 12 },
                        backgroundColor: { red: 0.95, green: 0.95, blue: 0.97 },
                    },
                },
                fields: 'userEnteredFormat(textFormat,backgroundColor)',
            },
        });
    });

    // Column widths for dashboard
    [250, 120, 120, 120].forEach((width, i) => {
        dashRequests.push({
            updateDimensionProperties: {
                range: { sheetId: dashboardSheetId, dimension: 'COLUMNS', startIndex: i, endIndex: i + 1 },
                properties: { pixelSize: width },
                fields: 'pixelSize',
            },
        });
    });

    // Freeze first row
    dashRequests.push({
        updateSheetProperties: {
            properties: { sheetId: dashboardSheetId, gridProperties: { frozenRowCount: 1 } },
            fields: 'gridProperties.frozenRowCount',
        },
    });

    await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: { requests: dashRequests },
    });

    console.log('   ✅ Dashboard formulas & formatting applied');

    // ============================================================
    // Done!
    // ============================================================
    console.log('\n═══════════════════════════════════════════');
    console.log('🎉 SETUP COMPLETE!');
    console.log('═══════════════════════════════════════════');
    console.log(`\n📋 Leads Sheet: "${sheetName}" (${HEADERS.length} columns)`);
    console.log('   Auto-filled: Timestamp, Name, Email, Company, Service, Budget, Message, Source');
    console.log('   Admin-managed: Status ▼, Priority ▼, Assigned To, Follow-up Date, Notes');
    console.log(`\n📊 Dashboard: Real-time stats by Status, Priority, Service, Budget, Source & Monthly`);
    console.log(`\n🔒 Anti-spam: Honeypot field + Rate limiting (${5} req/hr per IP)`);
    console.log('\n📌 Status options:', STATUS_OPTIONS.join(', '));
    console.log('📌 Priority options:', PRIORITY_OPTIONS.join(', '));
}

setupSheet().catch(err => {
    console.error('❌ Setup failed:', err.message || err);
    process.exit(1);
});
