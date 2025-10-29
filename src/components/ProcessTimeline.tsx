import { useEffect, useState, useRef } from "react";
import { Ear, PenTool, Code, HeadphonesIcon } from "lucide-react";

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(-1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: Ear,
      number: "01",
      title: "Listen",
      description: "We map your processes, constraints, and success criteria - no assumptions.",
      color: "text-primary",
    },
    {
      icon: PenTool,
      number: "02",
      title: "Design",
      description: "Clear models, intuitive flows, and a delivery plan you can rely on.",
      color: "text-accent",
    },
    {
      icon: Code,
      number: "03",
      title: "Build",
      description: "Incremental releases with testing, reviews, and enterprise-grade tooling.",
      color: "text-primary-glow",
    },
    {
      icon: HeadphonesIcon,
      number: "04",
      title: "Support",
      description: "Maintenance, upgrades, and improvements that deliver continuous value.",
      color: "text-primary",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          steps.forEach((_, index) => {
            setTimeout(() => {
              setActiveStep(index);
            }, index * 300);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How we work</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />
        
        <div className="space-y-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = activeStep >= index;
            
            return (
              <div
                key={index}
                className={`relative flex items-start gap-8 transition-all duration-700 ${
                  isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                {/* Mobile layout */}
                <div className="flex items-start gap-6 md:hidden">
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-all duration-500 ${
                        isActive ? "scale-100" : "scale-0"
                      }`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-muted-foreground/30 mb-2">{step.number}</div>
                    <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
                    <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:flex items-center w-full">
                  <div className={`flex-1 text-right pr-12 ${index % 2 === 0 ? "" : "order-2 text-left pl-12 pr-0"}`}>
                    <div className="text-3xl font-bold text-muted-foreground/30 mb-2">{step.number}</div>
                    <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-all duration-500 ${
                        isActive ? "scale-100" : "scale-0"
                      }`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className={`flex-1 ${index % 2 === 0 ? "order-2" : ""}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
