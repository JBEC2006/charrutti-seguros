"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { site, pasosSiniestro, pasosSiniestroCompletos } from "@/lib/site";
import { animarAltoDesde, SALIDA } from "@/lib/movimiento";

/* useLayoutEffect corre antes de que el navegador pinte, que es justo lo que
   hace falta para plantar el alto de partida sin que se vea un parpadeo. Pero
   en el render del servidor no existe y React avisa por consola, así que del
   lado del servidor cae a useEffect, que nunca llega a ejecutarse ahí. */
const useEfectoDeLayout =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

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
 * Los pasos: por defecto se ven cuatro sin numerar —lo que sirve mientras la
 * persona sigue en el lugar— y un boton despliega los nueve completos, en su
 * orden real. Antes se mostraban cuatro numerados 1-2-3-4 con un texto abajo
 * aclarando que en realidad eran nueve, lo que se contradecia solo.
 */
export function SiniestroBand() {
  const [verTodos, setVerTodos] = useState(false);

  /* El despliegue va en dos fases, y plegar es exactamente la reversa de
     desplegar:

       1. SALE la lista que está. Los ítems se apagan y bajan 6px, del último
          al primero. Dura SALIDA ms.
       2. Se cambia el contenido, la caja ajusta el alto con transición, y
          ENTRA la lista nueva escalonada del primero al último.

     Las dos fases corren igual en las dos direcciones. Por eso cerrar se
     siente como desandar y no como un segundo despliegue más chico, que es
     lo que pasaba antes. */
  const [saliendo, setSaliendo] = useState(false);
  const caja = useRef<HTMLDivElement>(null);

  /* El alto de partida se captura al hacer clic, ANTES de que React cambie el
     contenido. Después ya es tarde: el DOM tiene la lista nueva y medirlo
     daría el alto de destino, no el de origen. */
  const altoDePartida = useRef<number | null>(null);
  const temporizador = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(temporizador.current), []);

  function alternar() {
    // Si ya hay una transición en curso, no se encima otra.
    if (saliendo) return;

    altoDePartida.current = caja.current?.getBoundingClientRect().height ?? null;
    setSaliendo(true);

    temporizador.current = window.setTimeout(() => {
      setVerTodos((v) => !v);
      setSaliendo(false);
    }, SALIDA);
  }

  useEfectoDeLayout(() => {
    if (altoDePartida.current === null || !caja.current) return;
    const limpiar = animarAltoDesde(caja.current, altoDePartida.current);
    altoDePartida.current = null;
    return limpiar;
  }, [verTodos]);

  const pasos = verTodos ? pasosSiniestroCompletos : pasosSiniestro;

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
          <h3 className="text-lg">
            {verTodos ? "Los nueve pasos" : "Mientras tanto"}
          </h3>

          {/* El ref va acá, en el contenedor: es lo que se mide y se anima.
              La `key` cambia con el estado para que React rearme la lista y el
              escalonado vuelva a correr en cada despliegue.

              Las dos listas comparten una sola pieza de marcado: la única
              diferencia real es que la completa va numerada y la corta lleva
              viñeta, porque son cuatro pasos sueltos y no una secuencia. */}
          <div ref={caja}>
            {verTodos ? (
              /* La lista real de /siniestro.html, completa y en su orden. */
              <ol
                key="todos"
                className={saliendo ? "escalonado-sale mt-4" : "escalonado mt-4"}
              >
                {pasos.map((paso, i) => (
                  <li
                    key={paso}
                    style={
                      {
                        "--i": i,
                        "--salida": pasos.length - 1 - i,
                      } as React.CSSProperties
                    }
                    className="flex gap-4 border-t border-white/20 py-3 last:border-b"
                  >
                    <span className="shrink-0 font-display text-lg tabular-nums text-naranja">
                      {i + 1}
                    </span>
                    <span className="leading-snug">{paso}</span>
                  </li>
                ))}
              </ol>
            ) : (
              /* Lo esencial de los primeros minutos, sin numerar: son los pasos
                 1, 4, 7 y 9 de la lista de arriba, y numerarlos 1-2-3-4 haría
                 parecer que la secuencia completa es de cuatro. */
              <ul
                key="esencial"
                className={saliendo ? "escalonado-sale mt-4" : "escalonado mt-4"}
              >
                {pasos.map((paso, i) => (
                  <li
                    key={paso}
                    style={
                      {
                        "--i": i,
                        "--salida": pasos.length - 1 - i,
                      } as React.CSSProperties
                    }
                    className="flex gap-4 border-t border-white/20 py-3.5 last:border-b"
                  >
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-naranja" />
                    <span className="leading-snug">{paso}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-3">
            <button
              type="button"
              onClick={alternar}
              aria-expanded={verTodos}
              className="font-display text-[0.9375rem] font-medium underline decoration-naranja decoration-2 underline-offset-4 hover:decoration-white"
            >
              {verTodos ? "Ver solo lo esencial" : "Ver los nueve pasos completos"}
            </button>

            {/* El desplegable de arriba resuelve los pasos sin sacar a nadie de
                la página. Lo que no entra acá son los teléfonos de las nueve
                compañías, que es una tabla: para eso está la página propia. */}
            <Link
              href="/siniestro"
              className="font-display text-[0.9375rem] font-medium underline decoration-white/35 underline-offset-4 hover:decoration-naranja"
            >
              Teléfonos de las nueve compañías
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
