import { Target, Shield, Zap, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Extend SAP Securely',
    description: 'Build web platforms that interact with SAP through approved APIs without core modifications.',
  },
  {
    icon: Shield,
    title: 'Reduce Customization Risk',
    description: 'Minimize SAP customizations that create upgrade complexity and audit exposure.',
  },
  {
    icon: Zap,
    title: 'Improve User Experience',
    description: 'Deliver intuitive web and mobile interfaces for external users and field operations.',
  },
  {
    icon: DollarSign,
    title: 'Optimize License Costs',
    description: 'Leverage SAP Digital Access to reduce named user license requirements significantly.',
  },
];

const SummarySection = () => {
  return (
    <section id="summary" className="section-padding bg-gradient-hero relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Executive Summary
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We Deliver
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most enterprises run their core business on SAP, yet struggle with speed, usability, 
            and integration outside SAP. Sharvi bridges this gap.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 glass rounded-2xl hover:bg-secondary/50 transition-all duration-300 shadow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 glass rounded-2xl text-center">
          <p className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
            "SAP remains the backbone.{' '}
            <span className="text-gradient">Sharvi becomes the digital nervous system.</span>"
          </p>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
