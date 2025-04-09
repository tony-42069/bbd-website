'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Mail, Clock, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-darkRed text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10">
                <Image 
                  src="/logo.png" 
                  alt="Donika's Home Baked Goods" 
                  width={40} 
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-greatVibes text-2xl">Donika&apos;s</span>
            </Link>
            <p className="text-white/80 mb-4">
              Bringing joy to your special moments with handcrafted artisanal baked goods since 1984.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="text-white hover:text-brand-pink transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="text-white hover:text-brand-pink transition-colors" />
              </a>
              <a href="mailto:contact@donikasbakery.com" aria-label="Email">
                <Mail className="text-white hover:text-brand-pink transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-white/80 hover:text-brand-pink transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/order" className="text-white/80 hover:text-brand-pink transition-colors">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/80 hover:text-brand-pink transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-brand-pink transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-white/80 hover:text-brand-pink transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-brand-pink transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-brand-pink flex-shrink-0 mt-1" />
                <span className="text-white/80">123 Bakery Lane, Michigan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-brand-pink flex-shrink-0" />
                <span className="text-white/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-brand-pink flex-shrink-0" />
                <span className="text-white/80">contact@donikasbakery.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <Clock size={20} className="text-brand-pink flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Monday - Friday</p>
                  <p className="text-white/80">9:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={20} className="text-brand-pink flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Saturday</p>
                  <p className="text-white/80">8:00 AM - 4:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={20} className="text-brand-pink flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Sunday</p>
                  <p className="text-white/80">Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/60">
          <p>&copy; {currentYear} Donika's Home Baked Goods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 