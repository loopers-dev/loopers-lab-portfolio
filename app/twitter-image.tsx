import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/seo';

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default function TwitterImage() {
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
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: '100%',
                        height: '100%',
                        padding: '64px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 16,
                            fontSize: 26,
                            textTransform: 'uppercase',
                            letterSpacing: 4,
                            color: 'rgba(255, 255, 255, 0.68)',
                        }}
                    >
                        <span>{siteConfig.name}</span>
                        <span>Software Support Studio</span>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 18,
                            maxWidth: 920,
                        }}
                    >
                        <span
                            style={{
                                fontSize: 72,
                                lineHeight: 1.04,
                                fontWeight: 900,
                                letterSpacing: -2,
                            }}
                        >
                            Websites, systems, automation, and support.
                        </span>
                        <span
                            style={{
                                fontSize: 30,
                                lineHeight: 1.4,
                                color: 'rgba(255, 255, 255, 0.72)',
                            }}
                        >
                            Strategy, architecture, delivery, hosting, and maintenance for teams that need durable software.
                        </span>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            gap: 14,
                            fontSize: 22,
                            color: 'rgba(255, 255, 255, 0.72)',
                        }}
                    >
                        <span>looperslab.com</span>
                    </div>
                </div>
            </div>
        ),
        size,
    );
}
