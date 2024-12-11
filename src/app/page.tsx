import { Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      
      {/* Announcement Banner */}
      <div className="flex justify-center mt-8">
        <div className="bg-purple-900/50 rounded-full py-3 px-6 flex items-center space-x-4">
          <Heart className="text-pink-400" size={20} />
          <span>Now taking Valentine&apos;s Day special orders</span>
          <a href="/order" className="flex items-center text-white hover:text-pink-400">
            Reserve now →
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-20 flex justify-between items-center px-6">
        {/* Featured Product */}
        <div className="relative w-96">
          <div className="absolute top-0 left-0 w-full">
            {/* Stacked Cards */}
            <div className="bg-purple-900/30 rounded-lg p-6 transform rotate-6 translate-y-8">
              <div className="h-32"></div>
            </div>
            <div className="bg-purple-900/40 rounded-lg p-6 transform rotate-3 translate-y-4">
              <div className="h-32"></div>
            </div>
            <div className="bg-purple-900/50 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Heart className="text-pink-400" size={24} />
                  <span className="font-medium">Featured Item</span>
                </div>
                <p className="text-purple-100">Triple Chocolate Dream Cake with fresh berries and edible flowers</p>
                <div className="mt-4">
                  <div className="bg-purple-950/80 rounded-lg p-3 text-purple-300 flex items-center justify-between">
                    <span>Starting at $45</span>
                    <Heart className="text-pink-400" size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="max-w-xl">
          <div className="mb-4 text-sm">
            Handcrafted by
            <span className="text-pink-400 ml-2 font-medium">Donika&apos;s Home Baked Goods</span>
          </div>
          <h1 className="text-6xl font-light mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Artisanal desserts made with love
          </h1>
          <p className="text-xl text-purple-200">
            Creating memorable moments with handcrafted cakes, pastries, and sweet treats.
          </p>
        </div>
      </div>
    </main>
  );
}