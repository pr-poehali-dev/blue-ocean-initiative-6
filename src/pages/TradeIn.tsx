import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const steps = [
  { icon: "Smartphone", title: "Выберите устройство", desc: "Укажите модель, состояние и год выпуска вашей техники." },
  { icon: "Calculator", title: "Получите оценку", desc: "Мы рассчитаем стоимость выкупа за 5 минут и сообщим вам." },
  { icon: "HandCoins", title: "Получите деньги", desc: "Приезжайте в магазин или вызовите курьера — деньги сразу." },
];

const devices = [
  "iPhone (любая модель)", "MacBook", "iPad", "Apple Watch", "AirPods",
  "Samsung Galaxy", "Android-смартфон", "Ноутбук (другой)", "Планшет (другой)",
];

export default function TradeIn() {
  const [device, setDevice] = useState("");
  const [model, setModel] = useState("");
  const [condition, setCondition] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
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
    <div className="min-h-screen bg-white">
      <header className="bg-neutral-900 px-6 py-5 flex justify-between items-center">
        <Link to="/" className="text-white text-sm uppercase tracking-wide font-semibold">Biz Shop</Link>
        <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wide">
          <Icon name="ArrowLeft" size={14} />
          На главную
        </Link>
      </header>

      <section className="bg-neutral-900 text-white px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Сдай старое — получи новое</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">TRADE-IN</h1>
        <p className="text-lg text-neutral-300 max-w-xl mx-auto">
          Сдайте своё устройство и получите деньги или скидку на новую технику в нашем магазине.
        </p>
      </section>

      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">Как это работает</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={step.icon as "Smartphone"} size={24} className="text-white" />
              </div>
              <div className="text-xs text-neutral-400 uppercase tracking-wide mb-2">Шаг {i + 1}</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{step.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-3 text-center">Оценить устройство</h2>
          <p className="text-neutral-500 text-center mb-10">Заполните форму — мы свяжемся и назовём цену</p>

          {sent ? (
            <div className="text-center py-16 bg-white border border-neutral-100">
              <Icon name="CheckCircle" size={56} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">Заявка принята!</h3>
              <p className="text-neutral-500">Мы свяжемся с вами в течение 15 минут.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-neutral-100 p-8 flex flex-col gap-5">
              <div>
                <label className="block text-xs uppercase tracking-wide text-neutral-500 mb-1">Тип устройства</label>
                <select
                  required
                  value={device}
                  onChange={(e) => setDevice(e.target.value)}
                  className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors bg-white"
                >
                  <option value="">Выберите тип</option>
                  {devices.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide text-neutral-500 mb-1">Модель (например, iPhone 13 Pro)</label>
                <input
                  type="text"
                  required
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="Укажите модель"
                  className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide text-neutral-500 mb-2">Состояние</label>
                <div className="grid grid-cols-3 gap-3">
                  {["Отличное", "Хорошее", "Удовлетворительное"].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCondition(c)}
                      className={`py-2 text-sm border transition-all duration-200 cursor-pointer ${
                        condition === c ? "bg-black text-white border-black" : "border-neutral-300 text-neutral-700 hover:border-black"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
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
              <button
                type="submit"
                disabled={loading || !condition}
                className="bg-black text-white py-4 uppercase tracking-wide text-sm hover:bg-neutral-800 transition-colors duration-300 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? <Icon name="Loader2" size={16} className="animate-spin" /> : <Icon name="Send" size={16} />}
                {loading ? "Отправляем..." : "Отправить заявку на оценку"}
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="bg-neutral-900 px-6 py-8 text-center">
        <p className="text-neutral-400 text-sm">г. Боровичи, ул. Рабочая, д. 13 · <a href="tel:89210287878" className="text-white hover:text-neutral-300 transition-colors">8 921 028 78 78</a></p>
      </footer>
    </div>
  );
}
