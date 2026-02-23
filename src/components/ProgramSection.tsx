import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, Plus } from "lucide-react";

const days = [
  {
    label: "Vendredi",
    date: "24 Avril",
    sessions: [
      {
        time: "14:00 - 15:30",
        title: "Accueil & Enregistrement",
        type: "Logistique",
        desc: "Installation des délégations et distribution des kits participants",
      },
      {
        time: "16:00 - 17:30",
        title: "Cérémonie d'Ouverture",
        type: "Plénière",
        desc: "Discours d'ouverture du Président National et des invités d'honneur",
      },
      {
        time: "18:00 - 19:30",
        title: "Ice Breaking & Networking",
        type: "Social",
        desc: "Activités de cohésion et de réseautage entre présidents locaux",
      },
      {
        time: "20:00",
        title: "Dîner Officiel",
        type: "Social",
        desc: "Dîner de gala avec les partenaires et sponsors",
      },
    ],
  },
  {
    label: "Samedi",
    date: "25 Avril",
    sessions: [
      {
        time: "09:00 - 10:30",
        title: "Assemblée Générale - Partie 1",
        type: "Plénière",
        desc: "Rapport moral et financier du mandat précédent",
      },
      {
        time: "11:00 - 12:30",
        title: "Ateliers Stratégiques",
        type: "Formation",
        desc: "Sessions parallèles sur la transformation digitale des OLM",
      },
      {
        time: "14:00 - 15:30",
        title: "Plan d'Action National 2026",
        type: "Plénière",
        desc: "Présentation et adoption du plan stratégique annuel",
      },
      {
        time: "16:00 - 17:30",
        title: "Formation Leadership",
        type: "Formation",
        desc: "Workshop sur le leadership innovant post-Congrès Mondial",
      },
    ],
  },
  {
    label: "Dimanche",
    date: "26 Avril",
    sessions: [
      {
        time: "09:00 - 10:30",
        title: "Assemblée Générale - Partie 2",
        type: "Plénière",
        desc: "Votes et résolutions statutaires",
      },
      {
        time: "11:00 - 12:00",
        title: "Cérémonie de Clôture",
        type: "Plénière",
        desc: "Synthèse des travaux et engagements collectifs",
      },
      {
        time: "12:30",
        title: "Déjeuner de Clôture",
        type: "Social",
        desc: "Repas de clôture et départ des délégations",
      },
    ],
  },
];

const typeColors: Record<string, string> = {
  Plénière: "bg-primary/10 text-primary",
  Formation: "bg-secondary/10 text-secondary",
  Social: "bg-muted text-muted-foreground",
  Logistique: "bg-muted text-muted-foreground",
};

const ProgramSection = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="programme" className="py-5 md:py-8 bg-background relative">
      <div className="container px-4">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-3xl md:text-5xl text-primary uppercase tracking-wide">
            Le Programme
          </h2>
          <div className="flex items-center justify-center gap-3 mt-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground font-display text-sm">Hammamet, Tunisie</span>
          </div>
        </motion.div>

        {/* Day tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12">
          {days.map((day, i) => (
            <button
              key={i}
              onClick={() => setActiveDay(i)}
              className={`px-4 md:px-8 py-3 md:py-4 rounded-sm font-display font-semibold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 ${
                activeDay === i
                  ? "bg-secondary text-secondary-foreground shadow-lg"
                  : "bg-card text-foreground border border-secondary/20 hover:border-secondary/40"
              }`}
            >
              <span className="block">{day.label}</span>
              <span className="block text-[10px] md:text-xs font-light mt-1 opacity-70">{day.date}</span>
            </button>
          ))}
        </div>

          {/* This will be removed  */}
        <div className="text-center">
          <p className="font-script text-xl md:text-2xl text-secondary mb-3">Bientôt Révélé</p>
          <p className="text-muted-foreground font-display text-sm md:text-base leading-relaxed">
            Le programme complet des trois jours sera dévoilé très prochainement.
            <br />
            Restez connectés pour découvrir les sessions, ateliers et moments forts qui vous attendent.
          </p>
        </div>
        

        {/* Sessions */}
        {/* <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {days[activeDay].sessions.map((session, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-secondary/10 rounded-sm p-5 md:p-6 hover:border-primary/30 transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6">
                  <div className="flex items-center gap-2 text-muted-foreground shrink-0">
                    <Clock className="w-4 h-4" />
                    <span className="font-display text-sm font-medium">{session.time}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                          {session.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1 font-display font-light">{session.desc}</p>
                      </div>
                      <span className={`text-[10px] uppercase font-display font-semibold tracking-wider px-3 py-1 rounded-sm shrink-0 ${typeColors[session.type]}`}>
                        {session.type}
                      </span>
                    </div>
                  </div>
                  <button
                    className="hidden md:flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    title="Ajouter à l'agenda"
                  >
                    <Plus className="w-3 h-3" />
                    <Calendar className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence> */}
      </div>
    </section>
  );
};

export default ProgramSection;
