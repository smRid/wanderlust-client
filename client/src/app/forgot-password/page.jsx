import Link from "next/link";
import { Mail } from "lucide-react";

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <div className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary font-heading mb-3">
              Reset Password
            </h1>
            <p className="text-text-muted font-body">
              Password reset is not enabled yet. Please contact support to
              recover your account.
            </p>
          </div>

          <div className="bg-surface rounded-3xl shadow-xl border border-border p-8 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Mail className="h-7 w-7" />
            </div>
            <p className="font-body text-text-muted">
              We found the page, but email reset delivery still needs to be
              connected in Better Auth before users can reset passwords here.
            </p>
            <Link
              href="/signin"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-accent px-6 py-3 font-body font-bold text-primary transition-all hover:bg-accent-soft"
            >
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
