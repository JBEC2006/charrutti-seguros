"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Lleva la página al tope cuando se navega a otra ruta.
 *
 * El navegador restaura la posición de scroll anterior, así que al entrar a
 * /seguros/automoviles desde la grilla de ramos se aterrizaba en la mitad de
 * la página nueva. Lo mismo pasaba con cualquier link entre páginas.
 *
 * Vive en el layout raíz a propósito: es el único componente que NO se
 * desmonta al cambiar de ruta, así que sus refs sobreviven la navegación.
 * Los <Header> de cada página no sirven para esto porque se remontan.
 *
 * Tres casos que NO tienen que resetear el scroll:
 *  - La primera carga, donde no hubo navegación.
 *  - Volver con el botón atrás: ahí restaurar la posición es lo correcto.
 *  - Cualquier URL con ancla, que tiene su propio destino.
 */
export function ScrollAlTope() {
  const pathname = usePathname();
  const primeraVez = useRef(true);
  const volviendoAtras = useRef(false);

  useEffect(() => {
    const alVolver = () => {
      volviendoAtras.current = true;
    };
    window.addEventListener("popstate", alVolver);
    return () => window.removeEventListener("popstate", alVolver);
  }, []);

  useEffect(() => {
    if (primeraVez.current) {
      primeraVez.current = false;
      return;
    }
    if (volviendoAtras.current) {
      volviendoAtras.current = false;
      return;
    }
    if (window.location.hash) return;

    // Dos frames: alcanzan para pisar la restauración del navegador.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => window.scrollTo({ top: 0 })),
    );
  }, [pathname]);

  return null;
}
