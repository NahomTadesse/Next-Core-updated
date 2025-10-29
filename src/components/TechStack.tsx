import { Code2, Database, Cloud, Smartphone, Workflow, Shield } from "lucide-react";

const TechStack = () => {
  const technologies = [
    { icon: Code2, name: "React & TypeScript", color: "text-primary" },
    { icon: Database, name: "PostgreSQL & Redis", color: "text-accent" },
    { icon: Cloud, name: "AWS & Azure", color: "text-primary-glow" },
    { icon: Smartphone, name: "React Native", color: "text-primary" },
    { icon: Workflow, name: "Node.js & Python", color: "text-accent" },
    { icon: Shield, name: "Security First", color: "text-primary-glow" },
  ];

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built on proven technologies</h2>
          <p className="text-lg text-muted-foreground">
            Modern stack, battle-tested tools, enterprise-grade security
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center gap-4 p-6 bg-gradient-card border border-border rounded-xl hover:shadow-glow transition-all duration-500 group animate-fade-scale-in cursor-pointer hover:-translate-y-3 hover:scale-105 overflow-hidden"
                style={{ 
                  animationDelay: `${index * 80}ms`,
                  animationFillMode: 'both'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent group-hover:animate-shine" />
                <div className={`${tech.color} transition-all duration-500 animate-float-subtle group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.5)] relative z-10`}
                     style={{ animationDelay: `${index * 150}ms` }}>
                  <IconComponent className="w-12 h-12" />
                </div>
                <span className="text-sm font-semibold text-center transition-all duration-300 group-hover:scale-105 group-hover:text-primary relative z-10">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
