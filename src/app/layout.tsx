import "@/styles/base.css"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { Metadata } from "next"
import { Karla } from "next/font/google"
import Link from "next/link"
import { ReactNode } from "react"

const karla = Karla({ weight: "400" })

export const metadata: Metadata = {
  title: { default: "Makush", template: "%s - Makush" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-background text-foreground ${karla.className}`}>
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

        <main>{children}</main>

        <footer className="push mt-28 space-y-8 p-4">
          <div className="grid grid-cols-3">
            <div className="space-y-2">
              <p className="text-xl font-bold">Contact</p>

              <div className="flex items-center gap-2">
                <Mail className="size-5" />
                <p>info@makushgallery.com</p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="size-5" />
                <p>+251 911 418 602</p>
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

                {/* <Link href="/" target="_blank">
                  <Twitter />
                </Link> */}
              </div>
            </div>
          </div>

          <p className="muted text-center">
            © {new Date().getFullYear()} Makush. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  )
}
