export type FaviconShape = "square" | "rounded" | "circle"

export interface FaviconConfig {
  letter: string
  bgColor: string
  textColor: string
  shape: FaviconShape
  fontSize: number
}

export const FAVICON_SIZES = [16, 32, 48, 64, 128, 180, 192, 512] as const

export function renderFavicon(
  canvas: HTMLCanvasElement,
  config: FaviconConfig,
  size: number
) {
  const ctx = canvas.getContext("2d")
  if (!ctx) return

  canvas.width = size
  canvas.height = size

  ctx.clearRect(0, 0, size, size)

  // Draw shape
  ctx.fillStyle = config.bgColor
  const radius = size * 0.18

  if (config.shape === "circle") {
    ctx.beginPath()
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
    ctx.fill()
  } else if (config.shape === "rounded") {
    ctx.beginPath()
    ctx.moveTo(radius, 0)
    ctx.lineTo(size - radius, 0)
    ctx.quadraticCurveTo(size, 0, size, radius)
    ctx.lineTo(size, size - radius)
    ctx.quadraticCurveTo(size, size, size - radius, size)
    ctx.lineTo(radius, size)
    ctx.quadraticCurveTo(0, size, 0, size - radius)
    ctx.lineTo(0, radius)
    ctx.quadraticCurveTo(0, 0, radius, 0)
    ctx.closePath()
    ctx.fill()
  } else {
    ctx.fillRect(0, 0, size, size)
  }

  // Draw text
  const displayChar = (Array.from(config.letter)[0] || "").toUpperCase()
  const computedFontSize = size * (config.fontSize / 100)
  ctx.fillStyle = config.textColor
  ctx.font = `600 ${computedFontSize}px "Geist", "Inter", system-ui, -apple-system, sans-serif`
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText(displayChar, size / 2, size / 2 + computedFontSize * 0.04)
}

export function renderImageFavicon(
  canvas: HTMLCanvasElement,
  img: HTMLImageElement,
  size: number,
  shape: FaviconShape
) {
  const ctx = canvas.getContext("2d")
  if (!ctx) return

  canvas.width = size
  canvas.height = size

  ctx.clearRect(0, 0, size, size)

  // Clip to shape
  ctx.save()
  const radius = size * 0.18

  if (shape === "circle") {
    ctx.beginPath()
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
    ctx.clip()
  } else if (shape === "rounded") {
    ctx.beginPath()
    ctx.moveTo(radius, 0)
    ctx.lineTo(size - radius, 0)
    ctx.quadraticCurveTo(size, 0, size, radius)
    ctx.lineTo(size, size - radius)
    ctx.quadraticCurveTo(size, size, size - radius, size)
    ctx.lineTo(radius, size)
    ctx.quadraticCurveTo(0, size, 0, size - radius)
    ctx.lineTo(0, radius)
    ctx.quadraticCurveTo(0, 0, radius, 0)
    ctx.closePath()
    ctx.clip()
  }

  // Draw image cover-fit
  const imgRatio = img.naturalWidth / img.naturalHeight
  let sx = 0,
    sy = 0,
    sw = img.naturalWidth,
    sh = img.naturalHeight

  if (imgRatio > 1) {
    sw = img.naturalHeight
    sx = (img.naturalWidth - sw) / 2
  } else {
    sh = img.naturalWidth
    sy = (img.naturalHeight - sh) / 2
  }

  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, size, size)
  ctx.restore()
}

export function canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob)
      else reject(new Error("Failed to create blob"))
    }, "image/png")
  })
}
