const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "internship", label: "Internship" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Manas Ranjan Matiary
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Electrical Engineering & IoT Innovation
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Manas Ranjan Matiary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
