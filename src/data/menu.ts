export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  popular?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  description: string;
};

export const categories: MenuCategory[] = [
  {
    id: 'cakes',
    name: 'Cakes',
    description: 'Delicious custom cakes for any occasion'
  },
  {
    id: 'cookies',
    name: 'Cookies',
    description: 'Fresh-baked cookies in various flavors'
  },
  {
    id: 'pastries',
    name: 'Pastries',
    description: 'Flaky and sweet pastries made from scratch'
  },
  {
    id: 'breads',
    name: 'Breads',
    description: 'Freshly baked artisan breads'
  }
];

export const menuItems: MenuItem[] = [
  {
    id: 'chocolate-cake',
    name: 'Chocolate Celebration Cake',
    description: 'Rich chocolate cake with smooth chocolate buttercream frosting',
    price: '$35.00',
    category: 'cakes',
    popular: true
  },
  {
    id: 'vanilla-cake',
    name: 'Classic Vanilla Bean Cake',
    description: 'Light and fluffy vanilla cake with vanilla buttercream',
    price: '$32.00',
    category: 'cakes'
  },
  // Add more items as needed
];

export const getMenuItemsByCategory = (categoryId: string) => {
  return menuItems.filter(item => item.category === categoryId);
};

export const getPopularItems = () => {
  return menuItems.filter(item => item.popular);
};
