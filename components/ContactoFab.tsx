import { site, whatsappHref } from "@/lib/site";

/**
 * Botón flotante de contacto.
 *
 * Antes era un círculo naranja con el glifo de WhatsApp. Dos problemas: sumaba
 * un tercer punto de naranja a una página que ya lo usa de sobra, y WhatsApp se
 * reconoce por el verde — un círculo naranja con una burbuja adentro es ambiguo
 * y además apuntaba a un número inventado.
 *
 * Ahora es un botón neutro que no pretende ser otra cosa: llama al teléfono
 * real. Si el cliente pasa el número de WhatsApp, `whatsappHref` deja de ser
 * null y el botón cambia solo, sin tocar nada más.
 */
export function ContactoFab() {
  const esWhatsApp = whatsappHref !== null;
  const href = whatsappHref ?? "tel:" + site.telefonos.central.tel;

  return (
    <a
      href={href}
      {...(esWhatsApp
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="sobre-carbon fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-carbon py-3.5 pl-4 pr-5 text-white shadow-[0_8px_24px_-6px_rgba(34,30,26,.5)] transition-colors hover:bg-naranja-hondo lg:bottom-7 lg:right-7"
    >
      {esWhatsApp ? (
        <svg width="21" height="21" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 1.9a8.1 8.1 0 1 1-4.2 15l-.3-.2-3 .8.8-2.9-.2-.3A8.1 8.1 0 0 1 12 3.9Zm-3.7 4c-.2 0-.5 0-.7.4-.2.4-.9.9-.9 2.2s.9 2.5 1 2.7c.2.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.1-.7.1l-.9 1.2c-.2.2-.3.2-.6.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4 0-.6.2-.8l.4-.5c.1-.2.2-.3.3-.5v-.5l-.9-2.1c-.2-.5-.4-.4-.6-.4h-.3Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg width="19" height="19" viewBox="0 0 17 17" aria-hidden="true">
          <path
            d="M5.2 1.5 6.9 5 5.3 6.8c.9 2 2.4 3.5 4.4 4.4l1.8-1.6 3.5 1.7-.6 3.1c-.1.6-.7 1-1.3.9C7.3 14.4 2.6 9.7 1.7 4c-.1-.6.3-1.2.9-1.3l2.6-1.2Z"
            fill="currentColor"
          />
        </svg>
      )}
      <span className="font-display text-[0.9375rem] font-medium">
        {esWhatsApp ? "WhatsApp" : "Llamar"}
      </span>
    </a>
  );
}
