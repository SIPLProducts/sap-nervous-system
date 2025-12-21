import { Shield, FileCheck, RotateCcw, Lock } from 'lucide-react';

const complianceItems = [
  {
    icon: Lock,
    title: 'SAP Authorization Enforcement',
    description: 'All actions respect SAP authorization objects and user roles.',
  },
  {
    icon: FileCheck,
    title: 'Audit Trail Maintenance',
    description: 'Complete logging of all transactions for compliance and forensics.',
  },
  {
    icon: RotateCcw,
    title: 'Error Handling & Rollback',
    description: 'Robust error handling with transaction rollback capabilities.',
  },
  {
    icon: Shield,
    title: 'IT Governance',
    description: 'All solutions follow enterprise IT governance standards.',
  },
];

const ComplianceSection = () => {
  return (
    <section className="section-padding bg-gradient-hero relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-4">
              Risk & Compliance
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every Sharvi solution is built with security, compliance, and governance at its core. 
              We understand the stakes of enterprise IT.
            </p>
            
            <div className="space-y-4">
              {complianceItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-8 border border-green-500/20">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Audit-Ready Solutions
              </h3>
              <p className="text-muted-foreground mb-6">
                Our platforms maintain complete traceability and documentation, 
                ready for internal and external audits at any time.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-3 rounded-lg bg-secondary">
                  <div className="text-green-400 font-bold text-lg">100%</div>
                  <div className="text-muted-foreground">Transaction Logging</div>
                </div>
                <div className="p-3 rounded-lg bg-secondary">
                  <div className="text-green-400 font-bold text-lg">Zero</div>
                  <div className="text-muted-foreground">Core SAP Changes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
