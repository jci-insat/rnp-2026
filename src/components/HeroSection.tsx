import { motion } from "framer-motion";
import smokeBg from "@/assets/smoke-bg.webp";
import jciTunisieLog from "@/assets/logos/JCI Tunisie.png";
import jciInsatLogo from "@/assets/logos/JCI INSAT Tunis.png";
import jciTunisLogo from "@/assets/logos/JCI Tunis.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle smoke background */}
      <div
        className="absolute inset-0 opacity-[0.15] bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${smokeBg})` }}
      />

      <div className="container relative z-10 px-4 pb-20 md:pb-32">
        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2"
        >
          {[
            { name: "JCI Tunisie", logo: jciTunisieLog },
            { name: "JCI INSAT Tunis", logo: jciInsatLogo },
            { name: "JCI Tunis", logo: jciTunisLogo }
          ].map(({ name, logo }, i) => (
            <div key={i} className="w-30 h-30 lg:w-60 lg:h-60 md:w-50 md:h-50 sm:w-40 sm:h-40 flex items-center justify-center">
              <img 
                src={logo} 
                alt={name} 
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* Main Title */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-script text-4xl md:text-6xl text-secondary mb-2"
          >
            Première
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-display font-black text-3xl md:text-5xl lg:text-7xl tracking-tight text-primary uppercase leading-tight mb-6"
          >
            Réunion Nationale
            <br />
            des Présidents
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="font-display font-light text-lg md:text-2xl text-foreground mb-10"
          >
            24 - 25 - 26 Avril 2026
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a
              href="#inscription"
              className="inline-block bg-primary text-primary-foreground font-display font-semibold text-sm md:text-base uppercase tracking-widest px-10 py-4 rounded-sm hover:bg-sky-dark transition-colors duration-300 shadow-lg shadow-primary/20"
            >
              S'inscrire maintenant
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-secondary/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-secondary/50 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
