import SimpleInfoPage from "@/components/ui/SimpleInfoPage";

export default function SafetyPage() {
  return (
    <SimpleInfoPage
      title="Safety Guidelines"
      description="A few practical reminders to help keep your travel plans smooth and secure."
      sections={[
        {
          heading: "Before Travel",
          body: "Check passport, visa, health, weather, and local entry requirements before departure.",
        },
        {
          heading: "During Travel",
          body: "Keep emergency contacts, booking details, and important documents accessible throughout your trip.",
        },
      ]}
    />
  );
}
