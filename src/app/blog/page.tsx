import data from "@/data"
import dayjs from "dayjs"
import { Clock, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Blog() {
  return (
    <>
      <div className="mt-8 mb-16">
        <h2 className="mb-2">Blog</h2>

        <p className="muted push text-center text-xl">
          Discover insights from the world of contemporary art. Explore stories
          that inspire and challenge. Gain new perspectives on culture and
          creativity.
        </p>
      </div>

      <div className="mx-auto max-w-5xl space-y-8 px-8">
        {data.blog.map(({ image, slug, title, body, created, author }) => (
          <div className="grid gap-4 md:grid-cols-4" key={slug}>
            <Link href={`/blog/${slug}`}>
              <Image
                src={image}
                alt={title}
                className="aspect-square object-cover"
              />
            </Link>

            <div className="md:col-span-3">
              <Link href={`/blog/${slug}`} className="text-2xl font-bold">
                {title}
              </Link>

              <div className="my-4 flex gap-8">
                <div className="flex items-center gap-2">
                  <Clock className="size-5" />
                  <p>{dayjs(created).format("MMMM D, YYYY")}</p>
                </div>

                <div className="flex items-center gap-2">
                  <User className="size-5" />
                  <p>{author}</p>
                </div>
              </div>

              <p className="muted line-clamp-4">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
