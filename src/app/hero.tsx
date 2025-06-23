"use client"

import data from "@/data"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % data.banner.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen">
      {data.banner.map(({ image, title }, index) => (
        <Image
          src={image}
          alt={title}
          fill
          className={`-mt-16 object-cover transition duration-1000 ${index !== slide && "opacity-0"}`}
          key={title}
        />
      ))}
    </div>
  )
}
