const Principles = () => {
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
        "Discovery → Implementation → Support - clear path",
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
              style={{
                transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
              }}
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

export default Principles;
