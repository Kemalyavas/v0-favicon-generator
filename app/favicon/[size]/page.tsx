import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FaviconGenerator } from "@/components/favicon-generator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface SizeConfig {
  slug: string
  width: number
  height: number
  label: string
  description: string
  longDescription: string
  useCases: string[]
  faqs: { q: string; a: string }[]
}

const SIZES: SizeConfig[] = [
  {
    slug: "16x16",
    width: 16,
    height: 16,
    label: "16×16",
    description: "Generate a 16×16 pixel favicon — the classic browser tab icon size used by all major browsers.",
    longDescription: "The 16×16 pixel favicon is the original and most fundamental favicon size. It appears in browser tabs, bookmark bars, and history lists. Despite being tiny, a well-designed 16×16 favicon is essential for brand recognition. Keep your design extremely simple at this size — single letters, simple shapes, or bold icons work best.",
    useCases: ["Browser tabs", "Bookmark bar", "History list", "Browser address bar"],
    faqs: [
      { q: "What is a 16x16 favicon?", a: "A 16x16 favicon is the smallest standard favicon size, displayed in browser tabs next to the page title. It is 16 pixels wide and 16 pixels tall." },
      { q: "Is 16x16 still needed?", a: "Yes. While modern browsers support larger sizes, 16x16 is still used as a fallback in browser tabs and bookmarks. Most favicon generators include it by default." },
      { q: "What format should a 16x16 favicon be?", a: "ICO format supports 16x16 natively and is the most compatible. PNG is also widely supported. Our generator creates both formats." },
      { q: "How do I make a good 16x16 icon?", a: "Use a single letter, simple shape, or bold icon. Avoid fine details — they won't be visible at 16 pixels. High contrast between foreground and background is essential." },
    ],
  },
  {
    slug: "32x32",
    width: 32,
    height: 32,
    label: "32×32",
    description: "Create a 32×32 pixel favicon for high-DPI browser tabs and desktop shortcuts.",
    longDescription: "The 32×32 favicon is used on higher resolution displays and as the standard Windows desktop shortcut icon. It provides twice the detail of the 16×16 version, allowing for slightly more complex designs while still requiring simplicity. This is often considered the default favicon size for modern web development.",
    useCases: ["Retina/HiDPI browser tabs", "Windows desktop shortcuts", "Taskbar icons", "Standard favicon.ico"],
    faqs: [
      { q: "What is a 32x32 favicon used for?", a: "32x32 favicons are used in high-resolution browser tabs, Windows taskbar, desktop shortcuts, and as the standard size in multi-size .ico files." },
      { q: "Should I use 32x32 or 16x16?", a: "Use both. A proper favicon setup includes multiple sizes. Most generators (including ours) create all sizes from a single upload." },
      { q: "How do I create a 32x32 favicon?", a: "Upload any image, text, or emoji using our generator above. It will automatically create a 32x32 version along with other standard sizes." },
      { q: "What is the best format for 32x32 favicons?", a: "ICO files can contain both 16x16 and 32x32 in a single file, making them ideal. PNG is also excellent for individual size files." },
    ],
  },
  {
    slug: "48x48",
    width: 48,
    height: 48,
    label: "48×48",
    description: "Generate a 48×48 pixel favicon for Windows site shortcuts and pinned sites.",
    longDescription: "The 48×48 favicon size is primarily used by Windows for site shortcuts on the desktop and in the Start menu. It provides enough resolution for recognizable branding while still being optimized for small display contexts. This size bridges the gap between tiny tab icons and full application icons.",
    useCases: ["Windows site shortcuts", "Start menu pins", "Desktop icons", "Windows taskbar (large)"],
    faqs: [
      { q: "When is a 48x48 favicon needed?", a: "Windows uses 48x48 for desktop shortcuts and Start menu pins. It is also included in multi-size ICO files for best compatibility." },
      { q: "Is 48x48 a standard favicon size?", a: "Yes, it is part of the recommended favicon size set. While not as critical as 16x16 or 32x32, including it improves the experience on Windows." },
      { q: "How do I add a 48x48 favicon to my site?", a: "Our generator creates 48x48 automatically. Include it in your HTML with: <link rel=\"icon\" href=\"/favicon-48x48.png\" sizes=\"48x48\" type=\"image/png\">" },
      { q: "Can I use the same image for all favicon sizes?", a: "Yes, our generator takes one image and creates all sizes automatically. However, for the best results, the source image should be at least 512x512 pixels." },
    ],
  },
  {
    slug: "64x64",
    width: 64,
    height: 64,
    label: "64×64",
    description: "Create a 64×64 pixel favicon for high-resolution displays and Windows shortcuts.",
    longDescription: "The 64×64 favicon provides crisp rendering on high-DPI displays and larger Windows icon contexts. At this size, more design detail becomes visible — gradients, thin lines, and subtle features can be distinguished. It is commonly included in comprehensive favicon packages.",
    useCases: ["High-DPI displays", "Large Windows shortcuts", "Pinned browser tabs", "Progressive Web App icons"],
    faqs: [
      { q: "What is a 64x64 favicon?", a: "A 64x64 favicon is a medium-resolution icon used in high-DPI displays and larger icon contexts on Windows and some Linux desktop environments." },
      { q: "Do I need a 64x64 favicon?", a: "While not strictly required, including 64x64 ensures your favicon looks sharp on high-resolution displays. It is good practice for a complete favicon setup." },
      { q: "How does 64x64 differ from 32x32?", a: "64x64 has 4 times the pixels of 32x32, allowing for more detail. The visual difference is noticeable on retina displays." },
      { q: "What file format supports 64x64 favicons?", a: "Both ICO and PNG support 64x64. PNG is recommended for web use, while ICO can bundle multiple sizes in one file." },
    ],
  },
  {
    slug: "128x128",
    width: 128,
    height: 128,
    label: "128×128",
    description: "Generate a 128×128 pixel favicon for Chrome Web Store and large icon contexts.",
    longDescription: "The 128×128 icon is used by the Chrome Web Store, some Android home screen shortcuts, and large icon display contexts. At this resolution, your favicon can include more detailed branding elements. It serves as a bridge between small favicons and full app icons.",
    useCases: ["Chrome Web Store", "Android shortcuts", "Large icon previews", "PWA install prompts"],
    faqs: [
      { q: "Where is a 128x128 favicon used?", a: "128x128 is used by the Chrome Web Store for extension icons, some Android devices for home screen shortcuts, and in large icon preview contexts." },
      { q: "Is 128x128 required for a website?", a: "Not strictly required for basic favicon functionality, but recommended if you are building a PWA or Chrome extension." },
      { q: "How do I create a 128x128 icon?", a: "Upload your image or create one with text/emoji using our generator. It creates 128x128 along with all other standard sizes." },
      { q: "What is the best source image size for 128x128?", a: "Use a source image of at least 512x512 pixels for the best quality when scaling down to 128x128." },
    ],
  },
  {
    slug: "192x192",
    width: 192,
    height: 192,
    label: "192×192",
    description: "Create a 192×192 pixel icon for Android home screens and Progressive Web Apps (PWA).",
    longDescription: "The 192×192 icon is critical for Progressive Web Apps (PWA) and Android home screen shortcuts. When a user adds your website to their Android home screen, this is the icon they see. Google recommends including this size in your web app manifest for the best mobile experience.",
    useCases: ["Android home screen", "PWA install icon", "Google search results (mobile)", "Web app manifest"],
    faqs: [
      { q: "Why do I need a 192x192 icon?", a: "192x192 is required by the PWA specification and used by Android when users add your site to their home screen. Without it, Android may not display your icon correctly." },
      { q: "How do I add a 192x192 icon to my site?", a: "Add it to your web app manifest (manifest.json): {\"icons\": [{\"src\": \"/icon-192x192.png\", \"sizes\": \"192x192\", \"type\": \"image/png\"}]}" },
      { q: "Is 192x192 the same as a favicon?", a: "It serves a similar purpose but is specifically for mobile devices and PWAs. Traditional favicons are 16x16 or 32x32. The 192x192 icon is part of a modern, complete icon set." },
      { q: "What format should a 192x192 icon be?", a: "PNG is the standard format for 192x192 icons. It is specified in the web app manifest and supported by all mobile browsers." },
    ],
  },
  {
    slug: "512x512",
    width: 512,
    height: 512,
    label: "512×512",
    description: "Generate a 512×512 pixel icon for PWA splash screens, app stores, and high-resolution displays.",
    longDescription: "The 512×512 icon is the largest standard web icon size, used for PWA splash screens on mobile devices, app store listings, and as the master icon from which smaller sizes are generated. Google Lighthouse specifically checks for a 512×512 icon in your web app manifest.",
    useCases: ["PWA splash screen", "App store listings", "Google Lighthouse requirement", "Master icon for all sizes"],
    faqs: [
      { q: "Why is 512x512 important?", a: "Google Lighthouse checks for a 512x512 icon as part of PWA requirements. It is also used for splash screens when your PWA launches on mobile devices." },
      { q: "Is 512x512 required for my website?", a: "If you are building a PWA, yes. Google Lighthouse will flag a missing 512x512 icon. For regular websites, it is recommended but not required." },
      { q: "Can I use 512x512 as my only icon?", a: "You should not rely on a single size. Include multiple sizes (16, 32, 192, 512) for the best experience across all devices and contexts." },
      { q: "What is the best format for a 512x512 icon?", a: "PNG with transparency support is the standard. Use a high-quality source image — 512x512 is the size most icon generators use as the starting point." },
    ],
  },
]

