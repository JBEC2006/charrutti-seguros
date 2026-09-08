import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Estado del proyecto",
  description:
    "Qué está construido en esta demo, qué falta, y qué necesitamos de Charrutti para completarlo.",
  robots: { index: false, follow: false },
};

/**
 * La página que hace que lo incompleto sea método.
 *
 * Esta demo tiene huecos a propósito, y en una reunión los huecos se leen de
 * dos maneras posibles: como decisiones pendientes del cliente, o como cosas
 * que no supimos hacer. La diferencia entre una lectura y la otra no está en
 * el trabajo: está en si existe este inventario.
 *
 * Tres columnas y no dos: "hecho / falta" deja implícito de quién es la pelota.
 * La tercera columna la nombra. Cada línea de "necesitamos de Charrutti" es una
 * pregunta concreta que se puede responder en la reunión, no un pedido vago de
 * "material".
 *
 * No está en el nav principal a propósito: es una página para nosotros y para
 * Charrutti, no para alguien que entra a cotizar un seguro. Se llega desde el
 * pie.
 */

type Item = { que: string; detalle?: string };

const hecho: Item[] = [
  {
    que: "Home completa",
    detalle:
      "Hero con la hoja comparativa, franja de compañías, bloque de siniestro, los diez ramos agrupados por audiencia, por qué un corredor, trayectoria y contacto con mapa.",
  },
  {
    que: "Cuatro fichas de ramo",
    detalle:
      "Automóviles, Hogar, Industria y Comercio, y Accidentes de Trabajo, con el contenido real del sitio actual reescrito.",
  },
  {
    que: "Página de siniestro",
    detalle:
      "Los nueve pasos completos y los teléfonos de asistencia de las nueve compañías. Hoy esa página existe en el sitio y no está en ningún menú.",
  },
  {
    que: "Glosario de 107 términos",
    detalle: "Migrado entero, con buscador que compara sin tildes e índice A-Z.",
  },
  {
    que: "Links de interés",
    detalle:
      "Las gestiones en línea de cinco compañías, con los rótulos reescritos para que digan para qué sirven.",
  },
  {
    que: "Página 404 propia",
    detalle: "En el registro del sitio, con las tres salidas que alguien puede necesitar.",
  },
  {
    que: "Datos estructurados",
    detalle:
      "InsuranceAgency, FAQPage, HowTo de los nueve pasos y DefinedTermSet del glosario. El sitio actual no tiene ninguno, ni un solo H1, ni meta-description.",
  },
  {
    que: "Tarjeta de previsualización",
    detalle:
      "Imagen de 1200×630 y summary_large_image, porque el link se comparte por WhatsApp y eso es lo primero que se ve.",
  },
  {
    que: "Accesibilidad",
    detalle:
      "Foco visible en toda la navegación por teclado, salto al contenido, prefers-reduced-motion respetado y contraste medido para cada combinación de la paleta.",
  },
  {
    que: "Bloqueo a buscadores",
    detalle:
      "La demo no se indexa: es la marca de un cliente que todavía no cerró y no debe competir con su sitio actual.",
  },
];

const pendiente: Item[] = [
  {
    que: "Las otras seis fichas de ramo",
    detalle:
      "Vida, Seguro Obligatorio, Notebooks, Embarcaciones, Transporte y Cultivo. Hoy abren el formulario con el ramo ya elegido, que es un destino válido pero no es una ficha.",
  },
  {
    que: "El formulario no envía nada",
    detalle:
      "Muestra el patrón y el estado de éxito. No hay endpoint, ni servicio de mail, ni almacenamiento.",
  },
  {
    que: "Página Nosotros propia",
    detalle:
      "Hoy la trayectoria y la política de calidad viven condensadas en la home. Con el material del cliente da para página aparte.",
  },
  {
    que: "Logos de las nueve compañías",
    detalle:
      "Son marcas de texto. Los PNG del sitio actual no se hotlinkean: van los archivos reales, en monocromo, para que la franja lea como conjunto.",
  },
  {
    que: "Logo de Charrutti",
    detalle:
      "Se referencia desde el servidor del sitio actual. Para producción hay que bajarlo a /public y servirlo local.",
  },
  {
    que: "Revisión legal del glosario",
    detalle:
      "Varias definiciones citan la ley 17.418, que es argentina, y el regulador equivocado. Están marcadas una por una en la página.",
  },
  {
    que: "Probar los links de interés",
    detalle:
      "Varios van por HTTP y algunos portales cambiaron de dirección desde que se publicaron.",
  },
  {
    que: "Área de clientes",
    detalle:
      "Apunta al portal de Broker Solutions. Nadie confirmó que esté implementado ni a qué versión.",
  },
];

