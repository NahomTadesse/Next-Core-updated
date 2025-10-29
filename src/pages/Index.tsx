


// 'use client';

// import { Button } from "@/components/ui/button";
// import {
//   ArrowRight,
//   Sparkles,
//   BarChart3,
//   Rocket,
//   Code2,
//   Database,
//   Cloud,
//   Smartphone,
//   Workflow,
//   Shield,
//   Clock,
//   CheckCircle2,
//   GitBranch,
//   FileText,
// } from "lucide-react";
// import { useState, useEffect } from "react";

//  import Navigation from "@/components/Navigation";
// import Hero from "@/components/Hero";
// import Principles from "@/components/Principles";
// import Features from "@/components/Features";
// import SystemsEndure from "@/components/SystemsEndure";
// import TechStack from "@/components/TechStack";
// import Guarantees from "@/components/Guarantees";
// import FinalCTA from "@/components/FinalCTA";
// import Footer from "@/components/Footer";
// import ParticleBackground from "@/components/ParticleBackground";
// import ScrollProgress from "@/components/ScrollProgress";


// // AnimatedCounter (kept from Hero)
// const AnimatedCounter = ({ end, prefix = "", suffix = "", duration = 2000 }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = null;
//     const step = (timestamp) => {
//       if (!start) start = timestamp;
//       const progress = Math.min((timestamp - start) / duration, 1);
//       const easeOutQuart = 1 - Math.pow(1 - progress, 4);
//       setCount(Math.floor(easeOutQuart * end));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [end, duration]);

//   return <>{prefix}{count}{suffix}</>;
// };

// // Hero
// const HeroSection = () => {
//   return (
//     <section className="min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 relative">
//       <div className="container mx-auto relative z-10">
//         <div className="max-w-5xl">
//           <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6 sm:mb-8">
//             <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
//             <span className="text-xs sm:text-sm text-muted-foreground">
//               We ship reliable software - fast
//             </span>
//           </div>

//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
//             Software with{" "}
//             <span className="text-accent">precision</span> - and a deep respect for{" "}
//             <span className="text-primary">yours</span>.
//           </h1>

//           <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl leading-relaxed">
//             We transform complex processes into measurable outcomes using modern stacks and proven methodologies. 
//             When systems fail, we make them work - and keep them working.
//           </p>

//           <div className="flex flex-wrap gap-4 mb-16">
//             <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 hover:scale-105 transition-transform">
//               <a href="/contact">Start discovery <ArrowRight className="w-4 h-4" /></a>
//             </Button>
//             <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-transform">
//               <a href="/services">How we deliver</a>
//             </Button>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
//             {[
//               { stat: 95, label: "Success rate", sublabel: "Projects delivered", suffix: "%" },
//               { stat: 12, label: "Response time", sublabel: "Support that shows up", prefix: "<", suffix: "h" },
//               { stat: 100, label: "Integration", sublabel: "Full-stack expertise", suffix: "%" },
//               { stat: 99, label: "Security score", sublabel: "Audits & compliance", suffix: "%" },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-card border border-border rounded-lg p-4 sm:p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 hover:scale-105"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="text-xl sm:text-2xl font-bold text-accent mb-1">
//                   <AnimatedCounter end={item.stat} prefix={item.prefix} suffix={item.suffix} />
//                 </div>
//                 <div className="text-xs sm:text-sm font-semibold text-foreground mb-1">{item.label}</div>
//                 <div className="text-[10px] sm:text-xs text-muted-foreground">{item.sublabel}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Principles
// const PrinciplesSection = () => {
//   const principles = [
//     {
//       title: "Systems that transform",
//       color: "text-primary",
//       points: [
//         "Weeks, not quarters - speed to value",
//         "Dashboards beat guesswork - clarity & control",
//         "Uptime, alerts, playbooks - reliability",
//       ],
//     },
//     {
//       title: "Software with purpose",
//       color: "text-accent",
//       points: [
//         "Language of your business in labels & flows",
//         "Processes mirror how work actually happens",
//         "Quality engineering built in from day one",
//       ],
//     },
//     {
//       title: "Own the outcome",
//       color: "text-primary-glow",
//       points: [
//         "Discovery to Implementation to Support - clear path",
//         "Small, certain wins that compound over time",
//         "Confidence you can defend in any boardroom",
//       ],
//     },
//   ];

