import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import ProductCategories from './components/ProductCategories';
import BestSellers from './components/BestSellers';
import Subscription from './components/Subscription';
import About from './components/About';
import Reviews from './components/Reviews';
import Wholesale from './components/Wholesale';
import BookingSection from './components/BookingSection';
import BookingDemo from './components/BookingDemo';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <Hero />
      <Ticker />
      <ProductCategories />
      <BestSellers />
      <Subscription />
      <About />
      <Reviews />
      <Wholesale />
      <BookingSection />
      <Footer />
      <BookingDemo />
    </main>
  );
}
