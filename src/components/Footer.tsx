import { Twitter, MessageCircle, MessagesSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-6 overflow-hidden">
      {/* Glassmorphism background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 backdrop-blur-md" />
      
      {/* Animated gradient orbs for dynamic background */}
      <div className="absolute -top-12 -left-12 w-24 h-24 bg-jatt-neon-purple/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-jatt-neon-blue/30 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center space-y-4">
          {/* Logo Section - Increased size from h-8 to h-12 */}
          <img 
            src="/lovable-uploads/720bfe14-7d72-4c31-ac28-ff74302131bb.png"
            alt="$JATT Logo"
            className="h-12 w-auto mb-2 hover:scale-105 transition-transform duration-300"
          />
          
          {/* Description */}
          <p className="text-gray-300 text-sm max-w-md text-center leading-relaxed backdrop-blur-sm mb-4">
            Join the cosmic revolution with $JATT - where memes meet the metaverse in an 
            interstellar journey to the moon and beyond.
          </p>

          {/* Connect Section - Horizontal Layout */}
          <div className="flex items-center justify-center gap-6 py-2">
            <a 
              href="#" 
              className="text-gray-300 hover:text-jatt-neon-blue transition-colors duration-300 flex items-center gap-1.5 group"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-jatt-neon-purple transition-colors duration-300 flex items-center gap-1.5 group"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-jatt-neon-green transition-colors duration-300 flex items-center gap-1.5 group"
            >
              <MessagesSquare className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-jatt-gold transition-colors duration-300 flex items-center gap-1.5 group"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar with frosted glass effect */}
        <div className="mt-4 pt-4 border-t border-white/10 backdrop-blur-md">
          <p className="text-gray-400 text-center text-xs">
            © 2024 $JATT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;