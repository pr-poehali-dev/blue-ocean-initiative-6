import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Icon from "@/components/ui/icon";

interface HeroProps {
  onOrderClick: () => void;
}

export default function Hero({ onOrderClick }: HeroProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/523e121c-50a7-41ad-9dbb-8a4040ceae25/files/dc4ea070-1c93-47fa-afd5-7e4f6c493c9a.jpg"
          alt="Biz Shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6 w-full max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-3">
          BIZ SHOP
        </h1>
        <p className="text-base md:text-lg uppercase tracking-widest opacity-70 mb-4">
          Продажа · Выкуп техники
        </p>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-90 mb-8">
          Оригинальная техника Apple с официальной гарантией. Доставка по всей России.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-10">
          <a
            href="#catalog"
            className="border border-white text-white px-8 py-3 uppercase text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300"
          >
            Смотреть каталог
          </a>
          <button
            onClick={onOrderClick}
            className="bg-white text-black px-8 py-3 uppercase text-sm tracking-wide hover:bg-neutral-200 transition-all duration-300 cursor-pointer"
          >
            Оставить заявку
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center opacity-80 text-sm">
          <a href="tel:89210287878" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
            <Icon name="Phone" size={14} />
            8 921 028 78 78
          </a>
          <span className="hidden sm:block text-white/40">|</span>
          <span className="flex items-center gap-2">
            <Icon name="MapPin" size={14} />
            г. Боровичи, ул. Рабочая, д. 13
          </span>
        </div>
      </div>
    </div>
  );
}
