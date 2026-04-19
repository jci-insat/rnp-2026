import { Award, CalendarDays, ExternalLink, MapPin, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialFloating from "@/components/SocialFloating";
import soireeBg from "@/assets/soiree-bg.png";

const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfZ0GqBCVei7pho0HAMgjAR8BSayPJqoNoqJEdtlKVUWEUuTA/viewform?usp=preview";

const highlights = [
  {
    icon: Users,
    title: "Shine with your region",
    description:
      "Chaque gouvernorat est représenté par un stand. Les OLM collaborent pour faire rayonner traditions, patrimoine et identité régionale.",
  },
  {
    icon: Award,
    title: "Trophée du meilleur stand",
    description:
      "Un trophée récompensera la créativité, l'authenticité et l'engagement de l'OLM qui offrira l'expérience la plus immersive.",
  },
];

const formItems = [
  "Le nom de votre stand",
  "Les OLM participantes",
  "Les éléments présentés (gastronomie, artisanat, animation, etc.)",
  "Vos besoins matériels et logistiques",
];

const preparationItems = [
  "Préparer des éléments traditionnels représentatifs de votre région (tenues, spécialités culinaires, objets artisanaux, décor, musique, etc.)",
  "Collaborer avec les différentes OLM de votre gouvernorat afin de proposer un stand riche, authentique et attractif",
  "Faire vivre aux participants une expérience unique et immersive",
];

const SoireeBackdrop = () => (
  <img
    aria-hidden
    src={soireeBg}
    alt=""
    className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none select-none"
  />
);

const SoireePage = () => {
  return (
    <div className="min-h-screen bg-navy text-cream">
      <Navbar />
      <main className="relative overflow-hidden pt-28 pb-16">
        <SoireeBackdrop />

        <div className="relative container px-4 max-w-6xl">
          <section className="relative text-center pt-6 pb-16">
            <p className="font-display text-[0.7rem] md:text-xs uppercase tracking-[0.4em] text-sky mb-6">
              Soirée officielle — RNP 2026
            </p>

            <h1
              className="font-script text-cream leading-[0.85] mb-4 drop-shadow-[0_6px_30px_rgba(255,255,255,0.08)]"
              style={{ fontSize: "clamp(4rem, 14vw, 10rem)" }}
            >
              Tunisian
              <br />
              Village
            </h1>

            <p className="font-display italic text-cream/80 text-lg md:text-2xl mb-10">
              More than culture…
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 font-display text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-white/5 backdrop-blur-sm px-4 py-2 text-cream">
                <CalendarDays className="w-4 h-4 text-sky" />
                Samedi 25 avril 2026
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-white/5 backdrop-blur-sm px-4 py-2 text-cream">
                <MapPin className="w-4 h-4 text-sky" />
                Laico Blue Marine — Hammamet
              </span>
            </div>

            <p className="mt-10 font-display italic text-sky text-base md:text-lg tracking-wider">
              Première · Réunion Nationale des Présidents
            </p>
          </section>

          <section className="grid sm:grid-cols-2 gap-5 mb-14">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="relative bg-white/[0.04] backdrop-blur-sm border border-cream/15 rounded-2xl p-6 md:p-7 hover:border-sky/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-sky/15 border border-sky/30 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-sky" />
                  </div>
                  <h3 className="font-display font-bold text-lg md:text-xl text-cream uppercase tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="font-display text-sm leading-relaxed text-cream/70">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </section>

          <section className="bg-white/[0.04] backdrop-blur-sm border border-cream/15 rounded-2xl p-6 md:p-10 mb-10">
            <div className="space-y-4 font-display text-sm md:text-base text-cream/80 leading-relaxed">
              <p>
                Dans le cadre de la Première Réunion Nationale des Présidents 2026, nous avons le
                plaisir de vous inviter à contribuer activement à l'un des moments phares de cet
                événement : la soirée{" "}
                <span className="text-sky font-semibold">« Tunisian Village »</span>.
              </p>
              <p>
                Cette soirée immersive se veut une véritable célébration de la richesse culturelle
                tunisienne à travers ses régions. À cet effet, chaque gouvernorat sera représenté
                par un stand dédié, mettant en valeur ses traditions, son patrimoine et son
                identité.
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-5 mb-10">
            <div className="bg-white/[0.04] backdrop-blur-sm border border-cream/15 rounded-2xl p-6 md:p-8">
              <h3 className="font-display font-black text-lg md:text-xl text-cream uppercase tracking-wide mb-5">
                Informations à préciser
              </h3>
              <ul className="space-y-3 font-display text-sm text-cream/80">
                {formItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-sky shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/[0.04] backdrop-blur-sm border border-cream/15 rounded-2xl p-6 md:p-8">
              <h3 className="font-display font-black text-lg md:text-xl text-cream uppercase tracking-wide mb-5">
                Nous vous invitons à
              </h3>
              <ul className="space-y-3 font-display text-sm text-cream/80">
                {preparationItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-sky shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="relative overflow-hidden rounded-2xl border border-sky/30 bg-gradient-to-br from-sky/20 via-sky/5 to-transparent p-8 md:p-12 text-center">
            <h3 className="font-display font-black text-2xl md:text-4xl text-cream uppercase tracking-wide mb-3">
              Confirmez votre participation
            </h3>
            <p className="font-display text-cream/75 text-sm md:text-base max-w-2xl mx-auto mb-7 leading-relaxed">
              Remplissez le formulaire pour nous communiquer les détails de votre stand et vos
              besoins logistiques.
            </p>
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sky px-7 py-3.5 font-display font-bold text-sm uppercase tracking-[0.2em] text-white hover:bg-sky/90 transition-colors shadow-[0_10px_40px_-10px_hsl(var(--sky))]"
            >
              <ExternalLink className="w-4 h-4" />
              Accéder au formulaire
            </a>
            <p className="font-script text-cream/80 text-2xl md:text-3xl mt-8">
              Au plaisir de vous voir briller ✨
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <SocialFloating />
    </div>
  );
};

export default SoireePage;
