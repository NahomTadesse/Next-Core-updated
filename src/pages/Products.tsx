// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { ArrowRight, Zap, Users, Building2, TrendingUp, DollarSign, Package } from "lucide-react";

// const Products = () => {
//   const products = [
//     {
//       icon: Users,
//       category: "Growth",
//       name: "ClientHub Pro",
//       description: "Customer relationship & loyalty engine designed for modern businesses.",
//       tagline: "Grow repeat business.",
//       color: "text-primary",
//     },
//     {
//       icon: Package,
//       category: "Operations",
//       name: "FlowMaster",
//       description: "Digital platforms for efficient, transparent operational workflows.",
//       tagline: "Streamline operations.",
//       color: "text-accent",
//     },
//     {
//       icon: Building2,
//       category: "Real Estate",
//       name: "PropertyCore",
//       description: "Complete property management with sales, leasing, and maintenance.",
//       tagline: "Manage properties seamlessly.",
//       color: "text-primary-glow",
//     },
//     {
//       icon: TrendingUp,
//       category: "Analytics",
//       name: "InsightEngine",
//       description: "Business intelligence with automated reporting and predictive insights.",
//       tagline: "Data-driven decisions.",
//       color: "text-primary",
//     },
//     {
//       icon: DollarSign,
//       category: "Finance",
//       name: "FinanceHub",
//       description: "Financial management for groups, lending, and expense tracking.",
//       tagline: "Financial clarity.",
//       color: "text-accent",
//     },
//     {
//       icon: Zap,
//       category: "Automation",
//       name: "WorkflowAI",
//       description: "Intelligent automation that adapts to your business processes.",
//       tagline: "Automate intelligently.",
//       color: "text-primary-glow",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <Navigation />
      
//       <main className="pt-32 pb-24 px-6">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-20 animate-fade-in">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">
//               Accelerators, not add-ons
//             </h1>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               Start from strength: ready-made systems that carry your identity - powering retail, property, finance, and more with guardrails, insights, and integrations your team trusts.
//             </p>
//           </div>

//           <div className="bg-gradient-card border border-border rounded-2xl p-12 mb-20 text-center">
//             <h2 className="text-3xl font-bold mb-4">Every great product starts with a problem worth solving.</h2>
//             <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
//               We design solutions that don't just check boxes - they untangle complex processes, bring clarity, and unlock growth.
//             </p>
//             <p className="text-xl font-semibold text-primary">
//               The question isn't <span className="text-muted-foreground">what do you use?</span>
//             </p>
//             <p className="text-xl font-semibold text-accent mt-2">
//               It's what problem did we solve?
//             </p>
//           </div>

//           <div>
//             <div className="mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">Battle-tested building blocks</h2>
//               <p className="text-lg text-muted-foreground">Deploy fast, then shape to fit your domain.</p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               {products.map((product, index) => (
//                 <div
//                   key={index}
//                   className="bg-gradient-card border border-border rounded-xl p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
//                 >
//                   <div className="flex items-start gap-4 mb-4">
//                     <div className={`p-3 rounded-lg bg-secondary ${product.color}`}>
//                       <product.icon className="w-6 h-6" />
//                     </div>
//                     <div>
//                       <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
//                       <h3 className="text-2xl font-bold">{product.name}</h3>
//                     </div>
//                   </div>
//                   <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
//                   <div className="flex items-center justify-between">
//                     <span className={`font-semibold ${product.color}`}>{product.tagline}</span>
//                     <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mt-24 text-center bg-gradient-card border border-border rounded-2xl p-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Not sure where to start?
//             </h2>
//             <p className="text-xl text-muted-foreground mb-8">
//               Bring your goals and constraints. We'll design the path and prove it with a focused pilot.
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

// export default Products;


'use client';

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useState, useEffect } from "react";
import { ArrowRight, Zap, Users, Building2, TrendingUp, DollarSign, Package, CheckCircle } from "lucide-react";

