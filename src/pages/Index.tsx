import Hero from '../components/Hero';
import ProfitCalculator from '../components/ProfitCalculator';
import Problems from '../components/Problems';
import Solution from '../components/Solution';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';
import SectionDivider from '../components/SectionDivider';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Hero />
      <SectionDivider />
      <ProfitCalculator />
      <SectionDivider />
      <Problems />
      <SectionDivider />
      <Solution />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <CTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
