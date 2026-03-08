"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import type { FaviconConfig, FaviconShape } from "@/lib/favicon"
import { cn } from "@/lib/utils"

const PRESET_COLORS = [
  "#000000",
  "#FFFFFF",
  "#EF4444",
  "#F97316",
  "#EAB308",
  "#22C55E",
  "#3B82F6",
  "#8B5CF6",
]

const SHAPES: { value: FaviconShape; label: string }[] = [
  { value: "square", label: "Square" },
  { value: "rounded", label: "Rounded" },
  { value: "circle", label: "Circle" },
]

interface TextControlsProps {
  config: FaviconConfig
  onChange: (config: FaviconConfig) => void
}

export function TextControls({ config, onChange }: TextControlsProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Letter */}
      <div className="flex flex-col gap-2">
        <Label className="text-foreground text-xs font-medium uppercase tracking-wider">
          Letter
        </Label>
        <Input
          value={config.letter}
          onChange={(e) =>
            onChange({ ...config, letter: e.target.value.slice(0, 2) })
          }
          maxLength={2}
          placeholder="A"
          className="h-10 font-mono text-lg"
        />
      </div>

      {/* Background Color */}
      <div className="flex flex-col gap-2">
        <Label className="text-foreground text-xs font-medium uppercase tracking-wider">
          Background
        </Label>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            {PRESET_COLORS.map((color) => (
              <button
                key={color}
                onClick={() => onChange({ ...config, bgColor: color })}
                className={cn(
                  "size-7 rounded-md border transition-all",
                  config.bgColor === color
                    ? "ring-2 ring-foreground ring-offset-2 ring-offset-background"
                    : "border-border hover:scale-110"
                )}
                style={{ backgroundColor: color }}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
          <div className="relative ml-auto">
            <input
              type="color"
              value={config.bgColor}
              onChange={(e) =>
                onChange({ ...config, bgColor: e.target.value })
              }
              className="absolute inset-0 size-7 cursor-pointer opacity-0"
              aria-label="Custom background color"
            />
            <div
              className="size-7 rounded-md border border-dashed border-border"
              style={{ backgroundColor: config.bgColor }}
            />
          </div>
        </div>
      </div>

      {/* Text Color */}
      <div className="flex flex-col gap-2">
        <Label className="text-foreground text-xs font-medium uppercase tracking-wider">
          Text Color
        </Label>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onChange({ ...config, textColor: "#FFFFFF" })}
            className={cn(
              "size-7 rounded-md border transition-all",
              config.textColor === "#FFFFFF"
                ? "ring-2 ring-foreground ring-offset-2 ring-offset-background"
                : "border-border hover:scale-110"
            )}
            style={{ backgroundColor: "#FFFFFF" }}
            aria-label="White text"
          />
          <button
            onClick={() => onChange({ ...config, textColor: "#000000" })}
            className={cn(
              "size-7 rounded-md border transition-all",
              config.textColor === "#000000"
                ? "ring-2 ring-foreground ring-offset-2 ring-offset-background"
                : "border-border hover:scale-110"
            )}
            style={{ backgroundColor: "#000000" }}
            aria-label="Black text"
          />
          <div className="relative ml-auto">
            <input
              type="color"
              value={config.textColor}
              onChange={(e) =>
                onChange({ ...config, textColor: e.target.value })
              }
              className="absolute inset-0 size-7 cursor-pointer opacity-0"
              aria-label="Custom text color"
            />
            <div
              className="size-7 rounded-md border border-dashed border-border"
              style={{ backgroundColor: config.textColor }}
            />
          </div>
        </div>
      </div>

      {/* Shape */}
      <div className="flex flex-col gap-2">
        <Label className="text-foreground text-xs font-medium uppercase tracking-wider">
          Shape
        </Label>
        <div className="flex gap-2">
          {SHAPES.map((shape) => (
            <button
              key={shape.value}
              onClick={() => onChange({ ...config, shape: shape.value })}
              className={cn(
                "flex h-9 flex-1 items-center justify-center rounded-md border text-sm font-medium transition-all",
                config.shape === shape.value
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-foreground hover:bg-secondary"
              )}
            >
              {shape.label}
            </button>
          ))}
        </div>
      </div>

      {/* Font Size */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Label className="text-foreground text-xs font-medium uppercase tracking-wider">
            Font Size
          </Label>
          <span className="text-xs text-muted-foreground font-mono">
            {config.fontSize}%
          </span>
        </div>
        <Slider
          value={[config.fontSize]}
          onValueChange={([v]) => onChange({ ...config, fontSize: v })}
          min={30}
          max={90}
          step={1}
        />
      </div>
    </div>
  )
}
