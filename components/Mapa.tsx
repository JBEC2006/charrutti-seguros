"use client";

import { useState } from "react";
import { site, mapsHref } from "@/lib/site";

/**
 * Tarjeta de ubicación de la oficina.
 *
 * Tercera vuelta. Historia corta de por qué quedó así:
 *
 *  1. Primero era un iframe de Google a sangre, con los comercios del barrio
 *     compitiendo con la dirección y el pin descentrado.
 *  2. Después, un placeholder de papel cuadriculado, también a sangre y fuera
 *     del contenedor de la página: se veía como un cartel gris suelto.
 *  3. Ahora vive DENTRO de la columna de datos de contacto. Eso resuelve dos
 *     cosas de una: llena los ~300px muertos que quedaban abajo de los datos
 *     (el formulario de al lado es mucho más alto), y al ser una tarjeta
 *     angosta su propio contenido la ocupa entera, en vez de amontonarse en
 *     el 40% izquierdo dejando el resto como trama vacía.
 *
 * La estructura es la de un widget de mapa real: el boceto de calles arriba
 * con el marcador en el cruce, y una barra de datos abajo con la dirección y
 * las acciones. Sigue siendo solo trazos SVG — cero imágenes, cero pedidos de
 * red hasta que se pide el mapa real.
 */
export function Mapa() {
  const [cargado, setCargado] = useState(false);

  return (
    <div className="overflow-hidden border border-linea bg-white">
      {cargado ? (
        <iframe
          title={`Mapa de la oficina de Charrutti Seguros en ${site.direccion.calle}`}
          src={
            "https://www.google.com/maps?q=" +
            encodeURIComponent(site.direccion.mapsQuery) +
            "&z=17&output=embed"
          }
          className="block h-[17rem] w-full"
        />
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 440 176"
          preserveAspectRatio="xMidYMid slice"
          className="block h-[9.5rem] w-full"
        >
          <rect width="440" height="176" fill="var(--color-niebla)" />

          {/* Calles. El grupo va rotado para que no lea como cuadrícula:
              una traza urbana real casi nunca es perfectamente ortogonal. */}
          <g transform="rotate(-6 220 88)">
            <g stroke="var(--color-gris)" strokeOpacity="0.38" strokeWidth="1.5">
              <line x1="-60" y1="26" x2="500" y2="26" />
              <line x1="-60" y1="150" x2="500" y2="150" />
              <line x1="70" y1="-60" x2="70" y2="240" />
              <line x1="360" y1="-60" x2="360" y2="240" />
            </g>

            {/* La avenida y la transversal del cruce, un punto más marcadas. */}
            <line
              x1="-60"
              y1="88"
              x2="500"
              y2="88"
              stroke="var(--color-naranja-hondo)"
              strokeOpacity="0.9"
              strokeWidth="3.5"
            />
            <line
              x1="220"
              y1="-60"
              x2="220"
              y2="240"
              stroke="var(--color-gris)"
              strokeOpacity="0.55"
              strokeWidth="2"
            />

            {/* El marcador, exactamente en el cruce. La contra-rotación lo
                mantiene derecho aunque el plano esté inclinado. */}
            <g transform="rotate(6 220 88)">
              <circle
                cx="220"
                cy="88"
                r="17"
                fill="var(--color-naranja)"
                fillOpacity="0.16"
              />
              <path
                d="M220 74.5c-2.9 0-5.2 2.3-5.2 5.2 0 3.9 5.2 9.5 5.2 9.5s5.2-5.6 5.2-9.5c0-2.9-2.3-5.2-5.2-5.2Zm0 7.1a1.95 1.95 0 1 1 0-3.9 1.95 1.95 0 0 1 0 3.9Z"
                fill="var(--color-naranja-hondo)"
                transform="translate(0 -2) scale(1.9) translate(-104 -37)"
              />
            </g>
          </g>
        </svg>
      )}

      {/* Barra de datos. En estado mapa cargado, la acción es volver. */}
      <div className="border-t border-linea px-5 py-4">
        <p className="font-display text-lg leading-tight">
          {site.direccion.calle}
        </p>
        <p className="mt-1 text-[0.9375rem] text-carbon/75">
          {site.direccion.ciudad}, {site.direccion.pais}
        </p>

        <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-2">
          {cargado ? (
            <button
              type="button"
              onClick={() => setCargado(false)}
              className="flex items-center gap-1.5 border-2 border-carbon bg-white px-4 py-2 font-display text-[0.9375rem] font-medium transition-colors hover:bg-carbon hover:text-white"
            >
              <svg width="13" height="11" viewBox="0 0 13 11" aria-hidden="true">
                <path
                  d="M6 1 1 5.5 6 10M1 5.5h11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Volver
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCargado(true)}
              className="border-2 border-carbon bg-white px-4 py-2 font-display text-[0.9375rem] font-medium transition-colors hover:bg-carbon hover:text-white"
            >
              Ver el mapa
            </button>
          )}

          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[0.9375rem] font-medium underline decoration-naranja decoration-2 underline-offset-4 hover:decoration-carbon"
          >
            Cómo llegar
          </a>
        </div>
      </div>
    </div>
  );
}
