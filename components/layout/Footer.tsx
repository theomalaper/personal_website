import { SOCIAL_LINKS } from "@/data/social";

export function Footer() {
  return (
    <footer className="border-t border-stone-800 mt-16">
      <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-xs font-mono text-stone-600">
          © {new Date().getFullYear()} Theo Malaper
        </span>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-stone-600 hover:text-stone-400 transition-colors"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
