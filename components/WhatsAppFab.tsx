import { whatsappHref } from "@/lib/site";

/**
 * Botón flotante de WhatsApp, con el mensaje ya cargado.
 *
 * Va en naranja de marca y no en el verde de WhatsApp: el verde sería un color
 * ajeno a la paleta. La forma y el glifo alcanzan para que se reconozca.
 *
 * PENDIENTE: el número real. El botón nunca lo muestra, así que el placeholder
 * no queda a la vista.
 */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="sobre-naranja fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-naranja text-carbon shadow-[0_6px_20px_-4px_rgba(34,30,26,.45)] transition-colors hover:bg-naranja-hondo hover:text-white lg:bottom-7 lg:right-7"
    >
      <span className="sr-only">Escribirnos por WhatsApp</span>
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 1.9a8.1 8.1 0 1 1-4.2 15l-.3-.2-3 .8.8-2.9-.2-.3A8.1 8.1 0 0 1 12 3.9Zm-3.7 4c-.2 0-.5 0-.7.4-.2.4-.9.9-.9 2.2s.9 2.5 1 2.7c.2.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.1-.7.1l-.9 1.2c-.2.2-.3.2-.6.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4 0-.6.2-.8l.4-.5c.1-.2.2-.3.3-.5v-.5l-.9-2.1c-.2-.5-.4-.4-.6-.4h-.3Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
