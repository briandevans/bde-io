import { useLenis } from '../hooks/useLenis';
import { useCustomCursor } from '../hooks/useCustomCursor';
import Navigation from '../sections/Navigation';
import Hero from '../sections/Hero';
import Thesis from '../sections/Thesis';
import Philosophy from '../sections/Philosophy';
import Filter from '../sections/Filter';
import Founder from '../sections/Founder';
import Connect from '../sections/Connect';
import Footer from '../sections/Footer';

export default function Home() {
  useLenis();
  useCustomCursor();

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Thesis />
        <Philosophy />
        <Filter />
        <Founder />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
