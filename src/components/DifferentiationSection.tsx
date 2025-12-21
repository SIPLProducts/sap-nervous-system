import { Brain, Factory, Layers, CreditCard, Lightbulb } from 'lucide-react';

const differentiators = [
  {
    icon: Brain,
    title: 'SAP Functional Understanding',
    description: 'Deep expertise in SAP modules ensures seamless integration and proper data flow.',
  },
  {
    icon: Factory,
    title: 'Manufacturing Exposure',
    description: 'Years of experience in discrete and process manufacturing environments.',
  },
  {
    icon: Layers,
    title: 'ERP-First Architecture',
    description: 'Every solution designed with SAP as the source of truth from day one.',
  },
  {
    icon: CreditCard,
    title: 'License-Aware Design',
    description: 'Solutions optimized for SAP Digital Access to minimize license costs.',
  },
  {
    icon: Lightbulb,
    title: 'Product Mindset',
    description: 'Reusable, configurable platforms instead of one-off custom development.',
  },
];

const DifferentiationSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Sharvi
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Differentiation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What makes Sharvi the right partner for your SAP extension journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className={`relative ${index === 4 ? 'lg:col-start-2' : ''}`}
            >
              <div className="p-8 h-full glass rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
