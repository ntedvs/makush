import data from "@/data"
import dayjs from "dayjs"
import { Clock, User } from "lucide-react"
import Image from "next/image"

export default function Blog() {
  return (
    <>
      <div className="mt-8 mb-16">
        <h2 className="mb-2">Blog</h2>

        <p className="muted push text-center text-xl">
          Discover a curated selection of unique pieces from talented artists
          around the world. Each item in our collection is handpicked for its
          quality and creativity. Explore more and find your next favorite
          artwork—visit our gallery today!
        </p>
      </div>

      <div>
        {data.blog.map(({ image, slug, title, body, created, author }) => (
          <div className="" key={slug}>
            <Image src={image} alt={title} />

            <div>
              <p>{title}</p>

              <div className="flex gap-8">
                <div className="flex items-center gap-2">
                  <Clock className="size-5" />
                  <p>{dayjs(created).format("MMMM D, YYYY")}</p>
                </div>

                <div className="flex items-center gap-2">
                  <User className="size-5" />
                  <p>{author}</p>
                </div>
              </div>

              <p>{body}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
