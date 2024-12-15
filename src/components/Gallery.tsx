'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

type GalleryCategory = {
  id: string
  name: string
}

type GalleryItem = {
  id: string
  title: string
  category: string
  imagePath: string
}

const categories: GalleryCategory[] = [
  { id: 'all', name: 'All' },
  { id: 'cakes', name: 'Cakes' },
  { id: 'cookies', name: 'Cookies' },
  { id: 'pastries', name: 'Pastries' },
  { id: 'custom', name: 'Custom Orders' }
]

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Birthday Cake',
    category: 'cakes',
    imagePath: '/api/placeholder/400/400'
  },
  {
    id: '2',
    title: 'Cookie Set',
    category: 'cookies',
    imagePath: '/api/placeholder/400/400'
  },
  // We'll add more items when we have the actual images
]

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <div className="space-y-8">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category.id
                ? 'bg-brand-pink text-white'
                : 'bg-white text-brand-darkRed hover:bg-brand-purple/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode='wait'>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-darkRed/0 group-hover:bg-brand-darkRed/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold text-center px-4">
                    {item.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <motion.p 
          className="text-center text-brand-darkRed/60 py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No items found in this category.
        </motion.p>
      )}
    </div>
  )
}

export default Gallery