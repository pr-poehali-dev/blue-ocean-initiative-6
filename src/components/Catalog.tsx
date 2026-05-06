import { useState } from "react";
import Icon from "@/components/ui/icon";

const iphone17pro = "https://cdn.poehali.dev/projects/523e121c-50a7-41ad-9dbb-8a4040ceae25/files/57846ee3-0fb2-4931-abd0-abc76853b02a.jpg";
const iphone17 = "https://cdn.poehali.dev/projects/523e121c-50a7-41ad-9dbb-8a4040ceae25/files/e4b4a572-4eb6-4d47-ab2d-74d016098c7e.jpg";
const iphone15 = "https://cdn.poehali.dev/projects/523e121c-50a7-41ad-9dbb-8a4040ceae25/files/34cce6fd-40e3-40e4-9eb7-72ee33487056.jpg";
const iphone14 = "https://cdn.poehali.dev/projects/523e121c-50a7-41ad-9dbb-8a4040ceae25/files/92ade2e3-e71a-4998-a6cd-ba11402b56bb.jpg";
const mac = "https://cdn.poehali.dev/projects/523e121c-50a7-41ad-9dbb-8a4040ceae25/files/9a8b6b55-a4ab-4b32-ba83-ff4fe1b5b86e.jpg";
const ipad = "https://cdn.poehali.dev/projects/523e121c-50a7-41ad-9dbb-8a4040ceae25/files/42551c53-d762-43db-a67e-4a152e1351cc.jpg";

const products = [
  { id: 1,  category: "iPhone", name: "iPhone 17 Pro Max", description: "Чип A19 Pro. Titanium. Камера 5x. 256 ГБ.", price: "149 990 ₽", image: iphone17pro },
  { id: 2,  category: "iPhone", name: "iPhone 17 Pro",     description: "Чип A19 Pro. Titanium. Dynamic Island. 128 ГБ.", price: "129 990 ₽", image: iphone17pro },
  { id: 3,  category: "iPhone", name: "iPhone 17",         description: "Чип A19. Алюминий. 128 ГБ. USB-C.", price: "99 990 ₽", image: iphone17 },
  { id: 4,  category: "iPhone", name: "iPhone 16 Pro Max", description: "Чип A18 Pro. Titanium. Зум 5x. 256 ГБ.", price: "134 990 ₽", image: iphone17pro },
  { id: 5,  category: "iPhone", name: "iPhone 16 Pro",     description: "Чип A18 Pro. Titanium. Камера 48 Мп. 128 ГБ.", price: "119 990 ₽", image: iphone17pro },
  { id: 6,  category: "iPhone", name: "iPhone 16",         description: "Чип A18. Dynamic Island. USB-C. 128 ГБ.", price: "89 990 ₽", image: iphone17 },
  { id: 7,  category: "iPhone", name: "iPhone 15 Pro Max", description: "Чип A17 Pro. Titanium. Зум 5x. 256 ГБ.", price: "109 990 ₽", image: iphone15 },
  { id: 8,  category: "iPhone", name: "iPhone 15 Pro",     description: "Чип A17 Pro. Titanium. USB-C. 128 ГБ.", price: "94 990 ₽", image: iphone15 },
  { id: 9,  category: "iPhone", name: "iPhone 15",         description: "Чип A16. Dynamic Island. USB-C. 128 ГБ.", price: "74 990 ₽", image: iphone15 },
  { id: 10, category: "iPhone", name: "iPhone 14",         description: "Чип A15. Super Retina XDR. 128 ГБ.", price: "59 990 ₽", image: iphone14 },
  { id: 11, category: "Mac",    name: "MacBook Pro 16",    description: "Чип M4 Pro. 24 ГБ RAM. 512 ГБ SSD. До 24 ч.", price: "249 990 ₽", image: mac },
  { id: 12, category: "Mac",    name: "MacBook Pro 14",    description: "Чип M4 Pro. 24 ГБ RAM. 512 ГБ SSD.", price: "219 990 ₽", image: mac },
  { id: 13, category: "Mac",    name: "MacBook Air 15",    description: "Чип M3. 8 ГБ RAM. 256 ГБ SSD. 15 дюймов.", price: "139 990 ₽", image: mac },
  { id: 14, category: "Mac",    name: "MacBook Air 13",    description: "Чип M3. 8 ГБ RAM. 256 ГБ SSD. Лёгкий.", price: "119 990 ₽", image: mac },
  { id: 15, category: "iPad",   name: "iPad Pro 13",       description: "Чип M4. OLED. Apple Pencil Pro. 256 ГБ.", price: "149 990 ₽", image: ipad },
  { id: 16, category: "iPad",   name: "iPad Pro 11",       description: "Чип M4. OLED. Тонкий и мощный. 256 ГБ.", price: "119 990 ₽", image: ipad },
  { id: 17, category: "iPad",   name: "iPad Air 13",       description: "Чип M2. Retina. 128 ГБ. Wi-Fi.", price: "99 990 ₽", image: ipad },
  { id: 18, category: "iPad",   name: "iPad Air 11",       description: "Чип M2. Retina. 128 ГБ. Wi-Fi + Cellular.", price: "79 990 ₽", image: ipad },
  { id: 19, category: "iPad",   name: "iPad 10",           description: "Чип A14. 64 ГБ. Wi-Fi. USB-C.", price: "49 990 ₽", image: ipad },
  { id: 20, category: "Watch",  name: "Apple Watch Ultra 2", description: "Titanium. GPS + Cellular. Для экстрима.", price: "89 990 ₽", image: iphone },
  { id: 21, category: "Watch",  name: "Apple Watch Series 10", description: "Алюминий. GPS. OLED-дисплей.", price: "44 990 ₽", image: iphone },
  { id: 22, category: "AirPods", name: "AirPods Pro 2",   description: "ANC. Адаптивный звук. USB-C.", price: "24 990 ₽", image: iphone },
  { id: 23, category: "AirPods", name: "AirPods 4",       description: "Активное шумоподавление. USB-C.", price: "16 990 ₽", image: iphone },
];

const categories = ["Все", "iPhone", "Mac", "iPad", "Watch", "AirPods"];

interface CatalogProps {
  onOrder: (productName: string) => void;
}

export default function Catalog({ onOrder }: CatalogProps) {
  const [active, setActive] = useState("Все");

  const filtered = active === "Все" ? products : products.filter((p) => p.category === active);

  return (
    <section id="catalog" className="bg-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-2">
          Каталог
        </h2>
        <p className="text-neutral-500 mb-10 text-lg">Оригинальная техника · Гарантия · Доставка по России</p>

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