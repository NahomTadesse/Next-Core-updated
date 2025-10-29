import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Zap, Users, Building2, TrendingUp, DollarSign, Package } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Users,
      category: "Growth",
      name: "ClientHub Pro",
      description: "Customer relationship & loyalty engine designed for modern businesses.",
      tagline: "Grow repeat business.",
      color: "text-primary",
    },
    {
      icon: Package,
      category: "Operations",
      name: "FlowMaster",
      description: "Digital platforms for efficient, transparent operational workflows.",
      tagline: "Streamline operations.",
      color: "text-accent",
    },
    {
      icon: Building2,
      category: "Real Estate",
      name: "PropertyCore",
      description: "Complete property management with sales, leasing, and maintenance.",
      tagline: "Manage properties seamlessly.",
      color: "text-primary-glow",
    },
    {
      icon: TrendingUp,
      category: "Analytics",
      name: "InsightEngine",
      description: "Business intelligence with automated reporting and predictive insights.",
      tagline: "Data-driven decisions.",
      color: "text-primary",
    },
    {
      icon: DollarSign,
      category: "Finance",
      name: "FinanceHub",
      description: "Financial management for groups, lending, and expense tracking.",
      tagline: "Financial clarity.",
      color: "text-accent",
    },
    {
      icon: Zap,
      category: "Automation",
      name: "WorkflowAI",
      description: "Intelligent automation that adapts to your business processes.",
      tagline: "Automate intelligently.",
      color: "text-primary-glow",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Accelerators, not add-ons
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start from strength: ready-made systems that carry your identity - powering retail, property, finance, and more with guardrails, insights, and integrations your team trusts.
            </p>
          </div>

          <div className="bg-gradient-card border border-border rounded-2xl p-12 mb-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Every great product starts with a problem worth solving.</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We design solutions that don't just check boxes - they untangle complex processes, bring clarity, and unlock growth.
            </p>
            <p className="text-xl font-semibold text-primary">
              The question isn't <span className="text-muted-foreground">what do you use?</span>
            </p>
            <p className="text-xl font-semibold text-accent mt-2">
              It's what problem did we solve?
            </p>
          </div>

          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Battle-tested building blocks</h2>
              <p className="text-lg text-muted-foreground">Deploy fast, then shape to fit your domain.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-gradient-card border border-border rounded-xl p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-secondary ${product.color}`}>
                      <product.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`font-semibold ${product.color}`}>{product.tagline}</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 text-center bg-gradient-card border border-border rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Not sure where to start?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Bring your goals and constraints. We'll design the path and prove it with a focused pilot.
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

export default Products;
