import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, FileText, Link2, Palette, BarChart3, Server } from "lucide-react";

const Insights = () => {
  const categories = [
    { name: "Platform Engineering", icon: Server },
    { name: "Integrations", icon: Link2 },
    { name: "Product Craft", icon: Palette },
    { name: "Data & BI", icon: BarChart3 },
    { name: "DevOps", icon: Server },
  ];

  const featuredArticles = [
    {
      title: "Delivery Playbook",
      subtitle: "Shipping calm systems at scale",
      description: "Our playbook for moving from chaos to clarity - discovery, design, guardrails, and ongoing support.",
      category: "Platform Engineering",
    },
    {
      title: "Integrations",
      subtitle: "Messaging, Payments, Telephony - integrations users love",
      description: "Design notes from the field: why the last mile of integrations determines adoption.",
      category: "Integrations",
    },
    {
      title: "Data & BI",
      subtitle: "From data exhaust to decisions",
      description: "Lightweight BI practices that make weekly reviews honest and actionable.",
      category: "Data & BI",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block text-sm text-accent font-semibold mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              Insights
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Field notes from building systems that last
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essays, walkthroughs, and lessons learned from the field.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category, index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary border border-border hover:border-primary hover:bg-secondary/80 transition-all"
              >
                <category.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {featuredArticles.map((article, index) => (
              <div
                key={index}
                className="bg-gradient-card border border-border rounded-xl p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                <div className="text-sm text-muted-foreground mb-3">{article.category}</div>
                <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
                <p className="text-lg text-accent font-semibold mb-4">{article.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{article.description}</p>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                  Read article <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-24">
            {[
              {
                icon: FileText,
                title: "Implementation Patterns",
                description: "Proven approaches for common challenges in enterprise software delivery.",
              },
              {
                icon: Link2,
                title: "Integration Architecture",
                description: "Building reliable connections between systems that users depend on.",
              },
              {
                icon: Palette,
                title: "UX & Product Design",
                description: "Creating interfaces that reduce cognitive load and feel natural to use.",
              },
              {
                icon: BarChart3,
                title: "Analytics & Insights",
                description: "Turning raw data into actionable intelligence for better decisions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-hero border border-border rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want a practical deep-dive for your team?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We run focused sessions on platform delivery, integrations, and BI - no fluff, just what works.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-colors"
            >
              Book discovery
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Insights;
