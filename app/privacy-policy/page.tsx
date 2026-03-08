import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  alternates: { canonical: "/privacy-policy" },
  title: "Privacy Policy — Favicon Generator",
  description:
    "Privacy policy for Favicon Generator. Learn how we handle your data — spoiler: everything runs in your browser and we collect zero personal data.",
  openGraph: {
    title: "Privacy Policy — Favicon Generator",
    description: "How we handle your data at Favicon Generator.",
    type: "website",
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-4 py-12 md:py-20">
        <div className="prose">
          <h1>Privacy Policy</h1>
          <h2>Overview</h2>
          <p>
            Favicon Generator (&quot;we&quot;, &quot;our&quot;, &quot;the
            tool&quot;) is a free, open-source favicon creation tool. We are
            committed to protecting your privacy. This policy explains what data
            we collect, how we use it, and your rights.
          </p>
          <p>
            <strong>The short version:</strong> Everything runs entirely in your
            browser. We do not upload, store, or process your images or favicon
            files on any server. Your data never leaves your device.
          </p>

          <h2>Data We Do NOT Collect</h2>
          <ul>
            <li>
              <strong>Images and files:</strong> Any images you upload for
              favicon generation are processed 100% client-side using the HTML5
              Canvas API. They are never sent to our servers or any third party.
            </li>
            <li>
              <strong>Personal information:</strong> We do not collect names,
              email addresses, or any personally identifiable information. There
              is no account system, no login, and no registration.
            </li>
            <li>
              <strong>Favicon output:</strong> The favicons you generate and
              download are created in your browser. We have no access to them.
            </li>
          </ul>

          <h2>Data We Collect</h2>

          <h3>Analytics (Vercel Analytics)</h3>
          <p>
            We use <strong>Vercel Analytics</strong> to understand general usage
            patterns. Vercel Analytics collects:
          </p>
          <ul>
            <li>Page views and navigation paths</li>
            <li>Referrer URL (where you came from)</li>
            <li>Browser type and operating system</li>
            <li>Country-level geographic data</li>
            <li>Screen size and device type</li>
          </ul>
          <p>
            Vercel Analytics is privacy-focused and does{" "}
            <strong>not</strong> use cookies, does not collect IP addresses, and
            does not track individual users across sessions. All data is
            aggregated and anonymized. You can learn more in{" "}
            <a
              href="https://vercel.com/docs/analytics/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel&apos;s Analytics privacy policy
            </a>
            .
          </p>

          <h3>Hosting</h3>
          <p>
            This website is hosted on <strong>Vercel</strong>. As with any web
            hosting provider, Vercel may collect standard server logs (IP
            addresses, request timestamps, and user agents) for security and
            operational purposes. These logs are managed by Vercel and are not
            accessible to us. See{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel&apos;s privacy policy
            </a>{" "}
            for details.
          </p>

          <h2>Cookies</h2>
          <p>
            Favicon Generator does <strong>not</strong> set any cookies. Your
            theme preference (light/dark mode) is stored in your
            browser&apos;s <code>localStorage</code>, which is local to your
            device and not transmitted to any server.
          </p>

          <h2>Third-Party Services</h2>
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Purpose</th>
                <th>Data Shared</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vercel</td>
                <td>Hosting &amp; deployment</td>
                <td>Standard server logs</td>
              </tr>
              <tr>
                <td>Vercel Analytics</td>
                <td>Anonymous usage analytics</td>
                <td>Aggregated, cookieless page views</td>
              </tr>
              <tr>
                <td>Google Fonts</td>
                <td>Font delivery (Geist)</td>
                <td>Standard font request headers</td>
              </tr>
            </tbody>
          </table>
          <p>
            We do not use any advertising networks, tracking pixels, social
            media trackers, or marketing tools.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our tool does not knowingly collect any data from children under the
            age of 13. Since we do not collect personal information from anyone,
            this applies equally to all users regardless of age.
          </p>

          <h2>Data Retention</h2>
          <p>
            Since we do not collect personal data, there is nothing to retain
            or delete. Vercel Analytics data is retained according to
            Vercel&apos;s data retention policies and contains no personally
            identifiable information.
          </p>

          <h2>Your Rights</h2>
          <p>
            Under GDPR, CCPA, and similar privacy regulations, you have the
            right to access, correct, and delete your personal data. Since we
            do not collect personal data, these rights are automatically
            fulfilled. If you have any privacy-related questions, feel free to
            reach out.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on this page with an updated &quot;Last
            updated&quot; date. We encourage you to review this page
            periodically.
          </p>

          <h2>Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, you can reach
            us at{" "}
            <a href="mailto:kemalyavaass@gmail.com">kemalyavaass@gmail.com</a>.
          </p>
        </div>

        <div className="mt-16 border-t border-border pt-12 text-center">
          <p className="mb-4 text-lg font-medium text-foreground">
            Ready to create your favicon?
          </p>
          <Button asChild size="lg">
            <Link href="/" className="gap-2">
              Create Your Favicon Now
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </article>
    </main>
  )
}
