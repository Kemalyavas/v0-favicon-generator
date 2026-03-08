import type { Metadata } from "next"
import { FaviconGenerator } from "@/components/favicon-generator"

export const metadata: Metadata = {
  alternates: { canonical: "/png-to-ico" },
  title: "PNG to ICO Converter – Convert PNG to favicon.ico Online",
  description:
    "Free PNG to ICO converter. Upload a PNG image and instantly generate favicon.ico for your website. Fast and completely free.",
  openGraph: {
    title: "PNG to ICO Converter – Convert PNG to favicon.ico Online",
    description:
      "Free PNG to ICO converter. Upload a PNG image and instantly generate favicon.ico for your website.",
    type: "website",
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <FaviconGenerator
        defaultMode="image"
        title="PNG to ICO Converter"
        description="Upload your PNG image and convert it to all standard favicon sizes. Preview and download as ZIP."
      />
    </main>
  )
}
