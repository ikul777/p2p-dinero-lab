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
import ScrollProgress from '../components/ScrollProgress';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-primary focus:text-primary-foreground focus:shadow-lg"
      >
        Перейти до основного вмісту
      </a>
      <ScrollProgress />
      <main id="main-content">
        <Hero />
        <ProfitCalculator />
        <Problems />
        <Solution />
        <DineroLabContent />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;

