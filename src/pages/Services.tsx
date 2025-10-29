// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { Server, Smartphone, Link2, BarChart3, Cloud, Lightbulb, ArrowRight } from "lucide-react";

// const Services = () => {
//   const services = [
//     {
//       icon: Server,
//       title: "Enterprise Platform Delivery",
//       description: "Implementations, customizations, and long-term support for enterprise platforms - built to fit your processes.",
//       color: "from-primary to-primary-glow",
//     },
//     {
//       icon: Smartphone,
//       title: "Product Engineering (Web & Mobile)",
//       description: "Web platforms and mobile apps with beautiful UX, offline-first flows, and seamless payments.",
//       color: "from-accent to-accent/80",
//     },
//     {
//       icon: Link2,
//       title: "Integrations (Payments, Messaging & APIs)",
//       description: "Payment gateways, messaging platforms, CRM systems and more - reliable integrations that keep data in sync.",
//       color: "from-primary-glow to-primary",
//     },
//     {
//       icon: BarChart3,
//       title: "Data, BI & AI",
//       description: "Dashboards, automated reporting, and AI assistants that surface the right insights at the right time.",
//       color: "from-accent to-primary",
//     },
//     {
//       icon: Cloud,
//       title: "Cloud, DevOps & Security",
//       description: "Cloud architecture, CI/CD, security hardening, backups, and compliance - built for uptime and peace of mind.",
//       color: "from-primary to-accent",
//     },
//     {
//       icon: Lightbulb,
//       title: "Technology Strategy & Enablement",
//       description: "Architecture, roadmaps, and capability building - so your stack grows by design, not by accident.",
//       color: "from-primary-glow to-accent",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <Navigation />
      
//       <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-12 sm:mb-20 animate-fade-in">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
//               Services that move your business forward
//             </h1>
//             <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
//               We don't just deliver code - we deliver clarity, growth, and systems that fit. Rooted in listening, built with care, and supported long after launch.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24">
//             {services.map((service, index) => {
//               const serviceSlug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
//               return (
//                 <a
//                   key={index}
//                   href={`/services/${serviceSlug}`}
//                   className="bg-gradient-card border border-border rounded-xl p-6 sm:p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group cursor-pointer block"
//                 >
//                   <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.color} p-2.5 sm:p-3 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                     <service.icon className="w-full h-full text-white" />
//                   </div>
//                   <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
//                   <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
//                   <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all text-sm sm:text-base">
//                     Learn more <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
//                   </div>
//                 </a>
//               );
//             })}
//           </div>

//           <div className="bg-gradient-hero border border-border rounded-xl sm:rounded-2xl p-6 sm:p-12 text-center">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">
//               Not sure where to start? We'll map it with you.
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
//               Bring your goals and constraints. We'll design the path and prove it with a focused pilot.
//             </p>
//             <a
//               href="/contact"
//               className="inline-flex items-center justify-center rounded-lg px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-colors gap-2 text-sm sm:text-base"
//             >
//               Book discovery <ArrowRight className="w-4 h-4" />
//             </a>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Services;



'use client';

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useState, useEffect } from "react";
import { Server, Smartphone, Link2, BarChart3, Cloud, Lightbulb, ArrowRight, CheckCircle } from "lucide-react";

import { getServices } from "../service/servicesApi";
import { fetchCards } from "../service/contactService";

const Services = () => {
  const [services, setServices] = useState([]);
  const [cards, setCards] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [servicesRes, cardsRes] = await Promise.all([getServices(), fetchCards()]);
        setServices(servicesRes || []);
        setCards(cardsRes || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const serviceCards = cards.filter((card) => card.type === "service" && card.isActive);

  // Fallback icons (cycle through)
  const icons = [Server, Smartphone, Link2, BarChart3, Cloud, Lightbulb];

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <Navigation />
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navigation />

      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-12 sm:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
              Services that move your business forward
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              We don't just deliver code - we deliver clarity, growth, and systems that fit. Rooted in listening, built with care, and supported long after launch.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24">
            {services.map((service, index) => {
              const Icon = icons[index % icons.length];
              const gradient = [
                "from-primary to-primary-glow",
                "from-accent to-accent/80",
                "from-primary-glow to-primary",
                "from-accent to-primary",
                "from-primary to-accent",
                "from-primary-glow to-accent",
              ][index % 6];

              const serviceSlug = service.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `service-${index}`;

              return (
                <div
                  key={service._id || index}
                  onClick={() => openModal(service)}
                  className="bg-gradient-card border border-border rounded-xl p-6 sm:p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${gradient} p-2.5 sm:p-3 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all text-sm sm:text-base">
                    Learn more <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
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

      {/* Extra Service Cards */}
      {serviceCards.length > 0 && (
        <section className="py-16 sm:py-24 bg-gradient-card/30">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Explore More Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {serviceCards.map((card) => (
                <div
                  key={card._id}
                  className="bg-background border border-border rounded-xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold mb-3 text-primary">{card.title}</h3>
                  <p className="text-muted-foreground mb-4">{card.description}</p>
                  {card.features?.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {card.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                  {card.buttonText && (
                    <a
                      href={card.buttonLink}
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium"
                    >
                      {card.buttonText} <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-background rounded-2xl shadow-2xl p-8 relative max-h-[90vh] overflow-y-auto border border-border">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <ArrowRight className="w-6 h-6 rotate-180" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              {(() => {
                const Icon = icons[services.findIndex(s => s._id === selectedService._id) % icons.length];
                return <Icon className="w-10 h-10 text-primary" />;
              })()}
              <h2 className="text-2xl font-bold">{selectedService.title}</h2>
            </div>

            {selectedService.coverImage && (
              <img
                src={selectedService.coverImage}
                alt={selectedService.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
            )}

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {selectedService.fullDescription || selectedService.description}
            </p>

            {/* Features */}
            {selectedService.features?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Features</h3>
                <ul className="space-y-3">
                  {selectedService.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">{f.title || f}</span>
                        {f.description && <p className="text-muted-foreground text-sm mt-1">{f.description}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Process */}
            {selectedService.process?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Our Process</h3>
                <ol className="space-y-3">
                  {selectedService.process.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Technologies */}
            {selectedService.technologies?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech, i) => (
                    <span key={i} className="bg-secondary text-foreground px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Case Studies */}
            {selectedService.caseStudies?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Case Studies</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {selectedService.caseStudies.map((study, i) => (
                    <li key={i}>• {study}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links */}
            <div className="flex gap-4 mt-8">
              {selectedService.demoUrl && (
                <a
                  href={selectedService.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium"
                >
                  View Demo <ArrowRight className="w-4 h-4" />
                </a>
              )}
              {selectedService.liveUrl && (
                <a
                  href={selectedService.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 font-medium"
                >
                  Live Site <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Services;