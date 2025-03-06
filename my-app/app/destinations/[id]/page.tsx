import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Star, Sun, Cloud, Thermometer, Globe, Camera, Utensils, Hotel, Plane } from "lucide-react"

// Sample data - In a real app, this would come from an API based on the ID
const destinationDetail = {
  id: "tokyo",
  name: "Tokyo",
  country: "Japan",
  description: "Tokyo is a city where ultra-modern living meets traditional culture. Experience the bustling streets of Shibuya, the serenity of ancient temples, and the world's finest sushi all in one amazing city.",
  rating: 4.8,
  reviews: 1250,
  category: "Popular Cities",
  imageUrl: "https://picsum.photos/1920/1080?random=7",
  weather: {
    bestTime: "March to May and September to November",
    temperature: "Average 15-25°C (59-77°F)",
    climate: "Temperate with four distinct seasons"
  },
  highlights: [
    {
      title: "Sensō-ji Temple",
      description: "Ancient Buddhist temple in Asakusa",
      imageUrl: "https://picsum.photos/600/400?random=8"
    },
    {
      title: "Shibuya Crossing",
      description: "World's busiest pedestrian crossing",
      imageUrl: "https://picsum.photos/600/400?random=9"
    },
    {
      title: "Tokyo Skytree",
      description: "Tallest structure in Japan",
      imageUrl: "https://picsum.photos/600/400?random=10"
    }
  ],
  activities: [
    "Visit ancient temples and shrines",
    "Experience modern pop culture in Akihabara",
    "Try authentic Japanese cuisine",
    "Shop in trendy Harajuku",
    "Relax in traditional gardens",
    "Take a sushi-making class"
  ],
  travelInfo: {
    gettingThere: "Direct flights available from major international airports",
    accommodation: "Wide range from luxury hotels to traditional ryokans",
    transportation: "Efficient public transport system with trains and metros",
    language: "Japanese (English widely used in tourist areas)",
    currency: "Japanese Yen (JPY)",
    timeZone: "UTC+9"
  }
}

export default function DestinationDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[500px]">
          <img
            src={destinationDetail.imageUrl}
            alt={destinationDetail.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <Badge className="mb-4 bg-white/90 backdrop-blur-sm text-primary">
                  {destinationDetail.category}
                </Badge>
                <h1 className="text-5xl font-bold text-white mb-4">
                  {destinationDetail.name}, {destinationDetail.country}
                </h1>
                <p className="text-xl text-white/90">
                  {destinationDetail.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Quick Info */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-gray-500">Best Time to Visit</p>
                  <p className="font-medium">{destinationDetail.weather.bestTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Thermometer className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-gray-500">Temperature</p>
                  <p className="font-medium">{destinationDetail.weather.temperature}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="text-sm text-gray-500">Rating</p>
                  <p className="font-medium">{destinationDetail.rating} ({destinationDetail.reviews} reviews)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Cloud className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-gray-500">Climate</p>
                  <p className="font-medium">{destinationDetail.weather.climate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="highlights">
                <TabsList>
                  <TabsTrigger value="highlights">Highlights</TabsTrigger>
                  <TabsTrigger value="activities">Activities</TabsTrigger>
                  <TabsTrigger value="travel-info">Travel Info</TabsTrigger>
                </TabsList>
                
                <TabsContent value="highlights" className="bg-white rounded-lg shadow-sm p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {destinationDetail.highlights.map((highlight, index) => (
                      <div key={index} className="rounded-lg overflow-hidden">
                        <img
                          src={highlight.imageUrl}
                          alt={highlight.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold mb-2">{highlight.title}</h3>
                          <p className="text-gray-600">{highlight.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="activities" className="bg-white rounded-lg shadow-sm p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destinationDetail.activities.map((activity, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Camera className="w-5 h-5 text-primary" />
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="travel-info" className="bg-white rounded-lg shadow-sm p-6">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Plane className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">Getting There</h3>
                      </div>
                      <p className="text-gray-600">{destinationDetail.travelInfo.gettingThere}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Hotel className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">Accommodation</h3>
                      </div>
                      <p className="text-gray-600">{destinationDetail.travelInfo.accommodation}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">Language & Currency</h3>
                      </div>
                      <p className="text-gray-600">
                        Language: {destinationDetail.travelInfo.language}<br />
                        Currency: {destinationDetail.travelInfo.currency}
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column - Related Itineraries */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                <h3 className="text-xl font-semibold mb-4">Related Itineraries</h3>
                <div className="space-y-4">
                  <Button className="w-full">7 Days Cultural Experience</Button>
                  <Button variant="outline" className="w-full">5 Days City Explorer</Button>
                  <Button variant="outline" className="w-full">3 Days Quick Tour</Button>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-2">Need Help Planning?</h4>
                  <p className="text-gray-600 mb-4">Our travel experts can help you create the perfect itinerary.</p>
                  <Button variant="outline" className="w-full">Contact Travel Expert</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 