import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const TradingDashboard = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [positions, setPositions] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    marketAddress: "",
    positionSize: "",
    leverage: "1",
  });

  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = async () => {
    try {
      const { data, error } = await supabase
        .from('trading_positions')
        .select('*');

      if (error) throw error;
      setPositions(data || []);
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

      const { error } = await supabase.functions.invoke('trading-operations', {
        body: {
          marketAddress: formData.marketAddress,
          positionSize: parseFloat(formData.positionSize),
          leverage: parseFloat(formData.leverage),
        }
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Trading position opened successfully",
      });

      fetchPositions();
      setFormData({
        marketAddress: "",
        positionSize: "",
        leverage: "1",
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
          <CardTitle>Open Position</CardTitle>
          <CardDescription>Create a new trading position</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Market Address"
                value={formData.marketAddress}
                onChange={(e) => setFormData({ ...formData, marketAddress: e.target.value })}
                required
              />
            </div>
            <div>
              <Input
                type="number"
                placeholder="Position Size"
                value={formData.positionSize}
                onChange={(e) => setFormData({ ...formData, positionSize: e.target.value })}
                required
              />
            </div>
            <div>
              <Input
                type="number"
                placeholder="Leverage"
                value={formData.leverage}
                onChange={(e) => setFormData({ ...formData, leverage: e.target.value })}
                required
                min="1"
                max="20"
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Opening Position..." : "Open Position"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Positions</CardTitle>
          <CardDescription>Monitor and manage your trading positions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {positions.map((position) => (
              <div key={position.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Market: {position.market_address}</p>
                    <p className="text-sm text-gray-500">Size: {position.position_size}</p>
                    <p className="text-sm text-gray-500">
                      PnL: {position.pnl ? `$${position.pnl.toFixed(2)}` : 'Calculating...'}
                    </p>
                  </div>
                  <div className="space-x-2">
                    <Button variant="outline" onClick={() => {}}>
                      Close
                    </Button>
                    <Button variant="outline" onClick={() => {}}>
                      Add Margin
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};