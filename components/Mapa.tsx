"use client";

import { useState } from "react";
import { site, mapsHref } from "@/lib/site";

/**
 * Mapa de la oficina.
 *
 * Antes era un iframe de Google a todo lo alto, con Rudy Burgers, la pizzería
 * y una docena de comercios del barrio compitiendo con la dirección, la
 * tarjeta de información de Google cortada contra el borde y el pin
 * descentrado. Era el elemento menos profesional de la página.
 *
 * Ahora arranca como un panel propio: la dirección en la tipografía del sitio
 * sobre una trama abstracta de calles hecha con gradientes (cero imágenes, cero
 * pedidos de red), y el mapa real de Google se carga solo si el visitante lo
 * pide. Así no arrastra el LCP y no aparece publicidad involuntaria de los
 * vecinos.
 */
export function Mapa() {
  const [cargado, setCargado] = useState(false);

  if (cargado) {
    return (
      <iframe
        title={`Mapa de la oficina de Charrutti Seguros en ${site.direccion.calle}`}
        src={
          "https://www.google.com/maps?q=" +
          encodeURIComponent(site.direccion.mapsQuery) +
          "&z=17&output=embed"
        }
        className="block h-[15rem] w-full lg:h-[17rem]"
      />
    );
  }

  return (
    <div className="relative h-[15rem] w-full overflow-hidden bg-linea lg:h-[17rem]">
      {/* Trama de calles: solo gradientes, sin assets ni red. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage: [
            "linear-gradient(to right, rgba(34,30,26,.16) 1.5px, transparent 1.5px)",
            "linear-gradient(to bottom, rgba(34,30,26,.16) 1.5px, transparent 1.5px)",
            "linear-gradient(to bottom, rgba(34,30,26,.28) 3px, transparent 3px)",
          ].join(","),
          backgroundSize: "58px 100%, 100% 58px, 100% 232px",
          backgroundPosition: "0 0, 0 0, 0 96px",
        }}
      />

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
  );
}
