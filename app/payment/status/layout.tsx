// Force dynamic rendering for payment status route to avoid headers() sync access issues
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export default function PaymentStatusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

