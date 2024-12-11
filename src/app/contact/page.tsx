'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-greatVibes text-brand-darkRed mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-brand-darkRed/80 mb-8">
              Have a question about our baked goods or want to place a special order?
              We'd love to hear from you!
            </p>

            <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
              <div>
                <h2 className="text-xl font-greatVibes text-brand-pink mb-2">
                  Business Hours
                </h2>
                <ul className="space-y-2 text-brand-darkRed/80">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 10:00 AM - 4:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-greatVibes text-brand-pink mb-2">
                  Contact Info
                </h2>
                <ul className="space-y-2 text-brand-darkRed/80">
                  <li>
                    <a 
                      href="tel:+1234567890" 
                      className="hover:text-brand-pink transition-colors"
                    >
                      (123) 456-7890
                    </a>
                  </li>
                  <li>
                    <a 
                      href="mailto:info@bakedbydonika.com"
                      className="hover:text-brand-pink transition-colors"
                    >
                      info@bakedbydonika.com
                    </a>
                  </li>
                  <li>123 Baker Street</li>
                  <li>Sweet Town, ST 12345</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-greatVibes text-brand-pink mb-2">
                  Follow Us
                </h2>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="text-brand-darkRed hover:text-brand-pink transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="text-brand-darkRed hover:text-brand-pink transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