//   return (
//     <section className="py-16 sm:py-24 px-4 sm:px-6">
//       <div className="container mx-auto">
//         <div className="text-center mb-12 sm:mb-16">
//           <div className="inline-block text-xs sm:text-sm text-accent font-semibold mb-4 px-3 sm:px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
//             Principles
//           </div>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
//             We build with care, precision, and respect for your domain
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
//             Three truths that guide everything we ship.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
//           {principles.map((principle, index) => (
//             <div
//               key={index}
//               className="bg-gradient-card border border-border rounded-xl p-6 sm:p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
//               onMouseMove={(e) => {
//                 const card = e.currentTarget;
//                 const rect = card.getBoundingClientRect();
//                 const x = e.clientX - rect.left;
//                 const y = e.clientY - rect.top;
//                 const centerX = rect.width / 2;
//                 const centerY = rect.height / 2;
//                 const rotateX = ((y - centerY) / centerY) * -5;
//                 const rotateY = ((x - centerX) / centerX) * 5;
//                 card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
//               }}
//             >
//               <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${principle.color}`}>
//                 {principle.title}
//               </h3>
//               <ul className="space-y-4">
//                 {principle.points.map((point, i) => (
//                   <li key={i} className="flex items-start gap-2 sm:gap-3">
//                     <div className={`w-1.5 h-1.5 rounded-full ${principle.color} mt-2 flex-shrink-0`} />
//                     <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">{point}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Features
// const FeaturesSection = () => {
//   return (
//     <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-card">
//       <div className="container mx-auto">
//         <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
//             What we build reflects who you are - and what you're becoming
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
//             Your vision deserves systems that carry its weight with calm, clarity, and craft.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-8 sm:mb-12">
//           {[
//             {
//               icon: Sparkles,
//               title: "Signature moves",
//               description: "Automations that feel uniquely yours - not generic add-ons",
//               gradient: "from-primary to-primary-glow",
//             },
//             {
//               icon: BarChart3,
//               title: "Numbers you trust",
//               description: "Reporting and controls you're proud to present",
//               gradient: "from-accent to-accent/80",
//             },
//             {
//               icon: Rocket,
//               title: "Momentum that compounds",
//               description: "A roadmap that keeps delivering small, certain wins",
//               gradient: "from-primary-glow to-primary",
//             },
//           ].map((feature, index) => (
//             <div key={index} className="text-center group px-4">
//               <div
//                 className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} p-3 sm:p-4 group-hover:scale-110 transition-transform duration-300`}
//               >
//                 <feature.icon className="w-full h-full text-white" />
//               </div>
//               <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
//               <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-wrap gap-4 justify-center">
//           <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
//             <a href="/products">Explore accelerators</a>
//           </Button>
//           <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
//             <a href="/services">See how we deliver</a>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// // SystemsEndure
// const SystemsEndureSection = () => {
//   return (
//     <section className="py-24 px-6">
//       <div className="container mx-auto max-w-4xl">
//         <div className="text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-8">
//             Good systems outlive projects
//           </h2>
//           <div className="mb-8 space-y-4">
//             <p className="text-2xl text-muted-foreground">
//               The real question isn't <span className="italic">can it be built?</span>
//             </p>
//             <p className="text-2xl font-semibold text-primary">
//               It's <span className="text-accent">will it endure?</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // TechStack
// const TechStackSection = () => {
//   const technologies = [
//     { icon: Code2, name: "React & TypeScript", color: "text-primary" },
//     { icon: Database, name: "PostgreSQL & Redis", color: "text-accent" },
//     { icon: Cloud, name: "AWS & Azure", color: "text-primary-glow" },
//     { icon: Smartphone, name: "React Native", color: "text-primary" },
//     { icon: Workflow, name: "Node.js & Python", color: "text-accent" },
//     { icon: Shield, name: "Security First", color: "text-primary-glow" },
//   ];

