"use client"

import { useCallback, useRef, useState } from "react"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import type { FaviconShape } from "@/lib/favicon"
import { Upload, X, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const SHAPES: { value: FaviconShape; label: string }[] = [
  { value: "square", label: "Square" },
  { value: "rounded", label: "Rounded" },
  { value: "circle", label: "Circle" },
]

interface ImageControlsProps {
  imageUrl: string | null
  shape: FaviconShape
  onImageChange: (url: string | null) => void
  onShapeChange: (shape: FaviconShape) => void
}

export function ImageControls({
  imageUrl,
  shape,
  onImageChange,
  onShapeChange,
}: ImageControlsProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) return
      const url = URL.createObjectURL(file)
      onImageChange(url)
    },
    [onImageChange]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      const file = e.dataTransfer.files[0]
      if (file) handleFile(file)
    },
    [handleFile]
  )

  return (
    <div className="flex flex-col gap-6">
      {/* Upload area */}
      <div className="flex flex-col gap-2">
        <Label className="text-foreground text-xs font-medium uppercase tracking-wider">
          Image
        </Label>

        {imageUrl ? (
          <div className="relative">
            <div className="flex items-center gap-3 rounded-md border border-border bg-secondary/50 p-3">
              <div className="flex size-10 items-center justify-center overflow-hidden rounded-md border border-border bg-background">
                <img
                  src={imageUrl}
                  alt="Uploaded favicon source"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Image loaded</p>
                <p className="text-xs text-muted-foreground">
                  Ready to generate
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => onImageChange(null)}
                aria-label="Remove image"
              >
                <X className="size-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div
            onDragOver={(e) => {
              e.preventDefault()
              setIsDragging(true)
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
            className={cn(
              "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed p-8 transition-colors",
              isDragging
                ? "border-foreground bg-secondary"
                : "border-border hover:border-muted-foreground hover:bg-secondary/50"
            )}
          >
            <div className="flex size-10 items-center justify-center rounded-full bg-secondary">
              {isDragging ? (
                <Upload className="size-4 text-foreground" />
              ) : (
                <ImageIcon className="size-4 text-muted-foreground" />
              )}
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-foreground">
                Drop image here
              </p>
              <p className="text-xs text-muted-foreground">
                or click to browse
              </p>
            </div>
          </div>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) handleFile(file)
          }}
        />
      </div>

      {/* Shape */}
      <div className="flex flex-col gap-2">
        <Label className="text-foreground text-xs font-medium uppercase tracking-wider">
          Shape
        </Label>
        <div className="flex gap-2">
          {SHAPES.map((s) => (
            <button
              key={s.value}
              onClick={() => onShapeChange(s.value)}
              className={cn(
                "flex h-9 flex-1 items-center justify-center rounded-md border text-sm font-medium transition-all",
                shape === s.value
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-foreground hover:bg-secondary"
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
