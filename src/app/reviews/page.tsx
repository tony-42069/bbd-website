'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-greatVibes text-brand-darkRed mb-8">
            Customer Reviews
          </h1>
          
          <p className="text-lg text-brand-darkRed/80 mb-8">
            See what our customers are saying about our baked goods
          </p>

          {/* Reviews grid will go here */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Review cards will go here */}
          </div>
        </motion.div>
      </div>
    </main>
  )
}