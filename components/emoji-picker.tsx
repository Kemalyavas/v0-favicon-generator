"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const EMOJI_GROUPS = [
  {
    label: "Popular",
    emojis: [
      "🚀", "🔥", "⚡", "💡", "🎯", "🎨", "💻", "📱",
      "🌟", "⭐", "💗", "💜", "✨", "💎", "🏆", "🌈",
      "🎉", "🎊", "🧲", "🧩", "🪄", "🫧", "🪩", "💫",
      "🔮", "🎪", "🧿", "🪬", "📀", "💿", "🔋", "🧬",
    ],
  },
  {
    label: "Faces",
    emojis: [
      "😀", "😃", "😄", "😁", "😎", "🤩", "🥳", "🤓",
      "😊", "🥰", "😇", "🤗", "🤔", "😏", "😈", "👻",
      "🤖", "👽", "💀", "🎃", "😺", "🤠", "🥸", "🫡",
      "🫠", "🤑", "😴", "🥶", "🥵", "😵", "🤯", "🫣",
    ],
  },
  {
    label: "Animals",
    emojis: [
      "🐶", "🐱", "🐻", "🦊", "🐼", "🐨", "🦁", "🐯",
      "🐸", "🐵", "🦄", "🐝", "🦋", "🐙", "🐳", "🦈",
      "🐺", "🦇", "🦉", "🐧", "🐦", "🦅", "🐬", "🐢",
      "🐍", "🦎", "🦖", "🐊", "🐘", "🦒", "🐪", "🦩",
    ],
  },
  {
    label: "Food",
    emojis: [
      "🍕", "🍔", "🌮", "🍣", "🍩", "🧁", "🍰", "🍪",
      "☕", "🍺", "🧃", "🍷", "🍎", "🍑", "🥑", "🌶️",
      "🍓", "🍒", "🥝", "🍌", "🥐", "🥨", "🧇", "🥞",
      "🍿", "🥤", "🫖", "🍵", "🧋", "🥥", "🍉", "🍇",
    ],
  },
  {
    label: "Objects",
    emojis: [
      "🏠", "🔒", "📧", "🛒", "📊", "🎮", "📚", "🔔",
      "💰", "🎁", "🔧", "📸", "🎬", "🎵", "🔗", "📌",
      "💼", "🎒", "👑", "💍", "🕶️", "👟", "🎩", "🧢",
      "🎸", "🥁", "🎹", "🎺", "🔬", "🔭", "💊", "🛡️",
    ],
  },
  {
    label: "Nature",
    emojis: [
      "🌍", "🌙", "☀️", "🌊", "🏔️", "🌸", "🌺", "🍀",
      "🌲", "🌵", "🍂", "❄️", "💧", "🌪️", "🌻", "🌷",
      "🪻", "🌹", "🪴", "🍄", "🐚", "🪸", "🪨", "🌾",
      "🎋", "🎍", "🪷", "🌿", "☘️", "🍁", "🌼", "💐",
    ],
  },
  {
    label: "Travel",
    emojis: [
      "✈️", "🚗", "🚢", "🚀", "🏖️", "🗼", "🎢", "🎡",
      "🏕️", "🗺️", "🧳", "🚲", "🛸", "🚁", "⛵", "🚂",
      "🏰", "🗽", "🎠", "🚃", "🚌", "🏍️", "🛶", "🪂",
      "🚡", "🚠", "🌉", "🏗️", "⛩️", "🕌", "🛕", "⛪",
    ],
  },
  {
    label: "Symbols",
    emojis: [
      "❤️", "💛", "💚", "💙", "💜", "🖤", "🤍", "💯",
      "✅", "❌", "⭕", "🔴", "🟢", "🔵", "⚪", "⚫",
      "🟡", "🟠", "🟣", "🟤", "♠️", "♥️", "♦️", "♣️",
      "☮️", "☯️", "♻️", "⚜️", "🔰", "⚠️", "🚫", "💢",
    ],
  },
]

interface EmojiPickerProps {
  selected?: string
  onSelect: (emoji: string) => void
}

export function EmojiPicker({ selected, onSelect }: EmojiPickerProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = 200
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label className="text-foreground text-xs font-medium uppercase tracking-wider">
          Pick an Emoji
        </Label>
        <div className="flex gap-0.5">
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft className="size-3.5" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <ChevronRight className="size-3.5" />
          </Button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {EMOJI_GROUPS.map((group) => (
          <div key={group.label} className="flex-none">
            <p className="mb-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {group.label}
            </p>
            <div className="grid grid-cols-8 grid-rows-4 gap-1">
              {group.emojis.map((emoji) => (
                <button
                  key={`${group.label}-${emoji}`}
                  type="button"
                  onClick={() => onSelect(emoji)}
                  className={cn(
                    "flex size-9 items-center justify-center rounded-md text-lg transition-all",
                    selected === emoji
                      ? "bg-foreground text-background ring-2 ring-foreground ring-offset-2 ring-offset-background"
                      : "hover:bg-secondary"
                  )}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
