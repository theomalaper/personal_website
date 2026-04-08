export function Hero() {
  return (
    <section id="hero" className="py-16">
      <h1 className="text-3xl font-mono font-bold mb-4">
        Hi, I&apos;m{" "}
        <span className="text-stone-900 dark:text-stone-100">Theo</span>
      </h1>

      <div className="space-y-2 text-stone-700 dark:text-stone-400 max-w-xl mb-8 mt-8">
        <p>
          Ex-quant developer at Optiver and CS graduate from Melbourne uni. After two years
          of work, I decided to take a gap year to travel, found my own AI project, and
          explore where I want to take my career next — which led me to
          health tech/clinical AI.
        </p>
        <p>
          Having explored it independently through a couple of projects, I&apos;m
          now looking for a role where I can contribute technically and
          gain more exposure to this space.
        </p>
      </div>

      <div className="flex gap-3 mb-6">
        <a
          href="https://www.linkedin.com/in/theo-malaper/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 dark:bg-orange-700 text-white dark:text-orange-200 rounded-md text-sm font-mono hover:bg-orange-700 dark:hover:bg-orange-800 transition-colors"
        >
          Get in touch
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 rounded-md text-sm font-mono hover:border-stone-400 dark:hover:border-stone-500 transition-colors"
        >
          View CV
        </a>
      </div>

      <div className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-400">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
        </span>
        Open for work :)
      </div>
    </section>
  );
}