import { fetchProducts } from "../service/productService";
import { fetchCards } from "../service/contactService";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [productsRes, cardsRes] = await Promise.all([
          fetchProducts(currentPage),
          fetchCards(),
        ]);
        if (productsRes.success) {
          setProducts(productsRes.data || []);
          setTotalPages(productsRes.totalPages || Math.ceil(productsRes.count / 10));
        } else {
          setError("Failed to fetch products");
        }
        setCards(cardsRes || []);
      } catch (error) {
        setError("Failed to connect to the server. Please try again later.");
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

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const getProductImage = (product) => {
    return (
      product.images?.[0] ||
      product.logo ||
      "https://via.placeholder.com/400x300?text=No+Image"
    );
  };

  const productCards = cards.filter((card) => card.type === "product" && card.isActive);

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

      {error && (
        <div className="container mx-auto max-w-6xl px-6 py-8">
          <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-center">
            <p className="text-destructive font-medium">{error}</p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
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

          {/* Products Grid */}
          <section id="products">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Battle-tested building blocks</h2>
              <p className="text-lg text-muted-foreground">Deploy fast, then shape to fit your domain.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <div
                  key={product._id || index}
                  className="group bg-gradient-card border border-border rounded-xl p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => openModal(product)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-secondary">
                      <Package className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {product.category || "Product"}
                      </div>
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">
                      {product.tagline || "Ready to deploy"}
                    </span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-4">
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
          </section>

          {/* Product Cards */}
          {productCards.length > 0 && (
            <section className="mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Explore Our Accelerators</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {productCards.map((productCard, index) => (
                  <div
                    key={productCard._id || index}
                    className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="text-xl font-bold mb-3 text-primary">{productCard.title}</h3>
                    <p className="text-muted-foreground mb-4">{productCard.description}</p>
                    {productCard.features?.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {productCard.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                    {productCard.buttonText && (
                      <a
                        href={productCard.buttonLink}
                        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium"
                      >
                        {productCard.buttonText} <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Approach Section */}
          <section className="mt-24 bg-gradient-card border border-border rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Not sure where to start?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Bring your goals and constraints. We'll design the path and prove it with a focused pilot.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-colors"
            >
              Book discovery
            </a>
          </section>
        </div>
      </main>

      {/* Modal for Product Details */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-background rounded-2xl shadow-2xl p-8 relative max-h-[90vh] overflow-y-auto border border-border">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <ArrowRight className="w-6 h-6 rotate-180" />
            </button>
            <div className="flex items-center gap-4 mb-6">
              <Package className="w-10 h-10 text-primary" />
              <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
            </div>
            <img
              src={getProductImage(selectedProduct)}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {selectedProduct.fullDescription || selectedProduct.description}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Category:</span>{" "}
                  {selectedProduct.category}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Status:</span>{" "}
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    selectedProduct.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}>
                    {selectedProduct.status?.charAt(0).toUpperCase() + selectedProduct.status?.slice(1)}
                  </span>
                </p>
                {selectedProduct.demoUrl && (
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Demo:</span>{" "}
                    <a href={selectedProduct.demoUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      View Demo
                    </a>
                  </p>
                )}
              </div>
              <div>
                {selectedProduct.liveUrl && (
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Live:</span>{" "}
                    <a href={selectedProduct.liveUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Visit Site
                    </a>
                  </p>
                )}
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Created:</span>{" "}
                  {new Date(selectedProduct.createdAt).toLocaleDateString()}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Updated:</span>{" "}
                  {new Date(selectedProduct.updatedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            {selectedProduct.features?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Features</h3>
                <ul className="space-y-3">
                  {selectedProduct.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">{feature.title || feature}</span>
                        {feature.description && (
                          <p className="text-muted-foreground text-sm mt-1">{feature.description}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {selectedProduct.technologies?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-secondary text-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {selectedProduct.images?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedProduct.images.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      alt={`Product image ${i + 1}`}
                      className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Products;