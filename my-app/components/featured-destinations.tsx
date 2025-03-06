import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

interface Destination {
  id: string
  name: string
  location: string
  image: string
  price: number
  rating: number
}

const destinations: Destination[] = [
  {
    id: "1",
    name: "Bali, Indonesia",
    location: "Southeast Asia",
    image: "https://picsum.photos/600/400?random=1",
    price: 1200,
    rating: 4.8,
  },
  {
    id: "2",
    name: "Santorini, Greece",
    location: "Mediterranean",
    image: "https://picsum.photos/600/400?random=2",
    price: 1800,
    rating: 4.9,
  },
  {
    id: "3",
    name: "Kyoto, Japan",
    location: "East Asia",
    image: "https://picsum.photos/600/400?random=3",
    price: 1500,
    rating: 4.7,
  },
  {
    id: "4",
    name: "Machu Picchu, Peru",
    location: "South America",
    image: "https://picsum.photos/600/400?random=4",
    price: 1350,
    rating: 4.6,
  },
]

export default function FeaturedDestinations() {
  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Destinations</h2>
            <p className="text-gray-600 max-w-2xl">
              Explore our handpicked destinations recommended by our AI based on trending locations and user preferences
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Destinations
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Link href={`/destinations/${destination.id}`} key={destination.id}>
              <Card className="overflow-hidden h-full transition-transform hover:scale-[1.02]">
                <div className="relative h-48">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin size={16} className="mr-1" />
                    {destination.location}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{destination.name}</h3>
                  <div className="flex justify-between items-center">
                    <div className="font-medium">
                      <span className="text-primary">${destination.price}</span>
                      <span className="text-gray-500 text-sm"> / person</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-1 text-sm">{destination.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

