import { Metadata } from "next";
import A320BundleContent from "./content";

export const metadata: Metadata = {
  title: "A320 FMS Simulator & FMS Trainer | Airbus A320 FMS Training | SimViz Labs",
  description: "Professional A320 FMS simulator and FMS trainer. High-fidelity Airbus A320 FMS training with ACARS simulator and CPDLC simulator. Perfect for aviation training, type rating, pilot training, and CBTA training.",
  keywords: [
    "A320 FMS",
    "A320 FMS simulator",
    "A320 FMS training",
    "FMS Trainer",
    "FMS Simulator",
    "A320 Simulator",
    "MCDU Simulator",
    "Airbus Training",
    "CPDLC simulator",
    "ACARS simulator",
    "ACARS trainer",
    "Pilot Training",
    "Aviation training",
    "Type rating",
    "CBTA training",
    "Aviation distance learning",
  ],
  openGraph: {
    title: "A320 FMS Simulator & FMS Trainer | Airbus A320 FMS Training",
    description: "High-fidelity A320 FMS simulator with ACARS and CPDLC capabilities. Professional aviation training solution for pilot training and type rating.",
    type: "website",
    url: "https://simvizlabs.com/products/a320-bundle",
  },
  alternates: {
    canonical: "https://simvizlabs.com/products/a320-bundle",
  },
};

export default function Page() {
  return <A320BundleContent />;
}
