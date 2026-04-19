import { useMemo, useState } from "react";
import { Award, Clock, ExternalLink, Lightbulb, MapPin, Presentation, Rocket, Users, Video } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialFloating from "@/components/SocialFloating";
import bitteilerLogo from "@/assets/logos/bitteiler.png";
import watersecLogo from "@/assets/logos/watersec.png";
import cyeLogo from "@/assets/CYE.png";

const highlights = [
  {
    icon: Lightbulb,
    title: "Creative Young Entrepreneur",
    description:
      "Compétition nationale JCI CYE — valorise les jeunes entrepreneurs tunisiens les plus créatifs.",
  },
  {
    icon: Presentation,
    title: "Pitch devant jury",
    description:
      "Défendez votre startup en pitch (5 min) et ouvrez la voie aux étapes régionales et mondiales.",
  },
  {
    icon: Rocket,
    title: "Tremplin international",
    description:
      "Les lauréats représentent la Tunisie aux compétitions AMEC puis JCI World Congress.",
  },
];

type Winner = {
  year: string;
  label: string;
  name: string;
  website: string;
  description: string;
  logo?: string;
  wordmark?: { text: string; accent?: string };
};

const pastWinners: Winner[] = [
  {
    year: "2023",
    label: "AMEC Winner",
    name: "WaterSec",
    website: "https://water-sec.com/en",
    description:
      "Compteurs d'eau intelligents & IA — contre la pénurie et le gaspillage de l'eau en Tunisie.",
    logo: watersecLogo,
  },
  {
    year: "2025",
    label: "AMEC Winner",
    name: "BitTeiler",
    website: "https://www.bitteiler.com/",
    description:
      "Plateforme de partage et de collaboration data — une technologie tunisienne primée à l'international.",
    logo: bitteilerLogo,
  },
];

type PassageEntry = {
  n: number;
  olm: string;
  participant: string;
  startup: string;
  zone: string;
  time: string;
  salle: string;
};

const vendrediEnLigne: PassageEntry[] = [
  { n: 1, olm: "JCI Jandouba", participant: "Ahmed Dridi", startup: "Dialy-Help", zone: "Zone B", time: "17:00", salle: "Salle CYE 1" },
  { n: 2, olm: "JCI Bizerte", participant: "Kawther Mekni", startup: "K Sustainova Consulting — Lysitek 4 GPM", zone: "Zone B", time: "17:10", salle: "Salle CYE 1" },
  { n: 3, olm: "JCI Zarzis", participant: "Asma Basly", startup: "OORB — Open Organic Robotics", zone: "Zone E", time: "17:20", salle: "Salle CYE 1" },
  { n: 4, olm: "JCI El Alia", participant: "Mootaz Hammami", startup: "EduHelper", zone: "Zone B", time: "17:30", salle: "Salle CYE 1" },
  { n: 5, olm: "JCI Sbikha", participant: "Hamden Nasri", startup: "Trip Hive Technologies", zone: "Zone D", time: "17:40", salle: "Salle CYE 1" },
  { n: 6, olm: "JCI Ouardanine", participant: "Seddik Houimli", startup: "SupplyzPro", zone: "Zone C", time: "17:50", salle: "Salle CYE 1" },
  { n: 7, olm: "JCI Sousse", participant: "Ichrak Eddor Mnijli", startup: "HeroBee", zone: "Zone C", time: "18:00", salle: "Salle CYE 1" },
  { n: 8, olm: "JCI INSAT Tunis", participant: "Riadh Jouini", startup: "NartaQ", zone: "Zone A", time: "18:10", salle: "Salle CYE 1" },
  { n: 9, olm: "JCI Monastir", participant: "Chouchane Amina", startup: "Karhabti.app", zone: "Zone C", time: "18:20", salle: "Salle CYE 1" },
  { n: 10, olm: "JCI Hammam Sousse", participant: "Moetaz Ben Charrada", startup: "HAIER HR", zone: "Zone C", time: "18:30", salle: "Salle CYE 1" },
  { n: 11, olm: "JCI Hammam Sousse", participant: "Anis Belkahla", startup: "BARBARIJ", zone: "Zone C", time: "18:40", salle: "Salle CYE 1" },
  { n: 12, olm: "JCI Rafraf", participant: "Sarra Soussia", startup: "Save The Plate", zone: "Zone B", time: "18:50", salle: "Salle CYE 1" },
  { n: 13, olm: "JCI Carthage", participant: "Yassine Khelifi", startup: "BIOHEAT", zone: "Zone A", time: "19:00", salle: "Salle CYE 1" },
  { n: 14, olm: "JCI Sbikha", participant: "Aziz Ghannem", startup: "AG Afro Solar / Olibueno", zone: "Zone D", time: "19:10", salle: "Salle CYE 1" },
  { n: 15, olm: "JCI Menzel Bourguiba", participant: "Firas Yousfi", startup: "Click and Win", zone: "Zone B", time: "19:20", salle: "Salle CYE 1" },
  { n: 16, olm: "JCI Ghardimaou", participant: "Khouloud Mhamdi", startup: "Arkhou Drone", zone: "Zone B", time: "19:30", salle: "Salle CYE 1" },
  { n: 17, olm: "JCI Ras Jebel", participant: "Mohamed Amine Amara", startup: "Edulylo", zone: "Zone B", time: "19:40", salle: "Salle CYE 1" },
  { n: 18, olm: "JCI UJ Jendouba", participant: "Ameni", startup: "KIDDOS", zone: "Zone B", time: "19:50", salle: "Salle CYE 1" },
];

