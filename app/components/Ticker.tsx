'use client';

import { motion } from 'framer-motion';

export default function Ticker() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white py-4 overflow-hidden border-b border-[#f0f0f0]"
    >
      <div className="flex gap-12 ticker-animation whitespace-nowrap" style={{ fontSize: '16.8px' }}>
        <span className="uppercase font-semibold tracking-wide">Single Origin</span>
        <span className="text-[#6b6967]">•</span>
        <span className="uppercase font-semibold tracking-wide">Espresso Blends</span>
        <span className="text-[#6b6967]">•</span>
        <span className="uppercase font-semibold tracking-wide">Cold Brew</span>
        <span className="text-[#6b6967]">•</span>
        <span className="uppercase font-semibold tracking-wide">Decaf</span>
        <span className="text-[#6b6967]">•</span>
        <span className="uppercase font-semibold tracking-wide">Single Origin</span>
        <span className="text-[#6b6967]">•</span>
        <span className="uppercase font-semibold tracking-wide">Espresso Blends</span>
        <span className="text-[#6b6967]">•</span>
        <span className="uppercase font-semibold tracking-wide">Cold Brew</span>
        <span className="text-[#6b6967]">•</span>
        <span className="uppercase font-semibold tracking-wide">Decaf</span>
        <span className="text-[#6b6967]">•</span>
      </div>
    </motion.div>
  );
}
