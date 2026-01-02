import { Suspense } from "react";
import SignUpPageClient from "./page-client";

// Force dynamic rendering to avoid static generation issues
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export default function SignUpPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-neutral-900 font-geist">
        <div className="w-full max-w-md px-4">Loading...</div>
      </div>
    }>
      <SignUpPageClient />
    </Suspense>
  );
}


