"use client";

import { useState } from "react";
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
 * EL BOTÓN DE PAUSA NO ES DECORATIVO.
 *
 * El desfile se mueve en toda computadora, incluso con "animaciones reducidas"
 * activado en el sistema operativo. Esa decisión está documentada en
 * globals.css con su razonamiento.
 *
 * Pero es movimiento continuo e infinito, y WCAG 2.2.2 ("Pause, Stop, Hide",
 * nivel A) exige poder detener cualquier cosa que se mueva sola por más de
 * cinco segundos. El hover no cumple: en un celular no existe. Este botón es
 * lo único que hace que la decisión de arriba sea defendible.
 *
 * Si alguien lo saca por prolijidad visual, el sitio pasa a incumplir un
 * criterio de nivel A. No sacarlo.
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
  const [pausado, setPausado] = useState(false);

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

      <div
        data-pausado={pausado}
        className="desfile relative mt-6 overflow-hidden"
      >
        <div className="desfile-pista">
          <Grupo copia={1} />
          <Grupo copia={2} />
        </div>

        {/* Los bordes se desvanecen contra el blanco de la sección, para que
            las compañías entren y salgan en vez de cortarse de golpe. El
            izquierdo va más ancho porque abajo se le apoya el botón. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white via-white to-transparent sm:w-28"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent sm:w-20"
        />

        {/* VA A LA IZQUIERDA, Y ES A PROPÓSITO.
            A la derecha lo tapaba el botón flotante "Llamar", que es fixed en
            la esquina inferior derecha: cuando la franja quedaba al pie de la
            pantalla, el control de pausa desaparecía debajo. Un mecanismo de
            accesibilidad que a veces no se puede tocar no es un mecanismo.
            Acá el degradado ya deja la zona casi blanca, así que el botón se
            apoya en algo limpio en vez de taparle el nombre a una compañía. */}
        <button
          type="button"
          onClick={() => setPausado((v) => !v)}
          aria-pressed={pausado}
          className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-linea bg-white text-carbon/55 hover:border-carbon hover:text-carbon sm:left-5"
        >
          <span className="sr-only">
            {pausado
              ? "Reanudar el desfile de compañías"
              : "Pausar el desfile de compañías"}
          </span>
          {pausado ? (
            <svg width="11" height="12" viewBox="0 0 11 12" aria-hidden="true">
              <path d="M1 1.2 10 6l-9 4.8V1.2Z" fill="currentColor" />
            </svg>
          ) : (
            <svg width="10" height="12" viewBox="0 0 10 12" aria-hidden="true">
              <path d="M0 0h3.2v12H0zM6.8 0H10v12H6.8z" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
