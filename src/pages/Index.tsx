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
  const [contentVisible, setContentVisible] = useState(false);

  const handleLoadComplete = () => {
    // Add a small delay before showing the main content
    setTimeout(() => {
      setContentVisible(true);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-jatt-darker">
      {isLoading && <GlassVideo onLoadComplete={handleLoadComplete} />}
      <div className={`transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Navbar />
        <Hero />
        <Features />
        <Sponsors />
        <Timeline />
        <Footer />
      </div>
    </div>
  );
};

export default Index;