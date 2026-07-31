import Hero from '../components/Hero';
import ProofBar from '../components/ProofBar';
import ResultsSnapshot from '../components/ResultsSnapshot';
import AiEra from '../components/AiEra';
import WhyBootsolo from '../components/WhyBootsolo';
import Services from '../components/Services';
import Assessment from '../components/Assessment';
import RoiCalculator from '../components/RoiCalculator';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <ResultsSnapshot />
      <AiEra />
      <WhyBootsolo />
      <Services />
      <Assessment />
      <RoiCalculator />
      <Testimonials />
      <CTA />
    </>
  );
}
