import data from "@/data"
import { ArrowLeft, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

type Props = { params: Promise<{ slug: string }> }

const getPiece = async (params: Props["params"]) => {
  const { slug } = await params

  const piece = data.featured.find((p) => p.slug === slug)

  if (!piece) notFound()

  return piece
}

export default async function Piece({ params }: Props) {
  const piece = await getPiece(params)

  return (
    <div className="mx-auto max-w-6xl">
      <Link
        href="/collection"
        className="muted mt-2 mb-8 flex w-fit items-center gap-2"
      >
        <ArrowLeft className="size-5" />
        <p>Back to Collection</p>
      </Link>

      <div className="grid grid-cols-2 gap-12">
        <Image src={piece.image} alt={""} />

        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-left">{piece.title}</h2>
            <p className="muted text-xl">{piece.author}</p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="mb-4 text-3xl font-bold">
              {new Intl.NumberFormat().format(piece.price)} ETB
            </p>

            {piece.sold ? (
              <div className="w-min border border-red-200 bg-red-50 p-2 text-red-600">
                Purchased
              </div>
            ) : (
              <div className="w-min border border-green-200 bg-green-50 p-2 text-green-600">
                Available
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-2xl font-bold">Artwork Details</p>

            <div className="mt-6 grid grid-cols-2 gap-6">
              <div>
                <p className="font-bold">Medium</p>
                <p className="muted">{piece.medium}</p>
              </div>

              <div>
                <p className="font-bold">Dimensions</p>
                <p className="muted">{piece.dimensions}</p>
              </div>

              <div>
                <p className="font-bold">Year</p>
                <p className="muted">{piece.year}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-2xl font-bold">About this work</p>
            <p className="muted mt-4">{piece.description}</p>
          </div>

          {!piece.sold && (
            <div className="border-t border-gray-200 pt-8">
              <p className="text-2xl font-bold">Interested in This Piece?</p>
              <p className="muted my-4 mb-6">
                Contact us to schedule a viewing, discuss pricing, or arrange
                purchase.
              </p>

              <div className="flex gap-4">
                <Link
                  href="mailto:info@makushgallery.com"
                  className="flex w-44 justify-center gap-2 border p-4"
                >
                  <Mail />
                  <p>Email Inquiry</p>
                </Link>

                <Link
                  href="tel:+251911418602"
                  className="flex w-44 justify-center gap-2 border p-4"
                >
                  <Phone />
                  <p>Call Gallery</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
