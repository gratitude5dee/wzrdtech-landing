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

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-jatt-darker">
      {isLoading && <GlassVideo onLoadComplete={handleLoadComplete} />}
      <Navbar />
      <Hero />
      <Features />
      <Sponsors />
      <Timeline />
      <Footer />
    </div>
  );
};

export default Index;