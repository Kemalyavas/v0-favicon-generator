"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { TextControls } from "@/components/text-controls"
import { ImageControls } from "@/components/image-controls"
import { EmojiPicker } from "@/components/emoji-picker"
import { FaviconPreview } from "@/components/favicon-preview"
import { downloadFaviconZip } from "@/lib/download"
import type { FaviconConfig, FaviconShape } from "@/lib/favicon"
import { Download, Type, ImageIcon, Copy, Check } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"

const HTML_SNIPPET = `<link rel="icon" href="/favicon.png" type="image/png">
<link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png">
<link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/favicon-48x48.png" sizes="48x48" type="image/png">
<link rel="icon" href="/favicon-64x64.png" sizes="64x64" type="image/png">
<link rel="icon" href="/favicon-128x128.png" sizes="128x128" type="image/png">
<link rel="apple-touch-icon" href="/favicon-180x180.png">
<link rel="icon" href="/favicon-192x192.png" sizes="192x192" type="image/png">
<link rel="icon" href="/favicon-512x512.png" sizes="512x512" type="image/png">`

interface FaviconGeneratorProps {
  defaultMode?: "text" | "image"
  title?: string
  description?: string
  showEmojiPicker?: boolean
}

export function FaviconGenerator({
  defaultMode = "text",
  title = "Free Favicon Generator",
  description = "Create favicons from text or images. Preview all sizes. Download as ZIP.",
  showEmojiPicker = false,
}: FaviconGeneratorProps) {
  const [mode, setMode] = useState<"text" | "image">(defaultMode)
  const [isDownloading, setIsDownloading] = useState(false)
  const [copied, setCopied] = useState(false)

  const [config, setConfig] = useState<FaviconConfig>({
    letter: showEmojiPicker ? "🚀" : "A",
    bgColor: "#000000",
    textColor: "#FFFFFF",
    shape: "rounded",
    fontSize: showEmojiPicker ? 70 : 60,
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

  const handleCopy = async () => {
    await navigator.clipboard.writeText(HTML_SNIPPET)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const canDownload = mode === "text" || (mode === "image" && imageUrl)

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12 md:py-20">
      {/* Header */}
      <header className="mb-12 text-center md:mb-16">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl text-balance">
          {title}
        </h1>
        <p className="mt-2 text-base text-muted-foreground">{description}</p>
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
              <div className="flex flex-col gap-6">
                {showEmojiPicker && (
                  <EmojiPicker
                    selected={config.letter}
                    onSelect={(emoji) =>
                      setConfig({ ...config, letter: emoji })
                    }
                  />
                )}
                <TextControls config={config} onChange={setConfig} />
              </div>
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

          {/* HTML Snippet */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                HTML Code
              </h3>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={handleCopy}
                aria-label="Copy HTML code"
              >
                {copied ? (
                  <Check className="size-3.5 text-green-500" />
                ) : (
                  <Copy className="size-3.5" />
                )}
              </Button>
            </div>
            <pre className="rounded-md border border-border bg-secondary/50 p-3 text-[11px] leading-relaxed text-foreground overflow-x-auto font-mono whitespace-pre">
              {HTML_SNIPPET}
            </pre>
          </div>
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
