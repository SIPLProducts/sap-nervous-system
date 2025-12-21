import { Rocket, Target, Clock, CheckCircle2, Shield } from 'lucide-react';

const pilotSteps = [
  { icon: Target, text: 'One process' },
  { icon: Target, text: 'One department' },
  { icon: Clock, text: '4-6 weeks' },
  { icon: CheckCircle2, text: 'Clear success metrics' },
  { icon: Shield, text: 'No SAP core risk' },
];

const PilotSection = () => {
  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--gradient-glow)' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Getting Started
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pilot-First Approach
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We recommend a controlled pilot to demonstrate value before broader rollout.
          </p>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 shadow-glow">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center">
              <Rocket className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Pilot Framework
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {pilotSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary border border-border"
              >
                <step.icon className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">{step.text}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-secondary/50 text-center">
              <div className="text-4xl font-heading font-bold text-primary mb-2">1</div>
              <h4 className="font-semibold text-foreground mb-2">Identify</h4>
              <p className="text-muted-foreground text-sm">Select one SAP-adjacent process for pilot</p>
            </div>
            <div className="p-6 rounded-xl bg-secondary/50 text-center">
              <div className="text-4xl font-heading font-bold text-primary mb-2">2</div>
              <h4 className="font-semibold text-foreground mb-2">Implement</h4>
              <p className="text-muted-foreground text-sm">Build and deploy in 4-6 weeks</p>
            </div>
            <div className="p-6 rounded-xl bg-secondary/50 text-center">
              <div className="text-4xl font-heading font-bold text-primary mb-2">3</div>
              <h4 className="font-semibold text-foreground mb-2">Validate</h4>
              <p className="text-muted-foreground text-sm">Measure success and plan expansion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotSection;
