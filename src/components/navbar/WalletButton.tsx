import { FC } from 'react';
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

export const WalletButton: FC = () => {
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

  return (
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
      className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
    />
  );
};