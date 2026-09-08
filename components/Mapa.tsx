"use client";

import { useState } from "react";
import { site, mapsHref } from "@/lib/site";

/**
 * Mapa de la oficina.
 *
 * Segunda vuelta sobre este componente. La primera reemplazó el iframe de
 * Google (con Rudy Burgers, la pizzería y el pin descentrado) por un
 * placeholder de papel cuadriculado a sangre. Dos problemas reales con eso:
 *
 * 1. Vivía FUERA del contenedor de 1180px que usa el resto de la página, así
 *    que se veía como un cartel gris perdido y no como parte del diseño.
 * 2. La trama era literal papel cuadriculado — sin relación con un mapa real
 *    ni con el resto del lenguaje visual del sitio. Leía como "acá falta
 *    algo", no como una decisión.
 *
 * Ahora es una tarjeta con el mismo tratamiento que el resto (borde, fondo
 * blanco, sin sangre) y el motivo es un boceto de calles real: unas líneas
 * finas de calle y una avenida marcada en naranja, con el marcador en el
 * cruce. Sigue siendo solo trazos SVG: cero imágenes, cero pedidos de red
 * hasta que se pide el mapa real.
 *
 * El toggle ahora tiene vuelta: "Ver el mapa" carga el iframe con una barra
 * arriba que dice "Volver" y colapsa a la tarjeta de nuevo. Antes, una vez
 * cargado el iframe no había manera de deshacer eso.
 */
export function Mapa() {
  const [cargado, setCargado] = useState(false);

  return (
    <div className="border border-linea bg-white">
      {cargado ? (
        <>
          <div className="flex items-center justify-between gap-4 border-b border-linea px-5 py-3 sm:px-7">
            <p className="min-w-0 truncate font-display text-[0.9375rem] font-medium">
              {site.direccion.calle}, {site.direccion.ciudad}
            </p>
            <button
              type="button"
              onClick={() => setCargado(false)}
              className="flex shrink-0 items-center gap-1.5 font-display text-[0.9375rem] font-medium underline decoration-naranja decoration-2 underline-offset-4 hover:decoration-carbon"
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
          </div>
          <iframe
            title={`Mapa de la oficina de Charrutti Seguros en ${site.direccion.calle}`}
            src={
              "https://www.google.com/maps?q=" +
              encodeURIComponent(site.direccion.mapsQuery) +
              "&z=17&output=embed"
            }
            className="block h-[13rem] w-full lg:h-[15rem]"
          />
        </>
      ) : (
        <div className="relative h-[15rem] w-full overflow-hidden lg:h-[17rem]">
          {/* Boceto de calles. Un cruce con una avenida marcada, no una
              cuadrícula genérica: es lo que diferencia un mapa de un
              papel cuadriculado. */}
          <svg
            aria-hidden="true"
            viewBox="0 0 800 320"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 h-full w-full"
          >
            <rect width="800" height="320" fill="var(--color-niebla)" />
            <g transform="rotate(-5 400 160)" stroke="var(--color-gris)" strokeOpacity="0.4">
              <line x1="-50" y1="40" x2="850" y2="40" strokeWidth="2" />
              <line x1="-50" y1="95" x2="850" y2="95" strokeWidth="2" />
              <line x1="-50" y1="225" x2="850" y2="225" strokeWidth="2" />
              <line x1="-50" y1="280" x2="850" y2="280" strokeWidth="2" />
              <line x1="90" y1="-50" x2="90" y2="370" strokeWidth="2" />
              <line x1="230" y1="-50" x2="230" y2="370" strokeWidth="2" />
              <line x1="590" y1="-50" x2="590" y2="370" strokeWidth="2" />
              <line x1="730" y1="-50" x2="730" y2="370" strokeWidth="2" />
              {/* La avenida: más gruesa, en naranja, cruzando toda la tarjeta. */}
              <line
                x1="-50"
                y1="160"
                x2="850"
                y2="160"
                stroke="var(--color-naranja-hondo)"
                strokeOpacity="0.85"
                strokeWidth="4"
              />
              <line x1="460" y1="-50" x2="460" y2="370" strokeWidth="2" />
            </g>
            {/* El cruce, en coordenadas ya rotadas: aprox. donde la avenida
                cruza la calle vertical central. */}
            <circle cx="447" cy="182" r="14" fill="var(--color-naranja)" fillOpacity="0.18" />
          </svg>

          <div className="relative flex h-full flex-col items-start justify-center gap-4 px-6 sm:px-10">
            <div className="flex items-start gap-3">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-naranja-hondo"
              >
                <path
                  d="M12 1.8c-4 0-7.2 3.2-7.2 7.2 0 5.4 7.2 13.2 7.2 13.2s7.2-7.8 7.2-13.2c0-4-3.2-7.2-7.2-7.2Zm0 9.9a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Z"
                  fill="currentColor"
                />
              </svg>
              <div>
                <p className="font-display text-xl leading-tight">
                  {site.direccion.calle}
                </p>
                <p className="mt-1 text-[0.9375rem] text-carbon/75">
                  {site.direccion.ciudad}, {site.direccion.pais}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pl-9">
              <button
                type="button"
                onClick={() => setCargado(true)}
                className="border-2 border-carbon bg-white px-5 py-2.5 font-display text-[0.9375rem] font-medium transition-colors hover:bg-carbon hover:text-white"
              >
                Ver el mapa
              </button>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-1 py-2.5 font-display text-[0.9375rem] font-medium underline decoration-naranja decoration-2 underline-offset-4 hover:decoration-carbon"
              >
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
