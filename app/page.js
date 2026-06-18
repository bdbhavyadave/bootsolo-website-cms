import Hero from '../components/Hero';
import ProofBar from '../components/ProofBar';
import Problem from '../components/Problem';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Audience from '../components/Audience';
import Cases from '../components/Cases';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <Problem />
      <Services />
      <HowItWorks />
      <Audience />
      <Cases />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
