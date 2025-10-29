import { Button } from "@/components/ui/button";

const SystemsEndure = () => {
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

export default SystemsEndure;