const necesitamos: Item[] = [
  {
    que: "Número de WhatsApp comercial",
    detalle:
      "Es el hueco más visible del sitio: el botón está, deshabilitado y declarado. Con el número se activa solo.",
  },
  {
    que: "Horario de atención",
    detalle:
      "Con la franja horaria, no solo los días. Hoy no figura en ningún lado del sitio actual.",
  },
  {
    que: "Confirmar los dos teléfonos de guardia",
    detalle:
      "2623 1668 y 2623 1714. No están publicados en el sitio actual y esta demo los empuja como la acción urgente de la home.",
  },
  {
    que: "Horarios de las líneas de asistencia",
    detalle:
      "De cada una de las nueve compañías. Cuatro son 0800 y dos son fijos de Montevideo: no se puede afirmar que atiendan 24 horas.",
  },
  {
    que: "Archivos de logo",
    detalle: "Los de las nueve compañías y el de Charrutti en alta resolución o vectorial.",
  },
  {
    que: "¿Recertificaron la ISO 9001?",
    detalle:
      "El sitio dice UNIT-ISO 9001:2008, que es una versión obsoleta de la norma. Acá va sin número hasta saber.",
  },
  {
    que: "Año de fundación",
    detalle:
      "Se usa 'más de 25 años en plaza' porque es lo único verificado. Con el año exacto mejora el dato estructurado.",
  },
  {
    que: "¿La cuenta de X sigue activa?",
    detalle: "El sitio actual todavía muestra el pajarito de Twitter.",
  },
  {
    que: "Montos en UR de accidentes de trabajo",
    detalle:
      "Las multas del artículo 48 y los códigos de condición especial, contra las condiciones vigentes del BSE.",
  },
  {
    que: "Autogestión de AIG, MetLife, Berkley y HDI",
    detalle: "Las otras cinco compañías tienen links publicados; estas cuatro no.",
  },
  {
    que: "¿A dónde llegan las consultas?",
    detalle:
      "Una casilla, un CRM, un WhatsApp Business. Define cómo se conecta el formulario y quién responde.",
  },
  {
    que: "Dominio definitivo",
    detalle:
      "Si va sobre charruttiseguros.com.uy hay que planificar el reemplazo y las redirecciones de las páginas .html actuales.",
  },
];

function Columna({
  titulo,
  bajada,
  items,
  marca,
}: {
  titulo: string;
  bajada: string;
  items: Item[];
  /** Color del filete superior. Es lo único que distingue las tres columnas. */
  marca: string;
}) {
  return (
    <section aria-labelledby={`col-${titulo}`} className="min-w-0">
      <div className={"border-t-4 pb-4 " + marca}>
        <h2 id={`col-${titulo}`} className="mt-4 font-display text-xl">
          {titulo}
        </h2>
        <p className="mt-1.5 text-[0.9375rem] text-carbon/70">{bajada}</p>
        <p className="mt-3 font-display text-[0.9375rem] font-medium tabular-nums text-carbon/55">
          {items.length} ítems
        </p>
      </div>

      <ul className="space-y-5">
        {items.map((i) => (
          <li key={i.que} className="border-t border-linea pt-4">
            <h3 className="font-display text-base leading-snug">{i.que}</h3>
            {i.detalle && (
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-carbon/80">
                {i.detalle}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Estado() {
  return (
    <>
      <Header />
      <main id="contenido">
        <div className="mx-auto max-w-[1180px] px-5 py-12 lg:px-8 lg:py-16">
          <nav aria-label="Ruta de navegación" className="text-[0.9375rem]">
            <ol className="flex flex-wrap items-center gap-2 text-carbon/70">
              <li>
                <Link href="/" className="underline-offset-4 hover:underline">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-carbon">Estado del proyecto</li>
            </ol>
          </nav>

          <h1 className="mt-6 max-w-[20ch] text-[2.125rem] leading-[1.05] sm:text-[2.75rem] lg:text-[3.125rem]">
            Qué está hecho y qué falta
          </h1>
          <p className="mt-5 max-w-[58ch] text-lg leading-[1.55]">
            Esta es una demo, no el sitio terminado, y los huecos que tiene son
            deliberados. Donde falta un dato el sitio lo dice con todas las
            letras en vez de inventarlo: por eso hay un botón de WhatsApp
            deshabilitado y un horario sin confirmar, y no un número que falla
            apenas alguien lo toca.
          </p>
          <p className="mt-4 max-w-[58ch] text-lg leading-[1.55]">
            Esta página es el inventario completo. La tercera columna es la
            importante: son preguntas concretas que se pueden responder en una
            reunión.
          </p>

          <div className="mt-14 grid gap-x-12 gap-y-14 lg:grid-cols-3">
            <Columna
              titulo="Construido"
              bajada="Está en el sitio y funciona."
              items={hecho}
              marca="border-carbon"
            />
            <Columna
              titulo="Pendiente"
              bajada="Trabajo nuestro que falta hacer."
              items={pendiente}
              marca="border-carbon/25"
            />
            <Columna
              titulo="Necesitamos de Charrutti"
              bajada="Datos y definiciones que solo ustedes tienen."
              items={necesitamos}
              marca="border-naranja"
            />
          </div>

          <div className="mt-16 border-t border-linea pt-8">
            <p className="max-w-[58ch] leading-relaxed">
              Cualquier dato de la tercera columna se carga en un solo archivo y
              el sitio se corrige solo, sin tocar el diseño. Si tiene alguno a
              mano, escríbanos a{" "}
              <a
                href={"mailto:" + site.email}
                className="break-words font-display font-medium underline decoration-naranja decoration-2 underline-offset-4 hover:decoration-carbon"
              >
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
