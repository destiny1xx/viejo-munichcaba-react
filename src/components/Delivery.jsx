function Delivery() {
  return (
    <section
      id="envios"
      className="relative py-24 px-6 md:px-10 text-white overflow-hidden scroll-mt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/brewery-bg2.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-amber-400 tracking-[0.3em] uppercase text-sm mb-4">
            Envíos y retiro
          </p>
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Coordinación directa en CABA y GBA
          </h2>
          <p className="text-gray-200 leading-8 mb-8">
            La compra se confirma por WhatsApp para revisar stock, cantidad,
            precio final y forma de entrega. Así evitás cobrar algo que después
            no está disponible y mantenés el trato directo con el cliente.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-black/45 border border-amber-400/15 rounded-2xl p-5">
              <p className="text-3xl mb-3">📍</p>
              <h3 className="font-black mb-2">Zona</h3>
              <p className="text-sm text-gray-300 leading-6">
                CABA y zonas cercanas de Gran Buenos Aires, sujeto a
                coordinación.
              </p>
            </div>
            <div className="bg-black/45 border border-amber-400/15 rounded-2xl p-5">
              <p className="text-3xl mb-3">🚚</p>
              <h3 className="font-black mb-2">Entrega</h3>
              <p className="text-sm text-gray-300 leading-6">
                Envío o retiro según disponibilidad, horario y ubicación.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#130d08]/90 border border-amber-400/20 rounded-3xl p-8 shadow-2xl">
          <p className="text-4xl mb-4">⚠️</p>
          <h3 className="text-3xl font-black mb-4">
            Venta exclusiva para mayores de 18 años
          </h3>
          <p className="text-gray-300 leading-7 mb-6">
            La venta de bebidas alcohólicas está destinada exclusivamente a
            mayores de edad. Al realizar tu pedido confirmás teber más de 18
            años.
          </p>
          <div className="border-t border-white/10 pt-6">
            <p className="text-amber-400 font-black">Beber con moderación.</p>
            <p className="text-sm text-white/55 mt-2">
              El pedido final se confirma únicamente por WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Delivery;
