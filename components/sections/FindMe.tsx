import { SOCIAL_LINKS } from "@/data/social";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FindMe() {
  return (
    <section id="find-me" className="py-12">
      <SectionHeader title="Find me on" />
      <div className="flex flex-wrap gap-3">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-stone-800 rounded-md text-sm font-mono text-stone-300 hover:border-stone-600 hover:text-stone-100 transition-colors"
          >
            {link.platform}
          </a>
        ))}
      </div>
    </section>
  );
}