const samediPresentiel: PassageEntry[] = [
  { n: 1, olm: "JCI El Jem", participant: "Nadia Bouzgarrou", startup: "Ecume Lab", zone: "Zone C", time: "10:00", salle: "Salle CYE 1" },
  { n: 2, olm: "JCI Beni Khaled", participant: "Meriem Louati", startup: "Art.tounsi", zone: "Zone A", time: "10:00", salle: "Salle CYE 2" },
  { n: 3, olm: "JCI Bekalta", participant: "Mohsen Fennira", startup: "Dawwerbi", zone: "Zone C", time: "10:10", salle: "Salle CYE 1" },
  { n: 4, olm: "JCI Sfax", participant: "Emna Moujehed", startup: "Zymotech", zone: "Zone E", time: "10:10", salle: "Salle CYE 2" },
  { n: 5, olm: "JCI Jardins El Mourouj", participant: "Khouloud Ayachi", startup: "MEPS", zone: "Zone A", time: "10:20", salle: "Salle CYE 1" },
  { n: 6, olm: "JCI Diwan", participant: "Rafik Gharbi", startup: "Dootify", zone: "Zone E", time: "10:20", salle: "Salle CYE 2" },
  { n: 7, olm: "JCI Hajeb Laayoun", participant: "Abdelhak Abbassi", startup: "AgroNoya", zone: "Zone D", time: "10:30", salle: "Salle CYE 1" },
  { n: 8, olm: "JCI Bekalta", participant: "Louay Elaroui", startup: "Al Shamela Sports", zone: "Zone C", time: "10:30", salle: "Salle CYE 2" },
  { n: 9, olm: "JCI Djerba", participant: "Wijden Maalaoui", startup: "HeadsApp By Tech Angela", zone: "Zone E", time: "10:40", salle: "Salle CYE 1" },
  { n: 10, olm: "JCI Gabes", participant: "Malak Boukthir", startup: "Ecofeed Company", zone: "Zone E", time: "10:40", salle: "Salle CYE 2" },
  { n: 11, olm: "JCI Kelibia", participant: "Houssem Ben Ahmed", startup: "SignFinity", zone: "Zone A", time: "10:50", salle: "Salle CYE 1" },
  { n: 12, olm: "JCI Kairouan", participant: "Amdouni Bilel", startup: "Aeros Innovation Center", zone: "Zone D", time: "10:50", salle: "Salle CYE 2" },
  { n: 13, olm: "JCI Jemmel", participant: "Mohamed Amin Nouar", startup: "Freeness", zone: "Zone C", time: "11:00", salle: "Salle CYE 1" },
  { n: 14, olm: "JCI Tozeur", participant: "Fedi Dghaies", startup: "SonicX", zone: "Zone D", time: "11:00", salle: "Salle CYE 2" },
  { n: 15, olm: "JCI Tozeur", participant: "Hbiri Sana", startup: "Flavor Med Fish", zone: "Zone D", time: "11:10", salle: "Salle CYE 1" },
  { n: 16, olm: "JCI Carthage", participant: "Mariem Bouzekri", startup: "DDMLABS", zone: "Zone A", time: "11:10", salle: "Salle CYE 2" },
  { n: 17, olm: "JCI Benguerdane", participant: "Faker Chouikhi", startup: "Watcher AI", zone: "Zone E", time: "11:20", salle: "Salle CYE 1" },
  { n: 18, olm: "JCI Zarzouna", participant: "Mustapha Zoghlami", startup: "El Makina Digital", zone: "Zone B", time: "11:20", salle: "Salle CYE 2" },
  { n: 19, olm: "JCI El Manzah", participant: "Ismail Ben Salah", startup: "Omni Links TN", zone: "Zone A", time: "11:30", salle: "Salle CYE 1" },
  { n: 20, olm: "JCI Gremda", participant: "Ahmed Walha", startup: "Dashmaster", zone: "Zone E", time: "11:30", salle: "Salle CYE 2" },
  { n: 21, olm: "JCI Ksar Saïd", participant: "Mohamed Ghaith Welhezi", startup: "WIHELP", zone: "Zone A", time: "11:40", salle: "Salle CYE 1" },
  { n: 22, olm: "JCI TBS El Mourouj", participant: "Khalil Jbeniani", startup: "Allcarta", zone: "Zone A", time: "11:40", salle: "Salle CYE 2" },
  { n: 23, olm: "JCI Bousalem", participant: "Fahd Hanachi", startup: "The Denim Dilemma", zone: "Zone B", time: "11:50", salle: "Salle CYE 1" },
  { n: 24, olm: "JCI Menzel Jemil", participant: "Seif Eddine Ben Amara", startup: "Founder.tn", zone: "Zone B", time: "11:50", salle: "Salle CYE 2" },
  { n: 25, olm: "JCI El Jem", participant: "Ghada Mejri", startup: "ECOMARC", zone: "Zone C", time: "12:00", salle: "Salle CYE 1" },
  { n: 26, olm: "JCI Mornaguia", participant: "Aymen Masmoudi", startup: "LR Move", zone: "Zone A", time: "12:00", salle: "Salle CYE 2" },
  { n: 27, olm: "JCI Feriana", participant: "Dorra Hermassi", startup: "ArtisanArt chez Hermassi", zone: "Zone D", time: "13:10", salle: "Salle CYE 1" },
  { n: 28, olm: "JCI Mateur", participant: "Madiha Chiboub", startup: "Camomille", zone: "Zone B", time: "13:10", salle: "Salle CYE 2" },
  { n: 29, olm: "JCI Zarzis", participant: "Gabaji Marwan", startup: "Galaxy Talents", zone: "Zone E", time: "13:20", salle: "Salle CYE 1" },
  { n: 30, olm: "JCI Bousalem", participant: "Dhouha Jbeli", startup: "MIELVITA", zone: "Zone B", time: "13:20", salle: "Salle CYE 2" },
  { n: 31, olm: "JCI Nabeul", participant: "Benameur Helmi", startup: "PEDAGO", zone: "Zone A", time: "13:30", salle: "Salle CYE 1" },
  { n: 32, olm: "JCI Kelibia", participant: "Youssef Ben Ahmed", startup: "Study Space", zone: "Zone A", time: "13:30", salle: "Salle CYE 2" },
  { n: 33, olm: "JCI Tunis", participant: "Adnen Ben Haj Yhahia", startup: "Indinya", zone: "Zone A", time: "13:40", salle: "Salle CYE 1" },
  { n: 34, olm: "JCI Tanyour", participant: "Ghazi Mhiri", startup: "Ecocode", zone: "Zone E", time: "13:40", salle: "Salle CYE 2" },
  { n: 35, olm: "JCI Enig Gabes Sud", participant: "Seif Ben Romdhane", startup: "Octopus Agency", zone: "Zone E", time: "13:50", salle: "Salle CYE 1" },
  { n: 36, olm: "JCI UJ Jendouba", participant: "Ala Eddine Dhaouafi", startup: "Melleya", zone: "Zone B", time: "13:50", salle: "Salle CYE 2" },
  { n: 37, olm: "JCI Medenine", participant: "Rihab Kadi", startup: "Dukan", zone: "Zone E", time: "14:00", salle: "Salle CYE 1" },
  { n: 38, olm: "JCI Djerba Midoun", participant: "Roua Jebabli", startup: "ROSNÉ", zone: "Zone E", time: "14:00", salle: "Salle CYE 2" },
  { n: 39, olm: "JCI INSAT Tunis", participant: "Oussama Ben Abdessalem", startup: "Carbon Jar", zone: "Zone A", time: "14:10", salle: "Salle CYE 1" },
  { n: 40, olm: "JCI Université Jendouba", participant: "Boubakri Dhia Eddine", startup: "Ettaba Kids (Seedo)", zone: "Zone B", time: "14:10", salle: "Salle CYE 2" },
  { n: 41, olm: "JCI Hammam Chatt", participant: "Iyed Ben Massoud", startup: "AIO Events", zone: "Zone A", time: "14:20", salle: "Salle CYE 1" },
  { n: 42, olm: "JCI Siliana", participant: "Oussama Dhrif", startup: "OBL-X Smart Solutions", zone: "Zone B", time: "14:20", salle: "Salle CYE 2" },
  { n: 43, olm: "JCI Menzel Jemil", participant: "Fehmi Kharroubi", startup: "ExypnoTech Engineering Services", zone: "Zone B", time: "14:30", salle: "Salle CYE 1" },
  { n: 44, olm: "JCI Gremda", participant: "Ali Bel Hajsalah", startup: "Kidora IA", zone: "Zone E", time: "14:30", salle:"Salle CYE 2" },
  { n: 45, olm: "JCI Menzel Jemil", participant: "Jawher Makhlouf", startup: "NaturAdds", zone:"Zone B", time:"14:40", salle:"Salle CYE 1" },
];

