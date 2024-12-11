'use client'

import { motion } from 'framer-motion'
import { MenuItem } from '@/data/menu'
import Image from 'next/image'

type MenuGridProps = {
  items: MenuItem[]
}

const MenuGrid = ({ items }: MenuGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {item.image && (
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-brand-darkRed">{item.name}</h3>
              <span className="text-lg font-medium text-brand-pink">{item.price}</span>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default MenuGrid
