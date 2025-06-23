"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(true)

  if (typeof window === "undefined") return
  const home = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div
        className={`fixed right-0 left-0 z-10 p-4 transition duration-300 ${scrolled ? "bg-background/40 backdrop-blur-md" : "bg-transparent"}`}
      >
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

      <div className={home ? "" : "h-16"} />
    </>
  )
}
