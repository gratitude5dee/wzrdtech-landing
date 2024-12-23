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
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-900/20 rounded-full animate-float delay-100" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-900/20 rounded-full animate-float delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-purple-900/20 rounded-full animate-float delay-500" />
      </div>

      {/* Glowing lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-jatt-neon-purple to-transparent animate-glow" />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-jatt-gold to-transparent animate-glow delay-100" />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-glow delay-200" />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-50 pointer-events-none" />

      {/* Main content */}
      <section className="min-h-screen bg-jatt-darker/90 px-4 py-20">
        <div className="container mx-auto flex flex-col items-center justify-center text-center relative">
          {/* Background WZRD.gif */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-50 pointer-events-none z-0">
            <img 
              src="/wzrd.gif"
              alt="WZRD.tech Background"
              className="w-full h-full object-contain animate-pulse"
            />
          </div>

          {/* Foreground content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <img 
              src="/wzrd.gif"
              alt="WZRD.tech Logo"
              className="w-64 h-auto mb-12 mx-auto filter drop-shadow-[0_0_15px_rgba(155,135,245,0.6)] hover:drop-shadow-[0_0_20px_rgba(218,165,32,0.8)] transition-all duration-300"
            />
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              One this Earth,
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 via-jatt-gold to-purple-500 bg-clip-text text-transparent mb-8 drop-shadow-lg">
              we all one WZRD.tech
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
              Join the psychedelic revolution with WZRD.tech - personal wellness at your fingertips, with the mission to empower healers and creatives globally.
            </p>
            
            <div className="flex justify-center gap-6">
              <WalletButton />
              <a
                href="https://wzrdtech.replit.app"
                className="px-8 py-3 border-2 border-purple-500 text-purple-500 font-bold rounded-full hover:bg-purple-500/10 transition-colors shadow-lg shadow-purple-500/50"
              >
                Access WZRD.tech
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;