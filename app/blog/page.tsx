import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Write-ups — Theo Malaper",
  description: "Notes on experiments, explorations, and things I'm learning.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-2xl mx-auto px-6 w-full py-16">
      <Link
        href="/"
        className="text-sm text-stone-500 hover:text-stone-300 transition-colors mb-8 inline-block"
      >
        ← Back
      </Link>
      <SectionHeader title="Write-ups" />
      {posts.length === 0 ? (
        <p className="text-sm text-stone-600">Coming soon.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-stone-800 rounded-lg p-4 hover:border-stone-700 transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-stone-100 group-hover:text-white transition-colors mb-1">
                    {post.title}
                  </p>
                  <p className="text-sm text-stone-400">{post.description}</p>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-stone-500 font-mono"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-xs text-stone-600 font-mono whitespace-nowrap mt-0.5">
                  {post.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
