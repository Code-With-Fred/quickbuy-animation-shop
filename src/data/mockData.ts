import { Product, User, Order } from '../types';
import headphonesImg from '../assets/headphones.jpg';
import smartphoneImg from '../assets/smartphone.jpg';
import laptopImg from '../assets/laptop.jpg';
import smartwatchImg from '../assets/smartwatch.jpg';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: headphonesImg,
    category: 'Audio',
    rating: 4.8,
    reviewCount: 1247,
    description: 'Experience premium sound quality with our latest wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort design.',
    inStock: true,
    tags: ['wireless', 'noise-cancelling', 'premium']
  },
  {
    id: '2',
    name: 'Latest Smartphone Pro',
    price: 899.99,
    originalPrice: 999.99,
    image: smartphoneImg,
    category: 'Mobile',
    rating: 4.9,
    reviewCount: 2156,
    description: 'The most advanced smartphone with triple camera system, 5G connectivity, and all-day battery life. Perfect for photography and productivity.',
    inStock: true,
    tags: ['5G', 'triple-camera', 'premium']
  },
  {
    id: '3',
    name: 'Ultra Performance Laptop',
    price: 1299.99,
    originalPrice: 1499.99,
    image: laptopImg,
    category: 'Computers',
    rating: 4.7,
    reviewCount: 892,
    description: 'High-performance laptop with latest processor, 16GB RAM, and 512GB SSD. Perfect for gaming, creative work, and professional tasks.',
    inStock: true,
    tags: ['gaming', 'professional', 'high-performance']
  },
  {
    id: '4',
    name: 'Smart Fitness Watch',
    price: 249.99,
    image: smartwatchImg,
    category: 'Wearables',
    rating: 4.6,
    reviewCount: 756,
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and 7-day battery life.',
    inStock: true,
    tags: ['fitness', 'GPS', 'health']
  },
  // Additional products
  {
    id: '5',
    name: 'Wireless Gaming Mouse',
    price: 79.99,
    originalPrice: 99.99,
    image: smartphoneImg, // Using existing image for now
    category: 'Gaming',
    rating: 4.5,
    reviewCount: 423,
    description: 'Precision gaming mouse with customizable RGB lighting and ultra-responsive sensors.',
    inStock: true,
    tags: ['gaming', 'RGB', 'wireless']
  },
  {
    id: '6',
    name: 'Professional Camera',
    price: 1899.99,
    image: laptopImg, // Using existing image for now
    category: 'Photography',
    rating: 4.9,
    reviewCount: 234,
    description: 'Professional DSLR camera with 24MP sensor and 4K video recording capabilities.',
    inStock: false,
    tags: ['professional', '4K', 'photography']
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@quickbuy.com',
    name: 'Admin User',
    role: 'admin'
  },
  {
    id: '2',
    email: 'john@example.com',
    name: 'John Doe',
    role: 'customer'
  }
];

export const mockOrders: Order[] = [
  {
    id: 'order-1',
    userId: '2',
    items: [
      {
        product: mockProducts[0],
        quantity: 1
      },
      {
        product: mockProducts[3],
        quantity: 2
      }
    ],
    total: 799.97,
    status: 'delivered',
    createdAt: '2024-01-15T10:30:00Z',
    shippingAddress: {
      name: 'John Doe',
      address: '123 Main St',
      city: 'New York',
      zipCode: '10001',
      country: 'USA'
    }
  }
];

export const categories = [
  'All',
  'Audio',
  'Mobile',
  'Computers',
  'Wearables',
  'Gaming',
  'Photography'
];