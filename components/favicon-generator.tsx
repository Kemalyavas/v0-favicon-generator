"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { TextControls } from "@/components/text-controls"
import { ImageControls } from "@/components/image-controls"
import { FaviconPreview } from "@/components/favicon-preview"
import { downloadFaviconZip } from "@/lib/download"
import type { FaviconConfig, FaviconShape } from "@/lib/favicon"
import { Download, Type, ImageIcon } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"

export function FaviconGenerator() {
  const [mode, setMode] = useState<"text" | "image">("text")
  const [isDownloading, setIsDownloading] = useState(false)

  const [config, setConfig] = useState<FaviconConfig>({
    letter: "A",
    bgColor: "#000000",
    textColor: "#FFFFFF",
    shape: "rounded",
    fontSize: 60,
  })

  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [imageShape, setImageShape] = useState<FaviconShape>("rounded")

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      await downloadFaviconZip(mode, config, imageUrl, imageShape)
    } finally {
      setIsDownloading(false)
    }
  }

  const canDownload = mode === "text" || (mode === "image" && imageUrl)

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12 md:py-20">
      {/* Header */}
      <header className="mb-12 text-center md:mb-16">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl text-balance">
          Favicon Generator
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Create favicons from text or images. Preview all sizes. Download as
          ZIP.
        </p>
      </header>

      {/* Main content */}
      <div className="grid gap-10 md:grid-cols-[340px_1fr] md:gap-12 lg:gap-16">
        {/* Controls */}
        <div className="flex flex-col gap-6">
          <Tabs
            value={mode}
            onValueChange={(v) => setMode(v as "text" | "image")}
          >
            <TabsList className="w-full">
              <TabsTrigger value="text" className="flex-1 gap-1.5">
                <Type className="size-3.5" />
                Text
              </TabsTrigger>
              <TabsTrigger value="image" className="flex-1 gap-1.5">
                <ImageIcon className="size-3.5" />
                Image
              </TabsTrigger>
            </TabsList>

            <TabsContent value="text" className="mt-6">
              <TextControls config={config} onChange={setConfig} />
            </TabsContent>

            <TabsContent value="image" className="mt-6">
              <ImageControls
                imageUrl={imageUrl}
                shape={imageShape}
                onImageChange={setImageUrl}
                onShapeChange={setImageShape}
              />
            </TabsContent>
          </Tabs>

          {/* Download button */}
          <Button
            onClick={handleDownload}
            disabled={!canDownload || isDownloading}
            className="h-10 w-full"
          >
            {isDownloading ? (
              <Spinner className="size-4" />
            ) : (
              <Download className="size-4" />
            )}
            {isDownloading ? "Generating..." : "Download ZIP"}
          </Button>
        </div>

        {/* Preview */}
        <div>
          <FaviconPreview
            mode={mode}
            config={config}
            imageUrl={imageUrl}
            imageShape={imageShape}
          />
        </div>
      </div>
    </div>
  )
}
