import Link from "next/link"
import { FaviconGenerator } from "@/components/favicon-generator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"

const TOOLS = [
  {
    href: "/png-to-ico",
    title: "PNG to ICO Converter",
    description: "Convert PNG images to favicon format",
  },
  {
    href: "/svg-to-favicon",
    title: "SVG to Favicon Converter",
    description: "Convert SVG vectors to all favicon sizes",
  },
  {
    href: "/text-to-favicon",
    title: "Text to Favicon",
    description: "Create favicons from letters and text",
  },
  {
    href: "/emoji-favicon",
    title: "Emoji Favicon",
    description: "Generate favicons from emojis",
  },
]

const BLOG_POSTS = [
  {
    href: "/blog/what-is-a-favicon",
    title: "What Is a Favicon?",
    description: "Complete guide to understanding favicons",
  },
  {
    href: "/blog/favicon-sizes",
    title: "Favicon Sizes in 2026",
    description: "Complete reference for all favicon sizes",
  },
  {
    href: "/blog/how-to-add-favicon",
    title: "How to Add a Favicon",
    description: "Step-by-step guide for every platform",
  },
  {
    href: "/blog/favicon-best-practices",
    title: "Favicon Best Practices",
    description: "Design, SEO, and performance tips",
  },
]

const FAQ_ITEMS = [
  {
    question: "What is a favicon?",
    answer:
      "A favicon (short for 'favorites icon') is a small icon displayed in the browser tab, bookmarks bar, and search results next to your website's title. It helps users quickly identify and find your site among multiple open tabs.",
  },
  {
    question: "What favicon sizes do I need?",
    answer:
      "The most common sizes are 16x16 (browser tab), 32x32 (taskbar shortcut), 180x180 (Apple touch icon), and 192x192 / 512x512 (Android & PWA). This tool generates all recommended sizes for you.",
  },
  {
    question: "How do I add a favicon to my website?",
    answer:
      "Download the ZIP file, extract the favicon images into your website's root directory, then add the HTML link tags (provided in the HTML Code section above) to the <head> of your HTML. Frameworks like Next.js, React, and WordPress each have their own conventions for this.",
  },
  {
    question: "What image format should I use?",
    answer:
      "PNG is the most widely supported format and is what this tool generates. While .ico files were traditionally used, modern browsers fully support PNG favicons with better quality and transparency.",
  },
  {
    question: "Can I use an image as my favicon?",
    answer:
      "Yes! Switch to the Image tab, upload any image, and the tool will resize and crop it to all necessary favicon sizes. For best results, use a square image with a simple, recognizable design.",
  },
  {
    question: "Is this tool free?",
    answer:
      "Completely free with no sign-up required. Everything runs in your browser — your images are never uploaded to any server.",
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <FaviconGenerator />

      {/* More Tools */}
      <section className="mx-auto w-full max-w-3xl px-4 pb-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
          More Tools
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-secondary/50"
            >
              <div>
                <h3 className="text-sm font-medium text-foreground">
                  {tool.title}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {tool.description}
                </p>
              </div>
              <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="mx-auto w-full max-w-3xl px-4 pb-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
          Resources
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-secondary/50"
            >
              <div>
                <h3 className="text-sm font-medium text-foreground">
                  {post.title}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {post.description}
                </p>
              </div>
              <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-3xl px-4 pb-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-sm font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto w-full max-w-5xl px-4 py-6">
          <div className="mb-5 pb-5 border-b border-border">
            <p className="text-xs font-semibold text-foreground mb-2">More Free Tools</p>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              <a href="https://imgpressr.com" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">ImgPressr — Compress & convert images</a>
              <a href="https://jsonshift.com" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">JSONShift — Convert JSON, CSV, YAML, XML</a>
              <a href="https://thepercentcalc.com" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">PercentCalc — Percentage calculator</a>
              <a href="https://caseformat.com" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">CaseFormat — Text case converter</a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Favicon Generator
            </p>
            <nav className="flex gap-4">
              {TOOLS.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  {tool.title}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <Link
                href="/privacy-policy"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <span className="text-xs text-muted-foreground">&middot;</span>
              <p className="text-xs text-muted-foreground">
                100% client-side
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
