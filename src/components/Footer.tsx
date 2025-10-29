import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    Services: [
      { name: "Platform Delivery", path: "/services" },
      { name: "Product Engineering", path: "/services" },
      { name: "Integrations", path: "/services" },
      { name: "Data & BI", path: "/services" },
    ],
    Company: [
      { name: "About", path: "/about" },
      { name: "Products", path: "/products" },
      { name: "Insights", path: "/insights" },
      { name: "Contact", path: "/contact" },
    ],
    Connect: [
      { name: "LinkedIn", path: "#" },
      { name: "Twitter", path: "#" },
      { name: "GitHub", path: "#" },
    ],
  };

  return (
    <footer className="border-t border-border py-12 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-lg sm:text-xl font-bold">
                <span className="text-primary">NextCore</span>
                <span className="text-muted-foreground"> </span>
                <span className="text-accent">Technologies</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Software with precision - and a deep respect for yours.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-foreground">{category}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} NextCore Technologies. Crafted with precision and purpose.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <Link to="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
