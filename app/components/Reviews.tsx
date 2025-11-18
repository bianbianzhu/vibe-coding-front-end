'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Reviews() {
  const reviews = [
    {
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&h=400&fit=crop',
      text: '"The best coffee I\'ve ever had. The Candy Mountain blend is absolutely incredible. Rich, smooth, and perfectly balanced."',
      reviewer: 'Sarah M.',
      source: 'Google Review',
      bgColor: 'bg-[#fef8f0]',
    },
    {
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop',
      text: '"Subscription service is fantastic. Always arrives fresh, and the customer service team is incredibly helpful and responsive."',
      reviewer: 'James T.',
      source: 'Trustpilot Review',
      bgColor: 'bg-white',
    },
    {
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop',
      text: '"Exceptional quality and the packaging is beautiful. Makes a perfect gift for coffee lovers. Highly recommend the Ethiopian Yirgacheffe!"',
      reviewer: 'Emma K.',
      source: 'Product Review',
      bgColor: 'bg-white',
    },
    {
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop',
      text: '"Fast shipping, amazing flavor profiles, and ethical sourcing. What more could you ask for? This is now my go-to coffee roaster."',
      reviewer: 'Michael R.',
      source: 'Facebook Review',
      bgColor: 'bg-[#fef8f0]',
    },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {reviews.map((review, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]"
        >
          <div className="relative w-full h-full min-h-[400px]">
            <Image
              src={review.image}
              alt="Review"
              fill
              className="object-cover"
            />
          </div>
          <div className={`${review.bgColor} p-14 flex flex-col justify-center`}>
            <div className="text-[#e1b384] mb-5" style={{ fontSize: '19.2px' }}>
              ★★★★★
            </div>
            <p className="mb-8 leading-relaxed" style={{ fontSize: '19.2px', lineHeight: '1.6' }}>
              {review.text}
            </p>
            <div className="font-semibold mb-1.5" style={{ fontSize: '16.8px' }}>
              {review.reviewer}
            </div>
            <div className="text-[#6b6967]" style={{ fontSize: '14.4px' }}>
              {review.source}
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
