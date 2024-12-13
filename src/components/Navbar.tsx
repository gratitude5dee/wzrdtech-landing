import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Check if mouse is in the bottom center area
      const threshold = 150; // pixels from bottom
      const horizontalThreshold = window.innerWidth * 0.4; // 40% from center
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

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Stake $JATT", href: "#stake" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <>
      {/* Enhanced floating glassmorphism menu */}
      <div 
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out
          ${showMenu ? 'bottom-4 opacity-100' : '-bottom-20 opacity-0 pointer-events-none'}
          backdrop-blur-xl bg-gradient-to-br from-[#1A1F2C90] via-[#221F2690] to-[#22222290]
          border border-[#9b87f530] rounded-2xl shadow-2xl p-6 min-w-[500px]
          before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] 
          before:bg-repeat before:opacity-30 before:mix-blend-overlay before:pointer-events-none before:rounded-2xl
          after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-br after:from-[#9b87f520] after:to-transparent after:opacity-50
          hover:shadow-[0_8px_32px_rgba(155,135,245,0.2)] hover:border-[#9b87f540]`}
      >
        <div className="relative flex items-center justify-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-6 py-3 text-sm font-medium text-white/90 hover:text-white
                hover:bg-white/10 rounded-xl transition-all duration-300
                border border-transparent hover:border-[#9b87f530]
                backdrop-blur-sm hover:backdrop-blur-md
                hover:shadow-[0_0_15px_rgba(155,135,245,0.15)]
                group relative overflow-hidden"
            >
              <span className="relative z-10">{item.name}</span>
              <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 
                bg-gradient-to-b from-white/[0.07] to-transparent transition-transform duration-300" />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile menu button - only visible on small screens */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-white p-2 rounded-lg bg-jatt-dark/80 backdrop-blur-sm"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-jatt-darker/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-2xl text-gray-300 hover:text-jatt-gold"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;