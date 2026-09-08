import { site, pasosSiniestro } from "@/lib/site";

/**
 * El único momento fuerte de la página.
 *
 * Hoy estos dos teléfonos viven dentro del paso 5 de una lista de 9, en
 * /siniestro.html — una página a la que no se llega desde ningún menú. El caso
 * de uso más urgente del negocio está en el punto menos accesible del sitio.
 *
 * Sobre el color: el CSS actual de Charrutti ya usa naranja acá
 * (a.siniestro-banner { background:#ee9714 }), y la primera versión de esta
 * sección lo llevó a un plano naranja a todo el ancho. Era un error. Un campo
 * naranja de 900px lee como alerta de peligro o como promoción de descuento,
 * pesaba más que el hero, y quemaba el activo: si el naranja ocupa esa
 * superficie deja de funcionar como acento en los botones y en la B circulada.
 *
 * Ahora la sección va sobre el casi-negro y el naranja queda concentrado donde
 * importa: los dos teléfonos de guardia. La urgencia la dan la jerarquía y el
 * contraste, no la saturación.
 *
 * La lista va numerada porque es de verdad una secuencia: son los primeros
 * movimientos después de un choque, en orden.
 */
export function SiniestroBand() {
  return (
    <section
      id="siniestro"
      aria-labelledby="siniestro-titulo"
      className="sobre-carbon bg-carbon text-white"
    >
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-14 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-18">
        <div>
          <h2 id="siniestro-titulo" className="text-[2rem] sm:text-[2.5rem]">
            ¿Tuvo un siniestro?
          </h2>
          <p className="mt-4 max-w-[30rem] text-lg leading-[1.5]">
            Llame ahora. Hacemos la denuncia y seguimos el trámite con la
            compañía hasta que se resuelva.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {site.telefonos.siniestros.map((t) => (
              <a
                key={t.tel}
                href={"tel:" + t.tel}
                className="sobre-naranja flex min-h-[3.5rem] flex-1 items-center justify-center gap-2.5 bg-naranja px-6 text-carbon transition-colors hover:bg-naranja-hondo hover:text-white sm:min-w-[13rem] sm:flex-none"
              >
                <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden="true">
                  <path
                    d="M5.2 1.5 6.9 5 5.3 6.8c.9 2 2.4 3.5 4.4 4.4l1.8-1.6 3.5 1.7-.6 3.1c-.1.6-.7 1-1.3.9C7.3 14.4 2.6 9.7 1.7 4c-.1-.6.3-1.2.9-1.3l2.6-1.2Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="font-display text-[1.6rem] tabular-nums">
                  {t.display}
                </span>
              </a>
            ))}
          </div>
          <p className="mt-3 text-[0.9375rem]">
            Guardia de siniestros. Fuera de hora, llame a su compañía.
          </p>
        </div>

        <div>
          <h3 className="text-lg">Mientras tanto</h3>
          <ol className="mt-4">
            {pasosSiniestro.map((paso, i) => (
              <li
                key={paso}
                className="flex gap-4 border-t border-white/20 py-3.5 last:border-b"
              >
                <span
                  aria-hidden="true"
                  className="shrink-0 font-display text-lg tabular-nums text-naranja"
                >
                  {i + 1}
                </span>
                <span className="leading-snug">{paso}</span>
              </li>
            ))}
          </ol>
          {/* Antes acá había un link a "#" que no llevaba a ningún lado: la
              página completa de siniestro no entra en el alcance de la demo.
              Un href muerto se siente roto, no deliberado, así que esto pasa a
              ser texto: dice algo útil y no promete un click que no existe. */}
          <p className="mt-5 text-[0.9375rem] leading-relaxed">
            Son nueve pasos en total y cada compañía tiene su propia línea de
            asistencia. Si llama a la guardia se los vamos indicando nosotros.
          </p>
        </div>
      </div>
    </section>
  );
}
