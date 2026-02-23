import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import smokeBg from "@/assets/smoke-bg.webp";
import jciTunisieLog from "@/assets/logos/JCI Tunisie.png";
import jciInsatLogo from "@/assets/logos/JCI INSAT Tunis.png";
import jciTunisLogo from "@/assets/logos/JCI Tunis.png";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    // Target date: Friday 24 April 2026 10:00 Tunis Time (UTC+1)
    const targetDate = new Date('2026-04-24T09:00:00.000Z'); // 10:00 Tunis time = 09:00 UTC
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;
      setTimeLeft(Math.max(0, Math.floor(difference / 1000))); // Convert to seconds
    };

    updateCountdown(); // Initial calculation
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    if (seconds <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
    }
    
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return { days, hours, minutes, seconds: secs, finished: false };
  };
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
            className="font-display font-light text-lg md:text-2xl text-foreground mb-4"
          >
            24 - 25 - 26 Avril 2026
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mb-10"
          >
            <div className="text-center">
              <p className="text-xs uppercase font-display font-semibold text-secondary mb-6 tracking-wider">
                Compte à rebours
              </p>
              
              {formatTime(timeLeft).finished ? (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="bg-gradient-to-r from-primary to-sky-light text-white px-8 py-4 rounded-lg inline-block"
                >
                  <p className="font-display font-bold text-xl md:text-2xl">
                    🎉 L'événement a commencé! 🎉
                  </p>
                </motion.div>
              ) : (
                <div className="flex justify-center gap-2 md:gap-4">
                  {[
                    { value: formatTime(timeLeft).days, label: 'Jours', color: 'from-primary to-primary/80' },
                    { value: formatTime(timeLeft).hours, label: 'Heures', color: 'from-secondary to-secondary/80' },
                    { value: formatTime(timeLeft).minutes, label: 'Minutes', color: 'from-sky to-sky/80' },
                    { value: formatTime(timeLeft).seconds, label: 'Secondes', color: 'from-primary/70 to-secondary/70' }
                  ].map((unit, index) => (
                    <motion.div
                      key={unit.label}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.8 + (index * 0.1),
                        repeat: unit.label === 'Secondes' ? Infinity : 0,
                        repeatType: 'reverse',
                        repeatDelay: unit.label === 'Secondes' ? 0.8 : 0
                      }}
                      className={`relative group`}
                    >
                      <div className={`
                        bg-gradient-to-br ${unit.color}
                        text-white rounded-lg p-3 md:p-4 
                        shadow-lg shadow-black/20
                        border border-white/20
                        backdrop-blur-sm
                        min-w-[60px] md:min-w-[80px]
                        hover:scale-105 transition-all duration-300
                        hover:shadow-xl hover:shadow-primary/30
                      `}>
                        <div className="text-center">
                          <motion.p 
                            key={unit.value}
                            initial={{ scale: 1.2, opacity: 0.8 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="font-display font-black text-xl md:text-3xl tabular-nums leading-none mb-1"
                          >
                            {unit.value.toString().padStart(2, '0')}
                          </motion.p>
                          <p className="font-display font-medium text-xs md:text-sm uppercase tracking-wider opacity-90">
                            {unit.label}
                          </p>
                        </div>
                        
                        {/* Animated border effect */}
                        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

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
