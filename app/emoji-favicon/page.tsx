import type { Metadata } from "next"
import { FaviconGenerator } from "@/components/favicon-generator"

export const metadata: Metadata = {
  alternates: { canonical: "/emoji-favicon" },
  title: "Emoji Favicon Generator – Create favicon.ico from Emoji",
  description:
    "Create a favicon from any emoji. Generate favicon.ico icons from emoji characters instantly and download for free.",
  openGraph: {
    title: "Emoji Favicon Generator – Create favicon.ico from Emoji",
    description:
      "Create a favicon from any emoji. Generate favicon.ico icons from emoji characters instantly and download for free.",
    type: "website",
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <FaviconGenerator
        defaultMode="text"
        title="Emoji Favicon Generator"
        description="Pick an emoji and turn it into a professional favicon. Customize background, shape, and download all sizes."
        showEmojiPicker
      />
    </main>
  )
}
