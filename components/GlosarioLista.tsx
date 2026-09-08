"use client";

import { useMemo, useState } from "react";
import { glosario, inicial, normalizar, letrasGlosario } from "@/lib/glosario";
import { PendienteInline } from "./Pendiente";

/**
 * El glosario, con buscador e índice A-Z.
 *
 * El sitio actual lo publica como una lista corrida de 109 términos sin
 * índice, sin buscador y sin anclas: para encontrar "franquicia" hay que
 * scrollear y leer. Con esa cantidad de entradas, el orden alfabético solo no
 * alcanza.
 *
 * El buscador mira el término Y la definición, y compara sin tildes: alguien
 * que no sabe cómo se llama lo que busca escribe "lo que pago yo" y llega a
 * franquicia. Es el caso de uso real de un glosario de seguros — la gente no
 * busca la palabra, busca el concepto.
 *
 * Sin resultados: no se deja la pantalla en blanco. Se ofrece la salida que
 * corresponde, que es preguntarle a una persona.
 */
export function GlosarioLista() {
  const [busqueda, setBusqueda] = useState("");

  const filtrados = useMemo(() => {
    const q = normalizar(busqueda.trim());
    if (!q) return glosario;
    return glosario.filter(
      (t) =>
        normalizar(t.termino).includes(q) ||
        normalizar(t.definicion).includes(q),
    );
  }, [busqueda]);

  /* Se agrupa por letra sobre el resultado ya filtrado, así los encabezados de
     letra vacíos desaparecen solos mientras se escribe. */
  const porLetra = useMemo(() => {
    const mapa = new Map<string, typeof glosario>();
    for (const t of filtrados) {
      const l = inicial(t.termino);
      mapa.set(l, [...(mapa.get(l) ?? []), t]);
    }
    return [...mapa.entries()];
  }, [filtrados]);

  const letrasActivas = new Set(porLetra.map(([l]) => l));

  return (
    <>
      <div className="mt-10 border-y border-linea bg-white px-5 py-6 lg:px-7">
        {/* `block` no es opcional acá. Un <label> es inline por defecto, y el
            input de abajo lleva max-w-[26rem]: al no ocupar el ancho completo,
            entraba en la misma línea y se montaba sobre el texto del label.
            En el formulario de contacto el mismo patrón no falla solo porque
            ahí los campos son w-full sin tope y no les queda lugar al lado. */}
        <label
          htmlFor="buscar-termino"
          className="block font-display text-[0.9375rem] font-medium"
        >
          Buscar un término
        </label>
        <input
          id="buscar-termino"
          type="search"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="franquicia, prima, siniestro…"
          className="mt-1.5 w-full max-w-[26rem] border border-linea bg-white px-3.5 py-3 text-base focus:border-carbon"
        />
        <p className="mt-2 text-[0.9375rem] text-carbon/70" aria-live="polite">
          {filtrados.length === glosario.length
            ? `${glosario.length} términos`
            : `${filtrados.length} de ${glosario.length} términos`}
        </p>

        {/* Índice A-Z. Las letras sin resultados quedan visibles pero apagadas
            y sin link: mover el índice mientras se escribe haría saltar el
            layout en cada tecla. */}
        <nav aria-label="Índice alfabético" className="mt-5">
          <ul className="flex flex-wrap gap-x-1 gap-y-1">
            {letrasGlosario.map((l) => {
              const activa = letrasActivas.has(l);
              return (
                <li key={l}>
                  {activa ? (
                    <a
                      href={`#letra-${l}`}
                      className="flex h-9 w-9 items-center justify-center border border-linea font-display text-[0.9375rem] font-medium hover:border-carbon hover:bg-carbon hover:text-white"
                    >
                      {l}
                    </a>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 items-center justify-center border border-linea/60 font-display text-[0.9375rem] font-medium text-carbon/25"
                    >
                      {l}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {porLetra.length === 0 ? (
        <div className="mt-12 border-l-4 border-naranja bg-white p-7">
          <h2 className="text-xl">No encontramos ese término</h2>
          <p className="mt-3 max-w-[46ch] leading-relaxed">
            Puede que se llame de otra forma en la póliza. Escríbanos qué
            necesita entender y se lo explicamos sin vocabulario de contrato.
          </p>
          <a
            href="/#contacto"
            className="mt-5 inline-block font-display font-medium underline decoration-naranja decoration-2 underline-offset-4 hover:decoration-carbon"
          >
            Hacer la consulta
          </a>
        </div>
      ) : (
        <div className="mt-14 space-y-14">
          {porLetra.map(([letra, terminos]) => (
            <section key={letra} aria-labelledby={`letra-${letra}`}>
              {/* scroll-mt: el header sticky no puede tapar el encabezado de
                  letra al saltar desde el índice. */}
              <h2
                id={`letra-${letra}`}
                className="scroll-mt-28 border-b-2 border-carbon pb-2 font-display text-[1.875rem]"
              >
                {letra}
              </h2>

              <dl className="mt-7 grid gap-x-16 gap-y-8 md:grid-cols-2">
                {terminos.map((t) => (
                  <div key={t.termino} className="border-t border-carbon/15 pt-5">
                    <dt className="font-display text-lg leading-tight">
                      {t.termino}
                    </dt>
                    <dd className="mt-2 max-w-[52ch] leading-relaxed">
                      {t.definicion}
                      {t.revisar && (
                        <PendienteInline className="mt-3 flex">
                          {t.revisar}
                        </PendienteInline>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      )}
    </>
  );
}
