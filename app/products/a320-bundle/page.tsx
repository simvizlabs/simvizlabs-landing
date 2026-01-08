import { Metadata } from "next";
import A320BundleContent from "./content";

export const metadata: Metadata = {
  title: "A320 FMS Training Software & MCDU Simulator | SimViz Labs",
  description: "Master the Airbus A320 FMS with our realistic iPad simulator. Perfect for CBTA training, type ratings, and recurrent checks. Download on App Store.",
};

export default function Page() {
  return <A320BundleContent />;
}
