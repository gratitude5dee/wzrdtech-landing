import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Sponsors from "@/components/Sponsors";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-jatt-darker min-h-screen relative">
      <Navbar />
      
      {/* Hero Section with bottom gradient */}
      <div className="relative">
        <Hero />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-jatt-darker to-transparent" />
      </div>

      {/* Features Section with top and bottom gradients */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-jatt-darker to-transparent" />
        <Features />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-jatt-darker to-transparent" />
      </div>

      {/* Sponsors Section with top and bottom gradients */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-jatt-darker to-transparent" />
        <Sponsors />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-jatt-darker to-transparent" />
      </div>

      {/* Timeline Section with top gradient */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-jatt-darker to-transparent" />
        <Timeline />
        <Footer />
      </div>
    </div>
  );
};

export default Index;