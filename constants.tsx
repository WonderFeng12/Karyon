
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'arabesque',
    name: 'Traditional Arabesque',
    description: 'Intricate golden motifs inspired by timeless Middle Eastern heritage.',
    image: '/image/category-traditional.jpg'
  },
  {
    id: 'embossed',
    name: 'Embossed Luxury',
    description: '3D textured surfaces providing unparalleled tactile comfort and depth.',
    image: '/image/category-embossed.jpg'
  },
  {
    id: 'minimalist',
    name: 'Modern Minimalist',
    description: 'Contemporary solid tones and subtle textures for the modern home.',
    image: '/image/category-minimalist.jpg'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Al-Zamil Embossed Floral',
    collection: 'Royal Collection',
    category: 'Traditional Arabesque',
    weight: '5.2 KG',
    ply: '2-Ply',
    size: 'King Size (220x240cm)',
    bestSeller: true,
    image: '/image/product-1.jpg',
    description: 'Luxurious dark blue raschel blanket with intricate floral embossing.'
  },
  {
    id: '2',
    name: 'Golden Oasis Heavyweight',
    collection: 'Sultanate Series',
    category: 'Embossed Luxury',
    weight: '4.8 KG',
    ply: '2-Ply',
    size: 'King Size (220x240cm)',
    image: '/image/product-2.jpg',
    description: 'Golden beige textured plush blanket for luxury bedrooms.'
  },
  {
    id: '3',
    name: 'Crimson Crest Embossed',
    collection: 'Damask Edition',
    category: 'Traditional Arabesque',
    weight: '6.0 KG',
    ply: '2-Ply',
    size: 'King Size (220x240cm)',
    bestSeller: true,
    image: '/image/product-3.jpg',
    description: 'Deep maroon raschel blanket with traditional middle eastern geometric patterns.'
  },
  {
    id: '4',
    name: 'Silver Mist Ultra-Soft',
    collection: 'Modern Minimal',
    category: 'Modern Minimalist',
    weight: '4.2 KG',
    ply: '1-Ply',
    size: 'Queen Size (200x220cm)',
    image: '/image/product-4.jpg',
    description: 'Silver grey high-pile raschel blanket close-up texture.'
  },
  {
    id: '5',
    name: 'Emerald Majestic King',
    collection: 'Legacy Series',
    category: 'Traditional Arabesque',
    weight: '5.5 KG',
    ply: '2-Ply',
    size: 'King Size (220x240cm)',
    image: '/image/product-5.jpg',
    description: 'Traditional emerald green blanket with gold thread accents.'
  },
  {
    id: '6',
    name: 'Cloud-9 Silk Touch',
    collection: 'Hotel Premium',
    category: 'Modern Minimalist',
    weight: '4.5 KG',
    ply: '2-Ply',
    size: 'Queen Size (200x220cm)',
    image: '/image/product-6.jpg',
    description: 'Pure white high-density raschel blanket for luxury hospitality.'
  }
];

export const COMPANY_CONTACT = {
  PHONE: '+86 153 1251 8637',
  EMAIL: 'sales@karyon-reton.com'
};

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_karyon-reton',
  TEMPLATES: {
    PARTNER_INQUIRY: 'template_xa8zix8', // 主页表单模板ID
    WHOLESALE_INQUIRY: 'template_r6fddfn' // 联系页面表单模板ID
  },
  PUBLIC_KEY: 'p2Vz-kKqZbr9c2M2m'
};
