import { EXPERIENCE } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="py-12">
      <SectionHeader title="Experience" />
      <div className="space-y-8">
        {EXPERIENCE.map((item) => (
          <div key={`${item.company}-${item.startDate}`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <div>
                <span className="font-mono font-medium text-neutral-100">
                  {item.company}
                </span>
                <span className="text-neutral-500 mx-2">—</span>
                <span className="text-neutral-300 text-sm">{item.role}</span>
              </div>
              <span className="text-xs text-neutral-500 font-mono whitespace-nowrap">
                {item.startDate} – {item.endDate}
              </span>
            </div>
            <ul className="space-y-1 mb-3">
              {item.description.map((point, i) => (
                <li key={i} className="text-sm text-neutral-400 flex gap-2">
                  <span className="text-neutral-600 mt-0.5">•</span>
                  {point}
                </li>
              ))}
            </ul>
            {item.techStack && item.techStack.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {item.techStack.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
