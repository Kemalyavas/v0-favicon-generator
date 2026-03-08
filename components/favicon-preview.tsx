"use client"

import { useEffect, useRef, useCallback } from "react"
import {
  renderFavicon,
  renderImageFavicon,
  FAVICON_SIZES,
  type FaviconConfig,
  type FaviconShape,
} from "@/lib/favicon"

interface FaviconPreviewProps {
  mode: "text" | "image"
  config: FaviconConfig
  imageUrl: string | null
  imageShape: FaviconShape
}

export function FaviconPreview({
  mode,
  config,
  imageUrl,
  imageShape,
}: FaviconPreviewProps) {
  const canvasRefs = useRef<Map<number, HTMLCanvasElement>>(new Map())
  const tabCanvasRef = useRef<HTMLCanvasElement>(null)

  const setCanvasRef = useCallback(
    (size: number) => (el: HTMLCanvasElement | null) => {
      if (el) {
        canvasRefs.current.set(size, el)
      } else {
        canvasRefs.current.delete(size)
      }
    },
    []
  )

  useEffect(() => {
    if (mode === "text") {
      canvasRefs.current.forEach((canvas, size) => {
        renderFavicon(canvas, config, size)
      })
      if (tabCanvasRef.current) {
        renderFavicon(tabCanvasRef.current, config, 32)
      }
    } else if (imageUrl) {
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.onload = () => {
        canvasRefs.current.forEach((canvas, size) => {
          renderImageFavicon(canvas, img, size, imageShape)
        })
        if (tabCanvasRef.current) {
          renderImageFavicon(tabCanvasRef.current, img, 32, imageShape)
        }
      }
      img.src = imageUrl
    }
  }, [mode, config, imageUrl, imageShape])

  const primarySize = 512

  return (
    <div className="flex flex-col gap-8">
      {/* Browser tab mockup */}
      <div>
        <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Browser Tab
        </h3>
        <div className="overflow-hidden rounded-lg border border-border">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-3 py-2">
            <div className="flex gap-1.5">
              <div className="size-2.5 rounded-full bg-border" />
              <div className="size-2.5 rounded-full bg-border" />
              <div className="size-2.5 rounded-full bg-border" />
            </div>
            <div className="ml-2 flex items-center gap-2 rounded-md bg-background px-3 py-1 border border-border">
              <canvas
                ref={tabCanvasRef}
                width={32}
                height={32}
                className="size-3.5 rounded-[2px]"
              />
              <span className="text-xs text-muted-foreground">
                My Website
              </span>
            </div>
          </div>
          {/* Blank page */}
          <div className="h-20 bg-background" />
        </div>
      </div>

      {/* Large preview */}
      <div>
        <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Preview
        </h3>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center justify-center rounded-lg border border-border bg-secondary/30 p-8">
            <canvas
              ref={setCanvasRef(primarySize)}
              width={primarySize}
              height={primarySize}
              className="size-28 rounded-lg md:size-32"
              style={{ imageRendering: "auto" }}
            />
          </div>
          <p className="text-[11px] text-muted-foreground font-mono">
            512 &times; 512
          </p>
        </div>
      </div>

      {/* All sizes grid */}
      <div>
        <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          All Sizes
        </h3>
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7">
          {FAVICON_SIZES.filter((s) => s !== 512).map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <div className="flex size-16 items-center justify-center rounded-md border border-border bg-secondary/30">
                <canvas
                  ref={setCanvasRef(size)}
                  width={size}
                  height={size}
                  className="rounded-sm"
                  style={{
                    width: Math.min(Math.max(size, 20), 40),
                    height: Math.min(Math.max(size, 20), 40),
                    imageRendering: size <= 32 ? "pixelated" : "auto",
                  }}
                />
              </div>
              <span className="text-[11px] text-muted-foreground font-mono">
                {size}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
