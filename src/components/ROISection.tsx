import { TrendingDown, TrendingUp, Users, FileWarning } from 'lucide-react';

const roiItems = [
  {
    icon: Users,
    title: 'Reduced Named User Licenses',
    description: 'Leverage SAP Digital Access to minimize expensive named user licenses.',
    metric: '40-60%',
    metricLabel: 'License Savings',
    trend: 'down',
  },
  {
    icon: TrendingDown,
    title: 'Lower Customization Cost',
    description: 'External platforms reduce need for expensive ABAP customizations.',
    metric: '50%+',
    metricLabel: 'Development Cost Reduction',
    trend: 'down',
  },
  {
    icon: TrendingUp,
    title: 'Improved Efficiency',
    description: 'User-friendly interfaces reduce training time and errors.',
    metric: '3x',
    metricLabel: 'Productivity Gain',
    trend: 'up',
  },
  {
    icon: FileWarning,
    title: 'Reduced Audit Exposure',
    description: 'Proper governance reduces compliance risks and audit findings.',
    metric: '90%',
    metricLabel: 'Risk Reduction',
    trend: 'down',
  },
];

const ROISection = () => {
  return (
    <section id="roi" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Business Value
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            ROI & Cost Optimization
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tangible business value through smart architecture and license optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {roiItems.map((item, index) => (
            <div
              key={index}
              className="group p-8 glass rounded-2xl hover:shadow-glow transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="text-right">
                  <div className={`text-3xl font-heading font-bold ${item.trend === 'up' ? 'text-green-400' : 'text-primary'}`}>
                    {item.metric}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.metricLabel}</div>
                </div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 glass rounded-2xl border border-primary/20 text-center">
          <p className="text-lg text-muted-foreground mb-2">
            SAP Digital Access enables
          </p>
          <p className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            Indirect access without <span className="text-gradient">per-user licensing</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
