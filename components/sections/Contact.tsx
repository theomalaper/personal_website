import { SectionHeader } from "@/components/ui/SectionHeader";

const EMAIL = "theomalaper.cognez@gmail.com";

export function Contact() {
  return (
    <section id="contact" className="py-12">
      <SectionHeader title="Get in touch" />
      <p className="text-stone-400 mb-2">
        You can reach me anytime at{" "}
        <a
          href={`mailto:${EMAIL}`}
          className="text-stone-100 underline underline-offset-2 hover:text-white transition-colors"
        >
          {EMAIL}
        </a>
      </p>
    </section>
  );
}
