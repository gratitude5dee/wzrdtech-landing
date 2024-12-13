const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-jatt-darker to-black py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <img 
              src="/lovable-uploads/3ac7e9d1-cf19-43dc-960b-d5746b58f80d.png"
              alt="$JATT Logo"
              className="w-32 h-auto mb-4"
            />
            <p className="text-gray-400 max-w-md">
              Join the cosmic revolution with $JATT - where memes meet the metaverse in an 
              interstellar journey to the moon and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-red-500 transition-colors">Features</a></li>
              <li><a href="#sponsors" className="text-gray-400 hover:text-red-500 transition-colors">Partners</a></li>
              <li><a href="#timeline" className="text-gray-400 hover:text-red-500 transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Telegram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Discord</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Medium</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">© 2024 $JATT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;