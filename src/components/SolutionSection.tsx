import { CheckCircle2, ArrowRight } from 'lucide-react';

const principles = [
  'SAP-aware digital platforms',
  'Approved API interactions only',
  'Security and auditability maintained',
  'License compliance ensured',
  'No SAP core modifications',
];

const SolutionSection = () => {
  return (
    <section id="solution" className="section-padding bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--gradient-glow)' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Philosophy
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Sharvi Solution
          </h2>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 shadow-glow">
          <div className="text-center mb-12">
            <p className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Do not replace SAP.{' '}
              <span className="text-gradient">Extend SAP.</span>
            </p>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We build SAP-aware digital platforms that interact with SAP only through approved APIs, 
              while maintaining security, auditability, and license compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{principle}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="#architecture"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
            >
              See How It Works
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
