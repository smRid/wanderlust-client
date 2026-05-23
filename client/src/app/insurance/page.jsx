import SimpleInfoPage from "@/components/ui/SimpleInfoPage";

export default function InsurancePage() {
  return (
    <SimpleInfoPage
      title="Travel Insurance"
      description="Coverage options can help protect your trip from unexpected changes, delays, and emergencies."
      sections={[
        {
          heading: "Coverage",
          body: "Insurance availability depends on your destination, travel dates, and selected package. Contact our support team before booking for current coverage options.",
        },
        {
          heading: "Claims",
          body: "If your trip is affected, keep booking receipts, medical documents, and delay notices so the provider can review your claim quickly.",
        },
      ]}
    />
  );
}
