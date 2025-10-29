// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { ArrowRight, FileText, Link2, Palette, BarChart3, Server } from "lucide-react";

// const Insights = () => {
//   const categories = [
//     { name: "Platform Engineering", icon: Server },
//     { name: "Integrations", icon: Link2 },
//     { name: "Product Craft", icon: Palette },
//     { name: "Data & BI", icon: BarChart3 },
//     { name: "DevOps", icon: Server },
//   ];

//   const featuredArticles = [
//     {
//       title: "Delivery Playbook",
//       subtitle: "Shipping calm systems at scale",
//       description: "Our playbook for moving from chaos to clarity - discovery, design, guardrails, and ongoing support.",
//       category: "Platform Engineering",
//     },
//     {
//       title: "Integrations",
//       subtitle: "Messaging, Payments, Telephony - integrations users love",
//       description: "Design notes from the field: why the last mile of integrations determines adoption.",
//       category: "Integrations",
//     },
//     {
//       title: "Data & BI",
//       subtitle: "From data exhaust to decisions",
//       description: "Lightweight BI practices that make weekly reviews honest and actionable.",
//       category: "Data & BI",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <Navigation />
      
//       <main className="pt-32 pb-24 px-6">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-20 animate-fade-in">
//             <div className="inline-block text-sm text-accent font-semibold mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
//               Insights
//             </div>
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">
//               Field notes from building systems that last
//             </h1>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               Essays, walkthroughs, and lessons learned from the field.
//             </p>
//           </div>

//           <div className="flex flex-wrap justify-center gap-3 mb-16">
//             {categories.map((category, index) => (
//               <button
//                 key={index}
//                 className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary border border-border hover:border-primary hover:bg-secondary/80 transition-all"
//               >
//                 <category.icon className="w-4 h-4" />
//                 <span className="text-sm font-medium">{category.name}</span>
//               </button>
//             ))}
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-24">
//             {featuredArticles.map((article, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-card border border-border rounded-xl p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
//               >
//                 <div className="text-sm text-muted-foreground mb-3">{article.category}</div>
//                 <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
//                 <p className="text-lg text-accent font-semibold mb-4">{article.subtitle}</p>
//                 <p className="text-muted-foreground mb-6 leading-relaxed">{article.description}</p>
//                 <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
//                   Read article <ArrowRight className="w-5 h-5" />
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="grid md:grid-cols-2 gap-6 mb-24">
//             {[
//               {
//                 icon: FileText,
//                 title: "Implementation Patterns",
//                 description: "Proven approaches for common challenges in enterprise software delivery.",
//               },
//               {
//                 icon: Link2,
//                 title: "Integration Architecture",
//                 description: "Building reliable connections between systems that users depend on.",
//               },
//               {
//                 icon: Palette,
//                 title: "UX & Product Design",
//                 description: "Creating interfaces that reduce cognitive load and feel natural to use.",
//               },
//               {
//                 icon: BarChart3,
//                 title: "Analytics & Insights",
//                 description: "Turning raw data into actionable intelligence for better decisions.",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-start gap-4 p-6 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 transition-colors"
//               >
//                 <div className="p-3 rounded-lg bg-primary/10">
//                   <item.icon className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-bold mb-2">{item.title}</h4>
//                   <p className="text-muted-foreground text-sm">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-gradient-hero border border-border rounded-2xl p-12 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Want a practical deep-dive for your team?
//             </h2>
//             <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
//               We run focused sessions on platform delivery, integrations, and BI - no fluff, just what works.
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

// export default Insights;



'use client';

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useState, useEffect } from "react";
import { ArrowRight, FileText, Link2, Palette, BarChart3, Server, BookOpen, Clock, Tag, User, Eye, Star, Calendar } from "lucide-react";

import { fetchInsights } from "../service/insightsService";
import { fetchCards } from "../service/contactService";

const Insights = () => {
  const [insights, setInsights] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedInsight, setSelectedInsight] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [insightsRes, cardsRes] = await Promise.all([
          fetchInsights(currentPage),
          fetchCards(),
        ]);
        if (insightsRes.success) {
          setInsights(insightsRes.data || []);
          setTotalPages(insightsRes.totalPages || 1);
        }
        setCards(cardsRes || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const openModal = (insight) => {
    setSelectedInsight(insight);
  };

  const closeModal = () => {
    setSelectedInsight(null);
  };

  const insightCards = cards.filter((card) => card.type === "insight" && card.isActive);

  // Category icons
  const categoryIcons = {
    "Platform Engineering": Server,
    "Integrations": Link2,
    "Product Craft": Palette,
    "Data & BI": BarChart3,
    "DevOps": Server,
  };

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

      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-20">
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

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {Object.entries(categoryIcons).map(([name, Icon], index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary border border-border hover:border-primary hover:bg-secondary/80 transition-all"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{name}</span>
              </button>
            ))}
          </div>

          {/* Featured Articles Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {insights
              .filter((insight) => insight.isFeatured)
              .slice(0, 3)
              .map((article, index) => {
                const Icon = categoryIcons[article.category] || BookOpen;
                return (
                  <div
                    key={article._id || index}
                    onClick={() => openModal(article)}
                    className="bg-gradient-card border border-border rounded-xl p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                  >
                    <div className="text-sm text-muted-foreground mb-3">{article.category}</div>
                    <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
                    <p className="text-lg text-accent font-semibold mb-4">{article.subtitle || article.excerpt?.slice(0, 60) + "..."}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                      {article.excerpt || article.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                      Read article <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 gap-6 mb-24">
            {[
              { icon: FileText, title: "Implementation Patterns", description: "Proven approaches for common challenges in enterprise software delivery." },
              { icon: Link2, title: "Integration Architecture", description: "Building reliable connections between systems that users depend on." },
              { icon: Palette, title: "UX & Product Design", description: "Creating interfaces that reduce cognitive load and feel natural to use." },
              { icon: BarChart3, title: "Analytics & Insights", description: "Turning raw data into actionable intelligence for better decisions." },
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

          {/* CTA */}
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="py-12 flex justify-center items-center gap-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="disabled:opacity-50 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:pointer-events-none"
          >
            Previous
          </button>
          <span className="text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="disabled:opacity-50 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:pointer-events-none"
          >
            Next
          </button>
        </div>
      )}

      {/* Insight Cards */}
      {insightCards.length > 0 && (
        <section className="py-16 bg-gradient-card/30">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">More Insights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {insightCards.map((card, index) => (
                <div
                  key={card._id || index}
                  className="bg-background border border-border rounded-xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold mb-3 text-primary">{card.title}</h3>
                  <p className="text-muted-foreground mb-4">{card.description}</p>
                  {card.features?.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {card.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <BookOpen className="w-4 h-4 text-accent" />
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
      {selectedInsight && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-background rounded-2xl shadow-2xl p-8 relative max-h-[90vh] overflow-y-auto border border-border">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <ArrowRight className="w-6 h-6 rotate-180" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{selectedInsight.title}</h2>
                {selectedInsight.subtitle && (
                  <p className="text-lg text-accent font-semibold mt-1">{selectedInsight.subtitle}</p>
                )}
              </div>
            </div>

            {selectedInsight.coverImage && (
              <img
                src={selectedInsight.coverImage}
                alt={selectedInsight.title}
                className="w-full h-80 object-cover rounded-xl mb-6 shadow-lg"
              />
            )}

            <div className="prose prose-lg max-w-none mb-8 text-muted-foreground">
              <p className="leading-relaxed">{selectedInsight.excerpt || selectedInsight.fullContent}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8 text-sm">
              <div className="space-y-3">
                <p className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">Author:</span> {selectedInsight.author?.username || "Team"}
                </p>
                <p className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">Category:</span> {selectedInsight.category}
                </p>
                <div className="flex items-start gap-2">
                  <Tag className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">Tags:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedInsight.tags?.map((tag, i) => (
                        <span key={i} className="bg-secondary text-foreground px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <p className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">Read Time:</span> {selectedInsight.readTime} min
                </p>
                <p className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">Views:</span> {selectedInsight.views || 0}
                </p>
                <p className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">Featured:</span> {selectedInsight.isFeatured ? "Yes" : "No"}
                </p>
                <p className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">Published:</span> {new Date(selectedInsight.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-border flex justify-end">
              <button
                onClick={closeModal}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium transition-colors"
              >
                Close <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Insights;