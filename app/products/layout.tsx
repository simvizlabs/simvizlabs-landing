import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FMS Simulators & Trainers | A320 FMS, B737 FMS, B747 FMS | SimViz Labs',
  description: 'Professional FMS simulators and trainers for aviation training. Explore our range of realistic iPad CDU/FMS flight simulators for A320 FMS, B737 FMS, B747 FMS training. ACARS simulator and CPDLC simulator solutions for pilot training and type rating.',
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
    'iPad flight simulator',
    'CDU simulator',
    'pilot training app',
  ],
  openGraph: {
    title: 'FMS Simulators & Trainers | A320, B737, B747 FMS Training',
    description: 'Professional FMS simulators for aviation training. Realistic iPad CDU/FMS flight simulators for pilot training and type rating.',
    type: 'website',
    url: 'https://simvizlabs.com/products',
  },
  alternates: {
    canonical: 'https://simvizlabs.com/products',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
