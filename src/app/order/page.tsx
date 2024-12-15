'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import OrderForm from '@/components/OrderForm'
import { motion } from 'framer-motion'

export default function OrderPage() {
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
            Place Your Order
          </h1>
          
          <p className="text-lg text-brand-darkRed/80 mb-8">
            Please fill out the form below to place your order. We'll contact you to confirm details and pricing.
          </p>

          <OrderForm />

          {/* Pickup Location Info */}
          <div className="mt-12 text-center text-brand-darkRed/70 text-sm">
            <p className="mb-2">Orders are available for pickup at:</p>
            <p className="font-medium">33540 Warren Road, Westland, Michigan 48185</p>
            <p className="mt-4">Made in a home kitchen that has not been inspected by the Michigan Dept of Agriculture & Rural Development</p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}