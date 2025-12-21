import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sharvi-cyan/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Next Steps
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Start a Conversation
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              If SAP is your backbone, Sharvi becomes your digital nervous system. 
              Let's identify one SAP-adjacent process for a controlled pilot.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>contact@sharviinfotech.com</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>

            <a
              href="mailto:contact@sharviinfotech.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-accent text-primary-foreground font-semibold rounded-xl shadow-button hover:shadow-glow transition-all duration-300 group"
            >
              Schedule a Discussion
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="glass rounded-3xl p-8 border border-primary/20">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Quick Inquiry
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors"
                  placeholder="your.email@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors resize-none"
                  placeholder="Tell us about your SAP extension needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-accent text-primary-foreground font-semibold rounded-xl shadow-button hover:shadow-glow transition-all duration-300"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
