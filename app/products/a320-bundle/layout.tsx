
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A320 CDU Trainer | Mobile & Tablet | SimViz Labs',
  description: 'Complete A320 MCDU and ATSU training solution on your device. Practice real airline workflows, route validation, and performance initialization.',
  keywords: ['A320 CDU', 'MCDU Trainer', 'Mobile Flight Sim', 'Airbus Apps', 'Pilot Tools'],
  openGraph: {
    title: 'A320 CDU Trainer | Mobile & Tablet',
    description: 'Master Airbus MCDU and ATSU systems with this immersive training app.',
  }
};

export default function A320BundleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
