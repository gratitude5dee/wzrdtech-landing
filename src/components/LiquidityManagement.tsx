import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const LiquidityManagement = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [pools, setPools] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    tokenA: "",
    tokenB: "",
    poolType: "CONSTANT_PRODUCT",
    amount: "",
  });

  useEffect(() => {
    fetchPools();
  }, []);

  const fetchPools = async () => {
    try {
      const { data, error } = await supabase
        .from('liquidity_pools')
        .select('*');

      if (error) throw error;
      setPools(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) throw new Error("Not authenticated");

      const { error } = await supabase.functions.invoke('liquidity-management', {
        body: {
          tokenA: formData.tokenA,
          tokenB: formData.tokenB,
          poolType: formData.poolType,
          amount: parseFloat(formData.amount),
        }
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Liquidity pool created successfully",
      });

      fetchPools();
      setFormData({
        tokenA: "",
        tokenB: "",
        poolType: "CONSTANT_PRODUCT",
        amount: "",
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
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create Liquidity Pool</CardTitle>
          <CardDescription>Add liquidity to create a new trading pair</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Token A Address"
                value={formData.tokenA}
                onChange={(e) => setFormData({ ...formData, tokenA: e.target.value })}
                required
              />
            </div>
            <div>
              <Input
                placeholder="Token B Address"
                value={formData.tokenB}
                onChange={(e) => setFormData({ ...formData, tokenB: e.target.value })}
                required
              />
            </div>
            <div>
              <Select
                value={formData.poolType}
                onValueChange={(value) => setFormData({ ...formData, poolType: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pool Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CONSTANT_PRODUCT">Constant Product</SelectItem>
                  <SelectItem value="CONCENTRATED">Concentrated Liquidity</SelectItem>
                  <SelectItem value="STABLE">Stable Pool</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Input
                type="number"
                placeholder="Initial Liquidity Amount"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                required
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Creating..." : "Create Pool"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Liquidity Pools</CardTitle>
          <CardDescription>Manage your active liquidity positions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pools.map((pool) => (
              <div key={pool.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Pool: {pool.token_a}/{pool.token_b}</p>
                    <p className="text-sm text-gray-500">Type: {pool.pool_type}</p>
                    <p className="text-sm text-gray-500">TVL: ${pool.total_value_locked}</p>
                  </div>
                  <Button variant="outline" onClick={() => {}}>
                    Manage
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};