type SessionBlock = {
  title: string;
  subtitle: string;
  icon: typeof Video;
  day: string;
  date: string;
  time: string;
  location: string;
  entries: PassageEntry[];
};

const sessions: SessionBlock[] = [
  {
    title: "Pitchs en ligne",
    subtitle: "Première vague — à distance",
    icon: Video,
    day: "Vendredi",
    date: "24 avril 2026",
    time: "À partir de 17h00",
    location: "Salle CYE 1 (en ligne)",
    entries: vendrediEnLigne,
  },
  {
    title: "Pitchs en présentiel",
    subtitle: "Compétition sur site",
    icon: Presentation,
    day: "Samedi",
    date: "25 avril 2026",
    time: "À partir de 10h00",
    location: "Laico Blue Marine — Salles CYE 1 & 2",
    entries: samediPresentiel,
  },
];

const zoneStyles: Record<string, string> = {
  "Zone A": "bg-sky-100 text-sky-800 ring-1 ring-sky-300/60",
  "Zone B": "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300/60",
  "Zone C": "bg-amber-100 text-amber-800 ring-1 ring-amber-300/60",
  "Zone D": "bg-rose-100 text-rose-800 ring-1 ring-rose-300/60",
  "Zone E": "bg-violet-100 text-violet-800 ring-1 ring-violet-300/60",
};

