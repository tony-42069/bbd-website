'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getPopularItems } from '@/data/menu'
import { ChevronRight, Star } from 'lucide-react'

const FeaturedProducts = () => {
  const popularItems = getPopularItems()

  // Product colors based on category
  const getBgColor = (category: string) => {
    switch(category) {
      case 'breads':
        return 'bg-amber-200';
      case 'savory':
        return 'bg-emerald-200';
      case 'sweets':
        return 'bg-pink-200';
      default:
        return 'bg-purple-200';
    }
  }

  return (
    <section className="py-20 bg-brand-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-pink/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-brand-purple/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-[2]">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span 
            className="text-brand-pink font-medium inline-block mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            CUSTOMER FAVORITES
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-greatVibes text-brand-darkRed mb-4">Our Specialties</h2>
          <p className="text-lg text-brand-darkRed/80 max-w-2xl mx-auto">
            Discover our most popular homemade treats, crafted with the finest ingredients and traditional recipes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-60 w-full overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className={`h-full w-full flex items-center justify-center ${getBgColor(item.category)}`}
                >
                  <div className="text-center p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    {item.allergens && (
                      <div className="flex flex-wrap gap-1 justify-center mb-3">
                        {item.allergens.map((allergen) => (
                          <span 
                            key={allergen} 
                            className="text-xs px-2 py-0.5 bg-white/50 rounded-full"
                          >
                            {allergen}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={14} className="fill-brand-darkRed text-brand-darkRed" />
                      ))}
                    </div>
                  </div>
                </motion.div>
                <div className="absolute top-3 right-3 bg-brand-pink text-white text-sm font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-darkRed mb-2">{item.name}</h3>
                <p className="text-brand-darkRed/70 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-brand-darkRed font-bold">{item.price}</span>
                  <Link 
                    href={`/menu#${item.id}`} 
                    className="flex items-center text-brand-pink hover:text-brand-darkRed transition-colors gap-1 group"
                  >
                    <span>View Details</span>
                    <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/menu" 
              className="btn-primary px-8 py-3 inline-flex items-center gap-2 group"
            >
              <span>Explore Full Menu</span>
              <ChevronRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProducts 