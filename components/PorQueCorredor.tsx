import { preguntas } from "@/lib/site";

/**
 * El bloque que hoy no existe en ningún lado del sitio, y el más importante:
 * un corredor no es una aseguradora.
 *
 * Va escrito como preguntas y respuestas autocontenidas a propósito. Sirve
 * para la persona que entra sin saber qué es un corredor, y sirve para que un
 * motor de respuestas pueda citarlo entero. Las mismas cuatro preguntas
 * alimentan el FAQPage de JSON-LD, sin duplicar contenido.
 *
 * Sin tarjetas, sin íconos y sin numerar: no es una secuencia, son cuatro
 * afirmaciones sueltas. Lo único que las separa es el espacio.
 */
export function PorQueCorredor() {
  return (
    <section
      id="corredor"
      aria-labelledby="corredor-titulo"
      className="border-b border-arena bg-white"
    >
      <div className="mx-auto max-w-[1180px] px-5 py-16 lg:px-8 lg:py-24">
        <h2 id="corredor-titulo" className="max-w-[20ch] text-[1.875rem] sm:text-[2.375rem]">
          Por qué conviene un corredor
        </h2>
        <p className="mt-4 max-w-[52ch] text-lg">
          Una aseguradora vende sus propios productos. Un corredor los compara
          todos y le dice cuál le sirve. Esa es toda la diferencia.
        </p>

        <dl className="mt-12 grid gap-x-16 gap-y-11 md:grid-cols-2 lg:mt-16">
          {preguntas.map((p) => (
            <div key={p.q}>
              <dt className="max-w-[26ch] font-display text-xl leading-[1.15]">
                {p.q}
              </dt>
              <dd className="mt-3 max-w-[46ch] leading-relaxed">{p.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
