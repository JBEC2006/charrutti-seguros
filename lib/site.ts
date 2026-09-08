/**
 * Datos de Charrutti Seguros.
 *
 * Todo lo que el cliente podría querer cambiar vive acá o en el archivo de
 * contacto que se importa abajo.
 *
 * Los datos de comunicación —teléfonos, correo, dirección, horario, WhatsApp—
 * se mudaron a `src/config/contacto.ts`. Son los que más cambian, los que el
 * cliente va a corregir primero, y los que tienen huecos: conviene que estén
 * juntos y en un archivo que se pueda abrir sin leer el resto del sitio.
 * Acá se re-exportan para no romper lo que ya los importaba de `site`.
 */

import {
  direccion,
  email,
  telefonos,
  horario,
  whatsapp,
  leyendaPendiente,
} from "@/src/config/contacto";

export {
  whatsappHref,
  telHref,
  mapsHref,
  horario,
  leyendaPendiente,
} from "@/src/config/contacto";
export type { Telefono } from "@/src/config/contacto";

export const site = {
  nombre: "Charrutti Seguros",
  /**
   * Dominio donde vive ESTA demo. Ojo: no es charruttiseguros.com.uy.
   *
   * Apuntar el canonical al sitio viejo le diría a Google que esta página es
   * una copia de aquella, que es exactamente lo contrario de lo que queremos.
   * Cuando el cliente cierre y esto pase a producción, acá va el dominio real.
   */
  url: "https://charrutti-seguros.vercel.app",

  /** El sitio actual del cliente, para referencia en el código. */
  sitioActual: "https://www.charruttiseguros.com.uy",

  // Todo lo que sigue vive en src/config/contacto.ts. Ver ese archivo para el
  // detalle de qué está confirmado y qué está pendiente.
  direccion,
  email,
  telefonos,
  whatsapp,
  horario,
  leyendaPendiente,

  // La web actual dice "UNIT-ISO 9001:2008". Esa versión de la norma está
  // obsoleta y no confirmamos si recertificaron, así que va sin número.
  certificacion: "Certificación UNIT-ISO 9001",
  trayectoria: "Más de 25 años en plaza",

  redes: {
    facebook: "https://www.facebook.com/www.charruttiseguros.com.uy",
    // El sitio actual todavía muestra el pajarito de Twitter. Acá va el
    // ícono de X. PENDIENTE: confirmar si la cuenta sigue activa.
    x: "https://x.com/CharruttiSeguro",
  },

  // PENDIENTE: el portal es de un tercero (Broker Solutions) y el cliente
  // todavía no confirmó si lo tiene implementado ni a qué apunta.
  areaClientes: "https://brokersolutions.com.uy/BrokerPortalCharrutti/Cliente.aspx",
} as const;

/**
 * Las nueve compañías con las que opera Charrutti.
 * Se muestran como marcas de texto: NO se hotlinkean los PNG del sitio actual.
 * Para producción, reemplazar por los archivos de logo reales de cada compañía.
 *
 * CUIDADO CON CÓMO SE REDACTA ESTO. Ver `respaldo` acá abajo.
 */
export const companias = [
  "BSE",
  "Mapfre",
  "SURA",
  "Porto Seguro",
  "Sancor",
  "AIG",
  "MetLife",
  "Berkley",
  "HDI",
] as const;

/**
 * Cómo se nombra el respaldo. No es una preferencia de estilo: es exactitud.
 *
 * EL ERROR QUE ESTO CORRIGE
 * -------------------------
 * Versiones anteriores de esta demo decían "las nueve compañías del mercado
 * uruguayo" y "todas las compañías establecidas en el Uruguay". Las dos cosas
 * son falsas, y de una forma que un cliente del rubro detecta en el primer
 * vistazo.
 *
 * El BCU tiene diecisiete aseguradoras autorizadas a operar en el país. Nueve
 * son las compañías con las que Charrutti trabaja. "Las nueve del mercado"
 * confunde una cosa con la otra e inventa un mercado que no existe; "todas las
 * establecidas en el Uruguay" es directamente una afirmación que no se puede
 * sostener.
 *
 * El activo de Charrutti es real y no necesita el inflado: nueve compañías es
 * mucho más de lo que compara alguien que trabaja con una sola. La afirmación
 * exacta vende igual y no se cae si el cliente la revisa.
 *
 * LA REGLA
 * --------
 * "Nueve" siempre calificado por CON QUIÉN, nunca por CUÁNTAS HAY.
 *
 *   Sí:  "las nueve compañías con las que trabajamos"
 *   Sí:  "nueve compañías en una sola comparación"
 *   No:  "las nueve compañías del mercado uruguayo"
 *   No:  "todas las compañías establecidas en el Uruguay"
 *   No:  "todas las compañías" a secas
 */
