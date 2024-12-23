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
          {/* Logo Section */}
          <img 
            src="/wzrd.gif"
            alt="WZRD.tech Logo"
            className="h-24 w-auto mb-2 hover:scale-105 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(155,135,245,0.6)] hover:drop-shadow-[0_0_12px_rgba(218,165,32,0.8)]"
          />
          
          {/* Description */}
          <p className="text-gray-300 text-sm max-w-md text-center leading-relaxed backdrop-blur-sm mb-4">
            Join the psychedelic revolution with WZRD.tech - personal wellness at your fingertips, with the mission to empower healers and creatives globally.
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
            © 2024 5-Dee Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
