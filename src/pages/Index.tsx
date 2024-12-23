import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TokenLaunch } from "@/components/TokenLaunch";
import { LiquidityManagement } from "@/components/LiquidityManagement";
import { TradingDashboard } from "@/components/TradingDashboard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
      }
    };
    checkUser();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-jatt-darker">
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-white mb-8">WZRD.tech Dashboard</h1>
        
        <Tabs defaultValue="token" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="token">Token Launch</TabsTrigger>
            <TabsTrigger value="liquidity">Liquidity Management</TabsTrigger>
            <TabsTrigger value="trading">Trading</TabsTrigger>
          </TabsList>
          
          <TabsContent value="token">
            <TokenLaunch />
          </TabsContent>
          
          <TabsContent value="liquidity">
            <LiquidityManagement />
          </TabsContent>
          
          <TabsContent value="trading">
            <TradingDashboard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;