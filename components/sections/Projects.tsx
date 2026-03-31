import { PROJECTS, ProjectStatus } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { BadgeVariant } from "@/components/ui/Badge";

const STATUS_TO_VARIANT: Record<ProjectStatus, BadgeVariant> = {
  Active: "active",
  Sold: "sold",
  Archived: "archived",
  "In Progress": "in-progress",
};

export function Projects() {
  return (
    <section id="projects" className="py-12">
      <SectionHeader title="Projects" />
      <p className="text-neutral-400 mb-6">
        Personal projects, both past and ongoing:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="border border-neutral-800 rounded-lg p-4 hover:border-neutral-700 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono font-medium text-neutral-100">
                {project.name}
              </span>
              <Badge
                label={project.status}
                variant={STATUS_TO_VARIANT[project.status]}
              />
            </div>
            <p className="text-sm text-neutral-400 mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <Badge key={tech} label={tech} />
              ))}
            </div>
            {(project.url || project.repoUrl) && (
              <div className="flex gap-3 mt-3">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-400 hover:text-neutral-200 underline underline-offset-2 transition-colors"
                  >
                    Visit
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-400 hover:text-neutral-200 underline underline-offset-2 transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
