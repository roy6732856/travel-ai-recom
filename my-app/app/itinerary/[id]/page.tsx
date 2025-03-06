import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Clock, DollarSign, Users, Star } from "lucide-react"

// Sample data - In a real app, this would come from an API based on the ID
const itineraryDetail = {
  title: "Tokyo Cultural Experience",
  description: "Immerse yourself in Japanese culture with this carefully curated Tokyo itinerary",
  duration: 7,
  budget: "$2,000 - $3,000",
  location: "Tokyo, Japan",
  groupSize: "2-4 people",
  rating: 4.8,
  reviews: 124,
  activities: ["Temple Visits", "Tea Ceremony", "Sushi Workshop", "City Tour"],
  imageUrl: "https://picsum.photos/1200/600?random=1",
  dailySchedule: [
    {
      day: 1,
      title: "Arrival & City Introduction",
      activities: [
        {
          time: "10:00 AM",
          title: "Airport Arrival",
          description: "Arrive at Narita International Airport"
        },
        {
          time: "2:00 PM",
          title: "Hotel Check-in",
          description: "Check in to your hotel in Shinjuku"
        },
        {
          time: "4:00 PM",
          title: "Evening Walking Tour",
          description: "Guided walking tour of Shinjuku area"
        }
      ]
    },
    {
      day: 2,
      title: "Traditional Culture Day",
      activities: [
        {
          time: "9:00 AM",
          title: "Tea Ceremony",
          description: "Traditional tea ceremony experience"
        },
        {
          time: "2:00 PM",
          title: "Temple Tour",
          description: "Visit to Senso-ji Temple"
        }
      ]
    }
    // Additional days would be added here
  ],
  includes: [
    "Hotel Accommodation",
    "Airport Transfer",
    "Breakfast Daily",
    "Local Guide",
    "Entry Tickets",
    "Welcome Dinner"
  ],
  excludes: [
    "International Flights",
    "Travel Insurance",
    "Personal Expenses",
    "Additional Meals"
  ]
}

export default function ItineraryDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <img
            src={itineraryDetail.imageUrl}
            alt={itineraryDetail.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 className="text-4xl font-bold text-white mb-4">{itineraryDetail.title}</h1>
              <p className="text-xl text-white/90 max-w-2xl">{itineraryDetail.description}</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Quick Info */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium">{itineraryDetail.duration} Days</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-gray-500">Budget</p>
                  <p className="font-medium">{itineraryDetail.budget}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{itineraryDetail.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="text-sm text-gray-500">Rating</p>
                  <p className="font-medium">{itineraryDetail.rating} ({itineraryDetail.reviews} reviews)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Schedule */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="schedule">
                <TabsList>
                  <TabsTrigger value="schedule">Daily Schedule</TabsTrigger>
                  <TabsTrigger value="includes">What's Included</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="schedule" className="bg-white rounded-lg shadow-sm p-6">
                  {itineraryDetail.dailySchedule.map((day) => (
                    <div key={day.day} className="mb-8 last:mb-0">
                      <h3 className="text-xl font-semibold mb-4">Day {day.day}: {day.title}</h3>
                      <div className="space-y-4">
                        {day.activities.map((activity, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="w-24 text-sm text-gray-500">{activity.time}</div>
                            <div>
                              <h4 className="font-medium">{activity.title}</h4>
                              <p className="text-gray-600">{activity.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="includes" className="bg-white rounded-lg shadow-sm p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                      <ul className="space-y-2">
                        {itineraryDetail.includes.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">What's Not Included</h3>
                      <ul className="space-y-2">
                        {itineraryDetail.excludes.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="reviews" className="bg-white rounded-lg shadow-sm p-6">
                  <p className="text-gray-500">Reviews coming soon...</p>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column - Booking */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                <h3 className="text-xl font-semibold mb-4">Book This Trip</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Base Price</span>
                    <span className="font-medium">$2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & Fees</span>
                    <span className="font-medium">$200</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-semibold">$2,200</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full mb-4">Book Now</Button>
                <Button variant="outline" className="w-full">Contact Travel Agent</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 