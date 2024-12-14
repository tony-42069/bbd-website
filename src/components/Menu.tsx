// Menu.tsx

import React, { useState } from 'react';
import { Cake, Cookie, Coffee } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  allergens: string[];
  netWeight: string;
}

interface Category {
  id: 'breads' | 'savory' | 'sweets';
  name: string;
  icon: React.ElementType;
}

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'breads' | 'savory' | 'sweets'>('breads');
  
  const categories: Category[] = [
    { id: 'breads', name: 'Fresh Breads', icon: Cake },
    { id: 'savory', name: 'Savory Pies', icon: Coffee },
    { id: 'sweets', name: 'Sweet Treats', icon: Cookie }
  ];

  const menuItems: Record<'breads' | 'savory' | 'sweets', MenuItem[]> = {
    breads: [
      {
        name: 'Zucchini Bread with Nuts',
        description: 'Made with fresh zucchini, walnuts, and warm spices',
        price: '10.00',
        allergens: ['wheat', 'eggs', 'walnuts'],
        netWeight: '24 oz'
      },
      {
        name: 'Zucchini Bread (No Nuts)',
        description: 'Classic zucchini bread without nuts',
        price: '10.00',
        allergens: ['wheat', 'eggs'],
        netWeight: '24 oz'
      },
      {
        name: 'Banana Bread with Nuts',
        description: 'Moist banana bread with walnuts',
        price: '10.00',
        allergens: ['wheat', 'eggs', 'walnuts'],
        netWeight: '24 oz'
      },
      {
        name: 'Lemon Pound Cake',
        description: 'Light and citrusy pound cake',
        price: '10.00',
        allergens: ['wheat', 'eggs'],
        netWeight: '24 oz'
      },
      {
        name: 'Plain Pound Cake',
        description: 'Classic vanilla pound cake',
        price: '10.00',
        allergens: ['wheat', 'eggs'],
        netWeight: '24 oz'
      }
    ],
    savory: [
      {
        name: 'Spinach Pie',
        description: 'Flaky pastry filled with spinach and cheese',
        price: '4.00',
        allergens: ['wheat', 'eggs', 'milk', 'cheese'],
        netWeight: '7 oz'
      },
      {
        name: 'Tomato & Onion Pie',
        description: 'Savory pie with fresh tomatoes and onions',
        price: '4.00',
        allergens: ['wheat'],
        netWeight: '7 oz'
      }
    ],
    sweets: [
      {
        name: 'Bumpy Cake',
        description: 'Classic bumpy cake with buttercream',
        price: '6.00',
        allergens: ['wheat', 'eggs', 'milk'],
        netWeight: '8 oz'
      },
      {
        name: 'Cake Pops',
        description: 'Bite-sized cake treats on a stick',
        price: '2.00',
        allergens: ['wheat', 'eggs', 'milk'],
        netWeight: '2 oz'
      },
      {
        name: 'Chocolate Chip Cookies',
        description: 'Classic cookies with chocolate chips',
        price: '2.00',
        allergens: ['wheat', 'milk', 'eggs'],
        netWeight: '3 oz'
      }
    ]
  };

  return (
    <div className="bg-[#5d002c] text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#f078b1] to-[#d7b7ff]">
          Our Menu
        </h2>
        
        {/* Category Navigation */}
        <div className="flex justify-center mb-12 space-x-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
                ${activeCategory === category.id 
                  ? 'bg-[#f078b1] text-white' 
                  : 'text-[#fcebdb] hover:text-white'}`}
            >
              <category.icon size={20} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {menuItems[activeCategory].map((item, index) => (
            <div 
              key={index}
              className="bg-[#5d002c]/80 rounded-lg p-6 hover:bg-[#5d002c]/90 transition-all border border-[#d7b7ff]/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-medium mb-2 text-[#f078b1]">{item.name}</h3>
                    <div className="text-xl font-medium text-[#f078b1]">
                      ${item.price}
                    </div>
                  </div>
                  
                  <p className="text-[#fcebdb] mb-4">{item.description}</p>

                  {/* Allergens & Weight */}
                  <div className="text-sm text-[#d7b7ff] flex justify-between">
                    <div>
                      Contains: {item.allergens.join(', ')}
                    </div>
                    <div>
                      Net Wt: {item.netWeight}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center text-[#fcebdb] text-sm">
          <p>Made in a home kitchen that has not been inspected by the Michigan Dept of Agriculture & Rural Development</p>
          <p className="mt-2">33540 Warren Rd, Westland, MI 48185</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;