export const respaldo = {
  /** Para meter en el medio de una oración. */
  frase: "las nueve compañías con las que trabajamos",
  /** Para encabezados y títulos de sección. */
  titulo: "Las nueve compañías con las que trabajamos",
  /** Cantidad, por si algún día cambia y hay que buscarla. */
  cantidad: companias.length,
} as const;

/**
 * Los diez ramos, agrupados por a quién le sirve cada uno.
 *
 * Antes eran una grilla plana de diez celdas donde Automóviles ocupaba dos
 * columnas sin que esa diferencia comunicara nada. Agrupar por audiencia
 * —usted, su empresa, el campo— es lo que hace navegable una lista larga:
 * el visitante se reconoce en un grupo y descarta los otros dos de un vistazo.
 *
 * Las descripciones son condensaciones del texto que ya está en el sitio
 * actual (una por página), con las erratas del original corregidas, y todas
 * recortadas para que ninguna pase de dos líneas.
 *
 * Cuatro de los diez tienen ficha propia construida: Automóviles, Hogar,
 * Industria y Comercio, y Accidentes de Trabajo. Se eligieron esos cuatro
 * porque son los que el propio sitio actual desarrolla más y los que cubren
 * las tres audiencias de la grilla. Los otros seis abren el formulario de
 * contacto con el ramo ya elegido: no hay página vacía en ningún caso.
 */
export type Ramo = {
  nombre: string;
  descripcion: string;
  /** Identificador para preseleccionar el ramo en el formulario. */
  slug: string;
  /** Página propia, si existe. Si no, se va al formulario. */
  href?: string;
};

export type GrupoRamos = {
  titulo: string;
  bajada: string;
  ramos: Ramo[];
};

export const gruposRamos: GrupoRamos[] = [
  {
    titulo: 'Para usted y su familia',
    bajada: 'Lo que se asegura a título personal.',
    ramos: [
      {
        nombre: 'Automóviles',
        descripcion: 'Daños a terceros, robo, choque y asistencia en la ruta.',
        slug: 'automoviles',
        href: '/seguros/automoviles',
      },
      {
        nombre: 'Hogar',
        descripcion: 'Incendio, robo del contenido, daños por agua y cristales.',
        slug: 'hogar',
        href: '/seguros/hogar',
      },
      {
        nombre: 'Vida',
        descripcion: 'Respaldo para su familia, con planes que acumulan ahorro.',
        slug: 'vida',
      },
      {
        nombre: 'Seguro Obligatorio',
        descripcion: 'El mínimo que la ley exige para poder circular.',
        slug: 'soa',
      },
      {
        nombre: 'Notebooks',
        descripcion: 'Su notebook cubierta desde la factura de compra.',
        slug: 'notebooks',
      },
      {
        nombre: 'Embarcaciones',
        descripcion: 'Cobertura Cinta Azul o Marinera para su embarcación.',
        slug: 'embarcaciones',
      },
    ],
  },
  {
    titulo: 'Para su empresa',
    bajada: 'Lo que protege la operación y a la gente que trabaja con usted.',
    ramos: [
      {
        nombre: 'Industria y Comercio',
        // Su propia idea, textual de /seguros-industria-y-comercio.html:
        // "Ud. ya tiene muchos riesgos, muchos de los cuales son inevitables,
        // pero otros pueden ser transferidos a una Compañía de Seguros."
        descripcion: 'Muchos riesgos de su empresa son inevitables. Otros puede transferirlos.',
        slug: 'industria-y-comercio',
        href: '/seguros/industria-y-comercio',
      },
      {
        nombre: 'Accidentes de Trabajo',
        descripcion: 'Obligatorio por la Ley 16.074. Se contrata en el Banco de Seguros.',
        slug: 'accidentes-de-trabajo',
        href: '/seguros/accidentes-de-trabajo',
      },
      {
        nombre: 'Transporte',
        descripcion: 'Importación y exportación de mercadería, en todos los medios de transporte.',
        slug: 'transporte',
      },
    ],
  },
  {
    titulo: 'Para el campo',
    bajada: 'Cobertura para la producción agropecuaria y forestal.',
    ramos: [
      {
        nombre: 'Cultivo',
        descripcion: 'Granizo e incendio, más póliza rural y seguro forestal.',
        slug: 'cultivo',
      },
    ],
  },
];

