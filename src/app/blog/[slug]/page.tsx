import data from "@/data"
import dayjs from "dayjs"
import { ArrowLeft, Clock, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

type Props = { params: Promise<{ slug: string }> }

const getPost = async (params: Props["params"]) => {
  const { slug } = await params

  const post = data.blog.find((p) => p.slug === slug)

  if (!post) notFound()

  return post
}

export default async function Blog({ params }: Props) {
  const post = await getPost(params)

  return (
    <>
      <div className="push">
        <Link
          href="/blog"
          className="muted mt-2 mb-8 flex w-fit items-center gap-2"
        >
          <ArrowLeft className="size-5" />
          <p>Back to Blog</p>
        </Link>

        <Image src={post.image} alt={post.title} className="w-full" />

        <p className="mt-8 text-4xl font-bold">{post.title}</p>
        <p className="muted mt-2 text-xl">{post.description}</p>

        <div className="my-8 flex gap-6">
          <div className="flex items-center gap-2">
            <Clock className="size-4" />
            <p>{dayjs(post.created).format("MMMM D, YYYY")}</p>
          </div>

          <div className="flex items-center gap-2">
            <User className="size-4" />
            <p>{post.author}</p>
          </div>
        </div>

        <p className="whitespace-pre-line">{post.body}</p>
      </div>
    </>
  )
}
