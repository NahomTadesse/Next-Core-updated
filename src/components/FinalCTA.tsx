import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-hero border border-border rounded-xl sm:rounded-2xl p-6 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Ready to turn complexity into clarity?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-10 px-4">
            Start with a 10-day discovery sprint - plan, prototype, estimate.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center px-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-sm sm:text-base">
              <a href="/contact">Book discovery <ArrowRight className="w-4 h-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-sm sm:text-base">
              <a href="/services">How we deliver</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
