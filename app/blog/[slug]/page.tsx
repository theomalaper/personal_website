import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Theo Malaper`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="max-w-2xl mx-auto px-6 w-full py-16">
      <Link
        href="/blog"
        className="text-sm text-stone-500 hover:text-stone-300 transition-colors mb-8 inline-block"
      >
        ← Write-ups
      </Link>
      <div className="mb-8">
        <h1 className="text-2xl font-mono font-bold text-stone-100 mb-2">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-xs text-stone-500 font-mono">
          <span>{post.date}</span>
          {post.tags.length > 0 && (
            <>
              <span>·</span>
              <span>{post.tags.map((t) => `#${t}`).join(" ")}</span>
            </>
          )}
        </div>
      </div>
      <article className="prose prose-invert prose-stone max-w-none prose-headings:font-mono prose-code:font-mono">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeSlug, rehypePrettyCode],
            },
          }}
        />
      </article>
    </main>
  );
}
