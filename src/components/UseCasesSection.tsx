import { Truck, Scale, Package, CheckSquare, ClipboardCheck, Car, BarChart3, Users, ShoppingCart, Factory, Wrench, FileCheck, CreditCard, GitCompare, Blend, Cable } from 'lucide-react';

const useCases = [
  {
    icon: Users,
    title: 'Dealer Management',
    description: 'Complete dealer lifecycle management with order booking, claims, and performance tracking.',
  },
  {
    icon: ShoppingCart,
    title: 'Procurement Suite',
    description: 'End-to-end procurement from indent to payment with vendor management and contract tracking.',
  },
  {
    icon: Package,
    title: 'Sales Suite',
    description: 'Sales order management, pricing, dispatch planning, and customer credit management.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Management',
    description: 'Quality inspection, testing workflows, and NCR management integrated with SAP QM.',
  },
  {
    icon: Factory,
    title: 'Production Planning',
    description: 'Capacity planning, scheduling, and shop floor execution with real-time SAP sync.',
  },
  {
    icon: Wrench,
    title: 'Plant Maintenance',
    description: 'Equipment tracking, preventive maintenance, and breakdown management with SAP PM.',
  },
  {
    icon: Blend,
    title: 'Mixing Process',
    description: 'Recipe management, batch processing, and quality control for mixing operations.',
  },
  {
    icon: Cable,
    title: 'Cable Design',
    description: 'Cable specification, design calculations, and BOM generation integrated with SAP.',
  },
  {
    icon: FileCheck,
    title: 'PR & PO Approvals',
    description: 'Multi-level approval workflows for purchase requisitions and orders with mobile access.',
  },
  {
    icon: GitCompare,
    title: 'Comparative Statements',
    description: 'Vendor quotation comparison, analysis, and approval workflow automation.',
  },
  {
    icon: CreditCard,
    title: 'Credit Approvals',
    description: 'Customer credit limit approvals, risk assessment, and limit management workflows.',
  },
  {
    icon: Scale,
    title: 'Gate Entry & Weighbridge',
    description: 'Automated weighbridge integration with real-time SAP goods receipt posting.',
  },
  {
    icon: Truck,
    title: 'Logistics Tracking',
    description: 'Real-time shipment visibility with GPS integration and delivery confirmations.',
  },
  {
    icon: BarChart3,
    title: 'SAP Dashboards',
    description: 'Executive dashboards with real-time KPIs pulled directly from SAP.',
  },
];

const UseCasesSection = () => {
  return (
    <section id="usecases" className="section-padding bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-sharvi-cyan/5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Applications
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Use Cases
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven solutions across manufacturing, supply chain, and enterprise operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group p-6 glass rounded-2xl hover:bg-secondary/30 transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mb-5 group-hover:shadow-glow transition-all duration-300">
                <useCase.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
