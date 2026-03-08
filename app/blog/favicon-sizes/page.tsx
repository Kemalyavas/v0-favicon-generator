import type { Metadata } from "next"
import { BlogPost } from "@/components/blog-post"

export const metadata: Metadata = {
  alternates: { canonical: "/blog/favicon-sizes" },
  title: "Favicon Sizes in 2026: Complete Reference Guide",
  description:
    "Complete reference for favicon sizes in 2026. Learn which sizes you need for browsers, iOS, Android, PWAs, and more. Includes HTML code examples.",
  openGraph: {
    title: "Favicon Sizes in 2026: Complete Reference",
    description:
      "Every favicon size you need — browsers, iOS, Android, and PWAs.",
    type: "article",
  },
}

export default function Page() {
  return (
    <BlogPost>
      <h1>Favicon Sizes in 2026: Complete Reference</h1>
      <p className="!text-lg !mb-8">
        A definitive guide to every favicon size you need for full browser and
        platform coverage.
      </p>

      <h2>Why Multiple Sizes?</h2>
      <p>
        Different platforms and devices display favicons at different
        resolutions. A favicon that looks crisp in a browser tab (16x16) would
        appear blurry as an iOS home screen icon (180x180). By providing
        multiple sizes, you ensure your icon looks sharp everywhere.
      </p>
      <p>
        Modern browsers are smart about selecting the best available size, but
        they can only choose from what you provide. Offering a complete set of
        sizes guarantees the best possible appearance across all contexts.
      </p>

      <h2>Complete Size Reference</h2>
      <table>
        <thead>
          <tr>
            <th>Size</th>
            <th>Usage</th>
            <th>Required?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>16x16</td>
            <td>Browser tab (standard displays)</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>32x32</td>
            <td>Browser tab (Retina/HiDPI), taskbar shortcut</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>48x48</td>
            <td>Windows site pinning</td>
            <td>Recommended</td>
          </tr>
          <tr>
            <td>64x64</td>
            <td>Windows taskbar, some browsers</td>
            <td>Optional</td>
          </tr>
          <tr>
            <td>128x128</td>
            <td>Chrome Web Store, high-res displays</td>
            <td>Optional</td>
          </tr>
          <tr>
            <td>180x180</td>
            <td>Apple Touch Icon (iOS/iPadOS home screen)</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>192x192</td>
            <td>Android Chrome, PWA manifest</td>
            <td>Yes (for PWA)</td>
          </tr>
          <tr>
            <td>512x512</td>
            <td>PWA splash screen, high-res contexts</td>
            <td>Yes (for PWA)</td>
          </tr>
        </tbody>
      </table>

      <h2>Browser-Specific Requirements</h2>

      <h3>Google Chrome</h3>
      <p>
        Chrome uses 16x16 for tabs and 32x32 for Retina displays. For PWAs,
        Chrome requires both 192x192 and 512x512 in the web app manifest. Chrome
        also displays favicons in the address bar, new tab page, and bookmarks.
      </p>

      <h3>Safari (macOS &amp; iOS)</h3>
      <p>
        Safari on macOS uses 32x32 for tabs. On iOS, when users add your site to
        their home screen, Safari uses the <code>apple-touch-icon</code> at
        180x180. Safari will automatically add rounded corners and visual
        effects, so provide a square image without pre-applied effects.
      </p>

      <h3>Firefox</h3>
      <p>
        Firefox uses 16x16 and 32x32 for tabs. It also supports SVG favicons
        via <code>&lt;link rel=&quot;icon&quot; type=&quot;image/svg+xml&quot;&gt;</code>,
        which allows for dark mode adaptive icons using CSS{" "}
        <code>prefers-color-scheme</code> media queries inside the SVG.
      </p>

      <h3>Microsoft Edge</h3>
      <p>
        Edge follows Chromium standards and uses the same sizes as Chrome. For
        Windows pinned sites, Edge also uses the 48x48 and 64x64 sizes.
      </p>

      <h2>The Minimum Set</h2>
      <p>
        If you want to cover the most ground with the fewest files, here&apos;s
        the minimum recommended set:
      </p>
      <ul>
        <li>
          <strong>32x32 PNG</strong> — covers browser tabs on all modern
          browsers
        </li>
        <li>
          <strong>180x180 PNG</strong> — Apple Touch Icon for iOS
        </li>
        <li>
          <strong>192x192 PNG</strong> — Android and PWA manifest
        </li>
        <li>
          <strong>512x512 PNG</strong> — PWA splash screen
        </li>
      </ul>

      <h2>HTML Implementation</h2>
      <p>Here&apos;s the recommended HTML for a complete favicon setup:</p>
      <pre>
        <code>{`<!-- Standard favicons -->
<link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png">
<link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" href="/favicon-180x180.png">

<!-- PWA / Android -->
<link rel="icon" href="/favicon-192x192.png" sizes="192x192" type="image/png">
<link rel="manifest" href="/site.webmanifest">`}</code>
      </pre>

      <h2>PWA Manifest</h2>
      <p>
        For Progressive Web Apps, you also need a{" "}
        <code>site.webmanifest</code> file that references your icons:
      </p>
      <pre>
        <code>{`{
  "icons": [
    { "src": "/favicon-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/favicon-512x512.png", "sizes": "512x512", "type": "image/png" }
  ]
}`}</code>
      </pre>

      <h2>Tips for Best Results</h2>
      <ul>
        <li>
          Always design at the largest size (512x512) and scale down — never
          scale up from a small image
        </li>
        <li>
          Test your favicon at 16x16 to ensure it&apos;s still recognizable at
          the smallest size
        </li>
        <li>
          Use PNG for best quality; ICO only if you need to support very old
          browsers
        </li>
        <li>
          Keep file sizes small — favicons are loaded on every page visit
        </li>
      </ul>
    </BlogPost>
  )
}
