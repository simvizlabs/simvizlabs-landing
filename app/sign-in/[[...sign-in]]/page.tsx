import { SignIn } from "@clerk/nextjs";

// Force dynamic rendering to avoid static generation issues
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export default async function SignInPage() {
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
          afterSignInUrl="/dashboard"
          afterSignUpUrl="/dashboard"
        />
      </div>
    </div>
  );
}


