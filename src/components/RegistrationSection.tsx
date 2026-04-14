import { motion } from "framer-motion";
import { FileText, CreditCard, Copy, CheckCircle, ExternalLink, Bed, Star } from "lucide-react";
import { useState } from "react";

const RegistrationSection = () => {
  const [copied, setCopied] = useState(false);

  const hotels = [
    {
      name: "Hôtel LAICO Blue Marine",
      accentClass: "text-primary",
      lineClass: "via-primary/30",
      options: [
        {
          key: "VSD",
          title: "Hébergement VSD",
          icon: Star,
          prices: [
            { label: "Double", amount: 270 },
            { label: "Triple", amount: 266 },
            { label: "Quadruple", amount: 260 },
          ],
          singleSupplement: 50,
          unit: "TND",
          badgeClass: "bg-primary/10 text-primary",
          priceColor: "text-primary",
        },
        {
          key: "SD",
          title: "Hébergement SD",
          icon: Bed,
          prices: [
            { label: "Double", amount: 135 },
            { label: "Triple", amount: 133 },
            { label: "Quadruple", amount: 130 },
          ],
          singleSupplement: 50,
          unit: "TND",
          badgeClass: "bg-secondary/10 text-secondary",
          priceColor: "text-primary",
        },
      ],
    },
    {
      name: "Green Golf Hammamet",
      accentClass: "text-emerald-600 dark:text-emerald-400",
      lineClass: "via-emerald-500/30",
      options: [
        {
          key: "GREEN_VSD",
          title: "Hébergement VSD",
          icon: Star,
          prices: [
            { label: "Single", amount: 180 },
            { label: "Double", amount: 120 },
            { label: "Triple", amount: 116 },
            { label: "Quadruple", amount: 110 },
          ],
          unit: "DT",
          badgeClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
          priceColor: "text-emerald-600 dark:text-emerald-400",
        },
        {
          key: "GREEN_SD",
          title: "Hébergement VS ou SD",
          icon: Bed,
          prices: [
            { label: "Single", amount: 90 },
            { label: "Double", amount: 60 },
            { label: "Triple", amount: 58 },
            { label: "Quadruple", amount: 55 },
          ],
          unit: "DT",
          badgeClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
          priceColor: "text-emerald-600 dark:text-emerald-400",
        },
      ],
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
          {/* Hotels & Tarifs */}
          {hotels.map((hotel, hotelIdx) => (
            <motion.div
              key={hotel.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: hotelIdx * 0.15 }}
              className="mb-16"
            >
              {/* Hotel Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className={`hidden sm:block w-12 h-px bg-gradient-to-r from-transparent ${hotel.lineClass}`} />
                  <h3 className={`font-display font-bold text-lg md:text-xl uppercase tracking-wider ${hotel.accentClass}`}>
                    {hotel.name}
                  </h3>
                  <span className={`hidden sm:block w-12 h-px bg-gradient-to-l from-transparent ${hotel.lineClass}`} />
                </div>
              </div>

              {/* Pricing Cards */}
              <div className={`grid ${hotel.options.length > 1 ? 'md:grid-cols-2' : ''} gap-6 ${hotel.options.length > 1 ? 'max-w-4xl' : 'max-w-md'} mx-auto`}>
                {hotel.options.map((option, i) => {
                  const IconComponent = option.icon;
                  return (
                    <motion.div
                      key={option.key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (hotelIdx * 0.15) + (i * 0.1) }}
                      className="bg-background border border-secondary/20 rounded-sm p-8 text-center"
                    >
                      <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center ${option.badgeClass}`}>
                        <IconComponent className="w-7 h-7" />
                      </div>

                      <h4 className="font-display font-bold text-lg text-secondary uppercase tracking-wide mb-3">
                        {option.title}
                      </h4>

                      <div className="space-y-2 text-left">
                        {option.prices.map((price) => (
                          <div
                            key={price.label}
                            className="flex items-center justify-between rounded-sm bg-card/70 px-4 py-3"
                          >
                            <span className="font-display text-sm font-medium uppercase tracking-wider text-muted-foreground">
                              {price.label}
                            </span>
                            <span className={`font-display text-xl font-black ${option.priceColor}`}>
                              {price.amount} <span className="text-sm font-semibold text-muted-foreground">{option.unit}</span>
                            </span>
                          </div>
                        ))}
                      </div>

                      {option.singleSupplement && (
                        <p className="mt-4 font-display text-xs text-muted-foreground">
                          Supplément Single : <span className="font-semibold text-foreground">+{option.singleSupplement} DT / nuitée</span>
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
          
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
                NB : L’inscription RNP (35 DT) est à payer sur place le jour J.
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
                href="https://docs.google.com/forms/d/e/1FAIpQLSfEG7MT6YIo4zDk8EuKCJDOv-5HsemV2qv6JAqDXTjeZ1Cqkg/viewform?usp=header"
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
