
import { Suspense } from "react";
import A320LandingContent from "./A320LandingContent";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A320 FMGC Simulator | High-Fidelity FMS Trainer | SimvizLabs',
  description: 'Master the A320 FMGC, FCU, and automation systems. Features precise performance calculations, AI-powered CPDLC, customizable ACARS, and integrated Airbus systems training.',
  keywords: ['A320 Simulator', 'FMGC Trainer', 'Airbus Training', 'CPDLC', 'ACARS', 'Pilot Training', 'Aviation', 'Flight Simulation'],
  openGraph: {
    title: 'A320 FMGC Simulator | High-Fidelity FMS Trainer',
    description: 'High-fidelity A320 simulator built to aircraft-level accuracy. Master FMGC, FCU, and datalink operations.',
    type: 'website',
  }
};

export default function A320BundlePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-900 text-black dark:text-white">Loading...</div>}>
      <A320LandingContent />
    </Suspense>
  );
}
