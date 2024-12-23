import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Sponsors from "@/components/Sponsors";
import Timeline from "@/components/Timeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-jatt-darker">
      <Navbar />
      <Hero />
      <Features />
      <Sponsors />
      <Timeline />
    </div>
  );
};

export default Index;