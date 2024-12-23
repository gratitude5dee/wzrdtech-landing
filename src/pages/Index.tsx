import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Sponsors from "@/components/Sponsors";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import GlassVideo from "@/components/GlassVideo";
import PoweredBy from "@/components/PoweredBy";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleLoadComplete = () => {
    setTimeout(() => {
      setContentVisible(true);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-jatt-darker">
      <GlassVideo onLoadComplete={handleLoadComplete} />
      <div className={`transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Navbar />
        <Hero />
        <Sponsors />
        <Features />
        <Timeline />
        <PoweredBy />
        <Footer />
      </div>
    </div>
  );
};

export default Index;