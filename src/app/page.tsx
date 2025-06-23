import data from "@/data"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Hero from "./hero"

export default function Home() {
  return (
    <div className="space-y-32">
      <Hero />

      <div className="space-y-4">
        <h2>About Makush</h2>

        <p className="push muted text-center">
          Makush Art Gallery is a must-visit for art enthusiasts eager to
          explore the works of new and emerging artists in Addis Ababa. We have
          a collection of contemporary paintings, including portraits,
          landscapes, and urban collages that offer insight into the city's
          evolving art scene.
        </p>
      </div>

      <div>
        <h2>Featured Works</h2>
        <p className="muted mt-2 mb-8 text-center">
          Discover our carefully selected collection of contemporary
          masterpieces
        </p>

        <div className="mb-8 grid grid-cols-3 gap-8 px-8">
          {data.featured.map(({ image, slug, title }) => (
            <Link href={`/collection/${slug}`} key={slug}>
              <Image
                src={image}
                alt={title}
                className="aspect-square w-full object-cover transition duration-300 hover:scale-105 hover:shadow-2xl"
              />
            </Link>
          ))}
        </div>

        <Link
          href="/collection"
          className="mx-auto flex w-fit items-center gap-2 border p-4 transition hover:bg-gray-50"
        >
          <p>View Full Collection</p>
          <ArrowRight className="stroke-1" />
        </Link>
      </div>

      <div>
        <h2>Latest Insights</h2>
        <p className="muted mt-2 mb-8 text-center">
          Stay informed with our latest articles on art, culture, and collecting
        </p>

        <div className="mb-8 grid grid-cols-3 gap-8 px-8">
          {data.blog.map(({ image, slug, title, description }) => (
            <Link href={`/blog/${slug}`} className="shadow-xl" key={slug}>
              <Image
                src={image}
                alt={title}
                className="aspect-video w-full object-cover"
              />

              <div className="space-y-2 p-6">
                <p className="text-xl font-bold">{title}</p>
                <p className="muted">{description}</p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/blog"
          className="mx-auto flex w-fit items-center gap-2 border p-4 transition hover:bg-gray-50"
        >
          <p>View Full Blog</p>
          <ArrowRight className="stroke-1" />
        </Link>
      </div>
    </div>
  )
}
