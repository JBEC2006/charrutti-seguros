import { site } from "@/lib/site";

/**
 * Acceso directo a la guardia de siniestros, solo en mobile.
 *
 * El bloque grande de siniestro está alto en la página, pero en un teléfono de
 * 360px el hero ocupa dos pantallas y la franja queda a tres scrolls. Para
 * alguien que acaba de chocar eso ya es demasiado lejos.
 *
 * Esta tira va arriba de todo y resuelve el caso en un toque. No es sticky:
 * cumple su función en la primera pantalla y después se va, para no competir
 * con la franja completa ni robarle alto a un teléfono chico.
 *
 * En desktop no aparece: ahí el bloque entero entra casi sin scroll.
 */
export function SiniestroStrip() {
  const guardia = site.telefonos.siniestros[0];

  return (
    <a
      href={"tel:" + guardia.tel}
      className="sobre-naranja flex min-h-11 items-center justify-center gap-2 bg-naranja px-4 text-carbon lg:hidden"
    >
      <svg width="15" height="15" viewBox="0 0 17 17" aria-hidden="true">
        <path
          d="M5.2 1.5 6.9 5 5.3 6.8c.9 2 2.4 3.5 4.4 4.4l1.8-1.6 3.5 1.7-.6 3.1c-.1.6-.7 1-1.3.9C7.3 14.4 2.6 9.7 1.7 4c-.1-.6.3-1.2.9-1.3l2.6-1.2Z"
          fill="currentColor"
        />
      </svg>
      <span className="font-display text-[0.9375rem] font-medium">
        ¿Tuvo un siniestro? Llame al
      </span>
      <span className="font-display text-[0.9375rem] font-bold tabular-nums">
        {guardia.display}
      </span>
    </a>
  );
}
