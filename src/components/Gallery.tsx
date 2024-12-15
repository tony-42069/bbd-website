'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type GalleryItem = {
  id: string
  title: string
  category: string
  imagePath: string
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Sample Item',
    category: 'cakes',
    imagePath: '/api/placeholder/400/400' // We'll replace these with real images
  },
  // We'll add more items here
]

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryItems.map((item) => (
        <motion.div
          key={item.id}
          className="relative group"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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
              <span className="text-white text-lg font-semibold">{item.title}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Gallery