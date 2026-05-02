import { useState } from "react";
import { INSTAGRAM_URL } from "../config/business";

function Navbar({ cartCount, onOpenCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#productos", label: "Productos" },
    { href: "#packs", label: "Packs" },
    { href: "#como-comprar", label: "Cómo comprar" },
    { href: "#envios", label: "Envíos" },
    { href: "#contacto", label: "Contacto" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
        <a
          href="#inicio"
          className="flex items-center gap-3"
          onClick={closeMenu}
        >
          <img
            src="/images/logo.png"
            alt="Viejo Munich"
            className="w-12 h-12 rounded-full object-contain bg-white"
          />
          <div className="leading-tight">
            <p className="font-black tracking-wide">Viejo Munich</p>
            <p className="text-xs text-amber-400 uppercase tracking-[0.25em]">
              CABA
            </p>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-white/85">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-amber-400 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition shadow-lg"
          >
            Nuestro Instagram
          </a>
          <button
            type="button"
            onClick={onOpenCart}
            className="relative bg-amber-400 text-black px-5 py-3 rounded-full font-black hover:bg-amber-300 transition"
          >
            🛒 Pedido
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-black text-xs w-6 h-6 rounded-full grid place-items-center border border-black">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenCart}
            className="relative bg-amber-400 text-black px-4 py-2 rounded-full font-black"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-black text-xs w-5 h-5 rounded-full grid place-items-center border border-black">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="border border-white/15 px-4 py-2 rounded-full font-bold"
            aria-label="Abrir menú"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className={`lg:hidden overflow-hidden border-t border-white/10 bg-black/95 transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 font-semibold px-6 py-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-white/85 hover:text-amber-400 transition py-1"
              >
                {link.label}
              </a>
            ))}

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/85 hover:text-amber-400 transition py-1"
            >
              Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
