/**
 * Datos de Charrutti Seguros.
 *
 * Todo lo que el cliente podría querer cambiar vive acá. Los datos marcados
 * como PENDIENTE son placeholders: están listados también en el README.
 */

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

  // Verificados con el cliente.
  direccion: {
    calle: "26 de Marzo 3454, Oficina 101",
    ciudad: "Montevideo",
    pais: "Uruguay",
    // Coordenadas aproximadas de 26 de Marzo 3454 (Pocitos, Montevideo).
    // Solo se usan para el link a Google Maps y el iframe del mapa.
    mapsQuery: "26 de Marzo 3454, Montevideo, Uruguay",
  },
  email: "operaciones@charruttiseguros.com.uy",

  telefonos: {
    central: { display: "2623 1000", tel: "+59826231000" },
    // Hoy estos dos números viven sepultados en el paso 5 de una lista de 9,
    // en una página que ni siquiera está en el menú.
    siniestros: [
      { display: "2623 1668", tel: "+59826231668" },
      { display: "2623 1714", tel: "+59826231714" },
    ],
  },

  // PENDIENTE: número real de WhatsApp.
  //
  // Mientras no lo tengamos, el sitio NO promete WhatsApp en ningún lado: un
  // wa.me con número inventado falla apenas lo tocan, y en un pitch eso se
  // paga caro. Todo lo que iba a WhatsApp apunta al teléfono real.
  //
  // Cuando el cliente pase el número: poner acá el internacional sin signos
  // (por ejemplo "59899123456") y el sitio vuelve a ofrecer WhatsApp solo.
  whatsapp: {
    numero: null as string | null,
    mensaje: "Hola, quisiera consultar por un seguro.",
  },

  // PENDIENTE: horario real de atención.
  horarios: "Lunes a viernes",

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
 * Solo Automóviles tiene página construida en esta demo. Las otras nueve
 * abren el formulario de contacto con el ramo ya elegido.
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
      },
      {
        nombre: 'Accidentes de Trabajo',
        descripcion: 'Obligatorio por la Ley 16.074. Se contrata en el Banco de Seguros.',
        slug: 'accidentes-de-trabajo',
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
 * Tomados de /siniestro.html del sitio actual, que tiene las nueve. La página
 * de Automóviles hoy lista solo seis (le faltan BSE, MetLife y Berkley).
 */
export const asistencia = [
  { compania: "BSE", lineas: [{ label: "Vehículos", tel: "1994" }, { label: "Otros", tel: "1998" }] },
  { compania: "Mapfre", lineas: [{ label: "Asistencia", tel: "0800 7424" }] },
  { compania: "SURA", lineas: [{ label: "Asistencia", tel: "0800 8120" }] },
  { compania: "Porto Seguro", lineas: [{ label: "Asistencia", tel: "2487 8616" }] },
  { compania: "Sancor", lineas: [{ label: "Asistencia", tel: "0800 8500" }] },
  {
    compania: "AIG",
    lineas: [
      { label: "Siniestros", tel: "2902 1521" },
      { label: "Auxilio mecánico", tel: "2902 5792" },
    ],
  },
  { compania: "MetLife", lineas: [{ label: "Asistencia", tel: "0800 2700" }] },
  { compania: "Berkley", lineas: [{ label: "Asistencia", tel: "0800 8542" }] },
  { compania: "HDI", lineas: [{ label: "Asistencia", tel: "0800 2777" }] },
];

/**
 * Los pasos que hoy están en /siniestro.html, condensados.
 * Se eligieron 4 de los 9: los dos primeros movimientos y los dos errores
 * que más caro salen.
 */
export const pasosSiniestro = [
  "Si hay heridos, auxilie a los accidentados y llame a las autoridades.",
  "Anote los datos del tercero: matrícula, nombre, teléfono, póliza y aseguradora. Busque testigos.",
  "No discuta ni admita ser responsable. Derive el reclamo a la compañía.",
  "No repare el vehículo sin la autorización previa de la compañía.",
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
    a: "Cotizamos su seguro en todas las compañías establecidas en el Uruguay y le mostramos las opciones comparadas, con una recomendación. Una aseguradora solo puede ofrecerle lo suyo.",
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

/**
 * Devuelve el link de WhatsApp solo si hay número real cargado.
 * Si no lo hay, devuelve null y quien lo use tiene que caer al teléfono.
 * Así no existe la posibilidad de publicar un wa.me roto.
 */
export const whatsappHref = site.whatsapp.numero
  ? `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(
      site.whatsapp.mensaje,
    )}`
  : null;

/** El canal de contacto inmediato que sí funciona hoy. */
export const telHref = `tel:${site.telefonos.central.tel}`;

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.direccion.mapsQuery,
)}`;
