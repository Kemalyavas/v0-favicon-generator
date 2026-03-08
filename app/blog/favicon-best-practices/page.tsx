import type { Metadata } from "next"
import { BlogPost } from "@/components/blog-post"

export const metadata: Metadata = {
  alternates: { canonical: "/blog/favicon-best-practices" },
  title: "Favicon Best Practices for SEO and Design (2026)",
  description:
    "Learn favicon best practices for SEO, design, and performance. Tips on colors, formats, dark mode support, testing, and common mistakes to avoid.",
  openGraph: {
    title: "Favicon Best Practices for SEO and Design",
    description:
      "Expert tips on creating effective favicons for better SEO and user experience.",
    type: "article",
  },
}

export default function Page() {
  return (
    <BlogPost>
      <h1>Favicon Best Practices for SEO and Design</h1>
      <p className="!text-lg !mb-8">
        Expert tips for creating favicons that look great, load fast, and
        help your site stand out in search results.
      </p>

      <h2>Design Principles</h2>

      <h3>Keep It Simple</h3>
      <p>
        Your favicon will be displayed as small as 16x16 pixels. At that size,
        complex logos, detailed illustrations, and small text become
        unrecognizable blobs. The most effective favicons use a single bold
        element: one letter, one simple shape, or one recognizable symbol.
      </p>
      <p>
        Look at the favicons of major websites — Google uses a simple
        &quot;G&quot;, GitHub uses their octocat silhouette, and Twitter/X uses a
        bold geometric mark. Each is instantly recognizable even at tiny sizes.
      </p>

      <h3>Use High Contrast</h3>
      <p>
        A favicon needs to stand out against various browser chrome backgrounds
        — light tabs, dark tabs, bookmark bars, and search results. Choose
        colors with strong contrast between the icon and its background. A dark
        icon on a light background (or vice versa) works best.
      </p>
      <p>
        Avoid colors that blend into common browser UI colors (light gray, white)
        as your favicon may become invisible.
      </p>

      <h3>Design at 512x512, Test at 16x16</h3>
      <p>
        Always create your favicon at the largest size (512x512) for maximum
        detail, then verify it still looks good when scaled down to 16x16. If
        details are lost at small sizes, simplify the design. Some designers
        create slightly different versions for small and large sizes — a
        simplified version for 16x16 and a more detailed version for 512x512.
      </p>

      <h2>File Format Strategy</h2>

      <h3>PNG: The Safe Default</h3>
      <p>
        PNG is supported by all modern browsers and offers the best balance of
        quality, transparency support, and file size. For most websites, PNG
        favicons are the right choice. Generate PNGs at all recommended sizes
        (16, 32, 48, 180, 192, 512) for complete coverage.
      </p>

      <h3>SVG: The Modern Choice</h3>
      <p>
        SVG favicons are supported by Chrome, Firefox, and Edge. Their key
        advantage is scalability — a single SVG file looks crisp at any size. SVG
        also supports CSS media queries, enabling dark mode adaptive icons:
      </p>
      <pre>
        <code>{`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <style>
    circle { fill: #000; }
    @media (prefers-color-scheme: dark) {
      circle { fill: #fff; }
    }
  </style>
  <circle cx="16" cy="16" r="14" />
</svg>`}</code>
      </pre>
      <p>
        Note: Safari doesn&apos;t support SVG favicons, so always provide a PNG
        fallback alongside your SVG.
      </p>

      <h3>ICO: Only If Needed</h3>
      <p>
        The ICO format is only necessary if you need to support very old browsers
        (IE 10 and earlier). Modern sites can safely skip ICO and use PNG
        exclusively. If you do need ICO support, a single 32x32 ICO file is
        sufficient as a fallback.
      </p>

      <h2>SEO Considerations</h2>

      <h3>Google Search Results</h3>
      <p>
        Google displays favicons in mobile search results next to your
        site&apos;s URL. A recognizable favicon improves click-through rates by
        making your result more visually distinctive. Google has specific
        requirements:
      </p>
      <ul>
        <li>The favicon must be a multiple of 48x48 pixels</li>
        <li>It should be square (not rectangular)</li>
        <li>
          Google will resize it to 16x16 for display, so it must be legible at
          that size
        </li>
        <li>
          The favicon URL must be accessible to Googlebot (not blocked by
          robots.txt)
        </li>
        <li>
          It should represent your brand and be consistent across your site
        </li>
      </ul>

      <h3>Don&apos;t Block Googlebot</h3>
      <p>
        Ensure your <code>robots.txt</code> doesn&apos;t block access to your
        favicon files. Google needs to fetch and index your favicon to display it
        in search results. This is a common mistake that causes favicons to not
        appear in SERPs.
      </p>

      <h3>Use Consistent Favicons</h3>
      <p>
        Use the same favicon across all pages of your site. Google associates
        favicons with entire domains, not individual pages. Changing favicons
        frequently or using different ones for different sections confuses both
        users and search engines.
      </p>

      <h2>Performance</h2>
      <ul>
        <li>
          <strong>Optimize file size:</strong> Compress your PNG favicons.
          A 32x32 PNG favicon should be under 5KB. Use tools like TinyPNG or
          ImageOptim for lossless compression.
        </li>
        <li>
          <strong>Set cache headers:</strong> Favicons are requested on every
          page load. Set long cache headers (at least 1 month) to avoid
          unnecessary re-downloads.
        </li>
        <li>
          <strong>Avoid redirect chains:</strong> Serve favicon files directly
          from the URL specified in your link tags. Redirects add latency.
        </li>
        <li>
          <strong>Don&apos;t use a CDN subdomain:</strong> Serve favicons from
          your main domain. Some browsers look for{" "}
          <code>/favicon.ico</code> on the root domain regardless of link
          tags.
        </li>
      </ul>

      <h2>Dark Mode Support</h2>
      <p>
        With dark mode becoming standard, consider how your favicon looks on
        both light and dark backgrounds. A dark favicon on a dark tab bar may
        become invisible. Options:
      </p>
      <ul>
        <li>
          <strong>Add a subtle border or background:</strong> A thin light
          border around a dark icon ensures visibility on dark backgrounds
        </li>
        <li>
          <strong>Use an SVG with media queries:</strong> Automatically switch
          icon colors based on the user&apos;s color scheme preference
        </li>
        <li>
          <strong>Choose neutral colors:</strong> Medium-brightness colors
          with good contrast work acceptably on both light and dark backgrounds
        </li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <ol>
        <li>
          <strong>Using your full logo:</strong> Logos with text or complex
          details don&apos;t work at 16x16. Extract the simplest element of
          your brand instead.
        </li>
        <li>
          <strong>Only providing one size:</strong> This forces browsers to scale
          your favicon, often resulting in blurry rendering.
        </li>
        <li>
          <strong>Forgetting the Apple Touch Icon:</strong> Without it, iOS shows
          a screenshot of your page as the home screen icon — unprofessional.
        </li>
        <li>
          <strong>Not testing across browsers:</strong> A favicon that looks
          great in Chrome may render differently in Safari or Firefox.
        </li>
        <li>
          <strong>Using transparent backgrounds carelessly:</strong> A
          transparent PNG favicon may become invisible on certain browser
          backgrounds. Always test against both light and dark UIs.
        </li>
      </ol>
    </BlogPost>
  )
}
