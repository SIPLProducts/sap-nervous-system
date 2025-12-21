import { Users, Layers, Server, Database, ArrowDown, ArrowUp } from 'lucide-react';

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Technical Architecture
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A layered architecture that keeps SAP as the system of record while enabling modern digital experiences.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="space-y-6">
          {/* Layer 1: Users */}
          <div className="glass rounded-2xl p-6 border-2 border-primary/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">User Layer</h3>
                <p className="text-muted-foreground text-sm">Web & Mobile Applications</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                'Dealer Management',
                'Procurement Suite',
                'Sales Suite',
                'Quality Management',
                'Production Planning',
                'Plant Maintenance',
                'Mixing Process',
                'Cable Design'
              ].map((item) => (
                <div key={item} className="px-4 py-2 rounded-lg bg-secondary text-center text-sm text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-1 text-primary">
              <ArrowDown className="w-6 h-6" />
              <span className="text-xs text-muted-foreground">REST APIs</span>
              <ArrowUp className="w-6 h-6" />
            </div>
          </div>

          {/* Layer 2: Sharvi Platform */}
          <div className="glass rounded-2xl p-6 border-2 border-sharvi-cyan/30 shadow-glow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-sharvi-cyan flex items-center justify-center">
                <Layers className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">Sharvi Digital Platform</h3>
                <p className="text-muted-foreground text-sm">Middleware & Business Logic</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {['Workflows', 'Approvals', 'Dashboards', 'Security', 'AI Insights'].map((item) => (
                <div key={item} className="px-4 py-3 rounded-lg bg-primary/10 border border-primary/20 text-center text-sm text-primary font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-1 text-primary">
              <ArrowDown className="w-6 h-6" />
              <span className="text-xs text-muted-foreground">Secure APIs (RFC/BAPI/OData)</span>
              <ArrowUp className="w-6 h-6" />
            </div>
          </div>

          {/* Layer 3: SAP */}
          <div className="glass rounded-2xl p-6 border-2 border-orange-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">SAP Core</h3>
                <p className="text-muted-foreground text-sm">System of Record (ECC / S/4HANA)</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Master Data', 'Transactions', 'Financials', 'Inventory'].map((item) => (
                <div key={item} className="px-4 py-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-center text-sm text-orange-400">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg">
            Integration through <span className="text-primary font-semibold">secure APIs</span> keeps SAP untouched while enabling modern experiences
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
