import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/seo';

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    position: 'relative',
                    overflow: 'hidden',
                    background: '#09090b',
                    color: '#ffffff',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'radial-gradient(circle at top left, rgba(239, 68, 68, 0.35), transparent 34%), radial-gradient(circle at bottom right, rgba(249, 115, 22, 0.22), transparent 28%), linear-gradient(135deg, #09090b 0%, #111111 100%)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 32,
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 28,
                    }}
                />
                <div
                    style={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: '100%',
                        height: '100%',
                        padding: '56px 64px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 18,
                        }}
                    >
                        <div
                            style={{
                                width: 56,
                                height: 56,
                                borderRadius: 18,
                                border: '1px solid rgba(255, 255, 255, 0.18)',
                                background: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 28,
                                fontWeight: 800,
                            }}
                        >
                            L
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 6,
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 24,
                                    opacity: 0.72,
                                    letterSpacing: 6,
                                    textTransform: 'uppercase',
                                }}
                            >
                                Software Support Studio
                            </span>
                            <span
                                style={{
                                    fontSize: 36,
                                    fontWeight: 700,
                                }}
                            >
                                {siteConfig.name}
                            </span>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 20,
                            maxWidth: 900,
                        }}
                    >
                        <span
                            style={{
                                fontSize: 68,
                                lineHeight: 1.05,
                                fontWeight: 900,
                                letterSpacing: -2,
                            }}
                        >
                            Design, build, and support software that keeps moving.
                        </span>
                        <span
                            style={{
                                fontSize: 30,
                                lineHeight: 1.4,
                                color: 'rgba(255, 255, 255, 0.72)',
                            }}
                        >
                            Web development, architecture, automation, hosting, analytics, and long-term maintenance.
                        </span>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            gap: 14,
                            fontSize: 20,
                            color: 'rgba(255, 255, 255, 0.72)',
                            textTransform: 'uppercase',
                            letterSpacing: 4,
                        }}
                    >
                        <span>Web Development</span>
                        <span>Automation</span>
                        <span>Infrastructure</span>
                    </div>
                </div>
            </div>
        ),
        size,
    );
}
