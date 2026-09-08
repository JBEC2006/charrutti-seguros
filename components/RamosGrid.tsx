import Link from "next/link";
import { ramos } from "@/lib/site";

/**
 * Los diez ramos, navegables.
 *
 * Hoy están escondidos en un dropdown de diez ítems sin una sola línea de
 * descripción, aunque el contenido existe y es bueno: cada ficha del sitio
 * actual tiene coberturas detalladas. El problema no es que falte contenido,
 * es que la arquitectura lo entierra. Las descripciones de acá salen de esas
 * mismas páginas.
 *
 * La grilla es desigual a propósito: Automóviles ocupa el doble de ancho
 * porque es el ramo más grande y el único con página construida. La
 * desigualdad codifica información; diez tarjetas iguales no dirían nada.
 *
 * Los ramos sin ficha construida NO son links: se ven como entradas de la
 * grilla pero no llevan a ninguna parte, para no simular páginas que la demo
 * no incluye.
 */
export function RamosGrid() {
  const [destacado, ...resto] = ramos;

  return (
    <section
      id="seguros"
      aria-labelledby="seguros-titulo"
      className="border-b border-arena"
    >
      <div className="mx-auto max-w-[1180px] px-5 py-16 lg:px-8 lg:py-20">
        <h2 id="seguros-titulo" className="max-w-[24ch] text-[1.875rem] sm:text-[2.375rem]">
          Qué aseguramos
        </h2>
        <p className="mt-4 max-w-[46ch] text-lg">
          Operamos en todas las carteras. Si no encuentra lo suyo en la lista,
          pregúntenos igual.
        </p>

        <div className="mt-10 grid grid-cols-1 border-t border-arena sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href={destacado.href}
            className="group flex flex-col justify-between border-b border-arena bg-white p-6 sm:col-span-2 lg:p-8"
          >
            <div>
              <h3 className="text-xl">{destacado.nombre}</h3>
              <p className="mt-3 max-w-[42ch] leading-relaxed">{destacado.descripcion}</p>
            </div>
            <span className="mt-6 font-display font-medium underline decoration-naranja decoration-2 underline-offset-[6px] group-hover:decoration-carbon">
              Ver el seguro de automóviles
            </span>
          </Link>

          {resto.map((r) => (
            <div
              key={r.nombre}
              className="border-b border-arena p-6 sm:border-l lg:p-7"
            >
              <h3 className="text-lg">{r.nombre}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-carbon/80">
                {r.descripcion}
              </p>
            </div>
          ))}

          <div className="border-b border-arena bg-white p-6 sm:border-l lg:p-7">
            <h3 className="text-lg">¿No lo encuentra acá?</h3>
            <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-carbon/80">
              Cuéntenos qué necesita asegurar y lo cotizamos igual.
            </p>
            <a
              href="#contacto"
              className="mt-3 inline-block font-display text-[0.9375rem] font-medium underline decoration-naranja decoration-2 underline-offset-4 hover:decoration-carbon"
            >
              Escribirnos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
