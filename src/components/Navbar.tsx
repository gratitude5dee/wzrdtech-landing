import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { WalletButton } from "./WalletButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleMouseMove = () => {
      setShowMenu(true);
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
    { 
      name: "Receive updates", 
      href: "https://form.zootools.co/go/olUVsILvsferFvgwBrCE", 
      external: true,
      dataWaitlistId: "olUVsILvsferFvgwBrCE",
      className: "bg-[#39256e] hover:bg-[#4a307e] !border-transparent"
    },
    { name: "FAQs", href: "#faqs" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div 
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out
          ${showMenu ? 'top-2 opacity-100 scale-100' : '-top-20 opacity-0 scale-95 pointer-events-none'}
          backdrop-blur-xl bg-gradient-to-br from-[#1A1F2C98] via-[#221F2698] to-[#22222298]
          border border-[#9b87f540] rounded-[2rem] shadow-2xl px-8 py-2 w-[1200px]
          before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] 
          before:bg-repeat before:opacity-30 before:mix-blend-overlay before:pointer-events-none before:rounded-[2rem]
          after:absolute after:inset-0 after:rounded-[2rem] after:bg-gradient-to-br after:from-[#9b87f520] after:to-transparent after:opacity-50
          hover:shadow-[0_8px_32px_rgba(155,135,245,0.3)] hover:border-[#9b87f550]
          hover:bg-gradient-to-br hover:from-[#1A1F2C99] hover:via-[#221F2699] hover:to-[#22222299]`}
      >
        <div className="relative flex items-center justify-between w-full">
          <div className="flex-shrink-0 overflow-hidden h-24">
            <img 
              src="/wzrd.gif"
              alt="WZRD.tech Logo"
              className="h-32 w-auto -mt-4 object-contain transform hover:scale-105 transition-all duration-300 filter drop-shadow-[0_0_8px_rgba(155,135,245,0.6)] hover:drop-shadow-[0_0_12px_rgba(218,165,32,0.8)]"
            />
          </div>

          <div className="flex items-center justify-center gap-6 flex-grow">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
                data-waitlist-id={item.dataWaitlistId}
                onClick={(e) => !item.external && handleNavClick(e, item.href)}
                className={`px-6 py-2 text-sm font-medium text-white/90 hover:text-white
                  hover:bg-white/10 rounded-xl transition-all duration-300
                  border border-transparent hover:border-[#9b87f540]
                  backdrop-blur-sm hover:backdrop-blur-md
                  hover:shadow-[0_0_20px_rgba(155,135,245,0.3)]
                  group relative overflow-hidden cursor-pointer
                  hover:scale-105 transform-gpu ${item.className || ''}`}
              >
                <span className="relative z-10 tracking-wide whitespace-nowrap">{item.name}</span>
                <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 
                  bg-gradient-to-b from-white/[0.09] to-transparent transition-transform duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                  bg-gradient-to-r from-transparent via-white/[0.05] to-transparent
                  blur-sm transition-opacity duration-300" />
              </a>
            ))}
          </div>

          <WalletButton variant="navbar" />
        </div>
      </div>

      {/* Mobile menu button */}
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
            <img 
              src="/wzrd.gif"
              alt="WZRD.tech Logo"
              className="h-48 w-auto object-contain mb-8 filter drop-shadow-[0_0_8px_rgba(155,135,245,0.6)] hover:drop-shadow-[0_0_12px_rgba(218,165,32,0.8)]"
            />
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
                data-waitlist-id={item.dataWaitlistId}
                onClick={(e) => {
                  !item.external && handleNavClick(e, item.href);
                  setIsOpen(false);
                }}
                className={`text-2xl text-gray-300 hover:text-purple-500 transition-colors cursor-pointer ${item.className || ''}`}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-8">
              <WalletButton variant="navbar" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;