import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FMS Training Tutorials | A320 FMS, B737 FMS, B747 FMS Tutorials | SimViz Labs',
  description: 'Learn how to use our FMS simulators with comprehensive tutorials. A320 FMS trainer tutorials, B737 FMS training guides, B747 FMS tutorials for aviation training and pilot training.',
  keywords: [
    'FMS Trainer tutorials',
    'A320 FMS training',
    'B737 FMS training',
    'B747 FMS training',
    'FMS Simulator tutorials',
    'Aviation training',
    'Pilot training',
    'Type rating',
    'ACARS simulator tutorials',
    'CPDLC simulator tutorials',
  ],
  openGraph: {
    title: 'FMS Training Tutorials | A320, B737, B747 FMS Tutorials',
    description: 'Comprehensive tutorials for FMS simulators. Learn A320 FMS, B737 FMS, and B747 FMS training.',
    type: 'website',
    url: 'https://simvizlabs.com/tutorials',
  },
  alternates: {
    canonical: 'https://simvizlabs.com/tutorials',
  },
};

export default function TutorialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
