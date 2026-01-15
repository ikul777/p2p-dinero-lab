import Hero from '../components/Hero';
import ProfitCalculator from '../components/ProfitCalculator';
import Problems from '../components/Problems';
import Solution from '../components/Solution';
import DineroLabContent from '../components/DineroLabContent';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Hero />
      <ProfitCalculator />
      <Problems />
      <Solution />
      <DineroLabContent />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
