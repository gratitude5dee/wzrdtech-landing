import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { NavLinks } from './navbar/NavLinks';
import { WalletButton } from './navbar/WalletButton';
import { MobileMenu } from './navbar/MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const threshold = 120;
      const horizontalThreshold = window.innerWidth * 0.48;
      const centerX = window.innerWidth / 2;
      
      const isInBottomCenter = 
        e.clientY > window.innerHeight - threshold &&
        Math.abs(e.clientX - centerX) < horizontalThreshold;
      
      setShowMenu(isInBottomCenter);
    };

    const handleMouseLeave = () => {
      setShowMenu(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div 
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out
          ${showMenu ? 'bottom-0 opacity-100 scale-100' : '-bottom-20 opacity-0 scale-95 pointer-events-none'}
          backdrop-blur-xl bg-gradient-to-br from-[#1A1F2C98] via-[#221F2698] to-[#22222298]
          border border-[#9b87f540] rounded-t-[2rem] shadow-2xl px-8 py-4 w-[900px]
          before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] 
          before:bg-repeat before:opacity-30 before:mix-blend-overlay before:pointer-events-none before:rounded-t-[2rem]
          after:absolute after:inset-0 after:rounded-t-[2rem] after:bg-gradient-to-br after:from-[#9b87f520] after:to-transparent after:opacity-50
          hover:shadow-[0_-8px_32px_rgba(155,135,245,0.3)] hover:border-[#9b87f550]
          hover:bg-gradient-to-br hover:from-[#1A1F2C99] hover:via-[#221F2699] hover:to-[#22222299]`}
      >
        <div className="relative flex items-center justify-between w-full">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/720bfe14-7d72-4c31-ac28-ff74302131bb.png"
              alt="WZRD.tech Logo"
              className="h-16 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(255,68,68,0.6)]"
            />
          </div>

          <div className="hidden md:flex items-center justify-center gap-6 flex-grow">
            <NavLinks />
          </div>

          <div className="flex-shrink-0 ml-6">
            <WalletButton />
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-white p-2 rounded-lg bg-jatt-dark/80 backdrop-blur-sm"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;