//   return (
//     <section className="py-24 px-6 overflow-hidden">
//       <div className="container mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Built on proven technologies</h2>
//           <p className="text-lg text-muted-foreground">
//             Modern stack, battle-tested tools, enterprise-grade security
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//           {technologies.map((tech, index) => {
//             const IconComponent = tech.icon;
//             return (
//               <div
//                 key={index}
//                 className="flex flex-col items-center gap-4 p-6 bg-gradient-card border border-border rounded-xl hover:shadow-glow transition-all duration-500 group cursor-pointer hover:-translate-y-3 hover:scale-105"
//                 style={{ animationDelay: `${index * 80}ms` }}
//               >
//                 <div className={`${tech.color} transition-all duration-500 group-hover:scale-110 relative z-10`}>
//                   <IconComponent className="w-12 h-12" />
//                 </div>
//                 <span className="text-sm font-semibold text-center transition-all duration-300 group-hover:scale-105 group-hover:text-primary relative z-10">
//                   {tech.name}
//                 </span>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Guarantees
// const GuaranteesSection = () => {
//   const guarantees = [
//     {
//       icon: Clock,
//       title: "Discovery in 10 Days",
//       description: "Workshops, process map, prototype, and an implementation plan in two weeks or less.",
//       color: "text-primary",
//     },
//     {
//       icon: Clock,
//       title: "< 24h Response",
//       description: "You get a named engineer and a support channel. We acknowledge and triage within one business day.",
//       color: "text-accent",
//     },
//     {
//       icon: CheckCircle2,
//       title: "Go-Live Assurance",
//       description: "UAT checklist, cut-over plan, rollback steps, and on-site/remote hand-holding until systems stabilize.",
//       color: "text-primary-glow",
//     },
//     {
//       icon: Shield,
//       title: "Security & Compliance",
//       description: "Role-based permissions, audit trails, secrets management, and least-privilege defaults.",
//       color: "text-primary",
//     },
//     {
//       icon: GitBranch,
//       title: "Change Without Chaos",
//       description: "Small, certain releases. Feature flags and clear acceptance criteria keep momentum without disruption.",
//       color: "text-accent",
//     },
//     {
//       icon: FileText,
//       title: "Ownership & Handover",
//       description: "Docs, runbooks, and code walkthroughs - your team can operate confidently without us.",
//       color: "text-primary-glow",
//     },
//   ];

//   return (
//     <section className="py-24 px-6 bg-gradient-card">
//       <div className="container mx-auto max-w-6xl">
//         <div className="text-center mb-16">
//           <div className="inline-block text-sm text-accent font-semibold mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
//             Trust
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">Guarantees & SLAs</h2>
//           <p className="text-xl text-muted-foreground">
//             Clear expectations, predictable delivery, and support that shows up.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {guarantees.map((guarantee, index) => (
//             <div
//               key={index}
//               className="bg-background border border-border rounded-xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
//             >
//               <div className={`mb-4 ${guarantee.color}`}>
//                 <guarantee.icon className="w-8 h-8" />
//               </div>
//               <h3 className="text-xl font-bold mb-3">{guarantee.title}</h3>
//               <p className="text-muted-foreground text-sm leading-relaxed">{guarantee.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // FinalCTA
// const FinalCTASection = () => {
//   return (
//     <section className="py-16 sm:py-24 px-4 sm:px-6">
//       <div className="container mx-auto max-w-4xl">
//         <div className="bg-gradient-hero border border-border rounded-xl sm:rounded-2xl p-6 sm:p-12 text-center">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
//             Ready to turn complexity into clarity?
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-10 px-4">
//             Start with a 10-day discovery sprint - plan, prototype, estimate.
//           </p>
//           <div className="flex flex-wrap gap-3 sm:gap-4 justify-center px-4">
//             <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-sm sm:text-base">
//               <a href="/contact">Book discovery <ArrowRight className="w-4 h-4" /></a>
//             </Button>
//             <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-sm sm:text-base">
//               <a href="/services">How we deliver</a>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Main Index
// const Index = () => {
//   return (
//     <div className="min-h-screen bg-background text-foreground relative">
//       <ParticleBackground />
//       <ScrollProgress />
//       <Navigation />
//       <HeroSection />
//       <PrinciplesSection />
//       <FeaturesSection />
//       <SystemsEndureSection />
//       <TechStackSection />
//       <GuaranteesSection />
//       <FinalCTASection />
//       <Footer />
//     </div>
//   );
// };

