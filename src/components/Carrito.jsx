import { useEffect } from "react";
import { buildWhatsappUrl } from "../config/business";

function Carrito({
  isOpen,
  cart,
  onClose,
  onAdd,
  onRemoveOne,
  onRemoveAll,
  onClear,
}) {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const message = cart.length
    ? `Hola! Quiero hacer un pedido de Viejo Munich:\n\n${cart
        .map(
          (item) =>
            `- ${item.quantity}x ${item.name}${item.type ? ` (${item.type})` : ""}`,
        )
        .join(
          "\n",
        )}\n\n¿Me pasás precio final, disponibilidad y costo de envío/retiro?`
    : "Hola! Quiero consultar por cervezas Viejo Munich.";

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[80] overflow-hidden transition ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-label="Cerrar carrito"
      ></button>

      <aside
        className={`absolute right-0 top-0 h-dvh overflow-hidden w-full sm:max-w-md bg-[#0d0805] border-l border-amber-400/20 shadow-2xl flex flex-col text-white transition-transform duration-300 ease-out mobile-safe-bottom ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-start justify-between gap-4">
          <div>
            <p className="text-amber-400 text-xs sm:text-sm uppercase tracking-[0.25em] mb-2">
              Tu pedido
            </p>
            <h2 className="text-2xl sm:text-3xl font-black">
              Carrito por WhatsApp
            </h2>
            <p className="text-sm text-white/60 mt-2">
              Armá el pedido y lo confirmás directo por WhatsApp.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 text-xl leading-none hover:bg-amber-400 hover:text-black transition"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto p-5 sm:p-6">
          {cart.length === 0 ? (
            <div className="h-full min-h-[320px] grid place-items-center text-center">
              <div className="animate-[fadeUp_500ms_ease_forwards]">
                <p className="text-5xl mb-4">🍺</p>
                <h3 className="text-2xl font-black mb-2">
                  Todavía no agregaste nada
                </h3>
                <p className="text-white/60">
                  Elegí cervezas o packs para armar tu pedido.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <article
                  key={item.id}
                  style={{ animationDelay: `${index * 70}ms` }}
                  className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 opacity-0 animate-[fadeUp_450ms_ease_forwards]"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover border border-white/10"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-3">
                        <div>
                          <h3 className="font-black text-lg leading-tight">
                            {item.name}
                          </h3>
                          <p className="text-xs text-amber-300">{item.type}</p>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveAll(item.id)}
                          className="text-white/50 hover:text-red-400 text-sm transition"
                        >
                          Quitar
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => onRemoveOne(item.id)}
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 font-black transition"
                          >
                            −
                          </button>

                          <span className="font-black">{item.quantity}</span>

                          <button
                            type="button"
                            onClick={() => onAdd(item)}
                            className="w-9 h-9 rounded-full bg-amber-400 text-black hover:bg-amber-300 font-black transition"
                          >
                            +
                          </button>
                        </div>

                        <p className="text-xs text-white/50">
                          Precio a confirmar
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="p-5 sm:p-6 border-t border-white/10 bg-black/35">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white/70">Total de unidades</span>
            <span className="text-2xl font-black text-amber-400">
              {cartCount}
            </span>
          </div>

          <a
            href={buildWhatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 text-black rounded-2xl py-4 font-black flex items-center justify-center gap-2 hover:bg-green-400 transition hover:scale-[1.02]"
          >
            💬 Finalizar por WhatsApp
          </a>

          {cart.length > 0 && (
            <button
              type="button"
              onClick={onClear}
              className="w-full mt-3 text-sm text-white/50 hover:text-white transition"
            >
              Vaciar pedido
            </button>
          )}
        </div>
      </aside>
    </div>
  );
}

export default Carrito;
