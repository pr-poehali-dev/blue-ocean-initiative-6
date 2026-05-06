import { useState } from "react";
import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    category: "iPhone",
    name: "iPhone 16 Pro",
    description: "Titanium. Чип A18 Pro. Камера 48 Мп с оптическим зумом 5x.",
    price: "119 990 ₽",
    image: "https://cdn.poehali.dev/projects/523e121c-50a7-41ad-9dbb-8a4040ceae25/files/80ab08b9-172e-43bc-9ba3-5bcbe02fe35b.jpg",
  },
  {
    id: 2,
    category: "iPhone",
    name: "iPhone 16",
    description: "Чип A18. Dynamic Island. Зарядка USB-C. 128 ГБ.",
    price: "89 990 ₽",
    image: "https://cdn.poehali.dev/projects/523e121c-50a7-41ad-9dbb-8a4040ceae25/files/80ab08b9-172e-43bc-9ba3-5bcbe02fe35b.jpg",
  },
  {
    id: 3,
    category: "Mac",
    name: "MacBook Pro 16",
    description: "Чип M4 Pro. 24 ГБ RAM. 512 ГБ SSD. До 24 часов работы.",
    price: "249 990 ₽",
    image: "https://cdn.poehali.dev/projects/523e121c-50a7-41ad-9dbb-8a4040ceae25/files/9a8b6b55-a4ab-4b32-ba83-ff4fe1b5b86e.jpg",
  },
  {
    id: 4,
    category: "Mac",
    name: "MacBook Air 13",
    description: "Чип M3. 8 ГБ RAM. 256 ГБ SSD. Тонкий и лёгкий.",
    price: "119 990 ₽",
    image: "https://cdn.poehali.dev/projects/523e121c-50a7-41ad-9dbb-8a4040ceae25/files/9a8b6b55-a4ab-4b32-ba83-ff4fe1b5b86e.jpg",
  },
  {
    id: 5,
    category: "iPad",
    name: "iPad Pro 13",
    description: "Чип M4. OLED-дисплей. Поддержка Apple Pencil Pro.",
    price: "149 990 ₽",
    image: "https://cdn.poehali.dev/projects/523e121c-50a7-41ad-9dbb-8a4040ceae25/files/42551c53-d762-43db-a67e-4a152e1351cc.jpg",
  },
  {
    id: 6,
    category: "iPad",
    name: "iPad Air 11",
    description: "Чип M2. Retina-дисплей. 128 ГБ. Wi-Fi + Cellular.",
    price: "79 990 ₽",
    image: "https://cdn.poehali.dev/projects/523e121c-50a7-41ad-9dbb-8a4040ceae25/files/42551c53-d762-43db-a67e-4a152e1351cc.jpg",
  },
];

const categories = ["Все", "iPhone", "Mac", "iPad"];

interface CatalogProps {
  onOrder: (productName: string) => void;
}

export default function Catalog({ onOrder }: CatalogProps) {
  const [active, setActive] = useState("Все");

  const filtered = active === "Все" ? products : products.filter((p) => p.category === active);

  return (
    <section id="catalog" className="bg-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
          Каталог
        </h2>
        <p className="text-neutral-500 mb-10 text-lg">Оригинальная техника с официальной гарантией</p>

        <div className="flex gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-sm uppercase tracking-wide border transition-all duration-300 cursor-pointer ${
                active === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-neutral-300 hover:border-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <div key={product.id} className="group border border-neutral-100 hover:border-neutral-300 transition-all duration-300">
              <div className="h-56 overflow-hidden bg-neutral-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wide text-neutral-400 mb-1 block">{product.category}</span>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{product.name}</h3>
                <p className="text-neutral-500 text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-neutral-900">{product.price}</span>
                  <button
                    onClick={() => onOrder(product.name)}
                    className="flex items-center gap-2 bg-black text-white px-4 py-2 text-sm uppercase tracking-wide hover:bg-neutral-800 transition-colors duration-300 cursor-pointer"
                  >
                    <Icon name="ShoppingBag" size={14} />
                    Заказать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
