import { BriefcaseBusiness, Lightbulb, Mail, Phone, Users, Building2, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialFloating from "@/components/SocialFloating";
import smokeBg from "@/assets/smoke-bg.webp";
import jciTunisieLogo from "@/assets/logos/JCI Tunisie.png";
import jciInsatLogo from "@/assets/logos/JCI INSAT Tunis.png";
import jciTunisLogo from "@/assets/logos/JCI Tunis.png";

const standOffers = [
  {
    title: "Elite Pavilion",
    size: "4 × 3 m",
    type: "Premium",
    highlights: ["Visibilité maximale", "Espace d'accueil élargi", "Idéal pour activations de marque"],
  },
  {
    title: "Prime Space",
    size: "3 × 3 m",
    type: "Standard",
    highlights: ["Format polyvalent", "Présentation produits/services", "Parfait pour échanges B2B"],
  },
  {
    title: "Business Spot",
    size: "3 m (linéaire)",
    type: "Compact",
    highlights: ["Solution optimisée", "Mise en avant de vos offres", "Présence efficace à budget maîtrisé"],
  },
  {
    title: "Launch Pad",
    size: "2 × 3 m",
    type: "Startup",
    highlights: ["Idéal jeunes entreprises", "Pitch & démonstration rapide", "Visibilité ciblée talents/partenaires"],
  },
];

const ForumEntreprisesPage = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08] bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${smokeBg})` }}
      />

      <Navbar />
      <main className="pt-28 pb-16 relative z-10">
        <div className="container px-4 max-w-6xl">
          <section className="text-center mt-2 mb-14">
            <h1 className="font-display font-black text-4xl md:text-6xl text-secondary uppercase leading-[0.95] tracking-wide mb-6">
              Forum
              <br />
              d’entreprises
            </h1>

            <p className="font-display text-muted-foreground text-lg md:text-2xl max-w-3xl mx-auto leading-tight mb-8">
              Un aperçu de nos stands : l’excellence au service de votre visibilité.
            </p>

            <div className="mx-auto max-w-2xl bg-card/85 backdrop-blur-sm border border-secondary/15 rounded-lg px-6 py-5 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-secondary">
                <div className="flex items-center justify-center gap-2 font-display font-semibold text-base md:text-lg">
                  <Users className="w-5 h-5" />
                  <span>Networking</span>
                </div>
                <div className="flex items-center justify-center gap-2 font-display font-semibold text-base md:text-lg">
                  <Lightbulb className="w-5 h-5" />
                  <span>Innovation</span>
                </div>
                <div className="sm:col-span-2 flex items-center justify-center gap-2 font-display font-semibold text-base md:text-lg">
                  <BriefcaseBusiness className="w-5 h-5" />
                  <span>Entreprises, Startups, talents, CV…</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="font-display font-black text-2xl md:text-4xl text-center text-sky uppercase tracking-wide mb-8">
              Exposez · Connectez · Recrutez
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              {standOffers.map((offer) => (
                <article
                  key={offer.title}
                  className="bg-card/90 border border-secondary/15 rounded-lg p-6 shadow-sm hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display font-black text-2xl text-secondary leading-none mb-2">
                        {offer.title}
                      </h3>
                      <p className="font-display text-sm uppercase tracking-wider text-primary font-bold">
                        {offer.type}
                      </p>
                    </div>
                    <div className="shrink-0 bg-primary/10 text-primary rounded-md px-3 py-1.5 font-display font-black text-lg">
                      {offer.size}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {offer.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-muted-foreground font-display text-sm">
                        <Sparkles className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="max-w-3xl mx-auto mb-10">
            <div className="bg-card border border-secondary/20 rounded-lg px-6 py-7 md:px-10 md:py-8 shadow-sm text-center">
              <p className="font-display font-black text-2xl md:text-4xl text-sky uppercase tracking-wide mb-6">
                Demande de participation
              </p>

              <div className="space-y-3 mb-7">
                <a
                  href="mailto:jci.1re.rnp.2026@gmail.com"
                  className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-display font-semibold text-lg"
                >
                  <Mail className="w-5 h-5" />
                  <span>jci.1re.rnp.2026@gmail.com</span>
                </a>
                <a
                  href="tel:+21693537763"
                  className="block text-secondary hover:text-primary transition-colors font-display font-semibold text-2xl"
                >
                  <span className="inline-flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    +216 93 537 763
                  </span>
                </a>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 text-primary font-display font-semibold text-sm">
                <Building2 className="w-4 h-4" />
                <span>Réservez votre stand dès maintenant</span>
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center gap-4 md:gap-8 pt-2">
            {[jciTunisieLogo, jciInsatLogo, jciTunisLogo].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="JCI logo"
                className="h-14 md:h-20 w-auto object-contain"
              />
            ))}
          </section>
        </div>
      </main>
      <Footer />
      <SocialFloating />
    </div>
  );
};

export default ForumEntreprisesPage;