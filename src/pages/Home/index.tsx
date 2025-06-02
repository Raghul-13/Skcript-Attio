import HeroSection from "./components/01-HeroSection";
import BuiltForScaleSection from "./components/10-BuiltSection";
import CompaniesSection from "./components/11-FinalSection";
import BasepointDashboard from "./components/02-TabsSection";
import LogoShowcase from "./components/03-LogoSection";
import TestimonialSection from "./components/04_TestimonialSection";
import FeatureSections from "./components/05-FeatureSection";
import DataModelSection from "./components/06-DataModelSection";
import ScaleUpTabs from "./components/07-SecondTabsSection";
import TestimonialsSection from "./components/08-SecondTestimonialSection";
import DataEnrichmentSection from "./components/09-DataEnrichSection";
import AnimatedSection from "../../components/ui/Animation";

export default function Homepage() {
  return (
    <>
      <HeroSection />
      
      <AnimatedSection>
        <BasepointDashboard />
      </AnimatedSection>
      
      <AnimatedSection>
        <LogoShowcase />
      </AnimatedSection>
      
      <AnimatedSection>
        <TestimonialSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <FeatureSections />
      </AnimatedSection>
      
      <AnimatedSection>
        <DataModelSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <ScaleUpTabs />
      </AnimatedSection>
      
      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <DataEnrichmentSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <BuiltForScaleSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <CompaniesSection />
      </AnimatedSection>
      
    </>
  );
}