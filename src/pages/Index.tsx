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
      <div className={`min-h-screen bg-jatt-darker transition-all duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Hero />
        <Features />
        <Sponsors />
        <Timeline />
        <Footer />
      </div>
    </>
  );
};

export default Index;