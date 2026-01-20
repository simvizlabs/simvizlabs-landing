import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Flying School Training Software | FMS Simulator for Flight Schools | SimViz Labs",
    description: "Modernize flying school training programs with FMS simulator and LMS. A320 FMS simulator, B737 FMS training, B747 FMS for flight schools. Enhance student employability, improve curriculum value with ACARS simulator and CPDLC simulator. Aviation distance learning for flight schools.",
    keywords: [
        "Flying school training",
        "Flight school software",
        "FMS Simulator for flight schools",
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
        "Flight school curriculum",
        "Student pilot training",
        "Aviation education",
        "iPad FMS training",
        "Type rating",
        "Flight training programs",
    ],
    openGraph: {
        title: "Flying School Training Software | FMS Simulator for Flight Schools",
        description: "Modernize flying school training with FMS simulator and LMS. A320, B737, B747 FMS training to enhance student employability.",
        type: "website",
        url: "https://simvizlabs.com/flying-schools",
    },
    alternates: {
        canonical: "https://simvizlabs.com/flying-schools",
    },
};

export default function FlyingSchoolsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
