import { ImageResponse } from 'next/og'

export const alt = 'Favicon Generator'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          color: '#fff',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '120px',
            height: '120px',
            backgroundColor: '#fff',
            borderRadius: '24px',
            marginBottom: '40px',
            fontSize: '72px',
            fontWeight: 800,
            color: '#000',
          }}
        >
          F
        </div>
        <div
          style={{
            fontSize: '56px',
            fontWeight: 700,
            letterSpacing: '-2px',
          }}
        >
          Favicon Generator
        </div>
        <div
          style={{
            fontSize: '24px',
            color: '#888',
            marginTop: '16px',
          }}
        >
          Create favicon.ico from Text, Image, SVG or Emoji
        </div>
      </div>
    ),
    { ...size }
  )
}
