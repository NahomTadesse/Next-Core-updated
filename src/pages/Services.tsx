import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Server, Smartphone, Link2, BarChart3, Cloud, Lightbulb, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Enterprise Platform Delivery",
      description: "Implementations, customizations, and long-term support for enterprise platforms - built to fit your processes.",
      color: "from-primary to-primary-glow",
    },
    {
      icon: Smartphone,
      title: "Product Engineering (Web & Mobile)",
      description: "Web platforms and mobile apps with beautiful UX, offline-first flows, and seamless payments.",
      color: "from-accent to-accent/80",
    },
    {
      icon: Link2,
      title: "Integrations (Payments, Messaging & APIs)",
      description: "Payment gateways, messaging platforms, CRM systems and more - reliable integrations that keep data in sync.",
      color: "from-primary-glow to-primary",
    },
    {
      icon: BarChart3,
      title: "Data, BI & AI",
      description: "Dashboards, automated reporting, and AI assistants that surface the right insights at the right time.",
      color: "from-accent to-primary",
    },
    {
      icon: Cloud,
      title: "Cloud, DevOps & Security",
      description: "Cloud architecture, CI/CD, security hardening, backups, and compliance - built for uptime and peace of mind.",
      color: "from-primary to-accent",
    },
    {
      icon: Lightbulb,
      title: "Technology Strategy & Enablement",
      description: "Architecture, roadmaps, and capability building - so your stack grows by design, not by accident.",
      color: "from-primary-glow to-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-20 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
              Services that move your business forward
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              We don't just deliver code - we deliver clarity, growth, and systems that fit. Rooted in listening, built with care, and supported long after launch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24">
            {services.map((service, index) => {
              const serviceSlug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              return (
                <a
                  key={index}
                  href={`/services/${serviceSlug}`}
                  className="bg-gradient-card border border-border rounded-xl p-6 sm:p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group cursor-pointer block"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.color} p-2.5 sm:p-3 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all text-sm sm:text-base">
                    Learn more <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </a>
              );
            })}
          </div>

          <div className="bg-gradient-hero border border-border rounded-xl sm:rounded-2xl p-6 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">
              Not sure where to start? We'll map it with you.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Bring your goals and constraints. We'll design the path and prove it with a focused pilot.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-colors gap-2 text-sm sm:text-base"
            >
              Book discovery <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
