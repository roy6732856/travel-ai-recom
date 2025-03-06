import { AuthForm } from "@/components/auth/auth-form"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AuthPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h1 className="text-center text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-center text-gray-600 mb-8">
              Sign in to your account or create a new one
            </p>
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm">
              <AuthForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 