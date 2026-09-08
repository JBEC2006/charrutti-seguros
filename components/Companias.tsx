import { companias } from "@/lib/site";

/**
 * Las nueve compañías, como franja de marcas.
 *
 * Antes vivían como una lista de texto corrida dentro del bloque oscuro de
 * trayectoria, al final de la página. Es el argumento más persuasivo que tiene
 * un corredor —"no le ofrezco lo mío, le busco entre todas"— y estaba
 * renderizado como lista de supermercado, después de que el visitante ya
 * decidió si le importaba o no.
 *
 * Ahora va inmediatamente debajo del hero: el titular promete que comparamos
 * todas las compañías y acá abajo están, con nombre y apellido.
 *
 * PENDIENTE: son marcas de texto, no logos. Cuando el cliente pase los
 * archivos reales, se reemplaza cada <span> por el logo en monocromo (un solo
 * color, no los originales a todo color, para que la franja lea como conjunto
 * y no como una feria). Los PNG del sitio actual NO se hotlinkean.
 */
export function Companias() {
  return (
    <section
      aria-labelledby="companias-titulo"
      className="border-b border-linea bg-white"
    >
      <div className="mx-auto max-w-[1180px] px-5 py-9 lg:px-8 lg:py-11">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
          <h2
            id="companias-titulo"
            className="max-w-[16ch] shrink-0 font-display text-[0.9375rem] font-medium leading-snug text-carbon/70 lg:max-w-[15ch]"
          >
            Cotizamos su seguro en estas nueve compañías
          </h2>

          <ul className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:gap-x-10">
            {companias.map((c) => (
              <li
                key={c}
                className="font-display text-lg font-medium tracking-tight text-carbon/75"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
