"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar } from "@/components/ui/avatar"
import { AvatarFallback } from "@/components/ui/avatar"
import { Send, Image, Mic, Calendar, MapPin, DollarSign } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: string
  suggestions?: string[]
  itinerary?: {
    destination: string
    duration: string
    budget: string
    activities: string[]
  }
}

const INITIAL_MESSAGE: Message = {
  id: "1",
  content: "Hello! I'm your AI Travel Assistant. I can help you with:\n1. Personalized Trip Planning\n2. Smart Destination Recommendations\n3. Real-time Travel Tips\n4. Budget Optimization\n5. Weather-aware Scheduling\n\nHow can I assist with your travel plans today?",
  role: "assistant",
  timestamp: new Date().toISOString(),
  suggestions: [
    "Plan a trip to Japan",
    "Find budget-friendly destinations",
    "Recommend family vacation spots",
    "Create a weekend getaway plan"
  ]
}

function formatTime(timestamp: string) {
  return new Date(timestamp).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  })
}

export function ChatInterface() {
  const [mounted, setMounted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    const adjustHeight = () => {
      if (chatContainerRef.current) {
        const headerHeight = 56 // 移動端較小的 header
        const footerHeight = 56 // 移動端較小的 footer
        const padding = window.innerWidth < 768 ? 16 : 48 // 移動端較小的 padding
        const windowHeight = window.innerHeight
        const chatHeight = windowHeight - headerHeight - footerHeight - padding
        chatContainerRef.current.style.height = `${chatHeight}px`
      }
    }

    adjustHeight()
    window.addEventListener('resize', adjustHeight)
    return () => window.removeEventListener('resize', adjustHeight)
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: "user",
      timestamp: new Date().toISOString()
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response with smart suggestions
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Based on your interests and current travel trends, I recommend considering Japan for your next trip. I can help you create a personalized itinerary that matches your preferences. Would you like me to:",
        role: "assistant",
        timestamp: new Date().toISOString(),
        suggestions: [
          "Generate a 7-day itinerary",
          "Show popular attractions",
          "Estimate travel costs",
          "Check best travel times"
        ],
        itinerary: {
          destination: "Tokyo, Japan",
          duration: "7 days",
          budget: "$2,000 - $3,000",
          activities: [
            "Visit Senso-ji Temple",
            "Explore Shibuya District",
            "Take a Sushi Making Class",
            "Day Trip to Mt. Fuji"
          ]
        }
      }
      setMessages(prev => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }

  function handleSuggestionClick(suggestion: string) {
    setInput(suggestion)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col h-[calc(100vh-112px)] md:h-auto" ref={chatContainerRef}>
      <ScrollArea 
        className="flex-1 px-2 md:px-4 py-2 md:py-6 space-y-4 md:space-y-6 border rounded-lg bg-white overflow-y-auto" 
        ref={scrollRef}
      >
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex items-start gap-1.5 md:gap-2 ${
              message.role === "assistant" ? "" : "flex-row-reverse"
            } ${
              index > 0 && messages[index - 1].role === message.role 
                ? "mt-1.5 md:mt-2" 
                : "mt-4 md:mt-6 first:mt-0"
            }`}
          >
            <Avatar 
              className={`shrink-0 w-6 h-6 md:w-8 md:h-8 ${
                message.role === "assistant" ? "bg-blue-500" : "bg-green-500"
              }`}
            >
              <AvatarFallback className="text-[10px] md:text-xs">
                {message.role === "assistant" ? "AI" : "Me"}
              </AvatarFallback>
            </Avatar>
            <div 
              className={`flex flex-col gap-1.5 md:gap-2 ${
                message.role === "user" 
                  ? "items-end max-w-[85%] md:max-w-[80%]" 
                  : "items-start max-w-[85%] md:max-w-[80%]"
              }`}
            >
              <div
                className={`relative px-2.5 md:px-3 py-1.5 rounded-2xl ${
                  message.role === "assistant"
                    ? "bg-gray-100 rounded-tl-sm"
                    : "bg-blue-500 text-white rounded-tr-sm"
                }`}
              >
                <div className="whitespace-pre-wrap text-[13px] md:text-sm leading-snug">{message.content}</div>
                <div className="text-[9px] md:text-[10px] mt-0.5 md:mt-1 opacity-70">
                  {formatTime(message.timestamp)}
                </div>
              </div>

              {message.suggestions && (
                <div className="flex flex-wrap gap-1 md:gap-1.5 mt-1">
                  {message.suggestions.map((suggestion, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover:bg-primary hover:text-white transition-colors py-0.5 md:py-1 text-[11px] md:text-xs"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </Badge>
                  ))}
                </div>
              )}

              {message.itinerary && (
                <div className="bg-gray-50 rounded-lg p-2 md:p-3 space-y-1.5 md:space-y-2 border shadow-sm w-full text-xs md:text-sm mt-1.5 md:mt-2">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
                    <span className="font-medium">{message.itinerary.destination}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-3 md:gap-x-4 gap-y-1 md:gap-y-1.5">
                    <div className="flex items-center gap-1 md:gap-1.5">
                      <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
                      <span>{message.itinerary.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 md:gap-1.5">
                      <DollarSign className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
                      <span>{message.itinerary.budget}</span>
                    </div>
                  </div>
                  <div className="space-y-0.5 md:space-y-1">
                    <div className="font-medium text-[11px] md:text-xs">Suggested Activities:</div>
                    <ul className="list-disc list-inside text-[11px] md:text-xs text-gray-600 space-y-0.5">
                      {message.itinerary.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-1 px-2 md:px-4 mt-3 md:mt-4">
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        )}
      </ScrollArea>
      <form onSubmit={handleSubmit} className="mt-2 md:mt-4 flex gap-1.5 md:gap-2 px-0.5 md:px-1">
        <div className="flex-1 flex gap-1 md:gap-1.5">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => {}}
            className="shrink-0 h-8 w-8 md:h-9 md:w-9"
          >
            <Image className="w-3 h-3 md:w-3.5 md:h-3.5" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setIsRecording(!isRecording)}
            className={`shrink-0 h-8 w-8 md:h-9 md:w-9 transition-colors ${
              isRecording ? "bg-red-100 border-red-500 text-red-500" : ""
            }`}
          >
            <Mic className="w-3 h-3 md:w-3.5 md:h-3.5" />
          </Button>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about travel..."
            disabled={isLoading}
            className="flex-1 h-8 md:h-9 text-xs md:text-sm min-w-0"
          />
        </div>
        <Button 
          type="submit" 
          disabled={isLoading || !input.trim()}
          className="px-2.5 md:px-3 h-8 md:h-9"
        >
          <Send className="w-3 h-3 md:w-3.5 md:h-3.5 md:mr-2" />
          <span className="hidden md:inline">Send</span>
        </Button>
      </form>
    </div>
  )
} 