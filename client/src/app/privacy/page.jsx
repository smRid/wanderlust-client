import SimpleInfoPage from "@/components/ui/SimpleInfoPage";

export default function PrivacyPage() {
  return (
    <SimpleInfoPage
      title="Privacy Policy"
      description="This page explains how Wanderlast handles account, booking, and contact information."
      sections={[
        {
          heading: "Information We Use",
          body: "We use profile, booking, and contact details to provide travel services, manage reservations, and respond to support requests.",
        },
        {
          heading: "Your Choices",
          body: "You can update your profile information from your account page. For deletion or data questions, contact support.",
        },
      ]}
    />
  );
}
