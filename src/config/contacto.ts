/**
 * Datos de contacto de Charrutti Seguros.
 *
 * Este archivo es la única fuente de verdad de todo lo que una persona podría
 * usar para comunicarse con la oficina. Está separado de `lib/site.ts` a
 * propósito: es lo que más rápido cambia, es lo que el cliente va a querer
 * corregir primero, y es donde viven los huecos.
 *
 * REGLA DEL ARCHIVO
 * -----------------
 * Un dato que no tenemos confirmado va en `null`. Nunca un valor plausible,
 * nunca un placeholder que parezca real.
 *
 * Un `null` acá no desaparece de la página: lo levanta <Pendiente /> y se
 * muestra como marcador declarado. Esa es la diferencia entre una demo
 * incompleta y una demo rota — el hueco tiene que verse como una decisión
 * que le falta al cliente, no como un error nuestro.
 *
 * Cuando llegue el dato: se escribe acá y la página se arregla sola. No hay
 * que tocar ningún componente.
 */

export type Telefono = {
  /** Como se escribe en pantalla, con los espacios de la convención local. */
  display: string;
  /** Formato internacional sin signos, para el href tel:. */
  tel: string;
};

/* ---------------------------------------------------------------------------
   CONFIRMADO
   Verificado contra el sitio actual del cliente (charruttiseguros.com.uy).
--------------------------------------------------------------------------- */

export const direccion = {
  calle: "26 de Marzo 3454, Oficina 101",
  ciudad: "Montevideo",
  pais: "Uruguay",
  /** Solo se usa para el link a Google Maps y el iframe del mapa. */
  mapsQuery: "26 de Marzo 3454, Montevideo, Uruguay",
} as const;

export const email = "operaciones@charruttiseguros.com.uy";

export const telefonos = {
  /** El conmutador. En el sitio actual figura como "2623 1000*". */
  central: { display: "2623 1000", tel: "+59826231000" } as Telefono,

  /**
   * Guardia de siniestros.
   *
   * OJO: estos dos números NO están en el sitio actual. El paso 5 de
   * /siniestro.html dice solamente "contáctese con nuestras oficinas", sin
   * número. Vinieron por otra vía y hay que confirmarlos con Charrutti antes
   * de publicar: son los que la página empuja como acción urgente.
   */
  siniestros: [
    { display: "2623 1668", tel: "+59826231668" },
    { display: "2623 1714", tel: "+59826231714" },
  ] as Telefono[],
};

/* ---------------------------------------------------------------------------
   PENDIENTE
   Todo lo de acá abajo está en null porque no lo tenemos. No se completa
   "para que se vea mejor": se muestra como pendiente hasta que llegue.
--------------------------------------------------------------------------- */

/**
 * Horario de atención.
 *
 * El sitio actual no lo publica en ningún lado. Una versión anterior de esta
 * demo decía "Lunes a viernes" a secas, que es una media verdad sin la franja
 * horaria: no le sirve a nadie que quiera saber si puede pasar a las 17:30.
 */
export const horario: string | null = null;

/**
 * WhatsApp comercial.
 *
 * No existe en el sitio actual. Mientras `numero` sea null NO se arma ningún
 * `wa.me`: un link de WhatsApp con un número inventado abre la app, no
 * encuentra el contacto y falla delante del cliente. En un pitch eso se paga
 * caro y no hay forma de explicarlo después.
 *
 * Para activarlo: el internacional sin signos ni "+", por ejemplo
 * "59899123456". El botón deshabilitado se convierte solo en el link real.
 */
export const whatsapp: { numero: string | null; mensaje: string } = {
  numero: null,
  mensaje: "Hola, quisiera consultar por un seguro.",
};

/* ---------------------------------------------------------------------------
   LEYENDAS DE LOS HUECOS

   El texto exacto que se muestra en lugar de cada dato que falta. Vive acá
   —y no suelto en cada componente— para que todos los pendientes del sitio
   hablen igual y se lean como parte de un método, no como notas sueltas.
--------------------------------------------------------------------------- */

export const leyendaPendiente = {
  whatsapp: "Pendiente: número de WhatsApp comercial",
  horario: "Horario: a confirmar con Charrutti",
} as const;

/* ---------------------------------------------------------------------------
   DERIVADOS
--------------------------------------------------------------------------- */

/**
 * Link de WhatsApp, o null si todavía no hay número.
 *
 * Devolver null y no un string vacío es deliberado: obliga a quien lo use a
 * decidir explícitamente qué mostrar en el hueco. Un `href=""` habría pasado
 * el type-check y renderizado un link roto.
 */
export const whatsappHref: string | null = whatsapp.numero
  ? `https://wa.me/${whatsapp.numero}?text=${encodeURIComponent(whatsapp.mensaje)}`
  : null;

/** El canal inmediato que sí funciona hoy. */
export const telHref = `tel:${telefonos.central.tel}`;

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  direccion.mapsQuery,
)}`;

export const contacto = {
  direccion,
  email,
  telefonos,
  horario,
  whatsapp,
  leyendaPendiente,
};
