"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"

interface Post {
  href: string
  title: string
  description: string
}

export function BlogSearch({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("")

  const filtered = query.trim()
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : posts

  return (
    <>
      <div className="relative mt-8">
        <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground/30 transition-colors"
        />
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {filtered.length === 0 ? (
          <p className="py-8 text-center text-sm text-muted-foreground">
            No articles found for &ldquo;{query}&rdquo;
          </p>
        ) : (
          filtered.map((post) => (
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
          ))
        )}
      </div>
    </>
  )
}
