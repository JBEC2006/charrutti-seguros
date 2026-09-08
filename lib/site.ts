/**
 * Datos de Charrutti Seguros.
 *
 * Todo lo que el cliente podría querer cambiar vive acá. Los datos marcados
 * como PENDIENTE son placeholders: están listados también en el README.
 */

export const site = {
  nombre: "Charrutti Seguros",
  url: "https://charruttiseguros.com.uy",

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

  // PENDIENTE: número real de WhatsApp. El botón nunca muestra el número,
  // así que el placeholder no queda a la vista del cliente.
  whatsapp: {
    numero: "59899000000",
    mensaje: "Hola, quisiera consultar por un seguro.",
  },

  // PENDIENTE: horario real de atención.
  horarios: "Lunes a viernes, horario a confirmar.",

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
 * Los diez ramos. Las descripciones son condensaciones del texto que ya está
 * en el sitio actual (una por página), con las erratas del original corregidas.
 * Solo Automóviles tiene página construida en esta demo.
 */
export type Ramo = {
  nombre: string;
  descripcion: string;
  href: string;
  destacado?: boolean;
};

export const ramos: Ramo[] = [
  {
    nombre: "Automóviles",
    descripcion:
      "Responsabilidad por los daños que cause a terceros, más las coberturas que elija para su vehículo.",
    href: "/seguros/automoviles",
    destacado: true,
  },
  {
    nombre: "Hogar",
    descripcion:
      "Robo del contenido, incendio de la edificación, daños por agua, cristales y responsabilidad civil.",
    href: "#", // Ficha no construida en la demo.
  },
  {
    nombre: "Industria y Comercio",
    descripcion:
      "En una empresa hay muchos riesgos, desde que un producto se vuelva obsoleto hasta un incendio. Algunos puede transferirlos.",
    href: "#",
  },
  {
    nombre: "Vida",
    descripcion:
      "Cobertura de vida que además acumula ahorros, y accidentes personales y salud.",
    href: "#",
  },
  {
    nombre: "Transporte",
    descripcion:
      "Protege su mercadería de los daños posibles en el traslado, en importación, exportación y plaza.",
    href: "#",
  },
  {
    nombre: "Accidentes de Trabajo",
    descripcion:
      "Obligatorio por la Ley Nº 16.074. Protege a sus empleados ante accidentes laborales y enfermedades profesionales.",
    href: "#",
  },
  {
    nombre: "Cultivo",
    descripcion:
      "Granizo e incendio para su cultivo, más póliza rural y seguro forestal.",
    href: "#",
  },
  {
    nombre: "Seguro Obligatorio",
    descripcion: "El seguro obligatorio que la ley exige para circular.",
    href: "#",
  },
  {
    nombre: "Seguro de Notebooks",
    descripcion:
      "Cobertura para su notebook, con activación desde la factura de compra.",
    href: "#",
  },
  {
    nombre: "Otros",
    descripcion: "Embarcaciones, con cobertura Cinta Azul o Marinera.",
    href: "#",
  },
];

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
export const preguntas = [
  {
    q: "¿Qué hace un corredor de seguros?",
    a: "Cotizamos su seguro en todas las compañías establecidas en el Uruguay y le presentamos las opciones comparadas, con una recomendación. Una aseguradora solo puede ofrecerle sus propios productos.",
  },
  {
    q: "¿Cuánto cuesta contratar a través de un corredor?",
    a: "Nada para usted. Nuestro trabajo lo remunera la compañía aseguradora, no el cliente.",
  },
  {
    q: "¿Me van a vender más cobertura de la que necesito?",
    a: "No. Buscamos el seguro justo, sin sobredimensionar sus necesidades.",
  },
  {
    q: "¿Quién me ayuda si tengo un siniestro?",
    a: "Nosotros. Puede hacer la denuncia contactándose con nuestras oficinas al 2623 1668 o al 2623 1714, y seguimos el trámite con la compañía hasta que se resuelva.",
  },
];

export const whatsappHref = `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(
  site.whatsapp.mensaje,
)}`;

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.direccion.mapsQuery,
)}`;
