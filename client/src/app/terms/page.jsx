import SimpleInfoPage from "@/components/ui/SimpleInfoPage";

export default function TermsPage() {
  return (
    <SimpleInfoPage
      title="Terms of Service"
      description="These terms outline the basic expectations for using Wanderlast and booking travel experiences."
      sections={[
        {
          heading: "Using Wanderlast",
          body: "Use accurate account and booking information. Availability, pricing, and itineraries may change based on provider updates.",
        },
        {
          heading: "Bookings",
          body: "Bookings are subject to confirmation, provider rules, and cancellation policies shown before or after purchase.",
        },
      ]}
    />
  );
}
