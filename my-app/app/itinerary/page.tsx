import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ItineraryCard } from "@/components/itinerary/itinerary-card"

// Sample data - In a real app, this would come from an API
const recommendedItineraries = [
  {
    title: "Tokyo Cultural Experience",
    description: "Immerse yourself in Japanese culture with this carefully curated Tokyo itinerary",
    duration: 7,
    budget: "$2,000 - $3,000",
    location: "Tokyo, Japan",
    groupSize: "2-4 people",
    activities: ["Temple Visits", "Tea Ceremony", "Sushi Workshop", "City Tour"],
    imageUrl: "https://picsum.photos/800/400?random=1"
  },
  {
    title: "Paris Romance Gateway",
    description: "Experience the city of love with this romantic Parisian adventure",
    duration: 5,
    budget: "$2,500 - $3,500",
    location: "Paris, France",
    groupSize: "2 people",
    activities: ["Eiffel Tower", "Wine Tasting", "River Cruise", "Art Museums"],
    imageUrl: "https://picsum.photos/800/400?random=2"
  },
  {
    title: "New York City Explorer",
    description: "Discover the best of NYC with this action-packed city itinerary",
    duration: 6,
    budget: "$3,000 - $4,000",
    location: "New York, USA",
    groupSize: "1-4 people",
    activities: ["Broadway Show", "Central Park", "Museums", "Food Tour"],
    imageUrl: "https://picsum.photos/800/400?random=3"
  }
]

export default function ItineraryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Recommended Itineraries</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Based on your preferences, we've curated these personalized travel itineraries just for you.
              Each itinerary is carefully designed to match your interests and travel style.
            </p>
          </div>

          {/* Filters - To be implemented */}
          <div className="mb-8">
            {/* Add filters here */}
          </div>

          {/* Itinerary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedItineraries.map((itinerary, index) => (
              <ItineraryCard key={index} {...itinerary} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90">
              Load More Itineraries
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 