import { Coffee, User, Search, ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#030302] text-white sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-10 h-[84px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <Coffee className="w-12 h-12" strokeWidth={1.5} />
          <div className="leading-tight" style={{ fontSize: '16.8px', letterSpacing: '0.5px' }}>
            <div className="font-semibold">WHITE HORSE</div>
            <div className="font-normal text-sm opacity-90">COFFEE</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-9" style={{ fontSize: '16.8px' }}>
          <a href="#shop" className="hover:opacity-70 transition-opacity uppercase">
            Shop
          </a>
          <a href="#subscriptions" className="hover:opacity-70 transition-opacity uppercase">
            Subscriptions
          </a>
          <a href="#wholesale" className="hover:opacity-70 transition-opacity uppercase">
            Wholesale
          </a>
          <a href="#booking" className="hover:opacity-70 transition-opacity uppercase">
            Workshops
          </a>
          <a href="#about" className="hover:opacity-70 transition-opacity uppercase">
            About
          </a>
        </nav>

        {/* Icons */}
        <div className="flex gap-5">
          <a href="#account" className="hover:opacity-70 transition-opacity">
            <User className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a href="#search" className="hover:opacity-70 transition-opacity">
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a href="#cart" className="hover:opacity-70 transition-opacity">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </header>
  );
}
