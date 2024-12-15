'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <Image 
              src="/logo.png"
              alt="Donika's Home Baked Goods Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
            <h1 className="text-4xl md:text-5xl font-greatVibes text-brand-darkRed">
              Our Story
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-brand-darkRed/80">
                Welcome to Donika&apos;s Home Baked Goods, where every treat is crafted with love
                and the finest ingredients. Our journey began with a simple passion for
                bringing joy through delicious, homemade baked goods.
              </p>
              <p className="text-lg text-brand-darkRed/80">
                What sets us apart is our commitment to using only the highest quality
                ingredients and traditional baking methods. Each recipe has been perfected
                over years of dedication to the craft of baking.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-greatVibes text-brand-pink mb-4">Our Values</h2>
                <ul className="space-y-3 text-brand-darkRed/80">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-pink rounded-full mr-3"></span>
                    Quality Ingredients
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-pink rounded-full mr-3"></span>
                    Made with Love
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-pink rounded-full mr-3"></span>
                    Customer Satisfaction
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-pink rounded-full mr-3"></span>
                    Traditional Methods
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/Background_2.0.png"
                alt="Bakery Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-brand-purple/20" />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}