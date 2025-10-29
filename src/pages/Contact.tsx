// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";

// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <Navigation />
      
//       <main className="pt-32 pb-24 px-6">
//         <div className="container mx-auto max-w-3xl">
//           <div className="text-center mb-12 animate-fade-in">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">
//               Say hello - we're listening
//             </h1>
//             <p className="text-xl text-muted-foreground">
//               Share a little about your goals. We'll respond with clarity, timelines, and the simplest path forward.
//             </p>
//           </div>

//           <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12">
//             <form className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="name" className="text-foreground">
//                     Name <span className="text-accent">*</span>
//                   </Label>
//                   <Input
//                     id="name"
//                     type="text"
//                     required
//                     className="bg-background border-border focus:border-primary"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="country" className="text-foreground">
//                     Country <span className="text-accent">*</span>
//                   </Label>
//                   <Input
//                     id="country"
//                     type="text"
//                     required
//                     className="bg-background border-border focus:border-primary"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="company" className="text-foreground">
//                   Company <span className="text-muted-foreground">(optional)</span>
//                 </Label>
//                 <Input
//                   id="company"
//                   type="text"
//                   className="bg-background border-border focus:border-primary"
//                 />
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="email" className="text-foreground">
//                     Email <span className="text-accent">*</span>
//                   </Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     required
//                     className="bg-background border-border focus:border-primary"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="phone" className="text-foreground">
//                     Mobile number <span className="text-accent">*</span>
//                   </Label>
//                   <Input
//                     id="phone"
//                     type="tel"
//                     required
//                     className="bg-background border-border focus:border-primary"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="message" className="text-foreground">
//                   How can we help? <span className="text-accent">*</span>
//                 </Label>
//                 <Textarea
//                   id="message"
//                   required
//                   rows={6}
//                   className="bg-background border-border focus:border-primary resize-none"
//                   placeholder="Tell us about your project, challenges, or goals..."
//                 />
//               </div>

//               <div className="text-sm text-muted-foreground">
//                 By contacting us you agree to our privacy policy.
//               </div>

//               <Button
//                 type="submit"
//                 size="lg"
//                 className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
//               >
//                 Send Message
//               </Button>
//             </form>
//           </div>

//           <div className="mt-16 text-center">
//             <h3 className="text-2xl font-bold mb-4">Prefer to email directly?</h3>
//             <a
//               href="mailto:hello@nextcoretech.com"
//               className="text-lg text-primary hover:text-primary-glow transition-colors"
//             >
//               hello@nextcoretech.com
//             </a>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;



'use client';

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, Building2, Clock, ChevronRight, User, Tag, DollarSign, Calendar, MessageSquare, Sparkles } from "lucide-react";

