const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">S</span>
            </div>
            <span className="font-heading font-semibold text-xl text-foreground">
              Sharvi Infotech
            </span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            ERP-First • Architecture-Led • Governance-Driven
          </p>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sharvi Infotech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