const ScheduleCard = ({ session }: { session: SessionBlock }) => {
  const salles = useMemo(
    () => Array.from(new Set(session.entries.map((e) => e.salle))).sort(),
    [session.entries],
  );
  const [filter, setFilter] = useState<string>("all");
  const filtered = filter === "all" ? session.entries : session.entries.filter((e) => e.salle === filter);

  return (
    <div className="bg-card/90 border border-secondary/15 rounded-2xl p-5 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
          <Users className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="font-display font-black text-lg md:text-xl text-secondary uppercase tracking-wide">
            {session.title} — {session.day}
          </p>
          <p className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
            {session.date} · {session.time} · {session.location}
          </p>
        </div>
      </div>

      {salles.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`font-display text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-colors ${
              filter === "all"
                ? "bg-primary text-primary-foreground border-primary"
                : "border-secondary/20 text-secondary hover:border-primary/40 hover:text-primary"
            }`}
          >
            Toutes les salles
          </button>
          {salles.map((salle) => (
            <button
              key={salle}
              type="button"
              onClick={() => setFilter(salle)}
              className={`font-display text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-colors ${
                filter === salle
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-secondary/20 text-secondary hover:border-primary/40 hover:text-primary"
              }`}
            >
              {salle}
            </button>
          ))}
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-secondary/10 bg-background">
        <table className="w-full table-fixed text-left font-display text-xs md:text-sm min-w-[860px]">
          <colgroup>
            <col className="w-[5%]" />
            <col className="w-[16%]" />
            <col className="w-[19%]" />
            <col className="w-[24%]" />
            <col className="w-[10%]" />
            <col className="w-[10%]" />
            <col className="w-[16%]" />
          </colgroup>
          <thead>
            <tr className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent text-secondary uppercase tracking-[0.18em] text-[0.7rem]">
              <th className="px-3 py-3 font-display font-bold">N°</th>
              <th className="px-3 py-3 font-display font-bold">OLM</th>
              <th className="px-3 py-3 font-display font-bold">Participant</th>
              <th className="px-3 py-3 font-display font-bold">Startup</th>
              <th className="px-3 py-3 font-display font-bold">Zone</th>
              <th className="px-3 py-3 font-display font-bold">Heure</th>
              <th className="px-3 py-3 font-display font-bold">Salle</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((e, idx) => (
              <tr
                key={`${session.title}-${e.n}`}
                className={`align-top border-t border-secondary/10 transition-colors ${
                  idx % 2 === 0 ? "bg-muted/10" : "bg-transparent"
                } hover:bg-primary/5`}
              >
                <td className="px-3 py-3 text-primary font-bold tabular-nums">
                  {String(e.n).padStart(2, "0")}
                </td>
                <td className="px-3 py-3 text-secondary break-words">{e.olm}</td>
                <td className="px-3 py-3 text-secondary font-semibold break-words leading-snug">
                  {e.participant}
                </td>
                <td className="px-3 py-3 text-muted-foreground break-words leading-snug">
                  {e.startup}
                </td>
                <td className="px-3 py-3 break-words">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-[0.7rem] font-semibold whitespace-nowrap ${
                      zoneStyles[e.zone] ?? "bg-secondary/10 text-secondary ring-1 ring-secondary/20"
                    }`}
                  >
                    {e.zone}
                  </span>
                </td>
                <td className="px-3 py-3 text-primary font-bold tabular-nums whitespace-nowrap">
                  {e.time}
                </td>
                <td className="px-3 py-3 break-words">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[0.7rem] font-semibold text-primary whitespace-nowrap">
                    {e.salle}
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-3 py-8 text-center font-display text-sm text-muted-foreground"
                >
                  Aucun passage dans cette salle.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CyePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container px-4 max-w-7xl">
          <section className="text-center mt-2 mb-12">
            <img
              src={cyeLogo}
              alt="JCI CYE — Creative Young Entrepreneur"
              className="mx-auto mb-6 h-32 md:h-44 w-auto object-contain"
            />
            <p className="font-display text-xs md:text-sm uppercase tracking-[0.3em] text-primary mb-3">
              JCI Creative Young Entrepreneur
            </p>
            <h1 className="font-display font-black text-4xl md:text-6xl text-primary uppercase tracking-wide leading-[0.92] mb-5">
              CYE Tunisia
            </h1>
            <p className="font-display text-muted-foreground text-lg md:text-2xl max-w-3xl mx-auto leading-tight">
              La compétition nationale de la <span className="text-secondary font-semibold">JCI Creative Young
              Entrepreneur</span> se tiendra lors de la 1<sup>re</sup> Réunion Nationale des Présidents.
            </p>
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
                    <p className="font-display text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {sessions.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="bg-card/90 border border-secondary/15 rounded-2xl p-5 md:p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-display font-black text-lg text-secondary uppercase tracking-wide">
                          {s.title}
                        </p>
                        <p className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                          {s.subtitle}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 font-display text-sm text-secondary">
                      <li className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary shrink-0" />
                        {s.day} {s.date} — {s.time}
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary shrink-0" />
                        {s.location}
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>

            {sessions.map((s) => (
              <ScheduleCard key={`schedule-${s.title}`} session={s} />
            ))}

            <div className="bg-card/90 border border-secondary/15 rounded-2xl p-5 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-black text-lg md:text-xl text-secondary uppercase tracking-wide">
                    Dans les pas des lauréats tunisiens
                  </p>
                  <p className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                    Be the next Tunisian star in the international stages
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {pastWinners.map((w) => (
                  <a
                    key={w.name}
                    href={w.website}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border border-secondary/10 bg-muted/20 p-5 flex flex-col gap-4 hover:border-primary/40 transition-colors"
                  >
                    <div className="h-20 flex items-center justify-center rounded-lg bg-white/80 border border-secondary/10 px-4">
                      {w.logo ? (
                        <img src={w.logo} alt={`${w.name} logo`} className="max-h-14 w-auto object-contain" />
                      ) : (
                        <span
                          className="font-display font-black text-3xl tracking-tight"
                          style={{ color: w.wordmark?.accent ?? "#1E9BD7" }}
                        >
                          {w.wordmark?.text ?? w.name}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-display text-xs uppercase tracking-[0.25em] text-primary">
                        {w.year} · {w.label}
                      </p>
                      <p className="font-display font-black text-lg text-secondary mt-1">{w.name}</p>
                      <p className="font-display text-sm text-muted-foreground mt-2 leading-relaxed">
                        {w.description}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 font-display text-xs uppercase tracking-widest text-primary group-hover:underline">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Visiter le site
                      </span>
                    </div>
                  </a>
                ))}
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

export default CyePage;
