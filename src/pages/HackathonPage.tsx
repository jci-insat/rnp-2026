import { CalendarDays, Code2, ExternalLink, FileText, Sparkles, Trophy, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialFloating from "@/components/SocialFloating";

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
