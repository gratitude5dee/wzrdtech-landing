import { useState, useEffect } from 'react';

const GlassVideo = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    // Start with entering animation
    setIsEntering(true);
    setTimeout(() => setIsEntering(false), 1000); // 1 second for fade in

    const timer = setTimeout(() => {
      setIsExiting(true);
      // Add a small delay before completely removing the component
      setTimeout(() => {
        setIsVisible(false);
        onLoadComplete();
      }, 1000); // 1 second for fade out animation
    }, 4000); // 4 seconds for the content to display

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-jatt-darker/95 backdrop-blur-lg transition-all duration-1000 
        ${isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}
        ${isEntering ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
    >
      <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden transition-transform duration-1000">
        {/* Gradient background with enhanced animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-jatt-dark via-black to-jatt-dark opacity-90 animate-pulse" />
        
        {/* Glowing border effect with improved animation */}
        <div className="absolute inset-0 rounded-2xl border border-jatt-gold/30 shadow-[0_0_30px_rgba(218,165,32,0.3)] animate-glow" />
        
        {/* Content container */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {/* Video element with enhanced transitions */}
          <div className="w-full h-full relative transform transition-all duration-1000">
            <video 
              src="/aivid3.mp4"
              autoPlay
              muted
              playsInline
              className={`w-full h-full object-cover transition-all duration-1000 ${isExiting ? 'scale-110 blur-sm' : 'scale-100 blur-0'}`}
            />
            {/* Inner glow with enhanced animation */}
            <div className={`absolute inset-0 bg-gradient-to-r from-jatt-neon-purple/20 via-jatt-neon-blue/20 to-jatt-neon-green/20 blur-md 
              transition-opacity duration-1000 ${isExiting ? 'opacity-0' : 'opacity-100'}`} 
            />
          </div>

          {/* Enhanced decorative lines */}
          <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jatt-neon-blue to-transparent 
            transition-all duration-1000 ${isExiting ? 'scale-x-0' : 'scale-x-100'}`} 
          />
          <div className={`absolute bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jatt-neon-purple to-transparent 
            transition-all duration-1000 ${isExiting ? 'scale-x-0' : 'scale-x-100'}`} 
          />
        </div>
      </div>
    </div>
  );
};

export default GlassVideo;