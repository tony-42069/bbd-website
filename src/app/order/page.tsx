'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import OrderForm from '@/components/OrderForm'

export default function OrderPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-greatVibes text-brand-darkRed mb-4">
            Place Your Order
          </h1>
          <p className="text-lg text-brand-darkRed/80 max-w-2xl mx-auto">
            We're excited to bake something special for you! Please fill out the form below
            with your order details, and we'll get back to you within 24 hours to confirm
            your order and discuss any special requirements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <OrderForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-brand-darkRed/80"
        >
          <p className="text-sm">
            * For custom cake orders, please place your order at least 1 week in advance.
            For other items, we require at least 48 hours notice.
          </p>
          <p className="text-sm mt-2">
            Need help? Contact us at{' '}
            <a
              href="tel:+1234567890"
              className="text-brand-pink hover:text-brand-darkRed transition-colors"
            >
              (123) 456-7890
            </a>
          </p>
        </motion.div>
      </div>
    </main>
  )
}
