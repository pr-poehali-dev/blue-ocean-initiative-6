interface FeaturedProps {
  onOrderClick?: () => void;
}

export default function Featured({ onOrderClick }: FeaturedProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/523e121c-50a7-41ad-9dbb-8a4040ceae25/files/4ab663d5-e69f-42ff-9cf5-2848414902a3.jpg"
          alt="Apple devices"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему выбирают нас</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Только оригинальная техника Apple — iPhone, MacBook, iPad, AirPods и Watch. Официальная гарантия, быстрая доставка и поддержка после покупки.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="#catalog" className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
            Перейти в каталог
          </a>
          <button onClick={onOrderClick} className="bg-white text-black border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-black hover:text-white cursor-pointer w-fit uppercase tracking-wide">
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  );
}