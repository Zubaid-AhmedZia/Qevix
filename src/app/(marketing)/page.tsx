import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { ComparisonTable } from "@/components/marketing/comparison-table";
import { ControlPanel } from "@/components/marketing/control-panel";
import { CredibilityStrip } from "@/components/marketing/credibility-strip";
import { CTABand } from "@/components/marketing/cta-band";
import { FAQ } from "@/components/marketing/faq";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { IndustriesGrid } from "@/components/marketing/industries-grid";
import { LiveDemo } from "@/components/marketing/live-demo";
import { PricingGrid } from "@/components/marketing/pricing-grid";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CredibilityStrip />
      <CapabilityGrid />
      <LiveDemo />
      <ComparisonTable />
      <HowItWorks />
      <IndustriesGrid />
      <ControlPanel />
      <PricingGrid />
      <FAQ />
      <CTABand />
    </main>
  );
}
