import Link from "next/link";
import { gruposRamos, hrefConsulta, type Ramo } from "@/lib/site";

/**
 * Los diez ramos, agrupados por audiencia.
 *
 * La versión anterior era una grilla plana donde Automóviles ocupaba dos
 * columnas y era una tarjeta blanca elevada mientras las otras nueve eran
 * celdas planas. Esa diferencia no comunicaba nada: leía como una celda mal
 * puesta. Además los textos tenían largos muy distintos, así que el vacío bajo
 * cada celda variaba muchísimo y el conjunto parecía una tabla incompleta.
 *
 * Ahora: tres grupos con encabezado propio, y dentro de cada uno tarjetas
 * todas iguales —misma altura, mismo tratamiento, todas accionables—.
 * Automóviles se distingue por su acción ("Ver la cobertura"), no por ser de
 * otro color; los otros nueve abren el formulario con el ramo ya elegido.
 */
function TarjetaRamo({ ramo }: { ramo: Ramo }) {
  const tieneFicha = Boolean(ramo.href);

  return (
    <Link
      href={ramo.href ?? hrefConsulta(ramo.slug)}
      className="group flex h-full w-full flex-col border border-linea bg-white p-6 hover:border-carbon hover:shadow-[0_4px_16px_-6px_rgba(34,30,26,.28)]"
    >
      <h4 className="font-display text-lg leading-tight">{ramo.nombre}</h4>
      <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-carbon/80">
        {ramo.descripcion}
      </p>
      <span className="mt-auto pt-5 font-display text-[0.9375rem] font-medium underline decoration-naranja decoration-2 underline-offset-4 group-hover:decoration-carbon">
        {tieneFicha ? "Ver la cobertura" : "Consultar"}
      </span>
    </Link>
  );
}

export function RamosGrid() {
  return (
    <section
      id="seguros"
      aria-labelledby="seguros-titulo"
      className="border-b border-linea"
    >
      <div className="mx-auto max-w-[1180px] px-5 py-16 lg:px-8 lg:py-20">
        <h2 id="seguros-titulo" className="text-[1.875rem] sm:text-[2.375rem]">
          Qué aseguramos
        </h2>
        <p className="mt-4 max-w-[46ch] text-lg">
          Operamos en todas las carteras. Si no encuentra lo suyo en la lista,
          pregúntenos igual.
        </p>

        <div className="mt-12 space-y-12 lg:mt-14 lg:space-y-14">
          {gruposRamos.map((grupo) => (
            <div key={grupo.titulo}>
              <div className="border-b border-carbon pb-3">
                <h3 className="font-display text-xl">{grupo.titulo}</h3>
                <p className="mt-1 text-[0.9375rem] text-carbon/70">
                  {grupo.bajada}
                </p>
              </div>

              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {grupo.ramos.map((ramo) => (
                  <li key={ramo.slug} className="flex">
                    <TarjetaRamo ramo={ramo} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
