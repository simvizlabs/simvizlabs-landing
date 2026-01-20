import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Airline Pilot Training Solutions | FMS Simulator for Airlines | Reduce Simulator Costs | SimViz Labs",
    description: "Optimize airline training budget with scalable, iPad-based FMS simulators. A320 FMS simulator, B737 FMS training, B747 FMS for airlines. Reduce simulator costs, improve crew readiness with ACARS simulator and CPDLC simulator. Aviation distance learning for airlines.",
    keywords: [
        "Airline training",
        "Airline pilot training",
        "FMS Simulator for airlines",
        "FMS Trainer",
        "A320 FMS simulator",
        "B737 FMS training",
        "B737 FMS",
        "B747 FMS",
        "Aviation training",
        "Aviation distance learning",
        "Flight simulator",
        "Pilot training",
        "ACARS simulator",
        "CPDLC simulator",
        "ACARS trainer",
        "A320 FMS",
        "B737 FMS",
        "B747 FMS",
        "Airline FMS training",
        "Crew training",
        "Simulator cost reduction",
        "iPad FMS training",
        "Airline LMS",
        "Fleet training",
        "Standardized proficiency",
        "Type rating",
        "Airline operations training",
    ],
    openGraph: {
        title: "Airline Pilot Training Solutions | FMS Simulator for Airlines | Reduce Simulator Costs",
        description: "Optimize airline training with scalable iPad-based FMS simulators. A320, B737, B747 solutions to reduce simulator costs and improve crew readiness.",
        type: "website",
        url: "https://simvizlabs.com/airlines",
    },
    alternates: {
        canonical: "https://simvizlabs.com/airlines",
    },
};

export default function AirlinesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
