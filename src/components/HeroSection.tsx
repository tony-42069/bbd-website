'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ImageFallback from './ImageFallback'
import AnimatedBackground from './AnimatedBackground'
import { useEffect, useState } from 'react'

const fadeInUpVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}

const buttonHoverVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
}

const sparkleAnimation = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
}

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background instead of image */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-darkRed via-brand-darkRed to-brand-pink/40" />
      
      {/* Animated background elements - only on client side */}
      {isMounted && <AnimatedBackground count={10} className="z-[1]" />}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero content */}
          <motion.div 
            className="text-center lg:text-left lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block">
              <motion.h1 
                className="font-greatVibes text-6xl md:text-7xl lg:text-8xl mb-4 text-white drop-shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                Donika&apos;s
              </motion.h1>
              
              {/* Add sparkle animations */}
              <motion.div 
                className="absolute -top-4 -right-4 text-brand-pink"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-2 -left-6 text-brand-pink"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                </svg>
              </motion.div>
            </div>
            
            <motion.h2 
              className="text-white text-2xl md:text-4xl mb-6 font-light drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Home Baked Goods
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-white max-w-2xl mx-auto lg:mx-0 mb-8 drop-shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Delicious homemade treats baked with love and care, 
              bringing joy to every occasion for over 40 years.
            </motion.p>
            
            <motion.div 
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/order" className="btn-primary relative overflow-hidden group">
                  <span className="relative z-10">Order Now</span>
                  <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/menu" className="btn-secondary relative overflow-hidden group">
                  <span className="relative z-10">View Menu</span>
                  <span className="absolute inset-0 bg-brand-pink/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Featured content box instead of image */}
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-brand-pink/60 to-brand-purple/60 p-8 flex flex-col justify-center items-center text-white"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
              >
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-greatVibes mb-4">Artisanal Quality</h3>
                  <p className="mb-4">Handcrafted with premium ingredients and 40 years of expertise</p>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
