'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeInUpVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}

const buttonHoverVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
}

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-brand-cream">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/10 to-transparent" />
      
      <motion.div 
        className="text-center z-10 px-4"
        {...fadeInUpVariants}
      >
        <h1 className="font-greatVibes text-6xl md:text-8xl mb-6 gradient-text">
          Donika&apos;s
        </h1>
        <h2 className="text-brand-darkRed text-2xl md:text-4xl mb-8 font-light">
          Home Baked Goods
        </h2>
        <p className="text-lg md:text-xl text-brand-darkRed/80 max-w-2xl mx-auto mb-12">
          Delicious homemade treats baked with love and care, 
          bringing joy to every occasion.
        </p>
        <div className="flex gap-4 justify-center">
          <motion.div {...buttonHoverVariants}>
            <Link href="/order" className="btn-primary">
              Order Now
            </Link>
          </motion.div>
          <motion.div {...buttonHoverVariants}>
            <Link href="/menu" className="btn-secondary">
              View Menu
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
