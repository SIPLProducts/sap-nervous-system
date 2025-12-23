import { Package, Truck, Factory, Wrench, ClipboardCheck, ShoppingCart, Users, Briefcase } from 'lucide-react';

const modules = [
  {
    id: 'mm',
    title: 'Procurement & Stores (MM)',
    icon: Package,
    reduction: '70–80%',
    activities: [
      { activity: 'PO Display', users: 'Stores / Vendors', webApp: true, sapLicense: false },
      { activity: 'Inward / Gate Entry', users: 'Security / Stores', webApp: true, sapLicense: false },
      { activity: 'GR Quantity Capture', users: 'Store Keeper', webApp: true, sapLicense: false },
      { activity: 'Material Inspection Entry', users: 'QA Team', webApp: true, sapLicense: false },
      { activity: 'Stock Viewing', users: 'Supervisors', webApp: true, sapLicense: false },
    ],
  },
  {
    id: 'logistics',
    title: 'Logistics & Gate Management',
    icon: Truck,
    reduction: 'Nearly 100%',
    activities: [
      { activity: 'Inward Gate Entry', users: 'Security', webApp: true, sapLicense: false },
      { activity: 'Outward Gate Entry', users: 'Security', webApp: true, sapLicense: false },
      { activity: 'Weighbridge Capture', users: 'Operators', webApp: true, sapLicense: false },
      { activity: 'Gate Pass Generation', users: 'Security', webApp: true, sapLicense: false },
      { activity: 'Vehicle Tracking', users: 'Logistics', webApp: true, sapLicense: false },
    ],
  },
  {
    id: 'pp',
    title: 'Production & Shop Floor (PP)',
    icon: Factory,
    reduction: '60–75%',
    activities: [
      { activity: 'Production Confirmation', users: 'Operators', webApp: true, sapLicense: false },
      { activity: 'Shift Reporting', users: 'Supervisors', webApp: true, sapLicense: false },
      { activity: 'Scrap & Rework Entry', users: 'Operators', webApp: true, sapLicense: false },
      { activity: 'Machine Data Capture', users: 'Operators', webApp: true, sapLicense: false },
    ],
  },
  {
    id: 'pm',
    title: 'Plant Maintenance (PM)',
    icon: Wrench,
    reduction: '50–70%',
    activities: [
      { activity: 'Breakdown Intimation', users: 'Operators', webApp: true, sapLicense: false },
      { activity: 'Work Order Feedback', users: 'Technicians', webApp: true, sapLicense: false },
      { activity: 'Spare Requests', users: 'Technicians', webApp: true, sapLicense: false },
      { activity: 'Maintenance History', users: 'Engineers', webApp: true, sapLicense: false },
    ],
  },
  {
    id: 'qm',
    title: 'Quality Management (QM)',
    icon: ClipboardCheck,
    reduction: '~60%',
    activities: [
      { activity: 'Inspection Result Entry', users: 'QA Inspectors', webApp: true, sapLicense: false },
      { activity: 'Usage Decision Review', users: 'QA Leads', webApp: 'Optional', sapLicense: 'Optional' },
      { activity: 'Quality Reports', users: 'Management', webApp: true, sapLicense: false },
    ],
  },
  {
    id: 'sd',
    title: 'Sales & Distribution (SD)',
    icon: ShoppingCart,
    reduction: 'ZERO Dealer Licenses',
    activities: [
      { activity: 'Order Status Tracking', users: 'Sales Team', webApp: true, sapLicense: false },
      { activity: 'Dispatch Confirmation', users: 'Logistics', webApp: true, sapLicense: false },
      { activity: 'Dealer Portal', users: 'Dealers', webApp: true, sapLicense: false },
      { activity: 'Invoice Viewing', users: 'Dealers', webApp: true, sapLicense: false },
    ],
  },
  {
    id: 'external',
    title: 'Contractors, Vendors & Third Parties',
    icon: Users,
    reduction: '100%',
    activities: [
      { activity: 'Service Entry Sheet', users: 'Contractors', webApp: true, sapLicense: false },
      { activity: 'ASN / Delivery Status', users: 'Vendors', webApp: true, sapLicense: false },
      { activity: 'Vehicle Updates', users: 'Transporters', webApp: true, sapLicense: false },
      { activity: 'Material Receipt', users: 'Job Workers', webApp: true, sapLicense: false },
    ],
  },
  {
    id: 'management',
    title: 'Management & Executives',
    icon: Briefcase,
    reduction: 'NONE Required',
    activities: [
      { activity: 'Operational KPIs', users: 'Plant Head', webApp: true, sapLicense: false },
      { activity: 'Cost & Margin Reports', users: 'CFO', webApp: true, sapLicense: false },
      { activity: 'Dashboards', users: 'CEO', webApp: true, sapLicense: false },
      { activity: 'Read-only Reports', users: 'Auditors', webApp: true, sapLicense: false },
    ],
  },
];

const LicenseOptimizationSection = () => {
  return (
    <section id="license-optimization" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            License Strategy
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            License Optimization
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Module-wise breakdown of SAP license reduction opportunities through web-based interfaces.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {modules.map((module) => (
            <div
              key={module.id}
              className="glass rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 border-b border-border bg-gradient-to-r from-primary/10 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center">
                      <module.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {module.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Reduction</div>
                    <div className="text-lg font-bold text-primary">{module.reduction}</div>
                  </div>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-medium text-muted-foreground">Activity</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Users</th>
                      <th className="text-center p-3 font-medium text-muted-foreground">Web App</th>
                      <th className="text-center p-3 font-medium text-muted-foreground">SAP License</th>
                    </tr>
                  </thead>
                  <tbody>
                    {module.activities.map((row, idx) => (
                      <tr key={idx} className="border-t border-border/50 hover:bg-muted/30 transition-colors">
                        <td className="p-3 text-foreground">{row.activity}</td>
                        <td className="p-3 text-muted-foreground">{row.users}</td>
                        <td className="p-3 text-center">
                          {row.webApp === true ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-500">✓</span>
                          ) : row.webApp === 'Optional' ? (
                            <span className="text-yellow-500 text-xs font-medium">Optional</span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-500">✗</span>
                          )}
                        </td>
                        <td className="p-3 text-center">
                          {row.sapLicense === false ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-500">✗</span>
                          ) : row.sapLicense === 'Optional' ? (
                            <span className="text-yellow-500 text-xs font-medium">Optional</span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-500">✓</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicenseOptimizationSection;
