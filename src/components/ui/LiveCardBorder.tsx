// components/LiveCardBorder.tsx
import React from 'react';

const LiveCardBorder = ({ children, isLive }: { children: React.ReactNode; isLive: boolean }) => {
    return (
        <>
            {isLive ? (
                <div
                    className="relative rounded-xl p-[2px] animate-border-flow"
                    style={{
                        background: 'conic-gradient(from var(--gradient-angle), hsl(120, 100%, 50%), hsl(200, 100%, 50%), hsl(120, 100%, 50%))',
                    }}
                >
                    <style jsx global>{`
                        :root {
                            --gradient-angle: 0deg;
                        }
                    `}</style>
                    <div className="bg-white rounded-xl overflow-hidden">
                        {children}
                    </div>
                </div>
            ) : (
                <div className="rounded-xl overflow-hidden">
                    {children}
                </div>
            )}
        </>
    );
};

export default LiveCardBorder;
