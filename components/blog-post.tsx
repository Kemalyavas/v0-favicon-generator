import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function BlogPost({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-4 py-12 md:py-20">
        <div className="prose">{children}</div>
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
