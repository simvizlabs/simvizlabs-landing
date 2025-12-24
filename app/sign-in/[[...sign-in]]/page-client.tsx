"use client";

import { SignIn } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function SignInPageClient() {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect_url') || '/checkout';

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-neutral-900 font-geist">
      <div className="w-full max-w-md px-4">
        <SignIn 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-lg",
            },
          }}
          routing="path"
          path="/sign-in"
          signUpUrl="/sign-up"
          afterSignInUrl={redirectUrl}
          afterSignUpUrl={redirectUrl}
        />
      </div>
    </div>
  );
}

