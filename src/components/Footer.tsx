import { Twitter, MessageCircle, MessagesSquare, Menu } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-8 overflow-hidden">
      {/* Glassmorphism background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 backdrop-blur-md" />
      
      {/* Animated gradient orbs for dynamic background */}
      <div className="absolute -top-12 -left-12 w-24 h-24 bg-jatt-neon-purple/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-jatt-neon-blue/30 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 space-y-2">
            <img 
              src="/lovable-uploads/3ac7e9d1-cf19-43dc-960b-d5746b58f80d.png"
              alt="$JATT Logo"
              className="w-24 h-auto mb-2 hover:scale-105 transition-transform duration-300"
            />
            <p className="text-gray-300 text-sm max-w-md leading-relaxed backdrop-blur-sm">
              Join the cosmic revolution with $JATT - where memes meet the metaverse in an 
              interstellar journey to the moon and beyond.
            </p>
          </div>

          {/* Footer Menu */}
          <div className="backdrop-blur-sm">
            <div className="flex items-center gap-1.5 mb-3">
              <Menu className="w-4 h-4 text-jatt-gold" />
              <h3 className="text-white font-medium text-base">Footer Menu</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-300 hover:text-jatt-neon-blue transition-colors duration-300 flex items-center gap-1.5"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  className="text-gray-300 hover:text-jatt-neon-purple transition-colors duration-300 flex items-center gap-1.5"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#sponsors" 
                  className="text-gray-300 hover:text-jatt-neon-green transition-colors duration-300 flex items-center gap-1.5"
                >
                  Partners
                </a>
              </li>
              <li>
                <a 
                  href="#timeline" 
                  className="text-gray-300 hover:text-jatt-gold transition-colors duration-300 flex items-center gap-1.5"
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section with Icons */}
          <div className="backdrop-blur-sm">
            <h3 className="text-white font-medium mb-3 text-base">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-jatt-neon-blue transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <Twitter className="w-4 h-4" />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-jatt-neon-purple transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Telegram</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-jatt-neon-green transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <MessagesSquare className="w-4 h-4" />
                  <span>Discord</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-jatt-gold transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-4 h-4"
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                  <span>Medium</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with frosted glass effect */}
        <div className="mt-6 pt-4 border-t border-white/10 backdrop-blur-md">
          <p className="text-gray-400 text-center text-xs">
            © 2024 $JATT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;