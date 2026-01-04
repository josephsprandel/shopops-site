import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full">
      <Hero />
      <BentoGrid />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
