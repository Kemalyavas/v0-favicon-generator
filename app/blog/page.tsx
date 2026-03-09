import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { supabase } from "@/lib/supabase"

export const revalidate = 60 // Revalidate every 60 seconds

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Favicon Blog – Tutorials, Tips and Guides",
  description:
    "Learn how to create, optimize and add favicons to your website. Guides, tutorials and favicon tips.",
  openGraph: {
    title: "Favicon Blog – Tutorials, Tips and Guides",
    description:
      "Learn how to create, optimize and add favicons to your website. Guides, tutorials and favicon tips.",
    type: "website",
  },
}

const STATIC_POSTS = [
  {
    href: "/blog/what-is-a-favicon",
    title: "What Is a Favicon? Complete Guide",
    description:
      "Everything you need to know about favicons — from history and formats to implementation tips.",
  },
  {
    href: "/blog/favicon-sizes",
    title: "Favicon Sizes in 2026: Complete Reference",
    description:
      "A definitive guide to every favicon size you need for browsers, iOS, Android, and PWAs.",
  },
  {
    href: "/blog/how-to-add-favicon",
    title: "How to Add a Favicon to Your Website",
    description:
      "Step-by-step guide covering HTML, Next.js, React, WordPress, and more.",
  },
  {
    href: "/blog/favicon-best-practices",
    title: "Favicon Best Practices for SEO and Design",
    description:
      "Expert tips on design, file formats, dark mode, performance, and common mistakes to avoid.",
  },
]

export default async function Page() {
  // Fetch dynamic blogs from Supabase
  const { data: dynamicBlogs } = await supabase
    .from('blogs')
    .select('title, slug, meta_description, created_at')
    .eq('site', 'faviconator')
    .eq('status', 'published')
    .order('created_at', { ascending: false })

  const dynamicPosts = (dynamicBlogs || []).map(blog => ({
    href: `/blog/${blog.slug}`,
    title: blog.title,
    description: blog.meta_description,
  }))

  const allPosts = [...dynamicPosts, ...STATIC_POSTS]

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Blog
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Guides and references for creating the perfect favicon.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          {allPosts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group flex items-center justify-between rounded-lg border border-border p-5 transition-colors hover:bg-secondary/50"
            >
              <div>
                <h2 className="text-base font-medium text-foreground">
                  {post.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {post.description}
                </p>
              </div>
              <ArrowRight className="ml-4 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
