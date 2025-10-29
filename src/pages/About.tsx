
// 'use client';

// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import ScrollProgress from "@/components/ScrollProgress";
// import { useEffect, useState, useRef } from "react";
// import { Ear, PenTool, Code, HeadphonesIcon } from "lucide-react";

// // === ProcessTimeline (inlined) ===
// const ProcessTimeline = () => {
//   const [activeStep, setActiveStep] = useState(-1);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const steps = [
//     {
//       icon: Ear,
//       number: "01",
//       title: "Listen",
//       description: "We map your processes, constraints, and success criteria - no assumptions.",
//       color: "text-primary",
//     },
//     {
//       icon: PenTool,
//       number: "02",
//       title: "Design",
//       description: "Clear models, intuitive flows, and a delivery plan you can rely on.",
//       color: "text-accent",
//     },
//     {
//       icon: Code,
//       number: "03",
//       title: "Build",
//       description: "Incremental releases with testing, reviews, and enterprise-grade tooling.",
//       color: "text-primary-glow",
//     },
//     {
//       icon: HeadphonesIcon,
//       number: "04",
//       title: "Support",
//       description: "Maintenance, upgrades, and improvements that deliver continuous value.",
//       color: "text-primary",
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           steps.forEach((_, index) => {
//             setTimeout(() => {
//               setActiveStep(index);
//             }, index * 300);
//           });
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div ref={sectionRef} className="max-w-4xl mx-auto">
//       <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How we work</h2>
      
//       <div className="relative">
//         {/* Timeline line */}
//         <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />
        
//         <div className="space-y-12">
//           {steps.map((step, index) => {
//             const IconComponent = step.icon;
//             const isActive = activeStep >= index;
            
//             return (
//               <div
//                 key={index}
//                 className={`relative flex items-start gap-8 transition-all duration-700 ${
//                   isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
//                 }`}
//               >
//                 {/* Mobile layout */}
//                 <div className="flex items-start gap-6 md:hidden">
//                   <div className="relative flex-shrink-0">
//                     <div
//                       className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-all duration-500 ${
//                         isActive ? "scale-100" : "scale-0"
//                       }`}
//                     >
//                       <IconComponent className="w-8 h-8 text-white" />
//                     </div>
//                   </div>
//                   <div className="flex-1">
//                     <div className="text-3xl font-bold text-muted-foreground/30 mb-2">{step.number}</div>
//                     <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
//                     <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
//                   </div>
//                 </div>

//                 {/* Desktop layout */}
//                 <div className="hidden md:flex items-center w-full">
//                   <div className={`flex-1 text-right pr-12 ${index % 2 === 0 ? "" : "order-2 text-left pl-12 pr-0"}`}>
//                     <div className="text-3xl font-bold text-muted-foreground/30 mb-2">{step.number}</div>
//                     <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
//                     <p className="text-muted-foreground leading-relaxed">{step.description}</p>
//                   </div>
                  
//                   <div className="relative flex-shrink-0">
//                     <div
//                       className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-all duration-500 ${
//                         isActive ? "scale-100" : "scale-0"
//                       }`}
//                     >
//                       <IconComponent className="w-8 h-8 text-white" />
//                     </div>
//                   </div>
                  
//                   <div className={`flex-1 ${index % 2 === 0 ? "order-2" : ""}`} />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// // === About Page ===
// const About = () => {
//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <ScrollProgress />
//       <Navigation />
      
//       <main className="pt-32 pb-24 px-6">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-20 animate-fade-in">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">
//               Our promise: We <span className="text-primary">listen</span>. We <span className="text-accent">build</span>. We support.
//             </h1>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               We create systems that feel natural to your teams, resilient in production, and transparent in their outcomes.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-12 mb-24">
//             {[
//               {
//                 title: "We Listen.",
//                 description: "We begin with your reality - understanding processes, mapping challenges, and learning the story behind the metrics.",
//               },
//               {
//                 title: "We Build.",
//                 description: "We transform insights into robust, clear systems - solid data models, intuitive interfaces, and seamless integrations.",
//               },
//               {
//                 title: "We Support.",
//                 description: "After launch, we remain committed. Upgrades, enhancements, and ongoing support - ensuring your system evolves with your growth.",
//               },
//             ].map((item, index) => (
//               <div key={index} className="text-center">
//                 <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
//                 <p className="text-muted-foreground leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>

//           <div className="bg-gradient-card border border-border rounded-2xl p-12 mb-24">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
//               Clarity, accountability, and systems built to last
//             </h2>
//             <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
//               We believe exceptional systems outlive projects. They reduce complexity, make decisions clear, and reveal insights - empowering leaders to act with confidence.
//             </p>

//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   title: "Calm by design",
//                   description: "Interfaces that feel intuitive. Fewer steps. Information exactly where you need it.",
//                 },
//                 {
//                   title: "Production-ready",
//                   description: "Audit trails, permissions, and backups - stable releases, predictable operations.",
//                 },
//                 {
//                   title: "Open & flexible",
//                   description: "Modern foundation with room to evolve - no vendor lock-in, no limitations.",
//                 },
//               ].map((item, index) => (
//                 <div key={index}>
//                   <h4 className="text-xl font-bold mb-3 text-accent">{item.title}</h4>
//                   <p className="text-muted-foreground">{item.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <ProcessTimeline />
//           </div>

//           <div className="mt-24 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Ready to work with a team that delivers?
//             </h2>
//             <p className="text-xl text-muted-foreground mb-8">
//               Share your goals and constraints. We'll map the path and demonstrate value with a focused pilot.
//             </p>
//             <a
//               href="/contact"
//               className="inline-flex items-center justify-center rounded-lg px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-colors"
//             >
//               Book discovery
//             </a>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default About;


'use client';

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useEffect, useState, useRef } from "react";
import { Ear, PenTool, Code, HeadphonesIcon, CheckCircle } from "lucide-react";

import { fetchAbout } from "../service/aboutService";
import { fetchCards } from "../service/contactService";

// === ProcessTimeline (Exact structure from your code + backend data) ===
const ProcessTimeline = ({ steps }: { steps: { title: string; description: string }[] }) => {
  const [activeStep, setActiveStep] = useState(-1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const icons = [Ear, PenTool, Code, HeadphonesIcon];

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
  }, [steps]);

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How we work</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />
        
        <div className="space-y-12">
          {steps.map((step, index) => {
            const IconComponent = icons[index % icons.length];
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
                    <div className="text-3xl font-bold text-muted-foreground/30 mb-2">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
                    <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:flex items-center w-full">
                  <div className={`flex-1 text-right pr-12 ${index % 2 === 0 ? "" : "order-2 text-left pl-12 pr-0"}`}>
                    <div className="text-3xl font-bold text-muted-foreground/30 mb-2">
                      {String(index + 1).padStart(2, "0")}
                    </div>
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

// === Main About Page ===
const About = () => {
  const [aboutData, setAboutData] = useState<any>(null);
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [aboutRes, cardsRes] = await Promise.all([fetchAbout(), fetchCards()]);
        if (aboutRes?.success) setAboutData(aboutRes.data);
        setCards(cardsRes || []);
      } catch (error) {
        console.error("Failed to load About data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
      </div>
    );
  }

  if (!aboutData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
        <p>Failed to load data.</p>
      </div>
    );
  }

  // Convert 6-D process card features to timeline steps
  const processCard = cards.find((c: any) => c.type === "about" && c.features?.length === 6);
  const timelineSteps = processCard?.features.map((feature: string, index: number) => ({
    title: feature,
    description: processCard.description || `Step ${index + 1} of our process`,
  })) || [
    { title: "Listen", description: "We map your processes, constraints, and success criteria - no assumptions." },
    { title: "Design", description: "Clear models, intuitive flows, and a delivery plan you can rely on." },
    { title: "Build", description: "Incremental releases with testing, reviews, and enterprise-grade tooling." },
    { title: "Support", description: "Maintenance, upgrades, and improvements that deliver continuous value." },
  ];

  // Other about cards
  const aboutCards = cards.filter((c: any) => c.type === "about" && c.isActive && c._id !== processCard?._id);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navigation />
      
      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{aboutData.heroTitle}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{aboutData.heroSubtitle}</p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-24">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{aboutData.clientsCount}+</div>
              <p className="text-muted-foreground text-sm">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">{aboutData.projectsCompleted}+</div>
              <p className="text-muted-foreground text-sm">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-glow mb-2">{aboutData.employeesCount}+</div>
              <p className="text-muted-foreground text-sm">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{aboutData.foundedYear}</div>
              <p className="text-muted-foreground text-sm">Founded</p>
            </div>
          </div>

          {/* Listen/Build/Support */}
          <div className="grid md:grid-cols-3 gap-12 mb-24">
            {[
              { title: "Discover", description: aboutData.values[0]?.description || "We begin by understanding your unique needs." },
              { title: "Define", description: aboutData.values[1]?.description || "We outline a clear strategy and scope." },
              { title: "Design", description: aboutData.values[2]?.description || "We craft tailored solutions with focus on UX." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Principles */}
          <div className="bg-gradient-card border border-border rounded-2xl p-12 mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{aboutData.tagline}</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              {aboutData.story}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {aboutData.values.map((value: any, index: number) => (
                <div key={value._id || index}>
                  <h4 className="text-xl font-bold mb-3 text-accent">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto mb-24">
            <ProcessTimeline steps={timelineSteps} />
          </div>

          {/* Extra Cards */}
          {aboutCards.length > 0 && (
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              {aboutCards.map((card: any) => (
                <div key={card._id} className="bg-gradient-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">{card.title}</h3>
                  <p className="text-muted-foreground mb-4">{card.description}</p>
                  {card.features?.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {card.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  {card.buttonText && (
                    <a href={card.buttonLink} className="text-accent hover:underline font-medium">
                      {card.buttonText}
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{aboutData.ctaTitle}</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{aboutData.ctaDescription}</p>
            <a
              href={aboutData.ctaButtonLink}
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-colors"
            >
              {aboutData.ctaButtonText}
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;