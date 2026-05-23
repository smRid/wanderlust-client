import SimpleInfoPage from "@/components/ui/SimpleInfoPage";

export default function CareersPage() {
  return (
    <SimpleInfoPage
      title="Careers"
      description="We are building thoughtful travel tools and experiences for curious travelers."
      sections={[
        {
          heading: "Open Roles",
          body: "There are no public openings listed right now. You can still reach out through the contact page if you would like to connect.",
        },
      ]}
    />
  );
}
