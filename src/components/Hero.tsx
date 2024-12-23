import { useEffect, useRef } from "react";
import Spline from '@splinetool/react-spline';
import { WalletButton } from '@/components/WalletButton';

const Hero = () => {
  const coinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!coinRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX - innerWidth / 2) / 50;
      const moveY = (clientY - innerHeight / 2) / 50;
      
      coinRef.current.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 2}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleStakeClick = () => {
    window.open('https://www.pump.fun', '_blank');
  };

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToRoadmap = () => {
    const element = document.getElementById('roadmap');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-jatt-dark overflow-hidden" id="home">
      {/* Navigation Overlay */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-center gap-8 pt-4">
        <button 
          onClick={scrollToHome}
          className="px-8 py-2 text-transparent hover:text-white/50 transition-colors"
        >
          Home
        </button>
        <button 
          onClick={scrollToRoadmap}
          className="px-8 py-2 text-transparent hover:text-white/50 transition-colors"
        >
          Roadmap
        </button>
        <button 
          onClick={handleStakeClick}
          className="px-8 py-2 text-transparent hover:text-white/50 transition-colors"
        >
          Stake WZRD.tech
        </button>
      </div>

      {/* Spline 3D Scene */}
      <div className="h-screen">
        <Spline
          scene="https://prod.spline.design/HZpCQMSMnyZdwJhA/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Background meteors */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-900/20 rounded-full animate-float delay-100" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-red-900/20 rounded-full animate-float delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-red-900/20 rounded-full animate-float delay-500" />
      </div>

      {/* Glowing lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-jatt-neon-blue to-transparent animate-glow" />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-jatt-neon-purple to-transparent animate-glow delay-100" />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-jatt-neon-green to-transparent animate-glow delay-200" />
      </div>

      {/* Main content */}
      <section className="min-h-screen bg-jatt-darker/90 px-4 py-20">
        <div className="container mx-auto flex flex-col items-center justify-center text-center">
          <img 
            src="/lovable-uploads/720bfe14-7d72-4c31-ac28-ff74302131bb.png"
            alt="WZRD.tech Logo"
            className="w-64 h-auto mb-12 filter drop-shadow-[0_0_15px_rgba(255,68,68,0.6)] animate-pulse"
          />
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            One this Earth,
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold text-red-500 mb-8 shadow-yellow-500/50 drop-shadow-lg">
            we all one WZRD.tech
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12">
            Join the cosmic revolution with WZRD.tech - where memes meet the metaverse in an 
            interstellar journey to the moon and beyond.
          </p>
          
          <div className="flex gap-4">
            <WalletButton />
            <a
              href="https://www.wzrdtech.replit.app"
              className="px-8 py-3 border-2 border-red-500 text-red-500 font-bold rounded-full hover:bg-red-500/10 transition-colors shadow-lg shadow-red-500/50"
            >
              Access WZRD.tech
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;