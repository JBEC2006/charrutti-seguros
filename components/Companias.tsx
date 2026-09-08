import { companias, respaldo } from "@/lib/site";

/**
 * Las nueve compañías, en desfile continuo.
 *
 * Antes eran una lista estática al lado de una etiqueta. En un teléfono no
 * entran las nueve en una línea, así que envolvían en varias filas y volvían
 * a leerse como lista de supermercado, que es justo lo que queríamos evitar.
 *
 * En movimiento se leen como lo que son: un respaldo que sigue y sigue. La
 * etiqueta pasa arriba y centrada, y la franja va a todo el ancho —de las
 * pocas cosas que justifican salirse del contenedor, porque el sentido es
 * "hay más de las que entran en pantalla"—.
 *
 * PENDIENTE: son marcas de texto, no logos. Cuando el cliente pase los
 * archivos reales, se reemplaza cada <li> por el logo en monocromo, para que
 * la franja lea como conjunto y no como una feria de colores. Los PNG del
 * sitio actual NO se hotlinkean.
 */
function Grupo({ copia }: { copia: 1 | 2 }) {
  return (
    <ul
      data-copia={copia}
      aria-hidden={copia === 2}
      className="flex shrink-0 items-center gap-x-10 pr-10 sm:gap-x-14 sm:pr-14"
    >
      {companias.map((c) => (
        <li
          key={c}
          className="whitespace-nowrap font-display text-lg font-medium tracking-tight text-carbon/75"
        >
          {c}
        </li>
      ))}
    </ul>
  );
}

export function Companias() {
  return (
    <section
      aria-labelledby="companias-titulo"
      className="border-b border-linea bg-white py-8 lg:py-10"
    >
      {/* "Estas nueve compañías" dejaba abierto de qué nueve se habla, y en la
          página convivía con textos que decían "las nueve del mercado". Ahora
          la franja dice explícitamente con quién trabaja Charrutti: es lo
          único que se puede afirmar, y es suficiente. */}
      <h2
        id="companias-titulo"
        className="px-5 text-center font-display text-[0.9375rem] font-medium text-carbon/70"
      >
        Cotizamos su seguro en {respaldo.frase}
      </h2>

      <div className="desfile relative mt-6 overflow-hidden">
        <div className="desfile-pista">
          <Grupo copia={1} />
          <Grupo copia={2} />
        </div>

        {/* Los bordes se desvanecen contra el blanco de la sección, para que
            las compañías entren y salgan en vez de cortarse de golpe. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent sm:w-20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent sm:w-20"
        />
      </div>
    </section>
  );
}
