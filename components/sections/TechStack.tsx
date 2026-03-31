import { TECH_STACK } from "@/data/tech-stack";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TechStack() {
  return (
    <section id="stack" className="py-12">
      <SectionHeader title="Tech Stack" />
      <p className="text-stone-400 mb-6">
        Tools and technologies I work with:
      </p>
      <div className="flex flex-wrap gap-2">
        {TECH_STACK.map((item) => (
          <Badge key={item.name} label={item.name} />
        ))}
      </div>
    </section>
  );
}
