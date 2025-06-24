import about from "@/media/about.jpg"
import Image from "next/image"

export default function Story() {
  return (
    <>
      <div className="mx-auto my-8 max-w-4xl space-y-8">
        <h2>Our Story</h2>

        <Image src={about} alt={""} />

        <p>
          Makush Gallery stands as a cornerstone of Ethiopia&apos;s art tourism
          sector, offering visitors an authentic cultural experience in Addis
          Ababa&apos;s vibrant Bole district. This unique venue combines a
          contemporary art gallery with a restaurant, creating a space that
          delights both the eyes and palate while showcasing Ethiopia&apos;s
          flourishing artistic talent to international visitors and their
          guides.
        </p>

        <p>
          Founded by Tesfaye Hiwet, who returned to Ethiopia 18 years ago after
          living in the United States, Makush began in 2000 with just 15 local
          artists. Today, the gallery represents approximately 100 artists and
          houses an impressive collection of over 750 paintings. The gallery has
          expanded beyond its physical location through online sales via their
          website, bringing valuable foreign currency into Ethiopia while
          providing sustainable livelihoods for local artists.
        </p>

        <p>
          Makush actively promotes a modern, dynamic image of Ethiopia through
          international exhibitions across Europe and America. Their upcoming
          exhibition in Dublin (October 12-15, 2019) at Smock Alley Theatre,
          featuring Sir Bob Geldof as the opening speaker, exemplifies their
          global outreach. Through partnerships with organizations like
          Ethiopiaid Ireland, Makush plans to expand exhibitions to the UK,
          Canada, and Australia, building bridges between Ethiopia and the
          international community.
        </p>

        <p>
          Beyond art sales, Makush serves as a cultural hub that strengthens
          Ethiopia&apos;s international relationships. The gallery maintains
          strong connections with 15,000 families worldwide who have adopted
          Ethiopian children, hosts diplomatic events at various embassies, and
          organizes networking dinners for expatriates and local businesses.
          With memberships in the Ethiopian Tour Operators Association and a
          robust digital presence across platforms like TripAdvisor and BBC,
          Makush continues to attract foreign visitors while supporting local
          businesses and generating foreign currency through diverse channels.
        </p>
      </div>
    </>
  )
}
