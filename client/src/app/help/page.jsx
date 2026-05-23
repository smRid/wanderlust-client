import SimpleInfoPage from "@/components/ui/SimpleInfoPage";

export default function HelpPage() {
  return (
    <SimpleInfoPage
      title="Help Center"
      description="Find quick guidance for bookings, payments, account access, and destination questions."
      sections={[
        {
          heading: "Bookings",
          body: "You can review your active trips from My Bookings after signing in. For changes or cancellation questions, contact support with your booking details.",
        },
        {
          heading: "Account Access",
          body: "If you cannot sign in, confirm your email and password first. Google sign-in requires the same Google account used when creating your profile.",
        },
      ]}
    />
  );
}
