import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { TransactionForm } from "@/components/TransactionForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-jatt-darker">
      <Navbar />
      <Hero />
      <div className="container mx-auto py-16">
        <TransactionForm />
      </div>
    </div>
  );
};

export default Index;