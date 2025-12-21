import { AlertTriangle, FileSpreadsheet, Wallet, Smartphone, FileWarning, Settings } from 'lucide-react';

const problems = [
  { icon: AlertTriangle, text: 'Heavy SAP screens for external users' },
  { icon: FileSpreadsheet, text: 'Reliance on Excel and emails' },
  { icon: Settings, text: 'Costly SAP customizations' },
  { icon: Wallet, text: 'Inflated license costs' },
  { icon: Smartphone, text: 'Limited mobility' },
  { icon: FileWarning, text: 'Constant audit pressure' },
];

const failures = [
  'Over-customizing SAP increases cost and upgrade risk',
  'Isolated web applications create governance and audit issues',
  'Manual workarounds lack traceability',
  'None balance speed, control, and compliance',
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enterprise Reality */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
              The Challenge
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Enterprise Reality
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              These challenges exist because SAP is not designed to handle every user workflow directly.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <span className="text-foreground font-medium text-sm">
                    {problem.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Current Approach Fails */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-4">
              The Gap
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Current Approaches Fail
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Traditional solutions create more problems than they solve.
            </p>

            <div className="space-y-4">
              {failures.map((failure, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl glass border-l-4 border-orange-500/50"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-400 font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-foreground leading-relaxed">
                    {failure}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
