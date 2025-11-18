'use client';

import Image from 'next/image';
import { Package, Calendar, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Subscription() {
  const features = [
    {
      icon: Package,
      title: 'Ships Free Australia Wide',
      description: 'Free shipping on all coffee subscriptions.',
    },
    {
      icon: Calendar,
      title: 'Your Schedule',
      description: 'Choose delivery frequency that works for you.',
    },
    {
      icon: RefreshCw,
      title: 'Flexible Subscriptions',
      description: 'Pause, skip, or cancel anytime with no fees.',
    },
  ];

  return (
    <section id="subscriptions" className="py-24 px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-[700px] overflow-hidden relative"
        >
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=700&fit=crop"
            alt="Coffee subscription"
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
          className="py-20 px-12 lg:px-24"
        >
          <h2
            className="font-bold tracking-tight mb-6"
            style={{ fontSize: '45.6px', lineHeight: '1.2' }}
          >
            Never Run Out of Coffee
          </h2>
          <p
            className="mb-10 leading-relaxed text-[#6b6967]"
            style={{ fontSize: '19.2px', lineHeight: '1.6' }}
          >
            Subscribe and save 15% on every order. Get fresh coffee delivered to your door on your
            schedule. Pause, skip, or cancel anytime.
          </p>

          {/* Features */}
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
            className="bg-[#030302] text-white px-5 py-2.5 uppercase font-semibold transition-all hover:bg-[#e1b384] hover:text-[#030302]"
            style={{ fontSize: '16.8px', letterSpacing: '1px', borderRadius: '3px' }}
          >
            Start Your Subscription
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
