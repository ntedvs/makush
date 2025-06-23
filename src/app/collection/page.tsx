import data from "@/data"
import Image from "next/image"
import Link from "next/link"

export default function Collection() {
  return (
    <>
      <div className="mt-8 mb-16">
        <h2 className="mb-2">Our Collection</h2>

        <p className="muted push text-center text-xl">
          Discover a curated selection of unique pieces from talented artists
          around the world. Each item in our collection is handpicked for its
          quality and creativity. Explore more and find your next favorite
          artwork—visit our gallery today!
        </p>
      </div>

      <div className="mx-8 grid grid-cols-4 gap-8">
        {data.featured.map(({ image, title, slug, author }, i) => (
          <Link href={`/collection/${slug}`} key={i}>
            <Image
              src={image}
              alt={""}
              className="aspect-square object-cover transition duration-300 hover:scale-105 hover:shadow-2xl"
            />

            <p className="mt-2 text-xl font-bold">{title}</p>
            <p className="muted">{author}</p>
          </Link>
        ))}
      </div>
    </>
  )
}
