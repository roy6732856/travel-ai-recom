import Hero from "@/components/hero"
import SearchSection from "@/components/search-section"
import FeaturedDestinations from "@/components/featured-destinations"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SearchSection />
      <FeaturedDestinations />
      <Testimonials />
      <Footer />
    </div>
  )
}

