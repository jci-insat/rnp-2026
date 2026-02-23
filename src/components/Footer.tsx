import { Mail, MapPin, Phone } from "lucide-react";
import logoRnp from "@/assets/logo-rnp.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Brand */}
          <div>
            <p className="font-script text-2xl">Première</p>
            <h3 className="font-display font-bold text-lg uppercase tracking-wide text-primary mb-4">
              RNP 2026
            </h3>
            <p className="font-display font-light text-sm text-secondary-foreground/70 leading-relaxed">
              La 1ère Réunion Nationale des Présidents de la JCI Tunisie, 
              sous le thème de 
              <span className="font-display font-bold text-sm text-primary tracking-widest"> la Tunisie autrement</span>.
            </p>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-32 h-32 flex items-center justify-center">
              <img 
                src={logoRnp} 
                alt="RNP 2026 Logo" 
                className="w-full h-full object-contain filter brightness-110"
              />
            </div>
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
                <span className="font-display text-sm text-secondary-foreground/70">Hammamet, Tunisie</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center">
          <p className="font-display text-xs text-secondary-foreground/50">
            © 2026 JCI INSAT. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
