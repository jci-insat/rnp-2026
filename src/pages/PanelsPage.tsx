import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PanelsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container px-4 max-w-3xl">
          <h1 className="font-display font-black text-3xl md:text-5xl text-primary uppercase tracking-wide mt-6 mb-4">
            Panels
          </h1>
          <p className="font-display text-muted-foreground text-base leading-relaxed">
            Page dédiée aux Panels. Les détails seront publiés prochainement.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PanelsPage;