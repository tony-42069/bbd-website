'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // TODO: Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="name" className="block text-brand-darkRed font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-brand-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-brand-darkRed font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-brand-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-brand-darkRed font-medium mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-brand-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
          placeholder="(123) 456-7890"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-brand-darkRed font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 border border-brand-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/50 resize-none"
          placeholder="How can we help you?"
        />
      </div>

      <motion.button
        type="submit"
        className={`w-full btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-600 text-center"
        >
          Thank you! We'll get back to you soon.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-600 text-center"
        >
          Oops! Something went wrong. Please try again.
        </motion.div>
      )}
    </motion.form>
  )
}

export default ContactForm
