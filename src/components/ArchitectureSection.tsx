import { Users, Layers, Server, Database, ArrowDown, ArrowUp, Shield, UserCheck, Settings, Monitor, TestTube, Rocket, CheckCircle2, Lock } from 'lucide-react';

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-20 right-0 w-64 h-64 bg-sharvi-cyan/5 rounded-full blur-3xl" />
      
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
        <div className="space-y-4">
          {/* Layer 1: Users */}
          <div className="glass rounded-2xl p-6 border-2 border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-sharvi-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center shadow-lg">
                  <Users className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">User Layer</h3>
                  <p className="text-muted-foreground text-sm">Web & Mobile Applications</p>
                </div>
                <div className="ml-auto flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-green-400">Live</span>
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
                ].map((item, index) => (
                  <div 
                    key={item} 
                    className="px-4 py-3 rounded-xl bg-secondary/80 text-center text-sm text-foreground border border-border/50 hover:border-primary/30 hover:bg-secondary transition-all duration-200 cursor-default"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Connection Arrow 1 */}
          <div className="flex justify-center py-2">
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-4 bg-gradient-to-b from-primary/50 to-primary" />
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <ArrowDown className="w-4 h-4 text-primary" />
                <span className="text-xs text-primary font-medium">REST APIs / GraphQL</span>
                <ArrowUp className="w-4 h-4 text-primary" />
              </div>
              <div className="w-px h-4 bg-gradient-to-b from-primary to-primary/50" />
            </div>
          </div>

          {/* Layer 2: Sharvi Platform */}
          <div className="glass rounded-2xl p-6 border-2 border-sharvi-cyan/40 shadow-glow relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-sharvi-cyan/5 to-primary/10" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-sharvi-cyan flex items-center justify-center shadow-lg">
                  <Layers className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">Sharvi Digital Platform</h3>
                  <p className="text-muted-foreground text-sm">Middleware & Business Logic Engine</p>
                </div>
                <div className="ml-auto hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-sharvi-cyan/10 border border-sharvi-cyan/30">
                  <Shield className="w-3 h-3 text-sharvi-cyan" />
                  <span className="text-xs text-sharvi-cyan">Secure Layer</span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { name: 'Workflows', icon: Settings },
                  { name: 'Approvals', icon: CheckCircle2 },
                  { name: 'Dashboards', icon: Monitor },
                  { name: 'Security', icon: Lock },
                  { name: 'AI Insights', icon: Layers }
                ].map((item) => (
                  <div key={item.name} className="px-4 py-4 rounded-xl bg-primary/10 border border-primary/30 text-center text-sm text-primary font-medium flex flex-col items-center gap-2 hover:bg-primary/20 transition-all duration-200">
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Connection Arrow 2 */}
          <div className="flex justify-center py-2">
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-4 bg-gradient-to-b from-sharvi-cyan/50 to-orange-500/50" />
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
                <ArrowDown className="w-4 h-4 text-orange-400" />
                <span className="text-xs text-orange-400 font-medium">RFC / BAPI / OData</span>
                <ArrowUp className="w-4 h-4 text-orange-400" />
              </div>
              <div className="w-px h-4 bg-gradient-to-b from-orange-500/50 to-orange-500" />
            </div>
          </div>

          {/* Layer 3: SAP */}
          <div className="glass rounded-2xl p-6 border-2 border-orange-500/30 relative overflow-hidden group hover:border-orange-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                  <Database className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">SAP Core</h3>
                  <p className="text-muted-foreground text-sm">System of Record (ECC / S/4HANA)</p>
                </div>
                <div className="ml-auto flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                  <Database className="w-3 h-3 text-orange-400" />
                  <span className="text-xs text-orange-400">Master Data</span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Master Data', 'Transactions', 'Financials', 'Inventory'].map((item) => (
                  <div key={item} className="px-4 py-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-center text-sm text-orange-400 hover:bg-orange-500/20 transition-all duration-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Role-Based Access Control */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
              Role-Based Access Control
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Granular permissions mapped to SAP authorizations ensuring secure, auditable access.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { role: 'Executive', color: 'primary', icon: UserCheck, permissions: ['View Dashboards', 'Approve High-Value', 'Reports Access'] },
              { role: 'Manager', color: 'sharvi-cyan', icon: Users, permissions: ['Team Approvals', 'Department Data', 'Workflow Config'] },
              { role: 'User', color: 'green-500', icon: Settings, permissions: ['Transaction Entry', 'Own Records', 'Basic Reports'] },
              { role: 'Vendor', color: 'orange-500', icon: Shield, permissions: ['Self-Service Portal', 'PO/Invoice View', 'Delivery Updates'] },
            ].map((item) => (
              <div key={item.role} className="glass rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className={`w-10 h-10 rounded-lg bg-${item.color}/10 flex items-center justify-center mb-4`}>
                  <item.icon className={`w-5 h-5 text-${item.color}`} />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-3">{item.role}</h4>
                <ul className="space-y-2">
                  {item.permissions.map((perm) => (
                    <li key={perm} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      {perm}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Deployment Flow */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
              Deployment Flow
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade deployment with proper environment segregation and approval gates.
            </p>
          </div>
          
          <div className="relative">
            {/* Animated Flow Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 z-0 rounded-full overflow-hidden bg-border/30">
              <div className="h-full w-full bg-gradient-to-r from-blue-500 via-amber-500 to-green-500 animate-[flow_3s_linear_infinite]" 
                   style={{ backgroundSize: '200% 100%' }} />
            </div>
            
            {/* Animated Arrows */}
            <div className="hidden md:flex absolute top-1/2 left-[30%] -translate-y-1/2 z-20">
              <div className="flex items-center gap-1 animate-pulse">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-blue-400" />
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-blue-400/60" />
              </div>
            </div>
            <div className="hidden md:flex absolute top-1/2 right-[30%] -translate-y-1/2 z-20">
              <div className="flex items-center gap-1 animate-pulse" style={{ animationDelay: '0.5s' }}>
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-amber-400" />
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-amber-400/60" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              {/* DEV */}
              <div className="glass rounded-2xl p-6 border-2 border-blue-500/30 relative group hover:border-blue-500/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-500 text-white text-xs font-bold shadow-lg">
                  DEVELOPMENT
                </div>
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-blue-500 animate-ping" />
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-blue-500" />
                <div className="pt-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-6 h-6 text-blue-400 group-hover:animate-spin" style={{ animationDuration: '3s' }} />
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-foreground text-center mb-4">DEV Environment</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Feature Development
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Unit Testing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Integration Testing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Code Review
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-center gap-2 text-xs text-blue-400 font-medium">
                      <Lock className="w-3 h-3" />
                      Developer Approval
                    </div>
                  </div>
                </div>
              </div>

              {/* QAS */}
              <div className="glass rounded-2xl p-6 border-2 border-amber-500/30 relative group hover:border-amber-500/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-500 text-white text-xs font-bold shadow-lg">
                  QUALITY ASSURANCE
                </div>
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-amber-500 animate-ping" style={{ animationDelay: '0.3s' }} />
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-amber-500" />
                <div className="pt-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <TestTube className="w-6 h-6 text-amber-400" />
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-foreground text-center mb-4">QAS Environment</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      User Acceptance Testing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      Business Validation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      Performance Testing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      Security Audit
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-center gap-2 text-xs text-amber-400 font-medium">
                      <UserCheck className="w-3 h-3" />
                      Business + IT Approval
                    </div>
                  </div>
                </div>
              </div>

              {/* PRD */}
              <div className="glass rounded-2xl p-6 border-2 border-green-500/30 relative group hover:border-green-500/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-green-500 text-white text-xs font-bold shadow-lg">
                  PRODUCTION
                </div>
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-green-500 animate-ping" style={{ animationDelay: '0.6s' }} />
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-green-500" />
                <div className="pt-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-6 h-6 text-green-400" />
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-foreground text-center mb-4">PRD Environment</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      Go-Live Deployment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      Hypercare Support
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      Production Monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      Change Management
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-center gap-2 text-xs text-green-400 font-medium">
                      <Shield className="w-3 h-3" />
                      Management Sign-Off
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg">
            Enterprise-grade architecture with <span className="text-primary font-semibold">secure APIs</span>, <span className="text-primary font-semibold">role-based controls</span>, and <span className="text-primary font-semibold">governed deployments</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
