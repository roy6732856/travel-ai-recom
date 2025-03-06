import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  location: string
  avatar: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "https://picsum.photos/100/100?random=1",
    quote:
      "AI Travel helped me plan the perfect vacation to Japan. The AI recommendations were spot on and saved me hours of research!",
  },
  {
    id: "2",
    name: "Michael Chen",
    location: "Toronto, Canada",
    avatar: "https://picsum.photos/100/100?random=2",
    quote:
      "I was skeptical about using AI for travel planning, but I was blown away by how personalized the recommendations were.",
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    avatar: "https://picsum.photos/100/100?random=3",
    quote:
      "The AI suggested destinations I never would have considered, and my trip to Thailand was the adventure of a lifetime!",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from travelers who have used our AI-powered platform to discover their perfect destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <Quote className="text-primary h-8 w-8 mb-4" />
                <p className="text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

