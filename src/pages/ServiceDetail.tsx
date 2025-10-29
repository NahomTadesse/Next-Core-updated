import { useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Server, Smartphone, Link2, BarChart3, Cloud, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams();

  const serviceData: Record<string, {
    icon: any;
    title: string;
    description: string;
    color: string;
    overview: string;
    benefits: string[];
    capabilities: string[];
    approach: string[];
  }> = {
    "enterprise-platform-delivery": {
      icon: Server,
      title: "Enterprise Platform Delivery",
      description: "Implementations, customizations, and long-term support for enterprise platforms - built to fit your processes.",
      color: "from-primary to-primary-glow",
      overview: "We deliver enterprise platforms that adapt to your unique workflows, not the other way around. From ERP systems to custom business platforms, we ensure seamless implementation, intuitive customization, and sustained performance.",
      benefits: [
        "Reduced time-to-value with proven implementation frameworks",
        "Custom workflows that match your business processes",
        "Ongoing support and optimization for continuous improvement",
        "Training and knowledge transfer for your team",
      ],
      capabilities: [
        "Platform implementation and deployment",
        "Custom module development",
        "Data migration and integration",
        "Performance optimization",
        "User training and documentation",
        "24/7 support and maintenance",
      ],
      approach: [
        "Discovery: Deep dive into your processes and pain points",
        "Design: Map current state to future capabilities",
        "Deliver: Iterative rollout with continuous feedback",
        "Support: Proactive monitoring and rapid response",
      ],
    },
    "product-engineering-web-mobile": {
      icon: Smartphone,
      title: "Product Engineering (Web & Mobile)",
      description: "Web platforms and mobile apps with beautiful UX, offline-first flows, and seamless payments.",
      color: "from-accent to-accent/80",
      overview: "We build digital products that users love - responsive web applications and native mobile apps designed for performance, usability, and growth.",
      benefits: [
        "Beautiful, intuitive interfaces that drive engagement",
        "Offline-first architecture for reliability",
        "Seamless payment integration for frictionless transactions",
        "Cross-platform consistency across web and mobile",
      ],
      capabilities: [
        "React and React Native development",
        "Progressive Web Apps (PWA)",
        "Native iOS and Android apps",
        "Payment gateway integration",
        "Real-time features and notifications",
        "App store deployment and updates",
      ],
      approach: [
        "Research: User journeys and competitive analysis",
        "Prototype: Interactive mockups for validation",
        "Build: Agile sprints with regular demos",
        "Launch: Staged rollout with monitoring",
      ],
    },
    "integrations-payments-messaging-apis": {
      icon: Link2,
      title: "Integrations (Payments, Messaging & APIs)",
      description: "Payment gateways, messaging platforms, CRM systems and more - reliable integrations that keep data in sync.",
      color: "from-primary-glow to-primary",
      overview: "Connect your systems seamlessly. We build robust integrations that ensure data flows reliably between platforms, reducing manual work and eliminating errors.",
      benefits: [
        "Automated data synchronization across systems",
        "Reduced manual entry and human error",
        "Real-time updates and notifications",
        "Scalable architecture that grows with you",
      ],
      capabilities: [
        "Payment gateway integration (Stripe, PayPal, etc.)",
        "Messaging platforms (Slack, WhatsApp, SMS)",
        "CRM and ERP integrations",
        "Custom API development",
        "Webhook management and event handling",
        "Data transformation and validation",
      ],
      approach: [
        "Audit: Map existing systems and data flows",
        "Design: Integration architecture and error handling",
        "Implement: Secure, tested connections",
        "Monitor: Continuous health checks and alerts",
      ],
    },
    "data-bi-ai": {
      icon: BarChart3,
      title: "Data, BI & AI",
      description: "Dashboards, automated reporting, and AI assistants that surface the right insights at the right time.",
      color: "from-accent to-primary",
      overview: "Turn data into decisions. We build intelligent systems that collect, analyze, and present insights when and where you need them.",
      benefits: [
        "Real-time dashboards for informed decision-making",
        "Automated reporting that saves hours each week",
        "AI-powered insights and recommendations",
        "Self-service analytics for your team",
      ],
      capabilities: [
        "Custom dashboard development",
        "ETL pipelines and data warehousing",
        "Machine learning model development",
        "Natural language processing",
        "Predictive analytics",
        "Automated report generation",
      ],
      approach: [
        "Understand: Key metrics and decision points",
        "Collect: Data pipeline setup and validation",
        "Analyze: Models and visualization",
        "Iterate: Continuous refinement based on usage",
      ],
    },
    "cloud-devops-security": {
      icon: Cloud,
      title: "Cloud, DevOps & Security",
      description: "Cloud architecture, CI/CD, security hardening, backups, and compliance - built for uptime and peace of mind.",
      color: "from-primary to-accent",
      overview: "Infrastructure that you can trust. We design, deploy, and maintain cloud environments that are secure, scalable, and always available.",
      benefits: [
        "99.9%+ uptime with proactive monitoring",
        "Automated deployments for faster releases",
        "Enterprise-grade security and compliance",
        "Cost optimization and resource management",
      ],
      capabilities: [
        "Cloud infrastructure design (AWS, Azure, GCP)",
        "CI/CD pipeline setup",
        "Container orchestration (Docker, Kubernetes)",
        "Security audits and hardening",
        "Automated backup and disaster recovery",
        "Compliance implementation (GDPR, HIPAA, SOC2)",
      ],
      approach: [
        "Assess: Current infrastructure and risks",
        "Architect: Scalable, secure design",
        "Automate: CI/CD and infrastructure as code",
        "Secure: Continuous monitoring and updates",
      ],
    },
    "technology-strategy-enablement": {
      icon: Lightbulb,
      title: "Technology Strategy & Enablement",
      description: "Architecture, roadmaps, and capability building - so your stack grows by design, not by accident.",
      color: "from-primary-glow to-accent",
      overview: "Strategic guidance for sustainable growth. We help you make the right technology decisions and build internal capabilities that last.",
      benefits: [
        "Clear technology roadmap aligned with business goals",
        "Reduced technical debt and better architecture",
        "Empowered internal teams with training and mentorship",
        "Informed decision-making on build vs. buy",
      ],
      capabilities: [
        "Technology assessment and audit",
        "Architecture design and documentation",
        "Technology selection and vendor evaluation",
        "Team training and knowledge transfer",
        "Process improvement and best practices",
        "CTO advisory and technical leadership",
      ],
      approach: [
        "Discover: Current state and future vision",
        "Strategize: Roadmap and priorities",
        "Enable: Training and documentation",
        "Support: Ongoing advisory and guidance",
      ],
    },
  };

  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Hero Section */}
          <div className="mb-16 animate-fade-in">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-8 inline-flex`}>
              <ServiceIcon className="w-full h-full text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.overview}
            </p>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 bg-gradient-card border border-border rounded-xl p-6">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Capabilities */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">What We Deliver</h2>
            <div className="bg-gradient-card border border-border rounded-xl p-8">
              <ul className="grid md:grid-cols-2 gap-4">
                {service.capabilities.map((capability, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-accent">•</span>
                    <span className="text-muted-foreground">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Our Approach */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
            <div className="space-y-4">
              {service.approach.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="pt-2">
                    <p className="text-foreground font-semibold">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-hero border border-border rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with {service.title.toLowerCase()}.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                <a href="/contact">Book discovery <ArrowRight className="w-4 h-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a href="/services">View all services</a>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
