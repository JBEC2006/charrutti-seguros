"use client";

import { useEffect, useId, useRef, useState } from "react";
import { gruposRamos } from "@/lib/site";

/**
 * Selector de ramo del formulario de contacto.
 *
 * Antes era un <select> nativo. El problema del nativo es que la lista
 * desplegada la dibuja el sistema operativo, no la página: aparecía con el
 * azul de Windows y una tipografía ajena, rompiendo el diseño justo en el
 * único momento en que el visitante interactúa de verdad.
 *
 * Este está construido con el mismo lenguaje que el desplegable "Seguros" del
 * header: fondo blanco, filete naranja arriba, sombra dura, ítems en Archivo.
 * Además aprovecha para agrupar por audiencia igual que la grilla de ramos,
 * cosa que un <select> con <optgroup> tampoco deja estilar.
 *
 * Accesibilidad: patrón combobox/listbox con navegación por teclado completa
 * (flechas, Inicio/Fin, Enter, Escape, Tab) y un <input type="hidden"> que
 * carga el valor, para que el formulario siga siendo un formulario.
 */
const opciones = [
  ...gruposRamos.flatMap((g) => g.ramos.map((r) => r.nombre)),
  "Otra cosa",
];

export function SelectorRamo({
  value,
  onChange,
  id,
}: {
  value: string;
  onChange: (v: string) => void;
  id: string;
}) {
  const [abierto, setAbierto] = useState(false);
  const [resaltado, setResaltado] = useState(0);
  const contenedorRef = useRef<HTMLDivElement>(null);
  const listaRef = useRef<HTMLUListElement>(null);
  const listaId = useId();

  // Al abrir, arranca parado sobre la opción ya elegida.
  useEffect(() => {
    if (!abierto) return;
    const i = opciones.indexOf(value);
    setResaltado(i >= 0 ? i : 0);
  }, [abierto, value]);

  // Mantiene la opción resaltada a la vista al navegar con el teclado.
  useEffect(() => {
    if (!abierto) return;
    listaRef.current
      ?.querySelector(`[data-i="${resaltado}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [abierto, resaltado]);

  useEffect(() => {
    function afuera(e: MouseEvent) {
      if (!contenedorRef.current?.contains(e.target as Node)) setAbierto(false);
    }
    document.addEventListener("mousedown", afuera);
    return () => document.removeEventListener("mousedown", afuera);
  }, []);

  function elegir(v: string) {
    onChange(v);
    setAbierto(false);
  }

  function alTeclado(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setAbierto(false);
      return;
    }
    if (e.key === "Tab") {
      setAbierto(false);
      return;
    }
    if (!abierto) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        setAbierto(true);
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setResaltado((i) => (i + 1) % opciones.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setResaltado((i) => (i - 1 + opciones.length) % opciones.length);
    } else if (e.key === "Home") {
      e.preventDefault();
      setResaltado(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setResaltado(opciones.length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      elegir(opciones[resaltado]);
    }
  }

  return (
    <div ref={contenedorRef} className="relative">
      <input type="hidden" name="ramo" value={value} />

      <button
        type="button"
        id={id}
        role="combobox"
        aria-expanded={abierto}
        aria-controls={listaId}
        aria-haspopup="listbox"
        onClick={() => setAbierto((v) => !v)}
        onKeyDown={alTeclado}
        className="mt-1.5 flex w-full items-center justify-between gap-3 border border-linea bg-white px-3.5 py-3 text-left text-base hover:border-carbon"
      >
        <span className={value ? "" : "text-carbon/55"}>
          {value || "Elija una opción"}
        </span>
        <svg
          width="11"
          height="7"
          viewBox="0 0 10 7"
          aria-hidden="true"
          className={
            "shrink-0 transition-transform " + (abierto ? "rotate-180" : "")
          }
        >
          <path
            d="M1 1.5L5 5.5L9 1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      </button>

      {abierto && (
        <ul
          ref={listaRef}
          id={listaId}
          role="listbox"
          aria-label="Qué quiere asegurar"
          tabIndex={-1}
          className="absolute left-0 right-0 top-[calc(100%+0.4rem)] z-30 max-h-[19rem] overflow-y-auto border-t-2 border-naranja bg-white py-1.5 shadow-[0_18px_44px_-14px_rgba(34,30,26,.45)]"
        >
          {gruposRamos.map((grupo) => (
            <li key={grupo.titulo} role="presentation">
              <p
                role="presentation"
                className="px-4 pb-1 pt-3 font-display text-[0.8125rem] font-medium text-carbon/60"
              >
                {grupo.titulo}
              </p>
              <ul role="presentation">
                {grupo.ramos.map((r) => {
                  const i = opciones.indexOf(r.nombre);
                  return (
                    <li
                      key={r.slug}
                      role="option"
                      data-i={i}
                      aria-selected={value === r.nombre}
                      onClick={() => elegir(r.nombre)}
                      onMouseEnter={() => setResaltado(i)}
                      className={
                        "cursor-pointer px-4 py-2 font-display text-[0.9375rem] font-medium " +
                        (resaltado === i ? "bg-niebla" : "") +
                        (value === r.nombre ? " text-naranja-hondo" : "")
                      }
                    >
                      {r.nombre}
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}

          <li role="presentation" className="mt-1.5 border-t border-linea pt-1.5">
            <ul role="presentation">
              <li
                role="option"
                data-i={opciones.length - 1}
                aria-selected={value === "Otra cosa"}
                onClick={() => elegir("Otra cosa")}
                onMouseEnter={() => setResaltado(opciones.length - 1)}
                className={
                  "cursor-pointer px-4 py-2 font-display text-[0.9375rem] font-medium " +
                  (resaltado === opciones.length - 1 ? "bg-niebla" : "") +
                  (value === "Otra cosa" ? " text-naranja-hondo" : "")
                }
              >
                Otra cosa
              </li>
            </ul>
          </li>
        </ul>
      )}
    </div>
  );
}
