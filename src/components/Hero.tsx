import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

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
          alt="Apple Store"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          APPLE
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Оригинальная техника Apple с официальной гарантией. Доставка по всей России.
        </p>
        <div className="flex gap-4 justify-center mt-8 flex-wrap px-6">
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
      </div>
    </div>
  );
}