// export default Index;

'use client';

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  BarChart3,
  Rocket,
  Code2,
  Database,
  Cloud,
  Smartphone,
  Workflow,
  Shield,
  Clock,
  CheckCircle2,
  GitBranch,
  FileText,
} from "lucide-react";
import { useState, useEffect } from "react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgress from "@/components/ScrollProgress";

import { fetchHomeData } from "../service/homeService";
import { fetchCards } from "../service/contactService";

// === AnimatedCounter (unchanged) ===
const AnimatedCounter = ({ end, prefix = "", suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  return <>{prefix}{count}{suffix}</>;
};

// === Hero Section (dynamic) ===
const HeroSection = ({ hero, stats }: { hero?: any; stats?: Record<string, number> }) => {
  const defaultStats = [
    { stat: 95, label: "Success rate", sublabel: "Projects delivered", suffix: "%" },
    { stat: 12, label: "Response time", sublabel: "Support that shows up", prefix: "<", suffix: "h" },
    { stat: 100, label: "Integration", sublabel: "Full-stack expertise", suffix: "%" },
    { stat: 99, label: "Security score", sublabel: "Audits & compliance", suffix: "%" },
  ];

  const displayStats = stats
    ? Object.entries(stats).map(([key, value]) => ({
        stat: value,
        label: key.replace(/([A-Z])/g, " $1").trim(),
        sublabel: "",
        prefix: "",
        suffix: "",
      }))
    : defaultStats.map((item) => ({ ...item, prefix: item.prefix ?? "" }));

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 relative">
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6 sm:mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs sm:text-sm text-muted-foreground">
              {hero?.badge || "We ship reliable software - fast"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            {hero?.title || (
              <>
                Software with{" "}
                <span className="text-accent">precision</span> - and a deep respect for{" "}
                <span className="text-primary">yours</span>.
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl leading-relaxed">
            {hero?.description ||
              "We transform complex processes into measurable outcomes using modern stacks and proven methodologies. When systems fail, we make them work - and keep them working."}
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 hover:scale-105 transition-transform"
            >
              <a href={hero?.primaryButton?.link || "/contact"}>
                {hero?.primaryButton?.text || "Start discovery"} <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-transform"
            >
              <a href={hero?.secondaryButton?.link || "/services"}>
                {hero?.secondaryButton?.text || "How we deliver"}
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
            {displayStats.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-card border border-border rounded-lg p-4 sm:p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-xl sm:text-2xl font-bold text-accent mb-1">
                  <AnimatedCounter end={item.stat} prefix={item.prefix} suffix={item.suffix} />
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

// === Principles (hardcoded) ===
const PrinciplesSection = () => {
  const principles = [
    {
      title: "Systems that transform",
      color: "text-primary",
      points: [
        "Weeks, not quarters - speed to value",
        "Dashboards beat guesswork - clarity & control",
        "Uptime, alerts, playbooks - reliability",
      ],
    },
    {
      title: "Software with purpose",
      color: "text-accent",
      points: [
        "Language of your business in labels & flows",
        "Processes mirror how work actually happens",
        "Quality engineering built in from day one",
      ],
    },
    {
      title: "Own the outcome",
      color: "text-primary-glow",
      points: [
        "Discovery to Implementation to Support - clear path",
        "Small, certain wins that compound over time",
        "Confidence you can defend in any boardroom",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block text-xs sm:text-sm text-accent font-semibold mb-4 px-3 sm:px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            Principles
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            We build with care, precision, and respect for your domain
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Three truths that guide everything we ship.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-gradient-card border border-border rounded-xl p-6 sm:p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
              }}
            >
              <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${principle.color}`}>
                {principle.title}
              </h3>
              <ul className="space-y-4">
                {principle.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${principle.color} mt-2 flex-shrink-0`} />
                    <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// === Features (hardcoded) ===
const FeaturesSection = () => {
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
            <div key={index} className="text-center group px-4">
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} p-3 sm:p-4 group-hover:scale-110 transition-transform duration-300`}
              >
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

// === SystemsEndure (hardcoded) ===
const SystemsEndureSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Good systems outlive projects
          </h2>
          <div className="mb-8 space-y-4">
            <p className="text-2xl text-muted-foreground">
              The real question isn't <span className="italic">can it be built?</span>
            </p>
            <p className="text-2xl font-semibold text-primary">
              It's <span className="text-accent">will it endure?</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// === TechStack (hardcoded) ===
const TechStackSection = () => {
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
                className="flex flex-col items-center gap-4 p-6 bg-gradient-card border border-border rounded-xl hover:shadow-glow transition-all duration-500 group cursor-pointer hover:-translate-y-3 hover:scale-105"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className={`${tech.color} transition-all duration-500 group-hover:scale-110 relative z-10`}>
                  <IconComponent className="w-12 h-12" />
                </div>
                <span className="text-sm font-semibold text-center transition-all duration-300 group-hover:scale-105 group-hover:text-primary relative z-10">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// === Guarantees (dynamic if cards exist) ===
const GuaranteesSection = ({ cards }: { cards?: any[] }) => {
  const backendGuarantees = cards?.filter(c => c.type === "guarantee" && c.isActive);

  const defaultGuarantees = [
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

  const guarantees = backendGuarantees?.length ? backendGuarantees : defaultGuarantees;

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
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon || guarantee.Icon;
            return (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`mb-4 ${guarantee.color || "text-primary"}`}>
                  {Icon && <Icon className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold mb-3">{guarantee.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{guarantee.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// === FinalCTA (dynamic) ===
const FinalCTASection = ({ cta }: { cta?: any }) => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-hero border border-border rounded-xl sm:rounded-2xl p-6 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            {cta?.title || "Ready to turn complexity into clarity?"}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-10 px-4">
            {cta?.description || "Start with a 10-day discovery sprint - plan, prototype, estimate."}
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center px-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-sm sm:text-base"
            >
              <a href={cta?.buttonLink || "/contact"}>
                {cta?.buttonText || "Book discovery"} <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-sm sm:text-base"
            >
              <a href="/services">How we deliver</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// === Main Page ===
const Index = () => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const [homeRes, cardsRes] = await Promise.all([fetchHomeData(), fetchCards()]);
        setData({ home: homeRes, cards: cardsRes });
      } catch (err) {
        console.error("Failed to load data:", err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
      </div>
    );
  }

  const { home, cards } = data;

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticleBackground />
      <ScrollProgress />
      <Navigation />

      <HeroSection hero={home?.hero} stats={home?.stats} />
      <PrinciplesSection />
      <FeaturesSection />
      <SystemsEndureSection />
      <TechStackSection />
      <GuaranteesSection cards={cards} />
      <FinalCTASection cta={home?.cta} />

      <Footer />
    </div>
  );
};

export default Index;