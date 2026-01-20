import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pilot Training Software | FMS Simulator for Pilots | A320, B737, B747 FMS Training | SimViz Labs",
    description: "Professional FMS simulator and trainer for pilots. A320 FMS simulator, B737 FMS training, B747 FMS, ACARS simulator, CPDLC simulator. Improve pilot skills, prepare for airline interviews, and master FMS operations with aviation distance learning.",
    keywords: [
        "Pilot training",
        "FMS Simulator for pilots",
        "FMS Trainer",
        "A320 FMS simulator",
        "B737 FMS training",
        "B737 FMS",
        "B747 FMS",
        "Aviation training",
        "Aviation distance learning",
        "Flight simulator",
        "Pilot skills",
        "ACARS simulator",
        "CPDLC simulator",
        "ACARS trainer",
        "A320 FMS",
        "B737 FMS",
        "B747 FMS",
        "Airline interview preparation",
        "FMS training",
        "iPad FMS training",
        "Pilot proficiency",
        "Type rating",
        "Flight management system training",
    ],
    openGraph: {
        title: "Pilot Training Software | FMS Simulator for Pilots | A320, B737, B747 FMS Training",
        description: "Professional FMS simulator for pilots. A320, B737, B747 FMS training to improve pilot skills and prepare for airline interviews.",
        type: "website",
        url: "https://simvizlabs.com/pilots",
    },
    alternates: {
        canonical: "https://simvizlabs.com/pilots",
    },
};

export default function PilotsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
