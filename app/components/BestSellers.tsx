'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BestSellers() {
  const products = [
    {
      name: 'White Knight Espresso Blend',
      price: 'From $19.00',
      image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=300&h=300&fit=crop',
      onSale: false,
    },
    {
      name: 'Ethiopian Yirgacheffe',
      price: 'From $24.00',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop',
      onSale: false,
    },
    {
      name: 'Candy Mountain Blend',
      price: 'From $22.00',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop',
      onSale: true,
    },
    {
      name: 'Colombian Supreme',
      price: 'From $21.00',
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=300&h=300&fit=crop',
      onSale: false,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#F7F9FA] py-20 px-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center font-bold uppercase tracking-tight mb-20"
        style={{ fontSize: '38.4px', letterSpacing: '1px' }}
      >
        Best Sellers
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {products.map((product) => (
          <motion.div
            key={product.name}
            variants={item}
            className="bg-white p-8 text-center transition-transform hover:-translate-y-1.5"
          >
            <div className="relative">
              {product.onSale && (
                <div className="absolute top-0 right-0 bg-[#f9dee5] text-[#af7b88] px-3 py-1 text-xs font-semibold uppercase z-10">
                  Sale
                </div>
              )}
              <div className="relative w-4/5 h-64 mx-auto mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="font-semibold uppercase mb-2" style={{ fontSize: '19.2px' }}>
              {product.name}
            </h3>
            <p className="text-[#6b6967]" style={{ fontSize: '16.8px' }}>
              {product.price}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
