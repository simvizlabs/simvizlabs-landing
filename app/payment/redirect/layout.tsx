// Force dynamic rendering for payment redirect route to avoid headers() sync access issues
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export default function PaymentRedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

