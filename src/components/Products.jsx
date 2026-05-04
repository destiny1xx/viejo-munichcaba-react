import { beers } from "../data/products";
import { buildWhatsappUrl } from "../config/business";

function Products({ onAddToCart }) {
  return (
    <section
      id="productos"
      className="relative py-24 px-6 md:px-10 text-white bg-black overflow-hidden scroll-mt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/brewery-bg.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black/85"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="text-center text-amber-400 tracking-[0.3em] uppercase text-sm mb-4">
          Catálogo Viejo Munich
        </p>
        <h2 className="text-4xl md:text-6xl font-black tracking-wide text-center mb-4">
          Elegí tu estilo
        </h2>
        <p className="text-center text-white/65 max-w-2xl mx-auto leading-7 mb-10">
          Armá tu pedido 🍻
          <span className="block">Mandalo por WhatsApp en un click.</span>
          <span className="block">
            Te confirmamos precio, stock y entrega al instante.
          </span>
        </p>

        <div className="flex justify-center items-center gap-4 mb-14">
          <div className="w-16 h-[2px] bg-amber-400"></div>
          <div className="text-amber-400 text-xl">✦</div>
          <div className="w-16 h-[2px] bg-amber-400"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {beers.map((beer) => (
            <article
              key={beer.id}
              className="group bg-[#140f0b]/90 backdrop-blur-sm border border-amber-400/15 rounded-3xl p-6 flex flex-col transition duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-3"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 mb-5">
                <img
                  src={beer.image}
                  alt={`Cerveza Viejo Munich ${beer.name}`}
                  className="w-full h-52 sm:h-64 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              {(beer.name === "Pilsen" || beer.name === "Roja") && (
                <span className="absolute top-8 left-7 bg-amber-400 text-black px-5 py-2 rounded-full text-xs font-black shadow-lg z-10">
                  MÁS PEDIDA
                </span>
              )}

              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="text-xs text-white/45 uppercase tracking-[0.2em]">
                    {beer.style}
                  </p>
                  <h3 className="text-2xl font-black text-amber-400 mt-1">
                    <span className="mr-2">{beer.icon}</span>
                    {beer.name}
                  </h3>
                </div>
                <span className="text-xs bg-amber-400/10 text-amber-200 border border-amber-400/20 px-3 py-2 rounded-full whitespace-nowrap">
                  {beer.cantidad}
                </span>
              </div>

              <p className="text-gray-300 text-sm leading-7 mb-5">
                {beer.description}
              </p>

              <div className="grid grid-cols-1 gap-3 mb-6 text-sm">
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4">
                  <p className="text-white/45 text-xs uppercase tracking-[0.18em] mb-1">
                    Perfil
                  </p>
                  <p className="font-bold">{beer.profile}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4">
                    <p className="text-white/45 text-xs uppercase tracking-[0.18em] mb-1">
                      Amargor
                    </p>
                    <p className="font-bold">{beer.bitterness}</p>
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4">
                    <p className="text-white/45 text-xs uppercase tracking-[0.18em] mb-1">
                      Frío ideal
                    </p>
                    <p className="font-bold">
                      {beer.serving.replace("Servir ", "")}
                    </p>
                  </div>
                </div>
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4">
                  <p className="text-white/45 text-xs uppercase tracking-[0.18em] mb-1">
                    Maridaje
                  </p>
                  <p className="font-bold">{beer.pairing}</p>
                </div>
              </div>

              <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => onAddToCart(beer)}
                  className="bg-amber-400 text-black px-5 py-3 rounded-xl font-black transition duration-300 hover:bg-amber-300 hover:scale-[1.02]"
                >
                  + Agregar
                </button>

                <a
                  href={buildWhatsappUrl(
                    `Hola! Quiero consultar por Viejo Munich ${beer.name}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-green-500 text-green-400 px-5 py-3 rounded-xl font-bold transition duration-300 hover:bg-green-500 hover:text-black text-center"
                >
                  WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
