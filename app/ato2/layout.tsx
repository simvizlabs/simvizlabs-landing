import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ATO Training Software | Type Rating School FMS Simulator | CBTA Compliant | SimViz Labs",
    description: "Enhance ATO and type rating school curriculum with modern, EASA/ICAO compliant FMS simulators. A320 FMS simulator, B737 FMS training, B747 FMS for type rating schools. Improve student pass rates with ACARS simulator and CPDLC simulator. CBTA compliant aviation training.",
    keywords: [
        "ATO training",
        "Type rating school",
        "ATO training software",
        "CBTA compliant",
        "EASA compliant FMS",
        "ICAO compliant FMS",
        "FMS Simulator for ATO",
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
        "Type rating training",
        "Aviation education",
        "iPad FMS training",
        "Flight training programs",
    ],
    openGraph: {
        title: "ATO Training Software | Type Rating School FMS Simulator | CBTA Compliant",
        description: "Enhance ATO curriculum with EASA/ICAO compliant FMS simulators. A320, B737, B747 FMS training to improve student pass rates.",
        type: "website",
        url: "https://simvizlabs.com/ato2",
    },
    alternates: {
        canonical: "https://simvizlabs.com/ato2",
    },
};

export default function ATO2Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
