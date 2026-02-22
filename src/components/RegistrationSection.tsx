import { motion } from "framer-motion";
import { FileText, CreditCard, Copy, CheckCircle, ExternalLink } from "lucide-react";
import { useState } from "react";

const RegistrationSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyRIB = () => {
    navigator.clipboard.writeText("TN59 1000 0000 0000 0000 0000");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="inscription" className="py-20 md:py-32 bg-card relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-script text-3xl text-secondary mb-2">Les</p>
          <h2 className="font-display font-black text-3xl md:text-5xl text-primary uppercase tracking-wide">
            Inscriptions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-secondary/20 rounded-sm p-8"
          >
            <h3 className="font-display font-bold text-xl text-secondary uppercase tracking-wide mb-6">
              Pack Résident
            </h3>
            <div className="mb-6">
              <span className="font-display font-black text-5xl text-primary">150</span>
              <span className="font-display text-lg text-muted-foreground ml-2">TND</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Hébergement 2 nuits (hôtel 4★)",
                "Pension complète (3 repas/jour)",
                "Accès à toutes les sessions",
                "Kit participant officiel",
                "Dîner de gala",
                "Certificat de participation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="font-display text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Bank details */}
            <div className="border-t border-secondary/10 pt-6">
              <h4 className="font-display font-semibold text-sm text-secondary uppercase tracking-wider mb-3 flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Coordonnées Bancaires
              </h4>
              <div className="bg-card rounded-sm p-4 space-y-2">
                <p className="font-display text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Banque :</span> BIAT
                </p>
                <div className="flex items-center justify-between gap-2">
                  <p className="font-display text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">RIB :</span> TN59 1000 0000 0000 0000 0000
                  </p>
                  <button
                    onClick={handleCopyRIB}
                    className="text-primary hover:text-sky-dark transition-colors"
                    title="Copier le RIB"
                  >
                    {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Registration CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display font-bold text-xl text-secondary mb-4">
              Formulaire d'Inscription
            </h3>
            <p className="text-muted-foreground font-display font-light text-sm mb-8 max-w-sm">
              Remplissez le formulaire Google pour confirmer votre participation. 
              N'oubliez pas de joindre votre preuve de paiement.
            </p>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-semibold text-sm uppercase tracking-widest px-10 py-4 rounded-sm hover:bg-sky-dark transition-colors duration-300 shadow-lg shadow-primary/20"
            >
              <span>Accéder au formulaire</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-xs text-muted-foreground mt-4 font-display">
              Date limite : 15 Avril 2026
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
