import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="py-16">
      <h1 className="text-3xl font-mono font-bold mb-4">
        Hey, I&apos;m{" "}
        <span className="text-stone-100">Theo Malaper</span>
      </h1>

      <div className="space-y-2 text-stone-400 max-w-xl mb-8">
        <p>
          CS graduate and ex-quant/ML engineer at Optiver. After two years
          there I took a gap year to travel, founded my own AI project, and
          explore where I want to take my career next — which led me to
          clinical AI.
        </p>
        <p>
          Having explored it independently through a couple of projects, I&apos;m
          now looking for a role where I can contribute technically while
          deepening my exposure to this space.
        </p>
      </div>

      <div className="flex gap-3 mb-6">
        <a
          href="mailto:theomalaper.cognez@gmail.com"
          className="inline-flex items-center gap-2 px-4 py-2 bg-orange-800 text-orange-200 rounded-md text-sm font-mono hover:bg-orange-800 transition-colors"
        >
          Get in touch
        </a>
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 px-4 py-2 border border-stone-700 text-stone-300 rounded-md text-sm font-mono hover:border-stone-500 transition-colors"
        >
          View projects
        </Link>
      </div>

      <div className="flex items-center gap-2 text-sm text-stone-400">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
        </span>
        Open to new opportunities
      </div>
    </section>
  );
}
