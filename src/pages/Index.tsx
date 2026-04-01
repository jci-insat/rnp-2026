import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PresidentMessage from "@/components/CocMessage";
import ProgramSection from "@/components/ProgramSection";
import MajorActivitiesSection from "@/components/MajorActivitiesSection";
import RegistrationSection from "@/components/RegistrationSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PresidentMessage />
      <ProgramSection />
      <MajorActivitiesSection />
      <RegistrationSection />
      {/* <PartnersSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
