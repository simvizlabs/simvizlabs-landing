
import { Suspense } from "react";
import A320LandingContent from "./A320LandingContent";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A320 FMS Simulator Bundle - SimvizLabs',
  description: 'Master the A320 FMS and automation systems with our comprehensive simulator and training bundle.',
};

export default function A320BundlePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-900 text-black dark:text-white">Loading...</div>}>
      <A320LandingContent />
    </Suspense>
  );
}
