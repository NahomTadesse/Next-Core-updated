import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 relative">
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6 sm:mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs sm:text-sm text-muted-foreground">We ship reliable software - fast</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Software with{" "}
            <span className="text-accent">precision</span> - and a deep respect for{" "}
            <span className="text-primary">yours</span>.
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl leading-relaxed">
            We transform complex processes into measurable outcomes using modern stacks and proven methodologies. 
            When systems fail, we make them work - and keep them working.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 hover:scale-105 transition-transform">
              <a href="/contact">Start discovery <ArrowRight className="w-4 h-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-transform">
              <a href="/services">How we deliver</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
            {[
              { stat: 95, label: "Success rate", sublabel: "Projects delivered", suffix: "%" },
              { stat: 12, label: "Response time", sublabel: "Support that shows up", prefix: "<", suffix: "h" },
              { stat: 100, label: "Integration", sublabel: "Full-stack expertise", suffix: "%" },
              { stat: 99, label: "Security score", sublabel: "Audits & compliance", suffix: "%" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-card border border-border rounded-lg p-4 sm:p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-xl sm:text-2xl font-bold text-accent mb-1">
                  <AnimatedCounter 
                    end={item.stat} 
                    prefix={item.prefix} 
                    suffix={item.suffix}
                    duration={2000}
                  />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-foreground mb-1">{item.label}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">{item.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
