import { SignUp } from "@clerk/nextjs";

// Force dynamic rendering to avoid static generation issues
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export default async function SignUpPage() {
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
          afterSignInUrl="/dashboard"
          afterSignUpUrl="/dashboard"
        />
      </div>
    </div>
  );
}


