"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <nav className={`${isHomePage ? "absolute" : "relative"} top-0 left-0 right-0 z-50 ${!isHomePage && "bg-primary shadow-md"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              AI Travel
            </Link>
            <div className="hidden md:flex items-center ml-10 space-x-8">
              <Link href="/destinations" className="text-white hover:text-gray-200">
                Destinations
              </Link>
              <Link href="/itinerary" className="text-white hover:text-gray-200">
                Itinerary
              </Link>
              <Link href="/chat" className="text-white hover:text-gray-200">
                AI Assistant
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/auth">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                Sign In
              </Button>
            </Link>
            <Link href="/preferences">
              <Button className="bg-white text-primary hover:bg-gray-100">
                Start Planning
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary/95 py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-white hover:text-white/80 py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/destinations"
              className="text-white hover:text-white/80 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link href="/itinerary" className="text-white hover:text-white/80 py-2" onClick={() => setIsMenuOpen(false)}>
              Itinerary
            </Link>
            <Link href="/chat" className="text-white hover:text-white/80 py-2" onClick={() => setIsMenuOpen(false)}>
              AI Assistant
            </Link>
            <Button className="bg-white text-primary hover:bg-white/90 w-full">Sign In</Button>
          </div>
        </div>
      )}
    </nav>
  )
}

