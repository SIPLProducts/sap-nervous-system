import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SummarySection from '@/components/SummarySection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import ArchitectureSection from '@/components/ArchitectureSection';
import UseCasesSection from '@/components/UseCasesSection';
import DifferentiationSection from '@/components/DifferentiationSection';
import ComplianceSection from '@/components/ComplianceSection';
import ROISection from '@/components/ROISection';
import LicenseOptimizationSection from '@/components/LicenseOptimizationSection';
import BusinessImpactSection from '@/components/BusinessImpactSection';
import PilotSection from '@/components/PilotSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ScrollReveal>
        <SummarySection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <ProblemSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <SolutionSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <ArchitectureSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <UseCasesSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <DifferentiationSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <ComplianceSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <ROISection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <LicenseOptimizationSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <BusinessImpactSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <PilotSection />
      </ScrollReveal>
      <Footer />
    </main>
  );
};

export default Index;

