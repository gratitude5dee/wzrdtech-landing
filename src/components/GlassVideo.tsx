import { useState, useEffect } from 'react';

const GlassVideo = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadComplete();
    }, 4000); // 4 seconds for the animation to play

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-jatt-darker/95 backdrop-blur-lg transition-all duration-1000">
      <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-jatt-dark via-black to-jatt-dark opacity-90" />
        
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-2xl border border-jatt-gold/30 shadow-[0_0_30px_rgba(218,165,32,0.3)]" />
        
        {/* Content container */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-12 px-8">
          {/* Spinning coin animation */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-2 border-jatt-gold animate-spin-slow">
              <div className="w-full h-full rounded-full border-2 border-jatt-neon-purple animate-pulse" />
            </div>
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-jatt-neon-purple/20 via-jatt-neon-blue/20 to-jatt-neon-green/20 blur-md animate-pulse" />
          </div>

          {/* Text with gradient */}
          <h2 className="text-3xl md:text-5xl font-bold text-gradient animate-pulse max-w-2xl text-center">
            Embrace the ancient wisdom flowing through you...
          </h2>

          {/* Decorative lines */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jatt-neon-blue to-transparent animate-pulse" />
          <div className="absolute bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jatt-neon-purple to-transparent animate-pulse opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default GlassVideo;