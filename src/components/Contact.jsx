import { buildWhatsappUrl, INSTAGRAM_URL } from "../config/business";

function Contact() {
  return (
    <section
      id="contacto"
      className="bg-[#090604] text-white py-20 px-6 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-amber-400 tracking-[0.3em] uppercase text-sm mb-4">
          Contacto
        </p>

        <h2 className="text-4xl md:text-6xl font-black tracking-wide mb-6">
          ¿Estás para una Viejo Munich?
        </h2>

        <p className="text-gray-300 leading-7 max-w-2xl mx-auto mb-10">
          Consultá disponibilidad, packs, precios y zona de entrega. Te
          respondemos por WhatsApp para coordinar el pedido.
        </p>

        <div className="w-28 h-[3px] bg-amber-400 mb-10 mx-auto"></div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={buildWhatsappUrl(
              "Hola! Quiero consultar por cervezas Viejo Munich.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition flex items-center justify-center gap-2"
          >
            💬 Escribir por WhatsApp
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition shadow-lg"
          >
            Ver Instagram
          </a>
        </div>

        <p className="text-xs text-white/35 mt-10">
          Venta exclusiva para mayores de 18 años. Beber con moderación.
        </p>
      </div>
    </section>
  );
}

export default Contact;
