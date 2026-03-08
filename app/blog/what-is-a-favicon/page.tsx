import type { Metadata } from "next"
import { BlogPost } from "@/components/blog-post"

export const metadata: Metadata = {
  alternates: { canonical: "/blog/what-is-a-favicon" },
  title: "What Is a Favicon? Complete Guide (2026)",
  description:
    "Learn what a favicon is, why it matters for your website, and how to create one. Complete guide covering history, formats, sizes, and best practices.",
  openGraph: {
    title: "What Is a Favicon? Complete Guide",
    description:
      "Everything you need to know about favicons — from history to implementation.",
    type: "article",
  },
}

export default function Page() {
  return (
    <BlogPost>
      <h1>What Is a Favicon? Complete Guide</h1>
      <p className="!text-lg !mb-8">
        Everything you need to know about the small icon that makes a big
        difference for your website.
      </p>

      <h2>Definition</h2>
      <p>
        A <strong>favicon</strong> (short for &quot;favorites icon&quot;) is a
        small icon associated with a website. It appears in browser tabs,
        bookmark lists, browser history, search results, and on mobile home
        screens when users save a site as a shortcut.
      </p>
      <p>
        Despite its small size — typically 16x16 or 32x32 pixels in a browser
        tab — a favicon plays an outsized role in how users perceive and interact
        with your website. It&apos;s often the first visual element a user
        notices and the primary way they identify your site among dozens of open
        tabs.
      </p>

      <h2>A Brief History</h2>
      <p>
        Favicons were introduced by Microsoft in 1999 with Internet Explorer 5.
        Originally, browsers looked for a file named <code>favicon.ico</code> in
        a website&apos;s root directory. The ICO format supported multiple
        resolutions in a single file, making it ideal for the limited rendering
        capabilities of early browsers.
      </p>
      <p>
        Over the years, the ecosystem evolved significantly. Modern browsers now
        support PNG, SVG, and even animated favicons. Apple introduced the
        &quot;apple-touch-icon&quot; for iOS home screen bookmarks, and
        Google&apos;s Android platform requires specific sizes for Progressive
        Web App (PWA) icons.
      </p>

      <h2>Why Favicons Matter</h2>
      <ul>
        <li>
          <strong>Brand recognition:</strong> A favicon is a micro-version of
          your brand identity. It reinforces your visual presence across every
          browser tab and bookmark.
        </li>
        <li>
          <strong>User experience:</strong> When users have multiple tabs open, a
          favicon helps them quickly locate your site. Without one, your tab
          shows a generic globe or document icon — indistinguishable from other
          favicon-less sites.
        </li>
        <li>
          <strong>Trust and professionalism:</strong> A missing favicon signals
          an unfinished or neglected website. Users — even subconsciously —
          associate the absence of a favicon with a less trustworthy site.
        </li>
        <li>
          <strong>SEO signals:</strong> While Google doesn&apos;t directly rank
          pages by favicon quality, favicons do appear in mobile search results.
          A recognizable icon improves click-through rates, which indirectly
          benefits SEO.
        </li>
        <li>
          <strong>PWA requirements:</strong> If you&apos;re building a
          Progressive Web App, icons at specific sizes (192x192 and 512x512) are
          mandatory for the web app manifest.
        </li>
      </ul>

      <h2>Where Favicons Appear</h2>
      <ul>
        <li>
          <strong>Browser tabs</strong> — the most common location, using 16x16
          or 32x32 pixels
        </li>
        <li>
          <strong>Bookmark/favorites bar</strong> — displayed next to the
          bookmark title
        </li>
        <li>
          <strong>Browser history</strong> — helps identify previously visited
          sites
        </li>
        <li>
          <strong>Google search results</strong> — shown next to your site&apos;s
          URL on mobile
        </li>
        <li>
          <strong>Mobile home screen</strong> — when users &quot;Add to Home
          Screen&quot;, the 180x180 (iOS) or 192x192 (Android) icon is used
        </li>
        <li>
          <strong>Tab overview / task switcher</strong> — used in browser tab
          grid views and OS task switchers
        </li>
      </ul>

      <h2>Common Favicon Formats</h2>
      <table>
        <thead>
          <tr>
            <th>Format</th>
            <th>Extension</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ICO</td>
            <td>.ico</td>
            <td>Legacy browser support, multi-size embedding</td>
          </tr>
          <tr>
            <td>PNG</td>
            <td>.png</td>
            <td>Modern browsers, best quality-to-size ratio</td>
          </tr>
          <tr>
            <td>SVG</td>
            <td>.svg</td>
            <td>Scalable vector icons, dark mode support</td>
          </tr>
          <tr>
            <td>WebP</td>
            <td>.webp</td>
            <td>Smaller file sizes (limited browser support for favicons)</td>
          </tr>
        </tbody>
      </table>

      <h2>How to Create a Favicon</h2>
      <p>
        The fastest way is to use a favicon generator tool. You can create a
        favicon from text (a single letter or initials), from an existing image
        or logo, or even from an emoji. A good generator will produce all the
        sizes you need and provide the HTML code to add them to your site.
      </p>
      <p>
        When designing a favicon, keep it simple. The icon will be displayed at
        very small sizes, so fine details get lost. Use bold shapes, high
        contrast colors, and avoid text smaller than a single large letter.
      </p>

      <h2>Adding a Favicon to Your Website</h2>
      <p>
        Once you have your favicon files, add them to your website&apos;s root
        directory and include the appropriate{" "}
        <code>&lt;link&gt;</code> tags in your HTML{" "}
        <code>&lt;head&gt;</code>:
      </p>
      <pre>
        <code>{`<link rel="icon" href="/favicon.png" type="image/png">
<link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/favicon-180x180.png">`}</code>
      </pre>
      <p>
        Most modern frameworks (Next.js, Gatsby, WordPress) have built-in
        conventions for favicon placement. Check your framework&apos;s
        documentation for the recommended approach.
      </p>
    </BlogPost>
  )
}
