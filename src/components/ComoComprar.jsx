function ComoComprar() {
  const steps = [
    {
      number: "01",
      title: "Elegí tus cervezas",
      text: "Mirás el catálogo y agregás al pedido las botellas o packs que te interesan.",
      icon: "🍺",
    },
    {
      number: "02",
      title: "Armá el carrito",
      text: "El carrito no cobra nada: solamente arma el mensaje para WhatsApp de forma prolija.",
      icon: "🛒",
    },
    {
      number: "03",
      title: "Mandalo por WhatsApp",
      text: "La web genera el mensaje con cantidades, estilos y packs para que no tengas que escribir todo.",
      icon: "💬",
    },
    {
      number: "04",
      title: "Coordinamos entrega",
      text: "Rápido, directo y sin vueltas.",
      icon: "🚚",
    },
  ];

  return (
    <section
      id="como-comprar"
      className="relative py-24 px-6 md:px-10 text-white bg-black scroll-mt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.16),transparent_35%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="text-center text-amber-400 tracking-[0.3em] uppercase text-sm mb-4">
          Cómo comprar
        </p>
        <h2 className="text-4xl md:text-6xl font-black text-center mb-14">
          Pedido simple, sin vueltas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step) => (
            <article
              key={step.number}
              className="bg-[#140f0b] border border-white/10 rounded-3xl p-6 hover:border-amber-400/40 transition"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-5xl">{step.icon}</span>
                <span className="text-amber-400/50 text-5xl font-black">
                  {step.number}
                </span>
              </div>
              <h3 className="text-2xl font-black mb-3">{step.title}</h3>
              <p className="text-gray-300 text-sm leading-7">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComoComprar;
