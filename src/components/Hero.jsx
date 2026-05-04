import { buildWhatsappUrl } from "../config/business";

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] text-white overflow-hidden pt-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 hero-bg-animate"
        style={{ backgroundImage: "url('/images/brewery-bg.png')" }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/55"></div>
      <div className="absolute inset-0 bg-black/25"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-6rem)] gap-12 py-16">
        <div className="max-w-2xl">
          <p className="text-amber-400 text-sm mb-4 tracking-[0.35em] uppercase">
            Villa General Belgrano · CABA · Cerveza artesanal
          </p>

          <img
            src="/images/logo.png"
            alt="Viejo Munich"
            className="w-44 md:w-56 mb-7 drop-shadow-2xl"
          />

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6">
            Viejo Munich
            <span className="block text-amber-400">ahora en CABA</span>
          </h1>

          <p className="text-gray-200 text-lg leading-8 mb-9 max-w-xl">
            La cerveza artesanal N°1 de Villa General Belgrano llego a CABA.
            Elegí tus estilos y escribinos por WhatsApp.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
            <a
              href="#productos"
              className="w-full min-h-[58px] bg-amber-400 text-black px-6 py-4 rounded-full font-bold hover:scale-105 hover:bg-amber-300 transition shadow-lg text-center flex items-center justify-center whitespace-nowrap"
            >
              Ver cervezas
            </a>

            <a
              href="#packs"
              className="group w-full min-h-[58px] bg-white/10 border border-white/15 text-white px-6 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 hover:bg-white/15 transition shadow-lg active:scale-95 whitespace-nowrap"
            >
              Ver packs
              <span className="transition-transform group-hover:translate-y-1">
                ↓
              </span>
            </a>

            <a
              href={buildWhatsappUrl(
                "Hola! Quiero hacer un pedido de Viejo Munich.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[58px] bg-green-500 text-black px-6 py-4 rounded-full font-bold hover:scale-105 transition shadow-lg hover:shadow-green-500/30 text-center flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Pedí ahora 🍺
            </a>
          </div>
        </div>

        <div className="w-full max-w-md">
          <div className="bg-[#130d08]/85 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 shadow-2xl">
            <p className="text-amber-400 text-sm tracking-[0.25em] uppercase mb-3">
              Venta directa
            </p>
            <h3 className="text-3xl font-black mb-6">
              Viví el Oktoberfest todo el año en tu mesa.
            </h3>

            <div className="space-y-5 text-gray-300">
              <div>
                <p className="text-white font-bold">📍 Zona</p>
                <p className="text-sm">Entregas en CABA y Gran Buenos Aires.</p>
              </div>

              <div>
                <p className="text-white font-bold">🍺 Estilos</p>
                <p className="text-sm">
                  IPA, Honey Beer, Pilsen, Roja, Weissbier y Doppelbock.
                </p>
              </div>

              <div>
                <p className="text-white font-bold">🛒 Pedido simple</p>
                <p className="text-sm">
                  Agregá productos al carrito y mandalo directo por WhatsApp.
                </p>
              </div>
            </div>

            <div className="w-full h-[2px] bg-amber-400 mt-7"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
