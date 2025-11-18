'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProductCategories() {
  const categories = [
    {
      name: 'Single Origin',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
    },
    {
      name: 'Espresso Blends',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop',
    },
    {
      name: 'Cold Brew',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop',
    },
    {
      name: 'Decaf',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="shop" className="py-20 px-12 max-w-full">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {categories.map((category) => (
          <motion.a
            key={category.name}
            variants={item}
            href="#"
            className="text-center group transition-transform hover:-translate-y-1.5"
          >
            <div className="relative w-full aspect-square mb-4">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold uppercase tracking-wide" style={{ fontSize: '22.8px' }}>
              {category.name}
            </h3>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
