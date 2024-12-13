import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Check if mouse is in the bottom right corner (Spline bar area)
      const threshold = 100; // pixels from bottom/right edges
      const isInBottomRight = 
        e.clientX > window.innerWidth - threshold && 
        e.clientY > window.innerHeight - threshold;
      
      setShowMenu(isInBottomRight);
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

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Stake $JATT", href: "#stake" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <>
      {/* Regular navbar at the top */}
      <nav className="fixed w-full z-50 bg-jatt-dark/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-jatt-gold text-xl font-bold">$JATT</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-jatt-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-jatt-darker">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-jatt-gold block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
      </nav>

      {/* Glassmorphism menu that appears on hover */}
      <div 
        className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out
          ${showMenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
          backdrop-blur-md bg-gradient-to-br from-[#1A1F2C80] via-[#221F2680] to-[#22222280]
          border border-[#9b87f520] rounded-lg shadow-lg p-4
          before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] 
          before:bg-repeat before:opacity-20 before:mix-blend-overlay before:pointer-events-none
          after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-br after:from-[#9b87f510] after:to-transparent after:opacity-50`}
      >
        <div className="relative space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-sm text-white/90 hover:text-white
                hover:bg-white/10 rounded transition-colors
                border border-transparent hover:border-[#9b87f520]
                backdrop-blur-sm hover:backdrop-blur-md
                hover:shadow-[0_0_15px_rgba(155,135,245,0.1)]"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;