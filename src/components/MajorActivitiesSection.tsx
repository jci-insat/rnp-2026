import { motion } from "framer-motion";
import { Building2, Code2, PartyPopper } from "lucide-react";
import { Link } from "react-router-dom";

const activities = [
  {
    title: "Forum d'entreprises",
    icon: Building2,
    path: "/activites/forum-entreprises",
  },
  {
    title: "Hackathon",
    icon: Code2,
    path: "/activites/hackathon",
  },
  {
    title: "Soirée",
    icon: PartyPopper,
    path: "/activites/soiree",
    hoverMessage: "Révélé bientôt",
  },
];

const MajorActivitiesSection = () => {
  return (
    <section id="activites" className="py-20 bg-background relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-black text-3xl md:text-5xl text-primary uppercase tracking-wide mb-4">
            Activités
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card border border-secondary/20 rounded-sm p-8 text-center"
              >
                {activity.hoverMessage ? (
                  <div
                    className="block cursor-not-allowed"
                    title={activity.hoverMessage}
                    aria-disabled="true"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-secondary uppercase tracking-wide">
                      {activity.title}
                    </h3>
                    <p className="mt-3 text-xs font-display uppercase tracking-widest text-muted-foreground opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      {activity.hoverMessage}
                    </p>
                  </div>
                ) : (
                  <Link
                    to={activity.path}
                    className="block hover:opacity-90 transition-opacity"
                    title={activity.title}
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-secondary uppercase tracking-wide">
                      {activity.title}
                    </h3>
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MajorActivitiesSection;