import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

export const WalletButton = ({ className = "", variant = "default" }: { className?: string, variant?: "default" | "navbar" }) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const { toast } = useToast();

  const handleWalletConnect = async (walletAddress: string) => {
    try {
      if (!walletAddress) return;
      
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

      setWalletAddress(walletAddress);
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

  const connectPhantomWallet = async () => {
    try {
      const { solana } = window as any;
      
      if (!solana?.isPhantom) {
        toast({
          title: "Wallet not found",
          description: "Please install Phantom wallet",
          variant: "destructive",
        });
        return;
      }

      const response = await solana.connect();
      handleWalletConnect(response.publicKey.toString());
    } catch (error) {
      console.error('Error connecting wallet:', error);
      toast({
        title: "Connection failed",
        description: "Failed to connect wallet",
        variant: "destructive",
      });
    }
  };

  if (variant === "navbar") {
    return (
      <div className="flex-shrink-0 ml-6">
        {!walletAddress ? (
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
    );
  }

  return (
    <button
      onClick={connectPhantomWallet}
      className={`px-8 py-3 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition-colors shadow-lg shadow-red-500/50 ${className}`}
    >
      {walletAddress ? 'Buy WZRD.tech' : 'Connect Wallet'}
    </button>
  );
};