'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-2">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="min-h-[600px] relative"
      >
        <Image
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=800&fit=crop"
          alt="Coffee roasting"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#F7F9FA] py-20 px-12 lg:px-24 flex flex-col justify-center"
      >
        <h2
          className="font-bold tracking-tight mb-6"
          style={{ fontSize: '45.6px', lineHeight: '1.2' }}
        >
          Roasted with Care in Melbourne
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-5 leading-relaxed"
          style={{ fontSize: '19.2px', lineHeight: '1.6' }}
        >
          White Horse Coffee is a specialty coffee roaster based in Melbourne, Australia. We source
          the finest single-origin beans from around the world and roast them in small batches to
          bring out their unique flavors.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-5 leading-relaxed"
          style={{ fontSize: '19.2px', lineHeight: '1.6' }}
        >
          Our commitment to quality starts at the farm and continues through every step of the
          roasting process. We work directly with farmers to ensure sustainable practices and fair
          compensation.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="leading-relaxed"
          style={{ fontSize: '19.2px', lineHeight: '1.6' }}
        >
          Every bag of White Horse Coffee is roasted to order, ensuring maximum freshness when it
          arrives at your door.
        </motion.p>
      </motion.div>
    </section>
  );
}
