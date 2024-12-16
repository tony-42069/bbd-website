'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Reviews from '@/components/Reviews'
import { motion } from 'framer-motion'

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-purple-950">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Customer Reviews
          </h1>
          
          <p className="text-lg text-purple-200 text-center mb-12">
            See what our customers are saying about our baked goods
          </p>

          <Reviews />
        </motion.div>
      </div>
    </main>
  )
}