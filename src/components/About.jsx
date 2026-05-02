function About() {
  return (
    <section id="nosotros" className="relative py-24 px-6 md:px-10 text-white overflow-hidden scroll-mt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/brewery-bg2.png')" }}
      ></div>

      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-amber-400 tracking-[0.3em] uppercase text-sm mb-4">
            Pasión · Tradición · Calidad
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Viejo Munich,
            <br />
            <span className="text-amber-400">una cerveza con historia</span>
          </h2>

          <div className="w-24 h-[3px] bg-amber-400 mb-8"></div>

          <p className="text-gray-200 leading-8 mb-6">
            Viejo Munich nace con espíritu de Villa General Belgrano y una estética clásica inspirada en la tradición cervecera alemana. Cada estilo está pensado para conservar identidad, cuerpo y sabor propio.
          </p>

          <p className="text-gray-200 leading-8 mb-6">
            En esta propuesta para CABA podés encontrar cervezas ligeras, refrescantes, lupuladas, maltosas y oscuras: desde una Pilsen fácil de tomar hasta una Doppelbock intensa y profunda.
          </p>

          <p className="text-gray-200 leading-8 mb-12">
            El objetivo es simple: acercarte cerveza artesanal Viejo Munich de forma rápida, clara y directa, coordinando tu pedido por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
          <div className="bg-black/40 border border-amber-400/15 rounded-2xl p-5 backdrop-blur-sm hover:-translate-y-3 hover:shadow-2xl transition duration-300">
            <p className="text-3xl mb-3">🌿</p>
            <h3 className="text-lg font-bold mb-2">Ingredientes seleccionados</h3>
            <p className="text-sm text-gray-300 leading-6">Lúpulo, malta y perfiles pensados para que cada variedad tenga una personalidad clara.</p>
          </div>

          <div className="bg-black/40 border border-amber-400/15 rounded-2xl p-5 backdrop-blur-sm hover:-translate-y-3 hover:shadow-2xl transition duration-300">
            <p className="text-3xl mb-3">🍺</p>
            <h3 className="text-lg font-bold mb-2">Estilo artesanal</h3>
            <p className="text-sm text-gray-300 leading-6">Cervezas con carácter, buena presentación y una identidad visual reconocible.</p>
          </div>

          <div className="bg-black/40 border border-amber-400/15 rounded-2xl p-5 backdrop-blur-sm hover:-translate-y-3 hover:shadow-2xl transition duration-300">
            <p className="text-3xl mb-3">🚚</p>
            <h3 className="text-lg font-bold mb-2">Pedidos en CABA y GBA</h3>
            <p className="text-sm text-gray-300 leading-6">Coordiná disponibilidad, cantidad y entrega directamente por WhatsApp.</p>
          </div>

          <div className="bg-black/40 border border-amber-400/15 rounded-2xl p-5 backdrop-blur-sm hover:-translate-y-3 hover:shadow-2xl transition duration-300">
            <p className="text-3xl mb-3">⭐</p>
            <h3 className="text-lg font-bold mb-2">Presentación premium</h3>
            <p className="text-sm text-gray-300 leading-6">Botellas, packs y comunicación visual cuidada para una experiencia más profesional.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
