import Link from "next/link";

const SimpleInfoPage = ({ title, description, sections = [] }) => {
  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <section className="px-4 py-16 sm:py-20 xl:px-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <h1 className="mb-4 font-heading text-4xl font-bold text-primary sm:text-5xl">
              {title}
            </h1>
            <p className="font-body text-base leading-7 text-text-muted sm:text-lg">
              {description}
            </p>
          </div>

          <div className="space-y-6">
            {sections.map(({ heading, body }) => (
              <section
                key={heading}
                className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
              >
                <h2 className="mb-3 font-heading text-xl font-bold text-primary">
                  {heading}
                </h2>
                <p className="font-body leading-7 text-text-muted">{body}</p>
              </section>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 font-body font-bold text-primary transition-all hover:bg-accent-soft"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SimpleInfoPage;
