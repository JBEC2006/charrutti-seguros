/**
 * La hoja comparativa: el hero del sitio.
 *
 * Es el artefacto real del oficio — la planilla que el corredor manda con las
 * opciones al lado y una marcada. Muestra el producto en vez de afirmarlo.
 *
 * Restricciones que la definen:
 *  - Ningún precio. Un corredor no puede dar una cotización vinculante desde
 *    una web, así que la comparación es por servicio, no por plata.
 *  - Compañía A / B / C. Nunca una aseguradora real asociada a una diferencia.
 *  - Rotulada como ejemplo ilustrativo, arriba de todo y visible.
 *
 * Es también el único momento animado del sitio (ver .hoja-* en globals.css).
 */

const criterios = [
  { que: "Auxilio mecánico en ruta", a: true, b: true, c: true },
  { que: "Auto sustituto mientras lo reparan", a: false, b: true, c: false },
  { que: "Cristales y cerraduras", a: true, b: true, c: false },
  { que: "Daños por granizo", a: true, b: true, c: false },
];

/* El check va en naranja-hondo, no en naranja: sobre blanco da 3.6:1 y pasa
   el mínimo de 3:1 para objetos gráficos. El naranja de marca daría 2.2:1.
   Además nunca se comunica solo por color: cada celda lleva su texto oculto. */
function Marca({ si }: { si: boolean }) {
  return (
    <>
      {si ? (
        <svg
          width="17"
          height="13"
          viewBox="0 0 17 13"
          aria-hidden="true"
          className="mx-auto text-naranja-hondo"
        >
          <path
            d="M1 6.5L6 11.5L16 1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <span aria-hidden="true" className="mx-auto block h-px w-3.5 bg-carbon/55" />
      )}
      <span className="sr-only">{si ? "Sí" : "No"}</span>
    </>
  );
}

export function ComparativeSheet() {
  return (
    <figure className="relative mx-auto w-full max-w-[30rem] lg:mx-0 lg:max-w-none">
      <div className="bg-white px-5 py-6 shadow-[7px_9px_0_0_var(--color-linea)] sm:px-7 sm:py-7 lg:-rotate-[0.7deg]">
        <figcaption className="font-display text-sm font-medium text-carbon/65">
          Ejemplo ilustrativo. No es una cotización.
        </figcaption>

        <table className="mt-5 w-full border-collapse text-left">
          <caption className="sr-only">
            Comparación ilustrativa de coberturas entre tres compañías para un
            seguro de automóvil
          </caption>
          <thead>
            <tr className="border-b-2 border-carbon">
              <th scope="col" className="pb-2 font-display text-sm font-medium text-carbon/65">
                Qué cubre
              </th>
              {(["A", "B", "C"] as const).map((col) => (
                <th
                  key={col}
                  scope="col"
                  className={
                    "w-11 pb-2.5 text-center font-display text-lg sm:w-16 " +
                    (col === "B" ? "text-carbon" : "text-carbon/65")
                  }
                >
                  <span className="relative inline-block">
                    <span className="sr-only">Compañía </span>
                    {col}
                    {col === "B" && (
                      /* El círculo trazado a mano. Es lo último que aparece en
                         la animación: primero los datos, después la
                         recomendación. */
                      <svg
                        viewBox="0 0 62 44"
                        aria-hidden="true"
                        className="pointer-events-none absolute left-1/2 top-1/2 h-[2.45rem] w-[3.45rem] -translate-x-1/2 -translate-y-1/2 overflow-visible text-naranja-hondo"
                      >
                        <path
                          className="hoja-circulo"
                          d="M40 6C33 2.5 22 2 14.5 6.5 6 11.6 3.5 22 7.5 30c4.2 8.4 17 11.6 27 9.4 8.6-1.9 14.6-7.4 14.2-14.4C48.3 17.4 41 10.5 31.5 8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criterios.map((c, i) => (
              <tr
                key={c.que}
                className="hoja-fila border-b border-linea last:border-b-0"
                style={{ "--i": i } as React.CSSProperties}
              >
                <th
                  scope="row"
                  className="py-3 pr-3 font-body text-[0.9375rem] font-normal leading-snug"
                >
                  {c.que}
                </th>
                <td className="py-3 text-center">
                  <Marca si={c.a} />
                </td>
                <td className="bg-naranja/10 py-3 text-center">
                  <Marca si={c.b} />
                </td>
                <td className="py-3 text-center">
                  <Marca si={c.c} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="hoja-nota mt-5 border-l-[3px] border-naranja pl-4 text-[0.9375rem] italic leading-relaxed">
          Le conviene la B. Es la única que le deja un auto mientras reparan el
          suyo, y eso es lo que pesa si lo usa para trabajar.
        </p>
      </div>
    </figure>
  );
}
