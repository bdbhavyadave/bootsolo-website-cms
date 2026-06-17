import Hero from '../components/Hero';
import ProofBar from '../components/ProofBar';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Cases from '../components/Cases';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <Services />
      <HowItWorks />
      <Pricing />
      <Cases />
      <FAQ />
      <CTA />
    </>
  );
}
