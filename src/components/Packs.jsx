import { buildWhatsappUrl } from "../config/business";
import { packs } from "../data/products";

function Packs({ onAddToCart }) {
  const pack = packs[0];

  if (!pack) return null;

  const handleAddPack = () => {
    onAddToCart({
      ...pack,
      type: "Pack para compartir",
    });
  };

  return (
    <section
      id="packs"
      className="relative bg-black text-white py-10 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_35%)]"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-amber-400 uppercase tracking-[0.45em] text-sm mb-5">
            Pack destacado
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
            Una presentación ideal para regalar o compartir
          </h2>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            Una presentación elegante con 2 cervezas artesanales a elección
            <br />
            Ideal para un regalo distinto, con sabor a Villa General Belgrano.
          </p>
        </div>

        <article className="relative overflow-hidden rounded-[2rem] border border-amber-400/20 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full overflow-hidden">
              <img
                src={pack.image}
                alt={pack.name}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/70"></div>

              <span className="absolute top-5 left-5 bg-amber-400 text-black px-5 py-2 rounded-full text-xs font-black shadow-lg">
                Presentación premium
              </span>

              <div className="absolute bottom-5 left-5 right-5 lg:hidden">
                <h3 className="text-3xl font-black text-white drop-shadow-lg">
                  {pack.name}
                </h3>
              </div>
            </div>

            <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
              <p className="text-amber-400 uppercase tracking-[0.25em] text-xs mb-4">
                Viejo Munich CABA
              </p>

              <h3 className="hidden lg:block text-4xl font-black text-amber-400 mb-5">
                {pack.name}
              </h3>

              <p className="text-white/75 leading-relaxed mb-8">
                {pack.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {pack.includes.map((item) => (
                  <div
                    key={item}
                    className="bg-black/40 border border-white/10 rounded-2xl p-4 flex items-start gap-3"
                  >
                    <span className="text-amber-400 font-black">✓</span>
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={handleAddPack}
                  className="bg-amber-400 text-black px-7 py-4 rounded-full font-black hover:bg-amber-300 hover:scale-105 active:scale-95 transition shadow-lg"
                >
                  + Agregar pack
                </button>

                <a
                  href={buildWhatsappUrl(
                    "Hola! Quiero consultar por el Pack para compartir de Viejo Munich.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-green-500 text-green-400 px-7 py-4 rounded-full font-black hover:bg-green-500 hover:text-black hover:scale-105 active:scale-95 transition text-center"
                >
                  Pedí ahora 🍺
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-white/50">
                  Ideal para cumpleaños, reuniones, regalos o una juntada entre
                  amigos
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Packs;
