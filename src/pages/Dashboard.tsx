import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState<any>(null);
  const [walletData, setWalletData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (!session) {
        navigate('/');
      }
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) {
        navigate('/');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const fetchWalletData = async () => {
      if (!session?.user?.id) return;

      const { data: walletData, error } = await supabase
        .from('user_wallets')
        .select(`
          *,
          profiles!inner(*),
          trading_positions!inner(*),
          token_operations!inner(*),
          mode_transactions!inner(*)
        `)
        .eq('profile_id', session.user.id)
        .single();

      if (error) {
        console.error('Error fetching wallet data:', error);
        return;
      }

      setWalletData(walletData);
    };

    fetchWalletData();
  }, [session]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Please connect your wallet to view dashboard</div>;
  }

  const mockChartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 700 }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Wallet Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$1,234.56</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Total Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {walletData?.mode_transactions?.length || 0}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Active Positions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {walletData?.trading_positions?.filter(p => p.position_status === 'OPEN').length || 0}
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="positions">Positions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#8884d8" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {walletData?.mode_transactions?.slice(0, 5).map((tx: any) => (
                  <div key={tx.id} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-medium">{tx.transaction_type}</p>
                      <p className="text-sm text-gray-500">{new Date(tx.created_at).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{tx.amount} ETH</p>
                      <p className="text-sm text-gray-500">{tx.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="positions">
          <Card>
            <CardHeader>
              <CardTitle>Trading Positions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {walletData?.trading_positions?.map((position: any) => (
                  <div key={position.id} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-medium">Position #{position.id.slice(0, 8)}</p>
                      <p className="text-sm text-gray-500">Size: {position.position_size}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">PNL: {position.pnl || '0.00'}</p>
                      <p className={`text-sm ${
                        position.position_status === 'OPEN' ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {position.position_status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;