import React from 'react';
import Link from 'next/link';
import { Cake } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-pink-400">
          <Cake size={32} />
        </Link>
        <div className="flex space-x-6">
          <Link href="/" className="font-medium text-white">Home</Link>
          <Link href="/menu" className="text-purple-300 hover:text-white">Menu</Link>
          <Link href="/order" className="text-purple-300 hover:text-white">Custom Orders</Link>
          <Link href="/gallery" className="text-purple-300 hover:text-white">Gallery</Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/about" className="text-purple-300 hover:text-white">About</Link>
        <Link href="/reviews" className="text-purple-300 hover:text-white">Reviews</Link>
        <Link href="/contact" className="text-purple-300 hover:text-white">Contact</Link>
        <Link 
          href="/order" 
          className="bg-pink-400 text-white px-4 py-2 rounded-lg font-medium hover:bg-pink-500"
        >
          Order Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;