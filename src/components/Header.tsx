import { Link } from "react-router-dom";

interface HeaderProps {
  className?: string;
  onOrderClick?: () => void;
}

export default function Header({ className, onOrderClick }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide font-semibold">Biz Shop</div>
        <nav className="flex gap-6 items-center">
          <a
            href="#catalog"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Каталог
          </a>
          <Link
            to="/trade-in"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Trade-In
          </Link>
          <button
            onClick={onOrderClick}
            className="text-white border border-white px-4 py-1.5 uppercase text-sm hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
          >
            Заявка
          </button>
        </nav>
      </div>
    </header>
  );
}
