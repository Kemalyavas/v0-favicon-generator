import JSZip from "jszip"
import {
  renderFavicon,
  renderImageFavicon,
  canvasToBlob,
  FAVICON_SIZES,
  type FaviconConfig,
  type FaviconShape,
} from "./favicon"

export async function downloadFaviconZip(
  mode: "text" | "image",
  config: FaviconConfig,
  imageUrl: string | null,
  imageShape: FaviconShape
) {
  const zip = new JSZip()

  if (mode === "text") {
    for (const size of FAVICON_SIZES) {
      const canvas = document.createElement("canvas")
      renderFavicon(canvas, config, size)
      const blob = await canvasToBlob(canvas)
      zip.file(`favicon-${size}x${size}.png`, blob)
    }
  } else if (imageUrl) {
    const img = await loadImage(imageUrl)
    for (const size of FAVICON_SIZES) {
      const canvas = document.createElement("canvas")
      renderImageFavicon(canvas, img, size, imageShape)
      const blob = await canvasToBlob(canvas)
      zip.file(`favicon-${size}x${size}.png`, blob)
    }
  }

  // Generate ICO-style entry (32x32) as favicon.ico name
  if (mode === "text") {
    const icoCanvas = document.createElement("canvas")
    renderFavicon(icoCanvas, config, 32)
    const icoBlob = await canvasToBlob(icoCanvas)
    zip.file("favicon.png", icoBlob)
  } else if (imageUrl) {
    const img = await loadImage(imageUrl)
    const icoCanvas = document.createElement("canvas")
    renderImageFavicon(icoCanvas, img, 32, imageShape)
    const icoBlob = await canvasToBlob(icoCanvas)
    zip.file("favicon.png", icoBlob)
  }

  const content = await zip.generateAsync({ type: "blob" })
  const url = URL.createObjectURL(content)
  const a = document.createElement("a")
  a.href = url
  a.download = "favicons.zip"
  a.click()
  URL.revokeObjectURL(url)
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}
