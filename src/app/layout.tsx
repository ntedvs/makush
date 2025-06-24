import "@/styles/base.css"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { Metadata } from "next"
import { Karla } from "next/font/google"
import Link from "next/link"
import { ReactNode } from "react"

const karla = Karla({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: { default: "Makush", template: "%s - Makush" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen flex-col bg-background text-foreground ${karla.className}`}
      >
        <div className="fixed top-0 right-0 left-0 z-10 bg-background/40 p-4 backdrop-blur-md">
          <div className="push flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              Makush
            </Link>

            <div className="space-x-6">
              <Link href="/story">Our Story</Link>
              <Link href="/collection">Collection</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>
        </div>

        <div className="h-16" />

        <main className="grow">{children}</main>

        <footer className="push mt-24 w-full space-y-8 px-4 pb-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <p className="text-xl font-bold">Contact</p>

              <div className="flex items-center gap-2">
                <Mail className="size-5" />
                <p>info@makushgallery.com</p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="size-5" />
                <p>+251 91 141 8602</p>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="size-5" />
                <p>info@makushgallery.com</p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xl font-bold">Hours</p>

              <p>Monday - Friday: 10 AM - 6 PM</p>
              <p>Saturday: 10 AM - 8 PM</p>
              <p>Sunday: 10 AM - 4 PM</p>
            </div>

            <div className="space-y-2">
              <p className="text-xl font-bold">Socials</p>

              <div className="flex gap-2">
                <Link
                  href="https://instagram.com/makushethiopianartgallery_"
                  target="_blank"
                >
                  <Instagram />
                </Link>

                <Link href="https://facebook.com/makush" target="_blank">
                  <Facebook />
                </Link>
              </div>
            </div>
          </div>

          <div className="muted flex flex-col justify-between md:flex-row">
            <p>© {new Date().getFullYear()} Makush. All rights reserved.</p>

            <p>
              Made by{" "}
              <Link
                href="https://github.com/ntedvs"
                className="hover:text-foreground"
              >
                Alloy Studios
              </Link>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
