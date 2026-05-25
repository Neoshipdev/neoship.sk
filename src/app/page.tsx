import { Hero } from '@/components/sections/Hero';
import { TrustPoints } from '@/components/sections/TrustPoints';
import { Stats } from '@/components/sections/Stats';
import { ServicesTabs } from '@/components/sections/ServicesTabs';
import { FunctionalitiesGrid } from '@/components/sections/FunctionalitiesGrid';
import { PlanComparison } from '@/components/sections/PlanComparison';
import { KnowHow } from '@/components/sections/KnowHow';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTABanner } from '@/components/sections/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustPoints />
      <Stats />
      <ServicesTabs />
      <FunctionalitiesGrid />
      <PlanComparison />
      <KnowHow />
      <Testimonials />
      <CTABanner />
    </>
  );
}
