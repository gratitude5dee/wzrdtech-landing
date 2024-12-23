import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const TokenLaunch = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    initialSupply: "",
    initialPrice: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) throw new Error("Not authenticated");

      const { error } = await supabase.functions.invoke('token-launch', {
        body: {
          name: formData.name,
          symbol: formData.symbol,
          initialSupply: parseFloat(formData.initialSupply),
          initialPrice: parseFloat(formData.initialPrice),
        }
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Token launch initiated successfully",
      });

      setFormData({
        name: "",
        symbol: "",
        initialSupply: "",
        initialPrice: "",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Launch New Token</CardTitle>
        <CardDescription>Create and deploy your own token on Solana</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Token Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <Input
              placeholder="Token Symbol"
              value={formData.symbol}
              onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
              required
            />
          </div>
          <div>
            <Input
              type="number"
              placeholder="Initial Supply"
              value={formData.initialSupply}
              onChange={(e) => setFormData({ ...formData, initialSupply: e.target.value })}
              required
            />
          </div>
          <div>
            <Input
              type="number"
              placeholder="Initial Price (USDC)"
              value={formData.initialPrice}
              onChange={(e) => setFormData({ ...formData, initialPrice: e.target.value })}
              required
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Launching..." : "Launch Token"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};