import { fetchCompanyInfo, fetchCards, submitContactForm } from "../service/contactService";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    message: "",
    serviceInterest: [],
    budget: "",
    timeline: "",
    privacyConsent: false,
  });
  const [formStatus, setFormStatus] = useState(null);
  const [companyInfo, setCompanyInfo] = useState(null);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [companyRes, cardsRes] = await Promise.all([fetchCompanyInfo(), fetchCards()]);
        setCompanyInfo(companyRes || {});
        setCards(cardsRes || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "privacyConsent") {
      setFormData({ ...formData, privacyConsent: checked });
    } else if (type === "checkbox" && name.startsWith("serviceInterest-")) {
      const serviceId = name.replace("serviceInterest-", "");
      const interests = checked
        ? [...formData.serviceInterest, serviceId]
        : formData.serviceInterest.filter((id) => id !== serviceId);
      setFormData({ ...formData, serviceInterest: interests });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.country || !formData.phone || !formData.privacyConsent) {
      setFormStatus("Please fill in all required fields and agree to the privacy policy.");
      return;
    }
    setFormStatus("Sending...");
    const result = await submitContactForm(formData);
    if (result.success) {
      setFormStatus("Thank you! Your message has been sent.");
      setFormData({
        name: "", email: "", phone: "", company: "", country: "", message: "",
        serviceInterest: [], budget: "", timeline: "", privacyConsent: false,
      });
    } else {
      setFormStatus(`Error: ${result.error}`);
    }
    setTimeout(() => setFormStatus(null), 5000);
  };

  const contactCards = cards.filter((card) => card.type === "contact" && card.isActive);
  const serviceCards = cards.filter((card) => card.type === "service" && card.isActive);

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
        <div className="container mx-auto max-w-3xl">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Say hello - we're listening
            </h1>
            <p className="text-xl text-muted-foreground">
              {companyInfo?.tagline || "Share a little about your goals. We'll respond with clarity, timelines, and the simplest path forward."}
            </p>
          </div>

          {/* Contact Cards */}
          {contactCards.length > 0 && (
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {contactCards.map((card) => (
                <div
                  key={card._id}
                  className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground mb-4">{card.description}</p>
                  {card.features?.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {card.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Sparkles className="w-4 h-4 text-accent" />
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
                      {card.buttonText} <ChevronRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Form */}
          <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Name <span className="text-accent">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary pl-10"
                      placeholder="Your name"
                    />
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country" className="text-foreground">
                    Country <span className="text-accent">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="country"
                      name="country"
                      type="text"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary pl-10"
                      placeholder="Your country"
                    />
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground">
                  Company <span className="text-muted-foreground">(optional)</span>
                </Label>
                <div className="relative">
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-primary pl-10"
                    placeholder="Your company"
                  />
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email <span className="text-accent">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary pl-10"
                      placeholder="you@company.com"
                    />
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Mobile number <span className="text-accent">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary pl-10"
                      placeholder="+1 (555) 123-4567"
                    />
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Budget & Timeline */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-foreground">Budget</Label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full h-12 px-10 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-0 appearance-none cursor-pointer"
                    >
                      <option value="">Select range</option>
                      <option value="$10k-$25k">$10k - $25k</option>
                      <option value="$25k-$50k">$25k - $50k</option>
                      <option value="$50k+">$50k+</option>
                    </select>
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-foreground">Timeline</Label>
                  <div className="relative">
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full h-12 px-10 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:ring-0 appearance-none cursor-pointer"
                    >
                      <option value="">Select timeline</option>
                      <option value="1-3 months">1–3 months</option>
                      <option value="3-6 months">3–6 months</option>
                      <option value="6+ months">6+ months</option>
                    </select>
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Service Interests */}
              {serviceCards.length > 0 && (
                <div className="space-y-3">
                  <Label className="text-foreground flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-accent" />
                    Services you're interested in
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-40 overflow-y-auto p-3 bg-secondary/50 rounded-lg">
                    {serviceCards.map((service) => (
                      <label
                        key={service._id}
                        className="flex items-center gap-2 p-2 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors cursor-pointer text-sm"
                      >
                        <Checkbox
                          name={`serviceInterest-${service._id}`}
                          checked={formData.serviceInterest.includes(service._id)}
                          onCheckedChange={(checked) => {
                            const e = { target: { name: `serviceInterest-${service._id}`, type: "checkbox", checked } };
                            handleChange(e);
                          }}
                        />
                        <span className="text-foreground">{service.title}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  How can we help? <span className="text-accent">*</span>
                </Label>
                <div className="relative">
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background border-border focus:border-primary resize-none pl-10 pt-3"
                    placeholder="Tell us about your project, challenges, or goals..."
                  />
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="privacyConsent"
                  name="privacyConsent"
                  checked={formData.privacyConsent}
                  onCheckedChange={(checked) => {
                    const e = { target: { name: "privacyConsent", type: "checkbox", checked } };
                    handleChange(e);
                  }}
                  required
                />
                <Label htmlFor="privacyConsent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  By contacting us you agree to our <a href="#" className="text-primary hover:underline">privacy policy</a>.
                </Label>
              </div>

              {formStatus && (
                <div className={`p-3 rounded-lg text-sm font-medium border ${
                  formStatus.includes("Thank you") || formStatus === "Sending..."
                    ? "bg-green-50 text-green-700 border-green-200"
                    : "bg-red-50 text-red-700 border-red-200"
                }`}>
                  {formStatus}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                disabled={formStatus === "Sending..."}
              >
                {formStatus === "Sending..." ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Direct Email */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Prefer to email directly?</h3>
            {companyInfo?.email ? (
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-lg text-primary hover:text-primary-glow transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                {companyInfo.email}
              </a>
            ) : (
              <a
                href="mailto:hello@nextcoretech.com"
                className="text-lg text-primary hover:text-primary-glow transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                hello@nextcoretech.com
              </a>
            )}
          </div>

          {/* Business Hours */}
          {companyInfo?.businessHours && (
            <div className="mt-16 bg-gradient-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Business Hours
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {Object.entries(companyInfo.businessHours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="capitalize text-muted-foreground">{day}</span>
                    <span className={`font-medium ${hours === "Closed" ? "text-red-600" : "text-foreground"}`}>
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;