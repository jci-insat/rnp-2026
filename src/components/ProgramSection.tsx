import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

type Session = {
  time: string;
  title: string;
  type: string;
  note?: string;
};

type Day = {
  label: string;
  date: string;
  sessions: Session[];
};

const days: Day[] = [
  {
    label: "Vendredi",
    date: "24 Avril",
    sessions: [
      { time: "10:00", title: "Accueil & inscription", type: "Logistique" },
      { time: "14:00", title: "Forum d'entreprises", type: "Programme" },
      { time: "14:30", title: "Ouverture", type: "Plénière" },
      { time: "15:00", title: "Lancement du Hackathon", type: "Programme" },
      {
        time: "15:00 - 17:00",
        title: "Formation : “The Art Of Influence & The Power Of The Pitch”",
        type: "Programme",
      },
      { time: "17:00 - 19:30", title: "Programme CYE", type: "Programme" },
      { time: "20:00", title: "Réunion BNE", type: "Plénière" },
      { time: "20:00", title: "Réunion des structures", type: "Plénière" },
      { time: "22:00", title: "Soirée", type: "Programme" },
    ],
  },
  {
    label: "Samedi",
    date: "25 Avril",
    sessions: [
      { time: "08:00", title: "Suite des inscriptions", type: "Logistique" },
      { time: "08:00", title: "Forum d'entreprises", type: "Programme" },
      { time: "10:00 - 14:00", title: "CYE", type: "Programme" },
      { time: "12:00", title: "Pitchs du Hackathon", type: "Programme" },
      { time: "14:00", title: "Intronisation des présidents", type: "Plénière" },
      { time: "15:00", title: "Panel Thème National", type: "Programme" },
      { time: "17:00 - 20:00", title: "1re partie — Assemblée Générale", type: "Plénière" },
      { time: "21:00", title: "Tunisian Village", type: "Programme" },
    ],
  },
  {
    label: "Dimanche",
    date: "26 Avril",
    sessions: [
      { time: "09:00 - 11:30", title: "2ème partie — Assemblée Générale", type: "Plénière" },
      { time: "11:30", title: "Annonce — Résultat des programmes", type: "Plénière" },
      { time: "13:00", title: "Check-out", type: "Logistique" },
    ],
  },
];

const typeColors: Record<string, string> = {
  Plénière: "bg-primary/10 text-primary",
  Programme: "bg-red-500/10 text-red-600 dark:text-red-400",
  Logistique: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
};

const ProgramSection = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="programme" className="py-5 md:py-8 bg-background relative">
      <div className="container px-4">
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

        <AnimatePresence mode="wait">
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
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-secondary/10 rounded-sm p-5 md:p-6 hover:border-primary/30 transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                  <div className="flex items-center gap-2 text-muted-foreground shrink-0 md:w-40">
                    <Clock className="w-4 h-4" />
                    <span className="font-display text-sm font-medium">{session.time}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {session.title}
                      </h3>
                      <span className={`text-[10px] uppercase font-display font-semibold tracking-wider px-3 py-1 rounded-sm shrink-0 ${typeColors[session.type]}`}>
                        {session.type}
                      </span>
                    </div>
                    {session.note && (
                      <p className="text-muted-foreground text-sm mt-1 font-display font-light">{session.note}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProgramSection;
