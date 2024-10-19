import React from 'react'
import { Heart, MessageCircle, User, Search, Settings } from 'lucide-react'

export default function Component() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <img
              alt="Profile picture"
              className="w-full h-[60vh] object-cover"
              src="/placeholder.svg?height=600&width=400"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h2 className="text-white text-2xl font-bold">Sarah, 28</h2>
              <p className="text-gray-200">New York City</p>
            </div>
          </div>
          <div className="p-4 space-y-4">
            <div className="bg-gray-50 rounded-lg p-3 space-y-2">
              <p className="text-sm text-gray-500">Favorite travel destination</p>
              <p className="text-gray-700">Bali, Indonesia</p>
              <div className="flex justify-between items-center mt-2">
                <button className="flex items-center text-blue-500 hover:text-blue-600">
                  <Heart className="w-5 h-5 mr-1" />
                  Like
                </button>
                <button className="flex items-center text-blue-500 hover:text-blue-600">
                  <MessageCircle className="w-5 h-5 mr-1" />
                  Comment
                </button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 space-y-2">
              <p className="text-sm text-gray-500">What's your idea of a perfect date?</p>
              <p className="text-gray-700">A picnic in Central Park followed by a visit to the Met</p>
              <div className="flex justify-between items-center mt-2">
                <button className="flex items-center text-blue-500 hover:text-blue-600">
                  <Heart className="w-5 h-5 mr-1" />
                  Like
                </button>
                <button className="flex items-center text-blue-500 hover:text-blue-600">
                  <MessageCircle className="w-5 h-5 mr-1" />
                  Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <nav className="bg-white border-t border-gray-200">
        <div className="max-w-md mx-auto flex justify-around">
          <button className="p-4 text-gray-600 hover:text-blue-500">
            <Search className="w-6 h-6" />
          </button>
          <button className="p-4 text-gray-600 hover:text-blue-500">
            <Heart className="w-6 h-6" />
          </button>
          <button className="p-4 text-gray-600 hover:text-blue-500">
            <MessageCircle className="w-6 h-6" />
          </button>
          <button className="p-4 text-gray-600 hover:text-blue-500">
            <User className="w-6 h-6" />
          </button>
          <button className="p-4 text-gray-600 hover:text-blue-500">
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </div>
  )
}
