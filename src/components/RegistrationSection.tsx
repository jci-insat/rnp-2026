import { motion } from "framer-motion";
import { FileText, CreditCard, Copy, CheckCircle, ExternalLink, Users, Bed, Star } from "lucide-react";
import { useState } from "react";

const RegistrationSection = () => {
  const [copied, setCopied] = useState(false);
  const [selectedType, setSelectedType] = useState<'VSD' | 'SD' | 'Simple'>('SD');

  const registrationTypes = {
    VSD: {
      title: 'Pack VSD',
      icon: Star,
      color: 'primary',
      invCol: 'white',
      features: [
        'Hébergement 2 nuits',
        'Pension complète',
        'Accès à toutes les sessions',
        'Kit participant officiel',
        'Soirée'
      ],
      roomOptions: [
        { type: 'binome', people: 2, price: 280, label: 'Binôme (2 pers.)' },
        { type: 'trinome', people: 3, price: 250, label: 'Trinôme (3 pers.)' },
        { type: 'quadrinome', people: 4, price: 230, label: 'Quadrinôme (4 pers.)' }
      ]
    },
    SD: {
      title: 'Pack SD',
      icon: Bed,
      color: 'secondary',
      invCol: 'white',
      features: [
        'Hébergement 1 nuit',
        'Pension Demi-pension',
        'Accès à toutes les sessions',
        'Kit participant officiel',
        'Soiré',
      ],
      roomOptions: [
        { type: 'binome', people: 2, price: 180, label: 'Binôme (2 pers.)' },
        { type: 'trinome', people: 3, price: 150, label: 'Trinôme (3 pers.)' },
        { type: 'quadrinome', people: 4, price: 130, label: 'Quadrinôme (4 pers.)' }
      ]
    },
    Simple: {
      title: 'Pack Simple',
      icon: Users,
      color: 'muted',
      invCol: 'secondary',
      description: 'Participation sans hébergement',
      features: [
        'Accès aux sessions de jour',
        'Kit participant de base',
        'Certificat de participation',
        'Accès networking de jour'
      ],
      price: 50
    }
  };

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
          
          {/* Registration Type Selector */}
          <div className="flex justify-center gap-2 md:gap-4 mb-12">
            {Object.entries(registrationTypes).map(([key, type]) => {
              const IconComponent = type.icon;
              const isActive = selectedType === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedType(key as any)}
                  className={`px-4 md:px-6 py-3 md:py-4 rounded-sm font-display font-semibold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? `bg-${type.color} text-${type.invCol} shadow-lg`
                      : "bg-card text-foreground border border-secondary/20 hover:border-secondary/40"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{type.title}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Registration Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            {selectedType === 'Simple' ? (
              // Simple Pack (no roommate options)
              <div className="max-w-md mx-auto">
                <div className="bg-background border border-secondary/20 rounded-sm p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-muted/20 flex items-center justify-center">
                    <Users className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-secondary uppercase tracking-wide mb-2">
                    {registrationTypes.Simple.title}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="font-display font-black text-5xl text-primary">{registrationTypes.Simple.price}</span>
                    <span className="font-display text-lg text-muted-foreground ml-2">TND</span>
                  </div>
                  
                  <ul className="space-y-3 text-left">
                    {registrationTypes.Simple.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="font-display text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              // VSD and SD Packs (with roommate options)
              <div>
                <div className="grid md:grid-cols-3 gap-6">
                  {registrationTypes[selectedType].roomOptions?.map((option, i) => (
                    <motion.div
                      key={option.type}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-background border border-secondary/20 rounded-sm p-6 text-center hover:border-primary/30 transition-colors group"
                    >
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-display font-bold text-lg text-foreground mb-2">{option.label}</h4>
                      <div className="mb-4">
                        <span className="font-display font-black text-3xl text-primary">{option.price}</span>
                        <span className="font-display text-sm text-muted-foreground ml-1">TND/pers</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-4">Prix par personne</p>
                      
                      <div className="bg-card rounded-sm p-3 mb-4">
                        <p className="text-xs font-display font-semibold text-secondary">
                          Total pour {option.people} personnes
                        </p>
                        <p className="font-display font-bold text-lg text-primary">
                          {option.price * option.people} TND
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="bg-card rounded-sm p-6 mt-8">
                  <h4 className="font-display font-semibold text-sm text-secondary uppercase tracking-wider mb-4">
                    Services inclus
                  </h4>
                  <div className="grid md:grid-cols-3 gap-3">
                    {registrationTypes[selectedType].features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="font-display text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
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
                    <span className="font-semibold text-foreground">RIB :</span> TN59 0405 7142 0016 1752 2694
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
      </div>
    </section>
  );
};

export default RegistrationSection;
