import { Sparkles, BarChart3, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-card">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            What we build reflects who you are - and what you're becoming
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            Your vision deserves systems that carry its weight with calm, clarity, and craft.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-8 sm:mb-12">
          {[
            {
              icon: Sparkles,
              title: "Signature moves",
              description: "Automations that feel uniquely yours - not generic add-ons",
              gradient: "from-primary to-primary-glow",
            },
            {
              icon: BarChart3,
              title: "Numbers you trust",
              description: "Reporting and controls you're proud to present",
              gradient: "from-accent to-accent/80",
            },
            {
              icon: Rocket,
              title: "Momentum that compounds",
              description: "A roadmap that keeps delivering small, certain wins",
              gradient: "from-primary-glow to-primary",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center group px-4"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} p-3 sm:p-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="/products">Explore accelerators</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <a href="/services">See how we deliver</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
