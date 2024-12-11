'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import MenuGrid from '@/components/MenuGrid'
import { categories, menuItems, getMenuItemsByCategory } from '@/data/menu'
import { motion } from 'framer-motion'

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id)

  const filteredItems = getMenuItemsByCategory(selectedCategory)

  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-greatVibes text-brand-darkRed mb-8">Our Menu</h1>
        
        {/* Category Navigation */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-brand-pink text-white'
                  : 'bg-white text-brand-darkRed hover:bg-brand-purple/20'
              }`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Category Description */}
        <motion.p
          key={selectedCategory}
          className="text-lg text-brand-darkRed/80 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categories.find(cat => cat.id === selectedCategory)?.description}
        </motion.p>

        {/* Menu Items Grid */}
        <MenuGrid items={filteredItems} />
      </div>
    </main>
  )
}
