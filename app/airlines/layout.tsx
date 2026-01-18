import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Airline Pilot Training Solutions | Reduce Simulator Costs",
    description: "Optimize your training budget with scalable, tablet-based FMS simulators. A320 & B737 solutions for ease of deployment and lower operational costs.",
};

export default function AirlinesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
