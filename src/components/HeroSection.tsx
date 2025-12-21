import { ArrowDown, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sharvi-cyan/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/10 rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">
            Enterprise Digital Platform
          </span>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-foreground">Extend SAP.</span>
          <br />
          <span className="text-gradient">Transform Business.</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
          SAP-integrated web and AI platforms that modernize operations without disturbing core systems. 
          <span className="text-foreground font-medium"> SAP remains your backbone. Sharvi becomes your digital nervous system.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#summary"
            className="group px-8 py-4 bg-gradient-accent text-primary-foreground font-semibold rounded-xl shadow-button hover:shadow-glow transition-all duration-300 flex items-center gap-2"
          >
            Explore Our Approach
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass text-foreground font-semibold rounded-xl hover:bg-secondary transition-all duration-300"
          >
            Start a Pilot
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          {[
            { label: 'ERP-First', desc: 'Architecture' },
            { label: 'Governance', desc: 'Driven' },
            { label: 'License', desc: 'Optimized' },
            { label: 'AI', desc: 'Enabled' },
          ].map((item, index) => (
            <div key={index} className="p-4 glass rounded-xl text-center">
              <div className="text-primary font-heading font-bold text-lg">{item.label}</div>
              <div className="text-muted-foreground text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
