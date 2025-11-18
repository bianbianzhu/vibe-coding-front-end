'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const quickLinks = [
    'About Us',
    'Brewing Guides',
    'Subscription FAQ',
    'Contact Us',
    'Wholesale',
  ];

  const customerService = [
    'Shipping & Returns',
    'Privacy Policy',
    'Terms of Service',
    'Track Order',
    'Refund Policy',
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
    <footer className="bg-[#030302] text-white pt-20 px-10 pb-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Footer Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16"
        >
          {/* Newsletter */}
          <motion.div variants={item}>
            <h3
              className="font-semibold uppercase mb-4"
              style={{ fontSize: '22.8px', letterSpacing: '1px' }}
            >
              Newsletter
            </h3>
            <p className="mb-4 opacity-90" style={{ fontSize: '16.8px' }}>
              Subscribe for exclusive offers and coffee brewing tips.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-b border-white/30 px-3 py-3 text-white placeholder-white/60 outline-none focus:border-[#e1b384]"
                style={{ fontSize: '16.8px' }}
              />
              <button
                type="submit"
                className="bg-white text-[#030302] px-4 py-4 font-semibold uppercase hover:bg-[#e1b384] transition-colors"
                style={{ fontSize: '16.8px', letterSpacing: '1px' }}
              >
                Subscribe
              </button>
            </form>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item}>
            <h3
              className="font-semibold uppercase mb-4"
              style={{ fontSize: '22.8px', letterSpacing: '1px' }}
            >
              Quick Links
            </h3>
            <div className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                  style={{ fontSize: '16.8px' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Customer Service */}
          <motion.div variants={item}>
            <h3
              className="font-semibold uppercase mb-4"
              style={{ fontSize: '22.8px', letterSpacing: '1px' }}
            >
              Customer Service
            </h3>
            <div className="flex flex-col gap-4">
              {customerService.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                  style={{ fontSize: '16.8px' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="opacity-70" style={{ fontSize: '16.8px' }}>
            © 2024 White Horse Coffee. All rights reserved.
          </p>

          {/* Payment Icons */}
          <div className="flex gap-2.5">
            <div className="bg-white rounded-sm w-10 h-6 flex items-center justify-center text-[#030302] text-[10px] font-semibold">
              VISA
            </div>
            <div className="bg-white rounded-sm w-10 h-6 flex items-center justify-center text-[#030302] text-[10px] font-semibold">
              MC
            </div>
            <div className="bg-white rounded-sm w-10 h-6 flex items-center justify-center text-[#030302] text-[10px] font-semibold">
              AMEX
            </div>
            <div className="bg-white rounded-sm w-10 h-6 flex items-center justify-center text-[#030302] text-[10px] font-semibold">
              PAY
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
