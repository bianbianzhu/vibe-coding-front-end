'use client';

import Image from 'next/image';
import { Truck, Award, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Wholesale() {
  const features = [
    {
      icon: Truck,
      title: 'Regular Deliveries',
      description: 'Scheduled deliveries to keep your business stocked.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Same exceptional quality as our retail offering.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Personal account manager for all your needs.',
    },
  ];

  return (
    <section id="wholesale" className="grid grid-cols-1 lg:grid-cols-2">
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-12 lg:px-24 flex flex-col justify-center"
      >
        <h2
          className="font-bold tracking-tight mb-6"
          style={{ fontSize: '45.6px', lineHeight: '1.2' }}
        >
          Wholesale Enquiries
        </h2>
        <p
          className="mb-10 leading-relaxed text-[#6b6967]"
          style={{ fontSize: '19.2px', lineHeight: '1.6' }}
        >
          We partner with cafes, restaurants, and businesses across Australia. Get access to our
          full range of premium coffees with dedicated account management and competitive pricing.
        </p>

        <div className="mb-10 space-y-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-5 items-start"
              >
                <Icon className="w-10 h-10 shrink-0 text-[#e1b384]" strokeWidth={1.5} />
                <div>
                  <h3
                    className="font-semibold uppercase mb-1.5"
                    style={{ fontSize: '19.2px' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[#6b6967]" style={{ fontSize: '16.8px' }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-[#030302] text-white px-5 py-2.5 uppercase font-semibold transition-all hover:bg-[#e1b384] hover:text-[#030302] w-fit"
          style={{ fontSize: '16.8px', letterSpacing: '1px', borderRadius: '3px' }}
        >
          Request Wholesale Info
        </motion.button>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="min-h-[600px] relative"
      >
        <Image
          src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&h=800&fit=crop"
          alt="Wholesale coffee"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
