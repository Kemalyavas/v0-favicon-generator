import type { Metadata } from "next"
import { FaviconGenerator } from "@/components/favicon-generator"

export const metadata: Metadata = {
  alternates: { canonical: "/text-to-favicon" },
  title: "Text to Favicon Generator – Create Letter favicon.ico",
  description:
    "Generate a favicon from text or letters. Create simple letter favicon.ico icons for your website instantly.",
  openGraph: {
    title: "Text to Favicon Generator – Create Letter favicon.ico",
    description:
      "Generate a favicon from text or letters. Create simple letter favicon.ico icons for your website instantly.",
    type: "website",
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <FaviconGenerator
        defaultMode="text"
        title="Text to Favicon Generator"
        description="Create a favicon from any letter or character. Choose your colors, shape, and size."
      />
    </main>
  )
}
