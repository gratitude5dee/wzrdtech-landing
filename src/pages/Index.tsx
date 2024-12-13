import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Sponsors from "@/components/Sponsors";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import GlassVideo from "@/components/GlassVideo";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <GlassVideo onLoadComplete={() => setIsLoading(false)} />}
      <div className={`bg-jatt-darker min-h-screen relative transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
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
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Index;