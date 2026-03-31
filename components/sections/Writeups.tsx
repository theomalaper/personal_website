import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Writeups() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="writeups" className="py-12">
      <SectionHeader title="Write-ups" />
      <p className="text-neutral-400 mb-6">
        Notes on experiments, explorations, and things I&apos;m learning:
      </p>
      {posts.length === 0 ? (
        <p className="text-sm text-neutral-600">Coming soon.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-neutral-800 rounded-lg p-4 hover:border-neutral-700 transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-neutral-100 group-hover:text-white transition-colors mb-1">
                    {post.title}
                  </p>
                  <p className="text-sm text-neutral-400">{post.description}</p>
                </div>
                <span className="text-xs text-neutral-600 font-mono whitespace-nowrap mt-0.5">
                  {post.date}
                </span>
              </div>
            </Link>
          ))}
          <Link
            href="/blog"
            className="inline-block text-sm text-neutral-400 hover:text-neutral-200 underline underline-offset-2 transition-colors mt-2"
          >
            All write-ups →
          </Link>
        </div>
      )}
    </section>
  );
}
