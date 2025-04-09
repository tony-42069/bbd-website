'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-darkRed py-3 shadow-lg' : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-10 h-10">
                <Image 
                  src="/logo.png" 
                  alt="Donika's Home Baked Goods" 
                  width={40} 
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className={`font-greatVibes text-2xl ${isScrolled ? 'text-white' : 'text-brand-pink'}`}>
                Donika&apos;s
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className={`font-medium hover:text-brand-pink transition-colors ${isScrolled ? 'text-white' : 'text-white'}`}>
                Home
              </Link>
              <Link href="/menu" className={`hover:text-brand-pink transition-colors ${isScrolled ? 'text-white/90' : 'text-white/90'}`}>
                Menu
              </Link>
              <Link href="/order" className={`hover:text-brand-pink transition-colors ${isScrolled ? 'text-white/90' : 'text-white/90'}`}>
                Custom Orders
              </Link>
              <Link href="/gallery" className={`hover:text-brand-pink transition-colors ${isScrolled ? 'text-white/90' : 'text-white/90'}`}>
                Gallery
              </Link>
              <Link href="/about" className={`hover:text-brand-pink transition-colors ${isScrolled ? 'text-white/90' : 'text-white/90'}`}>
                About
              </Link>
              <Link href="/reviews" className={`hover:text-brand-pink transition-colors ${isScrolled ? 'text-white/90' : 'text-white/90'}`}>
                Reviews
              </Link>
              <Link href="/contact" className={`hover:text-brand-pink transition-colors ${isScrolled ? 'text-white/90' : 'text-white/90'}`}>
                Contact
              </Link>
            </div>

            {/* Order Now Button */}
            <div className="hidden md:block">
              <Link 
                href="/order" 
                className="bg-brand-pink hover:bg-pink-500 text-white px-5 py-2 rounded-full font-medium transition-colors"
              >
                Order Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-brand-darkRed z-50 flex flex-col md:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="flex justify-between items-center p-5 border-b border-white/10">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="relative w-10 h-10">
                  <Image 
                    src="/logo.png" 
                    alt="Donika's Home Baked Goods" 
                    width={40} 
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="font-greatVibes text-2xl text-white">Donika&apos;s</span>
              </Link>
              <button 
                className="text-white"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <X size={28} />
              </button>
            </div>
            
            <div className="flex flex-col p-5 space-y-6">
              <Link 
                href="/" 
                className="text-white text-lg py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/menu" 
                className="text-white/90 text-lg py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                href="/order" 
                className="text-white/90 text-lg py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Custom Orders
              </Link>
              <Link 
                href="/gallery" 
                className="text-white/90 text-lg py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/about" 
                className="text-white/90 text-lg py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/reviews" 
                className="text-white/90 text-lg py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link 
                href="/contact" 
                className="text-white/90 text-lg py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <Link 
                href="/order" 
                className="bg-brand-pink hover:bg-pink-500 text-white px-5 py-3 rounded-full font-medium transition-colors text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;