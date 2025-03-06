import { PreferencesForm } from "@/components/preferences/preferences-form"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PreferencesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h1 className="text-center text-3xl font-bold mb-2">Travel Preferences</h1>
            <p className="text-center text-gray-600 mb-8">
              Tell us about your travel style and preferences to get personalized recommendations
            </p>
            <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-sm">
              <PreferencesForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 