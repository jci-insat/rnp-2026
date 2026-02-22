import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Brand */}
          <div>
            <p className="font-script text-2xl mb-1">Première</p>
            <h3 className="font-display font-bold text-lg uppercase tracking-wide text-primary mb-4">
              RNP 2026
            </h3>
            <p className="font-display font-light text-sm text-secondary-foreground/70 leading-relaxed">
              La 1ère Réunion Nationale des Présidents de la JCI Tunisie, 
              sous le thème de la Transformation Digitale.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest mb-4 text-primary">
              Liens Rapides
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Programme", href: "#programme" },
                { label: "Inscriptions", href: "#inscription" },
                { label: "Partenaires", href: "#partenaires" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="font-display text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest mb-4 text-primary">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="font-display text-sm text-secondary-foreground/70">rnp@jcitunisie.org</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-display text-sm text-secondary-foreground/70">+216 XX XXX XXX</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-display text-sm text-secondary-foreground/70">Tunis, Tunisie</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center">
          <p className="font-display text-xs text-secondary-foreground/50">
            © 2026 JCI Tunisie. Tous droits réservés. Conçu avec ❤️ pour la Transformation Digitale.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
