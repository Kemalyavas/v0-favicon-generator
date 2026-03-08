import type { Metadata } from "next"
import { BlogPost } from "@/components/blog-post"

export const metadata: Metadata = {
  alternates: { canonical: "/blog/how-to-add-favicon" },
  title: "How to Add a Favicon to Your Website (2026 Guide)",
  description:
    "Step-by-step guide to adding a favicon to any website. Covers HTML, Next.js, React, WordPress, and more. With code examples and troubleshooting tips.",
  openGraph: {
    title: "How to Add a Favicon to Your Website",
    description:
      "Step-by-step favicon implementation guide for every platform.",
    type: "article",
  },
}

export default function Page() {
  return (
    <BlogPost>
      <h1>How to Add a Favicon to Your Website</h1>
      <p className="!text-lg !mb-8">
        A step-by-step guide for adding favicons to any website — from plain
        HTML to modern frameworks.
      </p>

      <h2>Step 1: Generate Your Favicon Files</h2>
      <p>
        Before adding a favicon, you need the icon files in multiple sizes. Use
        a favicon generator to create all the sizes you need from a single image
        or text. You&apos;ll typically get a ZIP file containing PNG images at
        various resolutions (16x16 through 512x512).
      </p>

      <h2>Step 2: Place Files in Your Project</h2>
      <p>
        Extract the favicon files and place them in your website&apos;s{" "}
        <strong>public</strong> or <strong>root</strong> directory. The exact
        location depends on your setup:
      </p>
      <ul>
        <li>
          <strong>Static HTML:</strong> Place in the same directory as your{" "}
          <code>index.html</code>
        </li>
        <li>
          <strong>Next.js:</strong> Place in the <code>/public</code> directory
          or <code>/app</code> directory
        </li>
        <li>
          <strong>React (CRA/Vite):</strong> Place in the{" "}
          <code>/public</code> directory
        </li>
        <li>
          <strong>WordPress:</strong> Upload via Media Library or theme settings
        </li>
      </ul>

      <h2>Step 3: Add HTML Link Tags</h2>
      <p>
        Add the following <code>&lt;link&gt;</code> tags inside the{" "}
        <code>&lt;head&gt;</code> section of your HTML:
      </p>
      <pre>
        <code>{`<link rel="icon" href="/favicon.png" type="image/png">
<link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png">
<link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/favicon-180x180.png">
<link rel="icon" href="/favicon-192x192.png" sizes="192x192" type="image/png">
<link rel="icon" href="/favicon-512x512.png" sizes="512x512" type="image/png">`}</code>
      </pre>

      <h2>Framework-Specific Guides</h2>

      <h3>Next.js (App Router)</h3>
      <p>
        Next.js 13+ with the App Router has built-in favicon support. Simply
        place a <code>favicon.ico</code> or <code>icon.png</code> file in
        your <code>app/</code> directory, and Next.js will automatically
        generate the appropriate <code>&lt;link&gt;</code> tags.
      </p>
      <p>For more control, use the metadata API:</p>
      <pre>
        <code>{`// app/layout.tsx
export const metadata = {
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/favicon-180x180.png',
  },
}`}</code>
      </pre>

      <h3>React (Vite)</h3>
      <p>
        Place your favicon files in the <code>/public</code> directory and add
        the <code>&lt;link&gt;</code> tags to your <code>index.html</code>:
      </p>
      <pre>
        <code>{`<!-- index.html -->
<head>
  <link rel="icon" href="/favicon.png" type="image/png">
  <link rel="apple-touch-icon" href="/favicon-180x180.png">
</head>`}</code>
      </pre>

      <h3>WordPress</h3>
      <p>
        WordPress 4.3+ has built-in Site Icon support:
      </p>
      <ol>
        <li>
          Go to <strong>Appearance → Customize → Site Identity</strong>
        </li>
        <li>Click &quot;Select site icon&quot;</li>
        <li>Upload your 512x512 favicon image</li>
        <li>WordPress automatically generates all needed sizes</li>
      </ol>
      <p>
        For manual control, add the link tags to your theme&apos;s{" "}
        <code>header.php</code> or use the <code>wp_head</code> action hook.
      </p>

      <h3>Shopify</h3>
      <p>
        In your Shopify admin, go to{" "}
        <strong>Online Store → Themes → Customize</strong>. Under{" "}
        <strong>Theme settings → Favicon</strong>, upload your favicon image.
        Shopify recommends a 32x32 PNG.
      </p>

      <h3>Static Sites (Hugo, Jekyll, 11ty)</h3>
      <p>
        Place favicon files in your static assets directory and add the link
        tags to your base template or layout file. The exact file varies by
        generator:
      </p>
      <ul>
        <li>
          <strong>Hugo:</strong> <code>layouts/partials/head.html</code>
        </li>
        <li>
          <strong>Jekyll:</strong> <code>_includes/head.html</code>
        </li>
        <li>
          <strong>11ty:</strong> Your base layout template
        </li>
      </ul>

      <h2>Testing Your Favicon</h2>
      <p>After adding your favicon, verify it works correctly:</p>
      <ol>
        <li>
          <strong>Hard refresh</strong> your browser (Ctrl+Shift+R / Cmd+Shift+R)
          — browsers aggressively cache favicons
        </li>
        <li>
          <strong>Open in incognito/private mode</strong> to bypass cache entirely
        </li>
        <li>
          <strong>Check mobile</strong> — add your site to the home screen on iOS
          and Android to verify the touch icons
        </li>
        <li>
          <strong>Test in multiple browsers</strong> — Chrome, Firefox, Safari,
          and Edge may handle favicons differently
        </li>
      </ol>

      <h2>Common Issues</h2>
      <ul>
        <li>
          <strong>Favicon not showing:</strong> Clear browser cache or test in
          incognito mode. Favicons are cached aggressively and may take time to
          update.
        </li>
        <li>
          <strong>Wrong size displayed:</strong> Ensure you&apos;re providing the
          correct <code>sizes</code> attribute in your link tags.
        </li>
        <li>
          <strong>Blurry favicon:</strong> You may be serving a low-resolution
          image. Provide at least a 32x32 PNG for browser tabs.
        </li>
        <li>
          <strong>Favicon works locally but not in production:</strong> Check
          that your favicon files are being served from the correct path and
          that your build process includes them.
        </li>
      </ul>
    </BlogPost>
  )
}
