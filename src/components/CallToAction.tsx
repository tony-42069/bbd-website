'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const CallToAction = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background instead of image */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-darkRed via-brand-pink/60 to-brand-purple/30" />
      
      {/* Animated elements - only rendered client-side */}
      {isMounted && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(5)].map((_, i) => {
            // Deterministic values for animations to avoid hydration mismatch
            const top = 20 + (i * 12);
            const left = 20 + (i * 12);
            const size = 60 + (i * 5);
            
            return (
              <motion.div
                key={i}
                className="absolute text-white/10"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.4, 0],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 1.5,
                  repeatType: "reverse"
                }}
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                }}
              >
                <div className="relative" style={{ width: `${size}px`, height: `${size}px` }}>
                  <Image
                    src="/logo.png"
                    alt="Donika's logo"
                    width={size}
                    height={size}
                    className="object-contain opacity-20"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="p-8 md:p-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-greatVibes text-white mb-6">
                Ready to Place Your Order?
              </h2>
              <p className="text-xl text-white/90 mb-10">
                Whether you're looking for a custom cake for a special occasion or want to try our signature baked goods, we're here to satisfy your sweet cravings.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/order" 
                    className="w-full sm:w-auto bg-brand-pink hover:bg-pink-500 text-white font-bold py-4 px-8 rounded-full inline-flex items-center justify-center gap-2 group"
                  >
                    <span>Place Custom Order</span>
                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/contact" 
                    className="w-full sm:w-auto bg-white hover:bg-gray-100 text-brand-darkRed font-bold py-4 px-8 rounded-full inline-flex items-center justify-center"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-10 text-white/80 text-sm flex justify-center items-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="inline-block p-1 bg-white/20 rounded-full">
                  <div className="relative w-4 h-4">
                    <Image 
                      src="/logo.png" 
                      alt="Donika's icon" 
                      width={16} 
                      height={16}
                      className="object-contain"
                    />
                  </div>
                </span>
                <span>Orders require 48 hours advance notice for preparation</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction 