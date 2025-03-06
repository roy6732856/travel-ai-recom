import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "./navbar"

export default function Hero() {
  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Hero image"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 max-w-5xl mx-auto text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover the world with AI Travel</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Let our AI find your perfect destination based on your preferences and budget
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Plan My Trip
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

