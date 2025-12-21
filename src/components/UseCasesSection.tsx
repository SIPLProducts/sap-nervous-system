import { Truck, Scale, Package, CheckSquare, ClipboardCheck, Car, BarChart3 } from 'lucide-react';

const useCases = [
  {
    icon: Package,
    title: 'Vendor Portals',
    description: 'Self-service portals for vendors to manage POs, invoices, and deliveries without SAP access.',
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
    icon: CheckSquare,
    title: 'Approval Workflows',
    description: 'Multi-level approval workflows for POs, PRs, and payments with mobile access.',
  },
  {
    icon: ClipboardCheck,
    title: 'QA Systems',
    description: 'Quality inspection and testing workflows integrated with SAP QM module.',
  },
  {
    icon: Car,
    title: 'Asset & Fleet',
    description: 'Plant maintenance extensions for equipment tracking and fleet management.',
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
