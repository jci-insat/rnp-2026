import { motion } from "framer-motion";
import logoRnp from "@/assets/logo-rnp.png";

const CocMessage = () => {
  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-secondary/20 shadow-2xl">
                <img
                  src={logoRnp}
                  alt="Logo 1ère Réunion Nationale des Présidents"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-primary/10 blur-2xl" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="font-script text-3xl text-secondary mb-2">Le mot de la</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-primary uppercase tracking-wide mb-6">
              Comité d'Organisation
            </h2>
            <div className="space-y-4 text-foreground font-display font-light leading-relaxed">
              <p>
                Chers Présidents Locaux, chers leaders de la JCET,
              </p>
              <p>
                Au lendemain du Congrès Mondial 2025 qui a positionné la Tunisie comme référence en matière de leadership citoyen, 
                notre mandature 2026 s'ouvre sous le signe de  <strong className="font-semibold text-secondary">La Tunisie
autrement</strong>.
              </p>
              <p>
                Cette 1ère Réunion Nationale des Présidents sera le moment fondateur de notre action collective. 
                Ensemble, traçons la feuille de route d'une JCI Tunisie innovante, agile et tournée vers l'avenir.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-px bg-primary" />
              <span className="font-display text-sm text-muted-foreground uppercase tracking-widest">La Tunisie
autrement 2026</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CocMessage;
