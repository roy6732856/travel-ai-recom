"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function PreferencesForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [budget, setBudget] = useState([5000])

  const travelStyles = [
    "Relaxation",
    "Adventure",
    "Cultural",
    "Food & Wine",
    "Shopping",
    "Nature",
    "Historical",
    "Beach"
  ]

  const accommodationTypes = [
    "Luxury Hotel",
    "Boutique Hotel",
    "Resort",
    "Airbnb",
    "Hostel",
    "Camping"
  ]

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // TODO: Implement preferences saving logic
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* Budget Range */}
      <div className="space-y-4">
        <Label>Daily Budget (USD)</Label>
        <div className="space-y-3">
          <Slider
            value={budget}
            onValueChange={setBudget}
            min={0}
            max={10000}
            step={100}
            className="w-full"
          />
          <div className="text-sm text-gray-500">
            ${budget[0]}
          </div>
        </div>
      </div>

      {/* Trip Duration */}
      <div className="space-y-4">
        <Label htmlFor="duration">Preferred Trip Duration (Days)</Label>
        <Input
          id="duration"
          type="number"
          min={1}
          max={30}
          placeholder="7"
          disabled={isLoading}
        />
      </div>

      {/* Travel Style */}
      <div className="space-y-4">
        <Label>Travel Style</Label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {travelStyles.map((style) => (
            <Button
              key={style}
              type="button"
              variant="outline"
              className="justify-start"
            >
              {style}
            </Button>
          ))}
        </div>
      </div>

      {/* Accommodation Type */}
      <div className="space-y-4">
        <Label>Preferred Accommodation</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {accommodationTypes.map((type) => (
            <Button
              key={type}
              type="button"
              variant="outline"
              className="justify-start"
            >
              {type}
            </Button>
          ))}
        </div>
      </div>

      {/* Special Requirements */}
      <div className="space-y-4">
        <Label htmlFor="requirements">Special Requirements</Label>
        <textarea
          id="requirements"
          className="w-full min-h-[100px] p-3 rounded-md border border-gray-300"
          placeholder="Any dietary restrictions, accessibility needs, or other special requirements?"
          disabled={isLoading}
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading && (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        )}
        Save Preferences
      </Button>
    </form>
  )
} 