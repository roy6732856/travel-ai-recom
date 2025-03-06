import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin } from "lucide-react"

// Sample data - In a real app, this would come from an API
const destinations = [
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    description: "Experience the perfect blend of tradition and modernity",
    imageUrl: "https://picsum.photos/800/600?random=1",
    rating: 4.8,
    reviews: 1250,
    category: "Popular Cities"
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    description: "Discover the city of love and its timeless attractions",
    imageUrl: "https://picsum.photos/800/600?random=2",
    rating: 4.7,
    reviews: 1480,
    category: "Popular Cities"
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    description: "Tropical paradise with rich culture and beautiful beaches",
    imageUrl: "https://picsum.photos/800/600?random=3",
    rating: 4.6,
    reviews: 980,
    category: "Beach Destinations"
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps",
    country: "Switzerland",
    description: "Majestic mountains and world-class skiing destinations",
    imageUrl: "https://picsum.photos/800/600?random=4",
    rating: 4.9,
    reviews: 850,
    category: "Mountains"
  },
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    description: "Stunning sunsets and iconic white-washed architecture",
    imageUrl: "https://picsum.photos/800/600?random=5",
    rating: 4.7,
    reviews: 1120,
    category: "Islands"
  },
  {
    id: "new-york",
    name: "New York",
    country: "United States",
    description: "The city that never sleeps, filled with endless possibilities",
    imageUrl: "https://picsum.photos/800/600?random=6",
    rating: 4.6,
    reviews: 2100,
    category: "Popular Cities"
  }
]

const categories = [
  "All Destinations",
  "Popular Cities",
  "Beach Destinations",
  "Mountains",
  "Islands",
  "Historical Sites"
]

export default function DestinationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <img
            src="https://picsum.photos/1920/1080?random=10"
            alt="Destinations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-bold text-white mb-4">Explore Amazing Destinations</h1>
                <p className="text-xl text-white/90 mb-8">
                  Discover your next adventure from our collection of handpicked destinations around the world
                </p>
                <div className="flex gap-4">
                  <Input
                    placeholder="Search destinations..."
                    className="bg-white/90 backdrop-blur-sm border-0"
                  />
                  <Button>
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All Destinations" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={destination.imageUrl}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary"
                  >
                    {destination.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">{destination.name}</h3>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{destination.country}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-primary">{destination.rating}</div>
                      <div className="text-sm text-gray-500">{destination.reviews} reviews</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <Button className="w-full">View Details</Button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Destinations
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 