/** Lista plana, para el menú desplegable y el selector del formulario. */
export const ramos: Ramo[] = gruposRamos.flatMap((g) => g.ramos);

/**
 * Link al formulario de contacto con el ramo ya seleccionado.
 * Lo usan los nueve ramos que no tienen ficha propia en esta demo: en vez de
 * caer en una página inexistente, llevan directo a la consulta ya encaminada.
 */
export const hrefConsulta = (slug: string) => `/?ramo=${slug}#contacto`;

/**
 * Teléfonos de asistencia por compañía.
 *
 * Los nueve están tomados uno a uno de /siniestro.html del sitio actual, que
 * es la única página donde Charrutti los publica completos. La página de
 * Automóviles del sitio actual lista solo seis: le faltan BSE, MetLife y
 * Berkley, justamente tres de las más grandes.
 *
 * NO SE INVENTA NINGÚN NÚMERO. Si mañana falta uno, va con `tel: null` y la
 * tabla lo muestra como pendiente en vez de saltear la fila: una compañía sin
 * teléfono visible es información útil para el cliente, un número plausible y
 * equivocado es un problema.
 *
 * SOBRE LAS ETIQUETAS: el sitio actual publica BSE y AIG con dos líneas
 * rotuladas cada una. Las otras siete van con un solo número sin rótulo. Se
 * las etiqueta "Asistencia y siniestros" porque es lo que se puede afirmar por
 * el contexto —están publicadas bajo el título "¿Qué HACER en caso de
 * SINIESTRO?"—, no porque lo diga el original.
 *
 * SOBRE LOS HORARIOS: el sitio actual no publica la franja de ninguna. Cuatro
 * de estos números son 0800 y dos son fijos de Montevideo, que difícilmente
 * atiendan las 24 horas. No se afirma "24 h" en ningún lado: la tabla lleva un
 * pendiente al pie en vez de nueve marcadores repetidos.
 */
export type LineaAsistencia = {
  label: string;
  /** null = la compañía está, el número todavía no lo tenemos. */
  tel: string | null;
};

export type Asistencia = {
  compania: string;
  lineas: LineaAsistencia[];
};

export const asistencia: Asistencia[] = [
  {
    compania: "BSE",
    lineas: [
      { label: "Vehículos", tel: "1994" },
      { label: "Otros ramos", tel: "1998" },
    ],
  },
  { compania: "Mapfre", lineas: [{ label: "Asistencia y siniestros", tel: "0800 7424" }] },
  { compania: "SURA", lineas: [{ label: "Asistencia y siniestros", tel: "0800 8120" }] },
  { compania: "Porto Seguro", lineas: [{ label: "Asistencia y siniestros", tel: "2487 8616" }] },
  { compania: "Sancor", lineas: [{ label: "Asistencia y siniestros", tel: "0800 8500" }] },
  {
    compania: "AIG",
    lineas: [
      { label: "Atención de siniestros", tel: "2902 1521" },
      { label: "Auxilio mecánico", tel: "2902 5792" },
    ],
  },
  { compania: "MetLife", lineas: [{ label: "Asistencia y siniestros", tel: "0800 2700" }] },
  { compania: "Berkley", lineas: [{ label: "Asistencia y siniestros", tel: "0800 8542" }] },
  { compania: "HDI", lineas: [{ label: "Asistencia y siniestros", tel: "0800 2777" }] },
];

/** Lo que falta de la tabla de arriba, dicho una vez y no nueve. */
export const pendienteAsistencia =
  "Pendiente: franja horaria de cada línea. El sitio actual no publica ninguna, así que no se afirma que atiendan 24 horas.";

/**
 * Los pasos que hoy están en /siniestro.html, condensados.
 * Se eligieron 4 de los 9: los dos primeros movimientos y los dos errores
 * que más caro salen.
 */
/**
 * Lo esencial de los primeros minutos.
 *
 * Son condensaciones de los pasos 1, 4, 7 y 9 de la lista completa: los que
 * sirven mientras la persona sigue en el lugar del choque. Van SIN numerar a
 * propósito. Numerarlos 1-2-3-4 inventaba una secuencia que no existe y
 * contradecía a la lista real, que tiene nueve.
 */
