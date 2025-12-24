"use client";

import { SignUp } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function SignUpPageClient() {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect_url') || '/checkout';

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-neutral-900 font-geist">
      <div className="w-full max-w-md px-4">
        <SignUp 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-lg",
            },
          }}
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
          afterSignInUrl={redirectUrl}
          afterSignUpUrl={redirectUrl}
        />
      </div>
    </div>
  );
}

