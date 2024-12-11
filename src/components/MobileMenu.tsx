'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-50"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <div className="p-4">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-brand-darkRed hover:text-brand-pink"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>

              <nav className="mt-8">
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/menu"
                      className="block py-2 text-brand-darkRed hover:text-brand-pink transition-colors"
                      onClick={onClose}
                    >
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="block py-2 text-brand-darkRed hover:text-brand-pink transition-colors"
                      onClick={onClose}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="block py-2 text-brand-darkRed hover:text-brand-pink transition-colors"
                      onClick={onClose}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="block py-2 text-brand-darkRed hover:text-brand-pink transition-colors"
                      onClick={onClose}
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="pt-4">
                    <Link
                      href="/order"
                      className="btn-primary w-full text-center"
                      onClick={onClose}
                    >
                      Order Now
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
