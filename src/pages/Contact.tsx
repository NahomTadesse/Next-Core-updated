import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Say hello - we're listening
            </h1>
            <p className="text-xl text-muted-foreground">
              Share a little about your goals. We'll respond with clarity, timelines, and the simplest path forward.
            </p>
          </div>

          <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Name <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country" className="text-foreground">
                    Country <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="country"
                    type="text"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground">
                  Company <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="company"
                  type="text"
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Mobile number <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  How can we help? <span className="text-accent">*</span>
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  className="bg-background border-border focus:border-primary resize-none"
                  placeholder="Tell us about your project, challenges, or goals..."
                />
              </div>

              <div className="text-sm text-muted-foreground">
                By contacting us you agree to our privacy policy.
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Prefer to email directly?</h3>
            <a
              href="mailto:hello@nextcoretech.com"
              className="text-lg text-primary hover:text-primary-glow transition-colors"
            >
              hello@nextcoretech.com
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
