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
import PilotSection from '@/components/PilotSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SummarySection />
      <ProblemSection />
      <SolutionSection />
      <ArchitectureSection />
      <UseCasesSection />
      <DifferentiationSection />
      <ComplianceSection />
      <ROISection />
      <PilotSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
