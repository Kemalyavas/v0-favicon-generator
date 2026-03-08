import type { Metadata } from "next"
import { FaviconGenerator } from "@/components/favicon-generator"

export const metadata: Metadata = {
  alternates: { canonical: "/svg-to-favicon" },
  title: "SVG to Favicon Generator – Convert SVG to favicon.ico Online",
  description:
    "Convert SVG files to favicon.ico instantly. Free SVG to favicon generator for websites. No signup required.",
  openGraph: {
    title: "SVG to Favicon Generator – Convert SVG to favicon.ico Online",
    description:
      "Convert SVG files to favicon.ico instantly. Free SVG to favicon generator for websites.",
    type: "website",
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <FaviconGenerator
        defaultMode="image"
        title="SVG to Favicon Converter"
        description="Upload your SVG file and convert it to all standard favicon sizes. Perfect vector-to-raster conversion."
      />
    </main>
  )
}
