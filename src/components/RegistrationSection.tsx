import { motion } from "framer-motion";
import { FileText, CreditCard, Copy, CheckCircle, ExternalLink, Users, Bed, Star } from "lucide-react";
import { useState } from "react";

const RegistrationSection = () => {
  const [copied, setCopied] = useState(false);

  const registrationTypes = [
    {
      key: "VSD",
      title: "Hébergement VSD",
      icon: Star,
      price: 270,
      singleSupplementPerNight: 50,
      badgeClass: "bg-primary/10 text-primary",
    },
    {
      key: "SD",
      title: "Hébergement SD",
      icon: Bed,
      price: 135,
      singleSupplementPerNight: 50,
      badgeClass: "bg-secondary/10 text-secondary",
    },
    {
      key: "Simple",
      title: "Inscription simple",
      icon: Users,
      price: 35,
      badgeClass: "bg-muted/20 text-muted-foreground",
    },
  ];

  const handleCopyRIB = () => {
    navigator.clipboard.writeText("TN59 0405 7142 0016 1752 2694");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="inscription" className="py-20 bg-card relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-black text-3xl md:text-5xl text-primary uppercase tracking-wide mb-8">
            Les Inscriptions
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Tarifs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {registrationTypes.map((type, i) => {
                const IconComponent = type.icon;
                return (
                  <motion.div
                    key={type.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-background border border-secondary/20 rounded-sm p-8 text-center"
                  >
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center ${type.badgeClass}`}>
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <h3 className="font-display font-bold text-lg text-secondary uppercase tracking-wide mb-3">
                      {type.title}
                    </h3>

                    <div className="mb-3">
                      <span className="font-display font-black text-4xl text-primary">{type.price}</span>
                      <span className="font-display text-sm text-muted-foreground ml-2">TND</span>
                    </div>

                    {"singleSupplementPerNight" in type && (
                      <p className="font-display text-xs text-muted-foreground">
                        Supplément single : <span className="font-semibold text-foreground">+{type.singleSupplementPerNight} TND / nuitée</span>
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Bank details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background border border-secondary/20 rounded-sm p-8"
            >
              <h4 className="font-display font-semibold text-lg text-secondary uppercase tracking-wider mb-6 flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Coordonnées Bancaires
              </h4>
              <div className="bg-card rounded-sm p-4 space-y-3">
                <p className="font-display text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Banque :</span> Attijari Bank
                </p>
                <p className="font-display text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Bénéficiaire :</span> JCI INSAT
                </p>
                <div className="flex items-center justify-between gap-2">
                  <p className="font-display text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">IBAN/RIB :</span> TN59 0405 7142 0016 1752 2694
                  </p>
                  <button
                    onClick={handleCopyRIB}
                    className="text-primary hover:text-sky-dark transition-colors p-1"
                    title="Copier le RIB"
                  >
                    {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 font-display">
                💡 Mentionnez le type d'inscription et le nombre de participants dans le libellé
              </p>
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
                href="https://docs.google.com/forms/d/e/1FAIpQLSdfDp5jD3WnEk5m8-3zQBfT5aVjy2WGz9GQAqsMiVyrm4iKpA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-semibold text-sm uppercase tracking-widest px-10 py-4 rounded-sm hover:bg-sky-dark transition-colors duration-300 shadow-lg shadow-primary/20"
              >
                <span>Accéder au formulaire</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-xs text-muted-foreground mt-4 font-display">
                Date limite : 18 Avril 2026
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
