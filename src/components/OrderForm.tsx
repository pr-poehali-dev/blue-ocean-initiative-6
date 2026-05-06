import { useState } from "react";
import Icon from "@/components/ui/icon";

interface OrderFormProps {
  selectedProduct?: string;
  onClose: () => void;
}

export default function OrderForm({ selectedProduct, onClose }: OrderFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState(selectedProduct || "");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4" onClick={onClose}>
      <div
        className="bg-white w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors cursor-pointer"
        >
          <Icon name="X" size={20} />
        </button>

        {sent ? (
          <div className="text-center py-8">
            <Icon name="CheckCircle" size={48} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Заявка отправлена!</h3>
            <p className="text-neutral-500">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Оставить заявку</h3>
            <p className="text-neutral-500 text-sm mb-6">Наш менеджер перезвонит и ответит на все вопросы</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wide text-neutral-500 mb-1">Ваше имя</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван Иванов"
                  className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide text-neutral-500 mb-1">Телефон</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide text-neutral-500 mb-1">Товар (необязательно)</label>
                <input
                  type="text"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  placeholder="iPhone 16 Pro, MacBook Air..."
                  className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white py-3 uppercase tracking-wide text-sm hover:bg-neutral-800 transition-colors duration-300 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
              >
                {loading ? <Icon name="Loader2" size={16} className="animate-spin" /> : <Icon name="Send" size={16} />}
                {loading ? "Отправляем..." : "Отправить заявку"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
