import { motion } from "framer-motion";

const partners = [
  "Partenaire 1",
  "Partenaire 2", 
  "Partenaire 3",
  "Partenaire 4",
  "Partenaire 5",
  "Partenaire 6",
];

const PartnersSection = () => {
  return (
    <section id="partenaires" className="py-20 md:py-28 bg-background relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-3xl md:text-5xl text-primary uppercase tracking-wide">
            Nos Partenaires
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-secondary/10 rounded-sm p-8 flex items-center justify-center hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              <span className="font-display font-semibold text-sm text-secondary/40 group-hover:text-secondary transition-colors uppercase tracking-wider">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
