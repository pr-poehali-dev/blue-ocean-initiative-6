import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Catalog from "@/components/Catalog";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [orderOpen, setOrderOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleOrder = (productName: string) => {
    setSelectedProduct(productName);
    setOrderOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Header onOrderClick={() => setOrderOpen(true)} />
      <Hero onOrderClick={() => setOrderOpen(true)} />
      <Catalog onOrder={handleOrder} />
      <Featured onOrderClick={() => setOrderOpen(true)} />
      <Promo />
      <Footer onOrderClick={() => setOrderOpen(true)} />
      {orderOpen && (
        <OrderForm
          selectedProduct={selectedProduct}
          onClose={() => { setOrderOpen(false); setSelectedProduct(""); }}
        />
      )}
    </main>
  );
};

export default Index;
