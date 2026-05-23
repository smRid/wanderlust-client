import SimpleInfoPage from "@/components/ui/SimpleInfoPage";

export default function CancellationPage() {
  return (
    <SimpleInfoPage
      title="Cancellation Policy"
      description="Cancellation rules vary by destination, package, provider, and date."
      sections={[
        {
          heading: "Before You Cancel",
          body: "Review your booking details and provider terms. Some reservations may be refundable, partially refundable, or non-refundable.",
        },
        {
          heading: "Support",
          body: "Contact support with your booking ID so we can check the current cancellation options for your trip.",
        },
      ]}
    />
  );
}
