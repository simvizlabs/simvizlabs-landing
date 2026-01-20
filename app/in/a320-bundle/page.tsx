
import { Suspense } from "react";
import A320LandingContent from "./A320LandingContent";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A320 FMS Simulator & FMS Trainer | Airbus A320 FMGC Training | SimViz Labs',
  description: 'Professional A320 FMS simulator and FMS trainer. Master the A320 FMGC, FCU, and automation systems with ACARS simulator and CPDLC simulator. High-fidelity aviation training for type rating and pilot training.',
  keywords: [
    'A320 FMS',
    'A320 FMS simulator',
    'A320 FMS training',
    'FMS Trainer',
    'FMS Simulator',
    'A320 Simulator',
    'FMGC Trainer',
    'Airbus Training',
    'CPDLC simulator',
    'ACARS simulator',
    'ACARS trainer',
    'Pilot Training',
    'Aviation training',
    'Type rating',
    'Aviation',
    'Flight Simulation',
  ],
  openGraph: {
    title: 'A320 FMS Simulator & FMS Trainer | Airbus A320 FMGC Training',
    description: 'High-fidelity A320 FMS simulator with ACARS and CPDLC capabilities. Professional aviation training solution for pilot training and type rating.',
    type: 'website',
    url: 'https://simvizlabs.com/in/a320-bundle',
  },
  alternates: {
    canonical: 'https://simvizlabs.com/in/a320-bundle',
  },
};

export default function A320BundlePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-900 text-black dark:text-white">Loading...</div>}>
      <A320LandingContent />
    </Suspense>
  );
}
