import { ChatInterface } from "@/components/chat/chat-interface"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ChatPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-3xl font-bold mb-2">AI Travel Assistant</h1>
            <p className="text-gray-600 text-center">
              Chat with our AI assistant to plan your perfect trip. Ask about destinations, get travel tips, or let us help you create a custom itinerary.
            </p>
          </div>
          <ChatInterface />
        </div>
      </main>
      <Footer />
    </div>
  )
} 