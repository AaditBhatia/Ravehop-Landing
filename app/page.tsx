"use client"

import { useState } from 'react'
import { Shield, Users, MapPin, Camera, Brain, Zap, Lock, Sparkles } from 'lucide-react'


export default function RaveHopLanding() {
  console.log("RaveHopLanding rendering")
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    console.log("handleSubmit triggered")
    e.preventDefault()
    console.log("After preventDefault")
    setIsSubmitting(true)

    try {
      console.log("Attempting to save email:", email)
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      console.log("Response status:", response.status)
      const responseData = await response.json()
      console.log("Response data:", responseData)

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`)
      }

      console.log("Email saved successfully")
      setEmail('')
      alert('Thanks for signing up! We\'ll notify you when RaveHop launches.')
    } catch (error) {
      console.error('Error saving email:', error)
      if (error instanceof Error) {
        alert(`There was an error signing up: ${error.message}`)
      } else {
        alert('There was an error signing up. Please try again later.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-sans">
      <header className="container mx-auto px-4 py-12">
        <h1 className="text-6xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">RaveHop</h1>
        <p className="text-2xl font-light text-gray-300">Your AI-Powered, Safety-First Night Out Companion</p>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-24 text-center">
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Redefining your most memorable events</h2>
          <p className="text-xl mb-12 text-gray-300">Join us in creating a safer, more enjoyable party experience powered by AI.</p>
          <div className="bg-gray-800 backdrop-blur-lg border border-gray-700 text-white max-w-md mx-auto p-8 rounded-xl shadow-2xl">
            <h3 className="text-3xl font-semibold mb-4">Sign Up for Early Access</h3>
            <p className="text-gray-300 mb-6">Be the first to experience RaveHop when we launch!</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                onClick={() => console.log("Button clicked")}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Get Notified'}
              </button>
            </form>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Why RaveHop?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Shield, title: "Prioritizing Your Safety", content: "82% of college students feel concerned about personal safety. RaveHop addresses this with innovative safety features, connecting you with trusted friends and community resources." },
              { icon: Users, title: "Community-Driven Experience", content: "Discover events, connect with friends, and enjoy your night out without the fear of judgment. RaveHop creates a supportive community for safe and fun experiences." },
              { icon: MapPin, title: "Smart Transportation", content: "Never worry about getting home safely. RaveHop integrates with ride-sharing services and helps you coordinate with friends, reducing the risk of drunk driving." },
              { icon: Camera, title: "Capture Memories Safely", content: "Get timely reminders to capture and save your night's best moments, all while maintaining your privacy and security." }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:bg-gray-750 transition-all duration-300 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <item.icon className="h-8 w-8 text-purple-400" />
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.content}</p>
              </div>
            ))}
          </div>
        </section>


        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">AI-Powered Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg border-none text-white p-6 rounded-lg">
              <h3 className="text-2xl mb-2 flex items-center gap-2">
                <Brain className="h-6 w-6" />
                Intelligent Event Recommendations
              </h3>
              <p>Our AI analyzes your preferences, friend group dynamics, and past experiences to suggest events you are most likely to enjoy safely.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border-none text-white p-6 rounded-lg">
              <h3 className="text-2xl mb-2 flex items-center gap-2">
                <Zap className="h-6 w-6" />
                Real-time Safety Alerts
              </h3>
              <p>AI-powered algorithms monitor various data points to detect potential safety risks and send proactive alerts to users and their designated safety contacts.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border-none text-white p-6 rounded-lg">
              <h3 className="text-2xl mb-2 flex items-center gap-2">
                <Lock className="h-6 w-6" />
                Advanced User Verification
              </h3>
              <p>Our AI-driven verification system ensures the authenticity of users and event hosts, creating a trusted community within the app.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border-none text-white p-6 rounded-lg">
              <h3 className="text-2xl mb-2 flex items-center gap-2">
                <Sparkles className="h-6 w-6" />
                Smart Night Planning
              </h3>
              <p>AI assists in planning your entire night out, from suggesting safe meeting points to optimizing transportation routes and scheduling check-ins with friends.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Join the AI-Powered RaveHop Revolution</h2>
          <p className="text-xl mb-8">Be part of the change in college nightlife. Sign up now to get early access and help shape the future of safe, enjoyable nights out enhanced by artificial intelligence.</p>
          <button 
            onClick={() => {
              const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
              emailInput?.focus();
            }}
            className="bg-pink-500 hover:bg-pink-600 text-white text-lg py-3 px-6 rounded-lg transition duration-300 ease-in-out"
          >
            Sign Up for Early Access
          </button>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-400 border-t border-gray-800">
        <p>&copy; 2024 RaveHop. All rights reserved.</p>
      </footer>
    </div>
  )
}
