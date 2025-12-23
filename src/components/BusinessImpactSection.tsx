import { TrendingDown, TrendingUp, Users, Clock, Smartphone } from 'lucide-react';

const impactItems = [
  {
    icon: Users,
    area: 'SAP Named Users',
    before: 'High',
    after: 'Reduced by 60–80%',
    trend: 'down',
    color: 'text-green-500',
  },
  {
    icon: TrendingDown,
    area: 'License Cost',
    before: 'Very High',
    after: 'Significantly Lower',
    trend: 'down',
    color: 'text-green-500',
  },
  {
    icon: TrendingUp,
    area: 'User Adoption',
    before: 'Low',
    after: 'Very High',
    trend: 'up',
    color: 'text-primary',
  },
  {
    icon: Clock,
    area: 'Training Effort',
    before: 'Weeks',
    after: 'Hours',
    trend: 'down',
    color: 'text-green-500',
  },
  {
    icon: Smartphone,
    area: 'Mobile Access',
    before: 'No',
    after: 'Yes',
    trend: 'up',
    color: 'text-primary',
  },
];

const BusinessImpactSection = () => {
  return (
    <section id="business-impact" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Transformation Results
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Business Impact Summary
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Measurable outcomes from implementing web-based SAP interfaces.
          </p>
        </div>

        <div className="glass rounded-2xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-primary/20 to-primary/10">
                  <th className="text-left p-6 font-heading font-semibold text-foreground text-lg">Area</th>
                  <th className="text-center p-6 font-heading font-semibold text-foreground text-lg">Before</th>
                  <th className="text-center p-6 font-heading font-semibold text-foreground text-lg">After</th>
                  <th className="text-center p-6 font-heading font-semibold text-foreground text-lg">Impact</th>
                </tr>
              </thead>
              <tbody>
                {impactItems.map((item, idx) => (
                  <tr 
                    key={idx} 
                    className="border-t border-border hover:bg-muted/30 transition-colors group"
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <span className="font-medium text-foreground text-lg">{item.area}</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <span className="inline-block px-4 py-2 rounded-lg bg-red-500/10 text-red-400 font-medium">
                        {item.before}
                      </span>
                    </td>
                    <td className="p-6 text-center">
                      <span className="inline-block px-4 py-2 rounded-lg bg-green-500/10 text-green-400 font-medium">
                        {item.after}
                      </span>
                    </td>
                    <td className="p-6 text-center">
                      <div className={`flex items-center justify-center gap-2 ${item.color}`}>
                        {item.trend === 'up' ? (
                          <TrendingUp className="w-6 h-6" />
                        ) : (
                          <TrendingDown className="w-6 h-6" />
                        )}
                        <span className="font-bold text-lg">
                          {item.trend === 'up' ? 'Improved' : 'Reduced'}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-8 border border-primary/20 text-center">
            <div className="text-4xl font-heading font-bold text-primary mb-2">60-80%</div>
            <div className="text-muted-foreground">License Cost Reduction</div>
          </div>
          <div className="glass rounded-2xl p-8 border border-primary/20 text-center">
            <div className="text-4xl font-heading font-bold text-green-400 mb-2">100%</div>
            <div className="text-muted-foreground">External User Coverage</div>
          </div>
          <div className="glass rounded-2xl p-8 border border-primary/20 text-center">
            <div className="text-4xl font-heading font-bold text-primary mb-2">Zero</div>
            <div className="text-muted-foreground">SAP Training for End Users</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;
