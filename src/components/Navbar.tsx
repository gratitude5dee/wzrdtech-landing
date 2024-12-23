import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WalletButton } from "./WalletButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Stake WZRD.tech", href: "#stake" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
          backdrop-blur-xl bg-gradient-to-br from-[#1A1F2C98] via-[#221F2698] to-[#22222298]
          border-b border-[#9b87f540] shadow-2xl px-8 py-4
          before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] 
          before:bg-repeat before:opacity-30 before:mix-blend-overlay before:pointer-events-none
          after:absolute after:inset-0 after:bg-gradient-to-br after:from-[#9b87f520] after:to-transparent after:opacity-50
          hover:shadow-[0_4px_32px_rgba(155,135,245,0.3)] hover:border-[#9b87f550]
          hover:bg-gradient-to-br hover:from-[#1A1F2C99] hover:via-[#221F2699] hover:to-[#22222299]">
        <div className="relative flex items-center justify-between w-full">
          <div className="flex-shrink-0">
            <img 
              src="lovable-uploads/WZRD.tech(2).png"
              alt="WZRD.tech Logo"
              className="h-16 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(255,68,68,0.6)]"
            />
          </div>

          <div className="flex items-center justify-center gap-6 flex-grow">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-6 py-2 text-sm font-medium text-white/90 hover:text-white
                  hover:bg-white/10 rounded-xl transition-all duration-300
                  border border-transparent hover:border-[#9b87f540]
                  backdrop-blur-sm hover:backdrop-blur-md
                  hover:shadow-[0_0_20px_rgba(255,68,68,0.3)]
                  group relative overflow-hidden
                  hover:scale-105 transform-gpu"
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
              src="lovable-uploads/WZRD.tech(2).png"
              alt="WZRD.tech Logo"
              className="h-24 w-auto object-contain mb-8 filter drop-shadow-[0_0_8px_rgba(255,68,68,0.6)]"
            />
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-2xl text-gray-300 hover:text-red-500 transition-colors"
                onClick={() => setIsOpen(false)}
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
