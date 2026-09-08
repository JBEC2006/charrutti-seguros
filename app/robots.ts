import type { MetadataRoute } from "next";

/**
 * Demo de pitch: no se indexa.
 *
 * Refuerza el `robots: { index: false }` del layout. Son dos mecanismos
 * distintos —uno es una etiqueta en la página, el otro una instrucción a nivel
 * de sitio— y para una propuesta comercial que todavía no es pública conviene
 * tener los dos.
 *
 * Cuando esto pase a ser el sitio real de Charrutti, hay que dar vuelta este
 * archivo y sacar el bloque `robots` del layout.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
