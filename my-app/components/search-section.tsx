"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Search } from "lucide-react"
import { cn } from "@/lib/utils"

export default function SearchSection() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="py-12 px-4 md:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Find Your Perfect Trip</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <Label htmlFor="destination">Destination</Label>
              <Input id="destination" placeholder="Where do you want to go?" className="w-full" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="trip-type">Trip Type</Label>
              <Select>
                <SelectTrigger id="trip-type" className="w-full">
                  <SelectValue placeholder="Select trip type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beach">Beach</SelectItem>
                  <SelectItem value="mountain">Mountain</SelectItem>
                  <SelectItem value="city">City</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Departure Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2 flex items-end">
              <Button className="w-full bg-primary hover:bg-primary/90 h-10">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            <Button variant="outline" size="sm" className="rounded-full">
              Popular: Bali
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Paris
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Tokyo
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              New York
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Santorini
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

