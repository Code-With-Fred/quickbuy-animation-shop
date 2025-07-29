import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import CartSidebar from '../components/CartSidebar';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      <Hero />
      <ProductGrid />
      <Footer />
      <CartSidebar />
    </motion.div>
  );
};

export default Index;
