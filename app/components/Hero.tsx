import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600&h=900&fit=crop"
        alt="Coffee beans"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div
        className="relative z-10 text-center text-white px-5"
        style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
      >
        <h1
          className="font-bold capitalize tracking-tight mb-2.5"
          style={{ fontSize: '63.6px', lineHeight: '1.1' }}
        >
          Premium Australian Coffee
        </h1>
        <p className="opacity-95" style={{ fontSize: '19.2px', letterSpacing: '2px' }}>
          ROASTED FRESH, DELIVERED TO YOUR DOOR
        </p>
      </div>
    </section>
  );
}
