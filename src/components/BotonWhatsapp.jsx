import { buildWhatsappUrl } from "../config/business";

function BotonWhatsapp({ cartCount, onOpenCart }) {
  return (
    <div className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-5 sm:bottom-5 z-40 flex flex-col items-stretch sm:items-end gap-3 mobile-safe-bottom max-w-[calc(100vw-2rem)]">
      {cartCount > 0 && (
        <button
          type="button"
          onClick={onOpenCart}
          className="w-full sm:w-auto bg-amber-400 text-black px-5 py-3 rounded-full font-black shadow-2xl hover:bg-amber-300 transition hover:scale-105 active:scale-95 cart-badge-pop"
        >
          🛒 Ver pedido ({cartCount})
        </button>
      )}

      <a
        href={buildWhatsappUrl(
          "Hola! Quiero consultar por cervezas Viejo Munich.",
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto bg-green-500 text-black px-5 py-4 rounded-full font-black shadow-2xl hover:bg-green-400 transition hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}

export default BotonWhatsapp;
