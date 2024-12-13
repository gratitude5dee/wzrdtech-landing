import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Sponsors from "@/components/Sponsors";
import Timeline from "@/components/Timeline";

const Index = () => {
  return (
    <div className="bg-jatt-darker min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Sponsors />
      <Timeline />
    </div>
  );
};

export default Index;