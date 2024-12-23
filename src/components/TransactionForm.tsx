import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const TransactionForm = () => {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) throw new Error("User not authenticated");

      const { error } = await supabase.functions.invoke('wallet-operations', {
        body: {
          operation: 'TRANSFER',
          userId: user.id,
          params: {
            to: recipient,
            amount: parseFloat(amount),
          },
        },
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Transaction initiated successfully",
      });

      setAmount("");
      setRecipient("");
    } catch (error) {
      console.error('Transaction error:', error);
      toast({
        title: "Error",
        description: "Failed to process transaction",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleTransaction} className="space-y-4 max-w-md mx-auto p-6 bg-white/5 rounded-xl backdrop-blur-sm">
      <div className="space-y-2">
        <label htmlFor="amount" className="text-sm font-medium text-gray-200">
          Amount
        </label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="bg-white/10 border-white/20 text-white"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="recipient" className="text-sm font-medium text-gray-200">
          Recipient Address
        </label>
        <Input
          id="recipient"
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Enter recipient address"
          className="bg-white/10 border-white/20 text-white"
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-red-500 hover:bg-red-600 text-white"
      >
        {isLoading ? "Processing..." : "Send Transaction"}
      </Button>
    </form>
  );
};