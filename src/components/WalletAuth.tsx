import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export const WalletAuth = () => {
  const { toast } = useToast();
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      {!session ? (
        <>
          <h2 className="text-2xl font-bold text-center">Connect Your Wallet</h2>
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
        </>
      ) : (
        <div className="text-center">
          <p className="mb-4">Wallet connected!</p>
          <button
            onClick={() => supabase.auth.signOut()}
            className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};