export const pasosSiniestro = [
  "Si hay heridos, auxilie a los accidentados y llame a las autoridades.",
  "Anote los datos del tercero: matrícula, nombre, teléfono, póliza y aseguradora. Busque testigos.",
  "No discuta ni admita ser responsable. Derive el reclamo a la compañía.",
  "No repare el vehículo sin la autorización previa de la compañía.",
];

/**
 * Los nueve pasos completos, en el orden y con el contenido de
 * /siniestro.html. Se corrigen erratas y se pasa todo a un castellano más
 * llano, pero no se agrega ni se saca ningún paso.
 *
 * Hoy en el sitio del cliente esta lista vive en una página a la que no se
 * llega desde ningún menú.
 */
export const pasosSiniestroCompletos = [
  "Si hay heridos, auxilie a los accidentados y llame a las autoridades competentes.",
  "Realice la denuncia a la compañía de seguros.",
  "Si su vehículo obstaculiza la calzada y no puede retirarlo, adopte las medidas de señalización adecuadas.",
  "Anote los datos del tercero con quien chocó: lugar, matrícula, nombre, dirección, teléfono, número de póliza y aseguradora. Consiga también datos de testigos.",
  "Antes de los 5 días, haga la denuncia personalmente en la compañía o contáctese con nuestras oficinas al 2623 1668 o 2623 1714.",
  // El original dice "(las 24hs. los 365 días)" refiriéndose a la línea de la
  // compañía. No se le agrega la denuncia policial: no está en el texto de
  // Charrutti y es un trámite que conviene que confirmen ellos.
  "En caso de hurto, llame de inmediato a la compañía de seguros, las 24 horas los 365 días.",
  "No discuta. Ante cualquier reclamo, facilite sus datos al tercero y derívelo a la compañía. No admita ser responsable, por más que así lo sienta en ese momento.",
  "Si recibe una notificación judicial, preséntela de inmediato en la compañía. No intente aclarar ni negociar una solución por su cuenta: déjelo en nuestras manos.",
  "No repare su vehículo sin la autorización previa de la compañía.",
];

/**
 * Bloque "por qué un corredor", escrito como preguntas y respuestas para que
 * un motor de respuestas pueda citarlas enteras. Alimenta el FAQPage JSON-LD.
 */
/* Las cuatro respuestas están escritas dentro de una banda estrecha de largo
   (131-152 caracteres). Antes iban 194 / 84 / 67 / 159 y en la grilla 2x2 eso
   dejaba un hueco grande: una respuesta ocupaba cinco líneas y la de al lado
   dos. Igualar el largo del texto es lo que empareja la grilla; forzar la
   altura de las celdas solo habría escondido el problema. */
export const preguntas = [
  {
    q: "¿Qué hace un corredor de seguros?",
    // Decía "en todas las compañías establecidas en el Uruguay". Ver `respaldo`
    // arriba: son diecisiete las autorizadas por el BCU y nueve las que
    // trabajamos. La afirmación exacta vende igual.
    a: "Cotizamos su seguro en las nueve compañías con las que trabajamos y le mostramos las opciones comparadas, con una recomendación. Una aseguradora solo puede ofrecerle lo suyo.",
  },
  {
    q: "¿Cuánto cuesta contratar a través de un corredor?",
    a: "Nada para usted. Nuestro trabajo lo remunera la compañía aseguradora, no el cliente. El asesoramiento y el seguimiento del siniestro van incluidos.",
  },
  {
    q: "¿Me van a vender más cobertura de la que necesito?",
    // Cierre textual de /nosotros.html: "ofrecerle el seguro justo, sin
    // sobredimensionar sus necesidades. Para que usted invierta en seguros
    // solo lo óptimo y necesario."
    a: "No. Nuestro objetivo es ofrecerle el seguro justo, sin sobredimensionar sus necesidades, para que invierta en seguros solo lo óptimo y necesario.",
  },
  {
    q: "¿Quién me ayuda si tengo un siniestro?",
    a: "Nosotros. Haga la denuncia llamando a nuestras oficinas al 2623 1668 o al 2623 1714, y seguimos el trámite con la compañía hasta que se resuelva.",
  },
];

/* whatsappHref, telHref y mapsHref se re-exportan arriba desde
   src/config/contacto.ts, junto al dato del que dependen. */
