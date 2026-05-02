export const BRAND_NAME = "Viejo Munich CABA";
export const WHATSAPP_NUMBER = "5491141987716";
export const INSTAGRAM_URL = "https://www.instagram.com/viejomunichcaba/";

export function buildWhatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
