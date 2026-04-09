import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Writeups() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="writeups" className="py-12">
      <SectionHeader title="Write-ups" />
      <p className="text-stone-600 dark:text-stone-400 mb-6">
        Notes on experiments, and things I&apos;m learning:
      </p>
      {posts.length === 0 ? (
        <p className="text-sm text-stone-400 dark:text-stone-600">Coming soon.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-stone-300 dark:border-stone-800 rounded-lg p-4 hover:border-stone-400 dark:hover:border-stone-700 transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-stone-800 dark:text-stone-100 group-hover:text-stone-900 dark:group-hover:text-white transition-colors mb-1">
                    {post.title}
                  </p>
                  <p className="text-sm text-stone-600 dark:text-stone-400">{post.description}</p>
                </div>
                <span className="text-xs text-stone-400 dark:text-stone-600 font-mono whitespace-nowrap mt-0.5">
                  {post.date}
                </span>
              </div>
            </Link>
          ))}
          <Link
            href="/blog"
            className="inline-block text-sm text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 underline underline-offset-2 transition-colors mt-2"
          >
            All write-ups →
          </Link>
        </div>
      )}
    </section>
  );
}
