import { Clock, Shield, CheckCircle2, GitBranch, FileText, Users } from "lucide-react";

const Guarantees = () => {
  const guarantees = [
    {
      icon: Clock,
      title: "Discovery in 10 Days",
      description: "Workshops, process map, prototype, and an implementation plan in two weeks or less.",
      color: "text-primary",
    },
    {
      icon: Clock,
      title: "< 24h Response",
      description: "You get a named engineer and a support channel. We acknowledge and triage within one business day.",
      color: "text-accent",
    },
    {
      icon: CheckCircle2,
      title: "Go-Live Assurance",
      description: "UAT checklist, cut-over plan, rollback steps, and on-site/remote hand-holding until systems stabilize.",
      color: "text-primary-glow",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Role-based permissions, audit trails, secrets management, and least-privilege defaults.",
      color: "text-primary",
    },
    {
      icon: GitBranch,
      title: "Change Without Chaos",
      description: "Small, certain releases. Feature flags and clear acceptance criteria keep momentum without disruption.",
      color: "text-accent",
    },
    {
      icon: FileText,
      title: "Ownership & Handover",
      description: "Docs, runbooks, and code walkthroughs - your team can operate confidently without us.",
      color: "text-primary-glow",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block text-sm text-accent font-semibold mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            Trust
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Guarantees & SLAs</h2>
          <p className="text-xl text-muted-foreground">
            Clear expectations, predictable delivery, and support that shows up.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`mb-4 ${guarantee.color}`}>
                <guarantee.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{guarantee.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
