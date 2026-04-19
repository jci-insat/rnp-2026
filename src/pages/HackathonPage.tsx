import { CalendarDays, CheckCircle2, Clock, Code2, ExternalLink, FileText, Handshake, Trophy, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialFloating from "@/components/SocialFloating";
import injazTunisiaLogo from "@/assets/injaz-tunisia.png";

const hackathonRegistrationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdtQ8aS5boPyW8JhzFPj1RBZKWkqAGzqFFhw2XTZcbC4YZqgw/viewform?usp=publish-editor";
const hackathonDocumentUrl = "https://drive.google.com/file/d/1uoKUK1I1jRm-uiCViX2IqOSZSo_KlK6h/view?usp=sharing";
const hackathonPreviewUrl = "https://drive.google.com/file/d/1uoKUK1I1jRm-uiCViX2IqOSZSo_KlK6h/preview";

const highlights = [
  {
    icon: Code2,
    title: "Challenge technique",
    description: "Une expérience orientée création, prototype et résolution de problème.",
  },
  {
    icon: Users,
    title: "Travail en équipe",
    description: "Constituez votre équipe et collaborez pour aller plus vite et plus loin.",
  },
  {
    icon: Trophy,
    title: "Esprit compétition",
    description: "Présentez votre solution et valorisez vos idées devant le jury.",
  }
];

type ProgramItem = {
  time: string;
  title: string;
  details?: string[];
};

type ProgramDay = {
  day: string;
  date: string;
  items: ProgramItem[];
};

const program: ProgramDay[] = [
  {
    day: "Jour 1",
    date: "Vendredi 24 avril",
    items: [
      {
        time: "15h00 – 15h30",
        title: "Ouverture & Brief",
        details: ["Présentation du hackathon", "Règles, livrables, critères"],
      },
      {
        time: "15h30 – 16h30",
        title: "Formation des équipes & idéation",
        details: [
          "Capsule 1 : Analyse de la problématique & Idéation",
          "Identifier un problème réel",
          "Comprendre ses enjeux, impact & ses causes",
        ],
      },
      {
        time: "16h30 – 19h30",
        title: "Bootcamp Entrepreneurial (Partie 1)",
        details: [
          "Capsule 2 : Rédiger un bon rapport & Pitch deck",
          "Capsule 3 : Proposition de valeur & Clientèle cible",
        ],
      },
      { time: "19h30 – 20h30", title: "Pause dîner" },
      {
        time: "20h45 – 22h00",
        title: "Hackathon – Prototypage",
        details: ["Capsule 4 : Étude de Marché", "Capsule 5 : Prototypage rapide"],
      },
      {
        time: "22h00 – 23h30",
        title: "Bootcamp Entrepreneurial (Partie 2)",
        details: [
          "Capsule 6 : Business Model Canvas",
          "Capsule 7 : Stratégie marketing & Étude de Marché",
        ],
      },
      { time: "23h30 – 00h30", title: "Mentoring & travail libre" },
    ],
  },
  {
    day: "Nuit Hackathon",
    date: "Vendredi → Samedi",
    items: [
      {
        time: "00h30 – 08h00",
        title: "Développement intensif",
        details: [
          "Capsule 8 : Modèle économique (20 min) — sources de revenus, pricing, viabilité",
          "Capsule 9 : Gestion du temps & travail en équipe (10 min)",
        ],
      },
    ],
  },
  {
    day: "Jour 2",
    date: "Samedi 25 avril",
    items: [
      { time: "08h00 – 09h00", title: "Petit-déjeuner" },
      {
        time: "09h00 – 10h30",
        title: "Finalisation des projets",
        details: ["Capsule 10 : Art du pitch"],
      },
      { time: "12h00 – 13h30", title: "Pitchs des équipes" },
      { time: "13h30 – 14h00", title: "Déjeuner" },
    ],
  },
  {
    day: "Jour 3",
    date: "Dimanche 26 avril",
    items: [{ time: "Journée", title: "Délibération & Clôture" }],
  },
];

const livrables = [
  "Prototype",
  "Rapport (marché, clientèle, marketing, business model) — un modèle à suivre",
  "Pitch de 5 minutes + Q&A (10 min)",
];

const HackathonPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container px-4 max-w-7xl">
          <section className="text-center mt-2 mb-12">
            <h1 className="font-display font-black text-4xl md:text-6xl text-primary uppercase tracking-wide leading-[0.92] mb-5">
              Hackathon
            </h1>

            <p className="font-display text-muted-foreground text-lg md:text-2xl max-w-3xl mx-auto leading-tight">
              Découvrez le dossier officiel du Hackathon et accédez à toutes les informations essentielles dans une
              seule page.
            </p>

            <a
              href={hackathonRegistrationUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 mt-6 font-display font-semibold text-sm uppercase tracking-widest text-primary-foreground hover:bg-sky-dark transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Inscription Hackathon
            </a>
          </section>

          <section className="space-y-6 mb-14">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="bg-card border border-secondary/15 rounded-xl p-5 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-secondary uppercase tracking-wide mb-2">
                      {item.title}
                    </h3>
                    <p className="font-display text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </article>
                );
              })}
            </div>

            <div className="bg-card/90 border border-secondary/15 rounded-2xl p-5 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <CalendarDays className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-black text-lg md:text-xl text-secondary uppercase tracking-wide">
                    Programme du Hackathon
                  </p>
                  <p className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                    Déroulé officiel des 3 jours
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {program.map((day) => (
                  <div key={day.day}>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4 pb-2 border-b border-secondary/10">
                      <h3 className="font-display font-black text-base md:text-lg text-primary uppercase tracking-wide">
                        {day.day}
                      </h3>
                      <span className="font-display text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground">
                        {day.date}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {day.items.map((item) => (
                        <li
                          key={`${day.day}-${item.time}-${item.title}`}
                          className="grid md:grid-cols-[170px_1fr] gap-2 md:gap-5 rounded-lg border border-secondary/10 bg-muted/20 p-4 hover:border-primary/30 transition-colors"
                        >
                          <div className="flex items-center gap-2 font-display text-xs md:text-sm font-semibold uppercase tracking-widest text-primary">
                            <Clock className="w-3.5 h-3.5 shrink-0" />
                            {item.time}
                          </div>
                          <div>
                            <p className="font-display font-bold text-sm md:text-base text-secondary">
                              {item.title}
                            </p>
                            {item.details && (
                              <ul className="mt-2 space-y-1">
                                {item.details.map((detail) => (
                                  <li
                                    key={detail}
                                    className="font-display text-xs md:text-sm text-muted-foreground leading-relaxed pl-3 border-l-2 border-primary/30"
                                  >
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card/90 border border-secondary/15 rounded-2xl p-5 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-black text-lg md:text-xl text-secondary uppercase tracking-wide">
                    Livrables demandés
                  </p>
                  <p className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                    Attendus par équipe
                  </p>
                </div>
              </div>

              <ul className="grid gap-3 md:grid-cols-3">
                {livrables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-secondary/10 bg-muted/20 p-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-display text-sm text-secondary leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card/90 border border-secondary/15 rounded-2xl p-5 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <Handshake className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-black text-lg md:text-xl text-secondary uppercase tracking-wide">
                    Partenaire du Hackathon
                  </p>
                  <p className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                    Avec le soutien de
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <a
                  href="https://injaz-tunisia.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-3 rounded-xl border border-secondary/10 bg-muted/20 px-10 py-6 hover:border-primary/40 transition-colors"
                >
                  <img
                    src={injazTunisiaLogo}
                    alt="Injaz Tunisia"
                    className="h-24 md:h-28 w-auto object-contain"
                  />
                  <span className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground group-hover:text-primary transition-colors">
                    Injaz Tunisia
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-card/90 border border-secondary/15 rounded-2xl p-2 md:p-2 shadow-sm">
              <div className="flex items-center justify-between gap-3 px-3 py-2 mb-3">
                <div className="min-w-0">
                  <p className="font-display font-black text-lg md:text-xl text-secondary uppercase tracking-wide whitespace-nowrap">
                    Document intégré
                  </p>
                  <p className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                    Vue intégrée du document
                  </p>
                </div>
                <a
                  href={hackathonDocumentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-secondary/15 px-3 py-2 font-display text-xs uppercase tracking-widest text-secondary hover:border-primary/40 hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Plein écran
                </a>
              </div>

              <div className="overflow-hidden rounded-xl border border-secondary/10 bg-muted/30">
                <iframe
                  src={hackathonPreviewUrl}
                  title="Aperçu du dossier Hackathon"
                  className="block w-full h-[78vh] min-h-[650px]"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <SocialFloating />
    </div>
  );
};

export default HackathonPage;
