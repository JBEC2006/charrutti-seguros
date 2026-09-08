/**
 * Links de interés: las gestiones que el cliente puede hacer solo, en el sitio
 * de su compañía.
 *
 * Migrado de /links.html del sitio actual. Igual que el glosario, es una página
 * útil que no está en ningún menú.
 *
 * QUÉ SE CAMBIÓ
 * -------------
 * Los rótulos. El original dice "Impresión de Certificados" y "Gestiones", que
 * describen la pantalla de destino y no lo que la persona quiere hacer. Acá
 * dicen para qué sirve el link.
 *
 * Las URLs no se tocaron: son las del sitio del cliente, verbatim.
 *
 * PENDIENTE
 * ---------
 * Cinco de las nueve compañías tienen links; cuatro no aparecen en el sitio
 * actual (AIG, MetLife, Berkley y HDI). No se inventan: se listan igual, con
 * el hueco declarado. Que falten cuatro es en sí una pregunta para Charrutti.
 *
 * Además, varios links van por HTTP y no por HTTPS, tal como están publicados
 * hoy. No se los "arregla" cambiándoles el esquema a mano: si el destino no
 * soporta HTTPS, el link deja de funcionar. Hay que probarlos uno por uno
 * antes de publicar.
 */

export type LinkCompania = {
  label: string;
  href: string;
};

export type BloqueLinks = {
  compania: string;
  links: LinkCompania[];
  /** Si está, la compañía se muestra con el hueco declarado en vez de links. */
  pendiente?: string;
};

export const linksInteres: BloqueLinks[] = [
  {
    compania: "BSE",
    links: [
      {
        label: "Imprimir la carta verde y el certificado de SOA",
        href: "http://www.bse.com.uy/inicio/servicios/vehiculos/Carta-Verde-Certificados-SOA/",
      },
      {
        label: "Imprimir facturas",
        href: "http://www.bse.com.uy/inicio/servicios/pagos/impresion-de-facturas",
      },
      {
        label: "Certificado de cumplimiento de la Ley 16.074",
        href: "http://www.bse.com.uy/inicio/comercial/certificado-cumplimiento-ley-16074",
      },
      {
        label: "Denuncia patronal de accidente de trabajo",
        href: "http://www.bse.com.uy/inicio/servicios/accidentes-del-trabajo/denuncia-patronal/",
      },
    ],
  },
  {
    compania: "SURA",
    links: [
      {
        label: "Tarjeta verde y SOA",
        href: "http://www.segurossura.com.uy/soa-tarjeta-verde/",
      },
      {
        label: "Cupones de pago",
        href: "http://www.segurossura.com.uy/corredores/cupon-de-pago/",
      },
      { label: "Pagar en línea", href: "http://www.segurossura.com.uy/pagos-en-linea/" },
    ],
  },
  {
    compania: "Porto Seguro",
    links: [
      {
        label: "Certificado de SOA",
        href: "https://secure.portoseguro.com.uy/portalx/hgxpp001.aspx?2,26,316,O,S,0,MNU;E;1;6;MNU;",
      },
      {
        label: "Cupones de pago",
        href: "https://secure.portoseguro.com.uy/portalx/hgxpp001.aspx?2,26,316,O,S,0,MNU;E;1;6;MNU",
      },
    ],
  },
  {
    compania: "Mapfre",
    links: [
      {
        label: "Tarjetas verdes, cupones y certificados de SOA",
        href: "http://www.mapfreonline.com/Login/frmLoginAgil.aspx",
      },
      {
        label: "Pagar en línea",
        href: "https://spf.sistarbanc.com.uy/spfdebitos/PagoMAPFRE.jsp",
      },
    ],
  },
  {
    compania: "Sancor",
    links: [
      {
        label: "Gestiones de su póliza",
        href: "https://www.missegurosonline.com.uy/Login.aspx",
      },
    ],
  },

  /* Las cuatro que faltan. Van listadas y no omitidas: si alguien tiene póliza
     con AIG y no la ve acá, el hueco le dice algo. Omitirla no. */
  {
    compania: "AIG",
    links: [],
    pendiente: "Pendiente: links de autogestión. No figuran en el sitio actual.",
  },
  {
    compania: "MetLife",
    links: [],
    pendiente: "Pendiente: links de autogestión. No figuran en el sitio actual.",
  },
  {
    compania: "Berkley",
    links: [],
    pendiente: "Pendiente: links de autogestión. No figuran en el sitio actual.",
  },
  {
    compania: "HDI",
    links: [],
    pendiente: "Pendiente: links de autogestión. No figuran en el sitio actual.",
  },
];
