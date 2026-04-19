import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import rnpLogo from "@/assets/logo-rnp.png";

const navLinks = [
  { label: "Programme", href: "#programme" },
  { label: "Activités", href: "#activites" },
  { label: "Inscriptions", href: "#inscription" },
  { label: "Partenaires", href: "#partenaires" },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const buildSectionHref = (section: string) => {
    if (location.pathname === "/") {
      return `#${section}`;
    }
    return `/#${section}`;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-background/95 backdrop-blur-md ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container px-4 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center">
          <img 
            src={rnpLogo} 
            alt="RNP 2026" 
            className="h-12 w-auto object-contain px-1"
          />
          <div className="flex items-center gap-1">
            <span className="font-script text-xl text-secondary">1re</span>
            <span className="font-display font-bold text-lg text-primary uppercase tracking-wider">
              RNP
            </span>
            <span className="font-display font-bold text-lg text-secondary">2026</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={buildSectionHref(link.href.replace("#", ""))}
              className="font-display text-xs uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={buildSectionHref("inscription")}
            className="bg-primary text-primary-foreground font-display font-semibold text-xs uppercase tracking-widest px-6 py-2.5 rounded-sm hover:bg-sky-dark transition-colors"
          >
            S'inscrire
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground m-6"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-secondary/10 overflow-hidden"
          >
            <div className="px-9 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={buildSectionHref(link.href.replace("#", ""))}
                  onClick={() => setMobileOpen(false)}
                  className="block font-display text-sm uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={buildSectionHref("inscription")}
                onClick={() => setMobileOpen(false)}
                className="block bg-primary text-primary-foreground font-display font-semibold text-sm uppercase tracking-widest px-6 py-3 rounded-sm text-center"
              >
                S'inscrire
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
