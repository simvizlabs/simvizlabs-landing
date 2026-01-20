import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products - FMS Simulators | A320, B737, B747 FMS Trainers | SimViz Labs',
  description: 'Explore our range of professional FMS simulators and trainers. A320 FMS simulator, B737 FMS training, B747 FMS, ACARS simulator, and CPDLC simulator solutions for aviation training, type rating, and pilot training.',
  keywords: [
    'FMS Simulator',
    'FMS Trainer',
    'A320 FMS simulator',
    'B737 FMS training',
    'B737 FMS',
    'B747 FMS',
    'Aviation training',
    'Aviation distance learning',
    'Flight simulator',
    'Type rating',
    'Pilot training',
    'ACARS simulator',
    'CPDLC simulator',
    'ACARS trainer',
    'A320 FMS',
    'B737 FMS',
    'B747 FMS',
    'B777 FMS',
    'A330 FMS',
    'ATR FMS',
    'B787 FMS',
  ],
  openGraph: {
    title: 'Our Products - FMS Simulators | A320, B737, B747 FMS Trainers',
    description: 'Professional FMS simulators for aviation training. Explore A320 FMS, B737 FMS, and B747 FMS trainers.',
    type: 'website',
    url: 'https://simvizlabs.com/our-products',
  },
  alternates: {
    canonical: 'https://simvizlabs.com/our-products',
  },
};

export default function OurProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
