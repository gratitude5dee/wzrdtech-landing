import { useState, useEffect } from 'react';

const GlassVideo = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadComplete();
    }, 4000); // 4 seconds for the video to play

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm transition-all duration-1000">
      <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-jatt-neon-purple/10 to-jatt-neon-blue/10 backdrop-blur-md rounded-lg border border-white/10" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8">
          <div className="w-32 h-32 rounded-full border-4 border-jatt-gold animate-spin-slow">
            <div className="w-full h-full rounded-full border-4 border-jatt-neon-purple animate-pulse" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gradient animate-pulse">
            Embrace the ancient wisdom flowing through you...
          </h2>
        </div>
      </div>
    </div>
  );
};

export default GlassVideo;