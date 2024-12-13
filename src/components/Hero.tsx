import { useEffect, useRef } from "react";
import Spline from '@splinetool/react-spline';

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

  return (
    <div className="relative min-h-screen bg-jatt-dark overflow-hidden" id="home">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/SF6vheWfvahzFGmU/scene.splinecode"
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

      {/* Main content - moved below Spline with higher z-index */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center mt-[50vh]">
        <div 
          ref={coinRef}
          className="w-32 h-32 md:w-48 md:h-48 bg-red-500 rounded-full mb-12 animate-rotate-slow shadow-lg shadow-yellow-500/50 ring-2 ring-yellow-400/50"
        >
          <div className="w-full h-full flex items-center justify-center text-white text-4xl md:text-6xl font-bold">
            $
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          One this Earth,
        </h1>
        <h2 className="text-5xl md:text-7xl font-bold text-red-500 mb-8 shadow-yellow-500/50 drop-shadow-lg">
          we all one $JATT
        </h2>
        <p className="text-gray-400 max-w-2xl mb-12">
          Join the cosmic revolution with $JATT - where memes meet the metaverse in an 
          interstellar journey to the moon and beyond.
        </p>
        
        <div className="flex gap-4">
          <a
            href="#stake"
            className="px-8 py-3 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition-colors shadow-lg shadow-yellow-500/50"
          >
            Buy $JATT
          </a>
          <a
            href="#roadmap"
            className="px-8 py-3 border-2 border-red-500 text-red-500 font-bold rounded-full hover:bg-red-500/10 transition-colors shadow-lg shadow-yellow-500/50"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;