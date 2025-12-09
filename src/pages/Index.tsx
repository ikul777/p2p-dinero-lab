import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ProfitCalculator from '../components/ProfitCalculator';
import Problems from '../components/Problems';
import Solution from '../components/Solution';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';

const Index = () => {
  useEffect(() => {
    // Initialize reveal animations when component mounts
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-animation');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on initial load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Hero />
      <About />
      <ProfitCalculator />
      <Problems />
      <Solution />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
