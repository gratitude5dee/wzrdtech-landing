import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

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

  const handleWalletConnect = async (walletAddress: string) => {
    try {
      if (!session?.user?.id) {
        const { data: { user }, error } = await supabase.auth.signUp({
          email: `${walletAddress.toLowerCase()}@crossmint.com`,
          password: crypto.randomUUID(),
        });

        if (error) throw error;

        if (user) {
          const { error: profileError } = await supabase
            .from('profiles')
            .update({ wallet_address: walletAddress })
            .eq('id', user.id);

          if (profileError) throw profileError;
        }
      }

      toast({
        title: "Success!",
        description: "Wallet connected successfully",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to connect wallet",
        variant: "destructive",
      });
    }
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Stake WZRD.tech", href: "#stake" },
    { name: "FAQs", href: "#faqs" },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

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

          <div className="flex-shrink-0 ml-6">
            {!session ? (
              <CrossmintPayButton
                clientId={import.meta.env.VITE_CROSSMINT_CLIENT_ID || ""}
                environment="staging"
                mintConfig={{
                  type: "erc-20",
                  totalPrice: "0",
                  quantity: "1",
                }}
                onClick={(data: any) => {
                  if (data.walletAddress) {
                    handleWalletConnect(data.walletAddress);
                  }
                }}
                className="px-4 py-2 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700"
              />
            ) : (
              <button
                onClick={() => supabase.auth.signOut()}
                className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700"
              >
                Sign Out
              </button>
            )}
          </div>
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
              src="/lovable-uploads/720bfe14-7d72-4c31-ac28-ff74302131bb.png"
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
              {!session ? (
                <CrossmintPayButton
                  clientId={import.meta.env.VITE_CROSSMINT_CLIENT_ID || ""}
                  environment="staging"
                  mintConfig={{
                    type: "erc-20",
                    totalPrice: "0",
                    quantity: "1",
                  }}
                  onClick={(data: any) => {
                    if (data.walletAddress) {
                      handleWalletConnect(data.walletAddress);
                    }
                  }}
                  className="px-4 py-2 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700"
                />
              ) : (
                <button
                  onClick={() => supabase.auth.signOut()}
                  className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700"
                >
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;