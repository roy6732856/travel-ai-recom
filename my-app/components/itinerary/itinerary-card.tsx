"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, DollarSign, Users } from "lucide-react"

interface ItineraryCardProps {
  title: string
  description: string
  duration: number
  budget: string
  location: string
  groupSize: string
  activities: string[]
  imageUrl: string
}

export function ItineraryCard({
  title,
  description,
  duration,
  budget,
  location,
  groupSize,
  activities,
  imageUrl
}: ItineraryCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-2">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Badge variant="secondary" className="text-primary">
            Recommended
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{duration} days</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{budget}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{groupSize}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {activities.map((activity, index) => (
            <Badge key={index} variant="outline">
              {activity}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View Details</Button>
        <Button>Book Now</Button>
      </CardFooter>
    </Card>
  )
} 