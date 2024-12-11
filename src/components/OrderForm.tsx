'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

type OrderItem = {
  name: string
  quantity: number
  specialInstructions: string
}

type OrderFormData = {
  customerName: string
  email: string
  phone: string
  deliveryAddress: string
  deliveryDate: string
  deliveryTime: string
  items: OrderItem[]
  specialRequests: string
}

const initialFormData: OrderFormData = {
  customerName: '',
  email: '',
  phone: '',
  deliveryAddress: '',
  deliveryDate: '',
  deliveryTime: '',
  items: [{ name: '', quantity: 1, specialInstructions: '' }],
  specialRequests: ''
}

const OrderForm = () => {
  const [formData, setFormData] = useState<OrderFormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleItemChange = (index: number, field: keyof OrderItem, value: string | number) => {
    const newItems = [...formData.items]
    newItems[index] = { ...newItems[index], [field]: value }
    setFormData(prev => ({ ...prev, items: newItems }))
  }

  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, { name: '', quantity: 1, specialInstructions: '' }]
    }))
  }

  const removeItem = (index: number) => {
    if (formData.items.length > 1) {
      setFormData(prev => ({
        ...prev,
        items: prev.items.filter((_, i) => i !== index)
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // TODO: Replace with actual order submission logic
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData(initialFormData)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Customer Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-greatVibes text-brand-pink">Customer Information</h3>
          
          <div>
            <label htmlFor="customerName" className="block text-brand-darkRed font-medium mb-1">
              Name*
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-brand-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-brand-darkRed font-medium mb-1">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-brand-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-brand-darkRed font-medium mb-1">
              Phone*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-brand-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
            />
          </div>
        </div>

        {/* Delivery Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-greatVibes text-brand-pink">Delivery Information</h3>
          
          <div>
            <label htmlFor="deliveryAddress" className="block text-brand-darkRed font-medium mb-1">
              Delivery Address*
            </label>
            <input
              type="text"
              id="deliveryAddress"
              name="deliveryAddress"
              value={formData.deliveryAddress}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-brand-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
            />
          </div>

          <div>
            <label htmlFor="deliveryDate" className="block text-brand-darkRed font-medium mb-1">
              Delivery Date*
            </label>
            <input
              type="date"
              id="deliveryDate"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-2 border border-brand-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
            />
          </div>

          <div>
            <label htmlFor="deliveryTime" className="block text-brand-darkRed font-medium mb-1">
              Preferred Time*
            </label>
            <select
              id="deliveryTime"
              name="deliveryTime"
              value={formData.deliveryTime}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-brand-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
            >
              <option value="">Select a time</option>
              <option value="morning">Morning (9AM - 12PM)</option>
              <option value="afternoon">Afternoon (12PM - 3PM)</option>
              <option value="evening">Evening (3PM - 6PM)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="space-y-4">
        <h3 className="text-xl font-greatVibes text-brand-pink">Order Items</h3>
        
        {formData.items.map((item, index) => (
          <motion.div
            key={index}
            className="grid md:grid-cols-3 gap-4 p-4 border border-brand-purple/30 rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <label className="block text-brand-darkRed font-medium mb-1">
                Item Name*
              </label>
              <input
                type="text"
                value={item.name}
                onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                required
                className="w-full px-4 py-2 border border-brand-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
              />
            </div>

            <div>
              <label className="block text-brand-darkRed font-medium mb-1">
                Quantity*
              </label>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
                required
                className="w-full px-4 py-2 border border-brand-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
              />
            </div>

            <div className="relative">
              <label className="block text-brand-darkRed font-medium mb-1">
                Special Instructions
              </label>
              <input
                type="text"
                value={item.specialInstructions}
                onChange={(e) => handleItemChange(index, 'specialInstructions', e.target.value)}
                className="w-full px-4 py-2 border border-brand-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
              />
              {formData.items.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="absolute -right-2 -top-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  ×
                </button>
              )}
            </div>
          </motion.div>
        ))}

        <button
          type="button"
          onClick={addItem}
          className="w-full py-2 border-2 border-dashed border-brand-purple/30 rounded-lg text-brand-darkRed hover:border-brand-pink/50 transition-colors"
        >
          + Add Another Item
        </button>
      </div>

      {/* Special Requests */}
      <div>
        <label htmlFor="specialRequests" className="block text-brand-darkRed font-medium mb-1">
          Special Requests or Notes
        </label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-brand-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/50 resize-none"
          placeholder="Any additional information about your order..."
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        className={`w-full btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      >
        {isSubmitting ? 'Submitting Order...' : 'Place Order'}
      </motion.button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-600 text-center font-medium"
        >
          Thank you for your order! We'll contact you soon to confirm the details.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-600 text-center font-medium"
        >
          There was an error submitting your order. Please try again.
        </motion.div>
      )}
    </motion.form>
  )
}

export default OrderForm