export function generateStaticParams() {
  return SIZES.map((s) => ({ size: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ size: string }>
}): Promise<Metadata> {
  const { size } = await params
  const config = SIZES.find((s) => s.slug === size)
  if (!config) return {}

  return {
    title: `${config.label} Favicon Generator – Create ${config.label} Icon Online | Faviconator`,
    description: config.description,
    alternates: { canonical: `/favicon/${config.slug}` },
    openGraph: {
      title: `${config.label} Favicon Generator`,
      description: config.description,
      type: "website",
    },
  }
}

export default async function FaviconSizePage({
  params,
}: {
  params: Promise<{ size: string }>
}) {
  const { size } = await params
  const config = SIZES.find((s) => s.slug === size)

  if (!config) return <p>Not found</p>

  const otherSizes = SIZES.filter((s) => s.slug !== size)

  return (
    <main className="min-h-screen bg-background">
      <FaviconGenerator
        defaultMode="image"
        title={`${config.label} Favicon Generator`}
        description={config.description}
      />

      <div className="mx-auto max-w-3xl px-4 pb-16">
        {/* About */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            About {config.label} Favicons
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {config.longDescription}
          </p>

          <h3 className="mt-6 mb-3 text-lg font-semibold text-foreground">
            Where Is {config.label} Used?
          </h3>
          <ul className="grid gap-2 sm:grid-cols-2">
            {config.useCases.map((uc) => (
              <li key={uc} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary flex-shrink-0" />
                {uc}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="mb-6 text-xl font-bold text-foreground">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {config.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-sm font-medium">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Other sizes */}
        <section className="mt-12">
          <h2 className="mb-4 text-lg font-bold text-foreground">Other Favicon Sizes</h2>
          <div className="grid gap-2 sm:grid-cols-3">
            {otherSizes.map((s) => (
              <Link
                key={s.slug}
                href={`/favicon/${s.slug}`}
                className="group flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-secondary/50"
              >
                <span className="text-sm font-medium text-foreground">{s.label}</span>
                <ArrowRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </section>

        {/* Back */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Favicon Generator
          </Link>
        </div>
      </div>
    </main>
  )
}
