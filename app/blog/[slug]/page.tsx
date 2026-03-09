import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { supabase, type Blog } from '@/lib/supabase'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface Props {
  params: Promise<{ slug: string }>
}

async function getBlog(slug: string): Promise<Blog | null> {
  const { data } = await supabase
    .from('blogs')
    .select('*')
    .eq('site', 'faviconator')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  return data
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const blog = await getBlog(slug)
  if (!blog) return { title: 'Not Found' }

  return {
    title: `${blog.title} – Faviconator Blog`,
    description: blog.meta_description,
    alternates: { canonical: `/blog/${blog.slug}` },
  }
}

// Safe markdown rendering - returns React elements, no dangerouslySetInnerHTML
function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let inCodeBlock = false
  let codeLines: string[] = []
  let key = 0

  function renderInline(text: string): React.ReactNode[] {
    const nodes: React.ReactNode[] = []
    // Process bold, italic, code, links via regex splitting
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`|\[.*?\]\(.*?\))/g)
    for (const part of parts) {
      if (part.startsWith('**') && part.endsWith('**')) {
        nodes.push(<strong key={key++}>{part.slice(2, -2)}</strong>)
      } else if (part.startsWith('*') && part.endsWith('*')) {
        nodes.push(<em key={key++}>{part.slice(1, -1)}</em>)
      } else if (part.startsWith('`') && part.endsWith('`')) {
        nodes.push(<code key={key++}>{part.slice(1, -1)}</code>)
      } else if (part.startsWith('[')) {
        const match = part.match(/\[(.+?)\]\((.+?)\)/)
        if (match) {
          nodes.push(<a key={key++} href={match[2]}>{match[1]}</a>)
        } else {
          nodes.push(part)
        }
      } else {
        nodes.push(part)
      }
    }
    return nodes
  }

  let i = 0
  while (i < lines.length) {
    const line = lines[i]

    // Code blocks
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        elements.push(<pre key={key++}><code>{codeLines.join('\n')}</code></pre>)
        codeLines = []
        inCodeBlock = false
      } else {
        inCodeBlock = true
      }
      i++
      continue
    }

    if (inCodeBlock) {
      codeLines.push(line)
      i++
      continue
    }

    const trimmed = line.trim()
    if (!trimmed) { i++; continue }

    // Headings
    if (trimmed.startsWith('# ')) { elements.push(<h1 key={key++}>{renderInline(trimmed.slice(2))}</h1>); i++; continue }
    if (trimmed.startsWith('## ')) { elements.push(<h2 key={key++}>{renderInline(trimmed.slice(3))}</h2>); i++; continue }
    if (trimmed.startsWith('### ')) { elements.push(<h3 key={key++}>{renderInline(trimmed.slice(4))}</h3>); i++; continue }

    // Lists
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const items: React.ReactNode[] = []
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
        items.push(<li key={key++}>{renderInline(lines[i].trim().slice(2))}</li>)
        i++
      }
      elements.push(<ul key={key++}>{items}</ul>)
      continue
    }

    if (/^\d+\.\s/.test(trimmed)) {
      const items: React.ReactNode[] = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(<li key={key++}>{renderInline(lines[i].trim().replace(/^\d+\.\s/, ''))}</li>)
        i++
      }
      elements.push(<ol key={key++}>{items}</ol>)
      continue
    }

    // Paragraph
    elements.push(<p key={key++}>{renderInline(trimmed)}</p>)
    i++
  }

  return <>{elements}</>
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params
  const blog = await getBlog(slug)
  if (!blog) notFound()

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-3xl px-4 py-12">
        <article className="prose">
          <MarkdownRenderer content={blog.content} />
        </article>
        <div className="mt-12 text-center">
          <Link href="/">
            <Button size="lg">Try Faviconator Now</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
