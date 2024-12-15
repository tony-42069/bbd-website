export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  popular?: boolean;
  allergens?: string[];
  netWeight?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  description: string;
};

export const categories: MenuCategory[] = [
  {
    id: 'breads',
    name: 'Fresh Breads',
    description: 'Homemade breads baked fresh with premium ingredients'
  },
  {
    id: 'savory',
    name: 'Savory Pies',
    description: 'Delicious savory pies perfect for any meal'
  },
  {
    id: 'sweets',
    name: 'Sweet Treats',
    description: 'Indulgent desserts and sweet specialties'
  }
];

export const menuItems: MenuItem[] = [
  // Breads
  {
    id: 'zucchini-bread-nuts',
    name: 'Zucchini Bread with Nuts',
    description: 'Made with fresh zucchini, walnuts, and warm spices',
    price: '$10.00',
    category: 'breads',
    allergens: ['wheat', 'eggs', 'walnuts'],
    netWeight: '24 oz'
  },
  {
    id: 'zucchini-bread',
    name: 'Zucchini Bread (No Nuts)',
    description: 'Classic zucchini bread without nuts',
    price: '$10.00',
    category: 'breads',
    allergens: ['wheat', 'eggs'],
    netWeight: '24 oz'
  },
  {
    id: 'banana-bread',
    name: 'Banana Bread with Nuts',
    description: 'Moist banana bread with walnuts',
    price: '$10.00',
    category: 'breads',
    allergens: ['wheat', 'eggs', 'walnuts'],
    netWeight: '24 oz',
    popular: true
  },
  {
    id: 'lemon-pound-cake',
    name: 'Lemon Pound Cake',
    description: 'Light and citrusy pound cake',
    price: '$10.00',
    category: 'breads',
    allergens: ['wheat', 'eggs'],
    netWeight: '24 oz'
  },
  {
    id: 'plain-pound-cake',
    name: 'Plain Pound Cake',
    description: 'Classic vanilla pound cake',
    price: '$10.00',
    category: 'breads',
    allergens: ['wheat', 'eggs'],
    netWeight: '24 oz'
  },
  
  // Savory Pies
  {
    id: 'spinach-pie',
    name: 'Spinach Pie',
    description: 'Flaky pastry filled with spinach and cheese',
    price: '$4.00',
    category: 'savory',
    allergens: ['wheat', 'eggs', 'milk', 'cheese'],
    netWeight: '7 oz',
    popular: true
  },
  {
    id: 'tomato-onion-pie',
    name: 'Tomato & Onion Pie',
    description: 'Savory pie with fresh tomatoes and onions',
    price: '$4.00',
    category: 'savory',
    allergens: ['wheat'],
    netWeight: '7 oz'
  },

  // Sweets
  {
    id: 'bumpy-cake',
    name: 'Bumpy Cake',
    description: 'Classic bumpy cake with buttercream',
    price: '$6.00',
    category: 'sweets',
    allergens: ['wheat', 'eggs', 'milk'],
    netWeight: '8 oz',
    popular: true
  },
  {
    id: 'cake-pops',
    name: 'Cake Pops',
    description: 'Bite-sized cake treats on a stick',
    price: '$2.00',
    category: 'sweets',
    allergens: ['wheat', 'eggs', 'milk'],
    netWeight: '2 oz'
  },
  {
    id: 'chocolate-chip-cookies',
    name: 'Chocolate Chip Cookies',
    description: 'Classic cookies with chocolate chips',
    price: '$2.00',
    category: 'sweets',
    allergens: ['wheat', 'milk', 'eggs'],
    netWeight: '3 oz',
    popular: true
  }
];

export const getMenuItemsByCategory = (categoryId: string) => {
  return menuItems.filter(item => item.category === categoryId);
};

export const getPopularItems = () => {
  return menuItems.filter(item => item.popular);
};