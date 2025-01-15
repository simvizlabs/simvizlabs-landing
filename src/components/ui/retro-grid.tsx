import { cn } from "@/functions";

export default function RetroGrid({
    className,
    angle = 65,
}: {
    className?: string;
    angle?: number;
}) {
    return (
        <div
            className={cn(
                "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
                `opacity-[var(--opacity,0.5)]`,
                className,
            )}
            style={{
                "--grid-angle": `${angle}deg`,
                "--light-line": "rgba(128,128,128,0.5)", // Light gray for better visibility
                "--dark-line": "rgba(255,255,255,0.5)", // White for dark mode
            } as React.CSSProperties}
        >
            {/* Grid */}
            <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
                <div
                    className={cn(
                        "animate-grid",
                        "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",
                        "[background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)]",
                        "dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]",
                    )}
                />
            </div>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent to-90% dark:from-black" />
        </div>
    );
};