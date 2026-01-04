import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <BentoGrid />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
