// Force dynamic rendering for checkout route to avoid headers() sync access issues
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

