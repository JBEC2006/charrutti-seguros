import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { SiniestroStrip } from "@/components/SiniestroStrip";
import { Footer } from "@/components/Footer";
import { ContactoFab } from "@/components/ContactoFab";
import { site, asistencia } from "@/lib/site";

export const metadata: Metadata = {
  title: "Seguro de automóviles",
  description:
    "Seguro de automóviles en Montevideo. Cotizamos su póliza en las nueve compañías del mercado uruguayo y le decimos cuál le conviene. Teléfonos de asistencia de cada aseguradora.",
  alternates: { canonical: "/seguros/automoviles" },
};

/* La única ficha de ramo construida. Sirve para mostrar el patrón de página
   interna: encabezado chico en vez del carrusel que hoy se repite en todas
   las páginas del sitio actual.

   El texto sale de /seguros-automoviles.html, reescrito sin tecnicismos. */

const queCubre = [
  {
    titulo: "Daños a terceros",
    texto:
      "Si en un choque le causa daños a otra persona, a su vehículo o a sus cosas, la compañía responde por usted. Es la cobertura de base y la que más caro sale no tener.",
  },
  {
    titulo: "Su propio vehículo",
    texto:
      "Choque, vuelco, incendio y robo total o parcial. Puede sumar granizo, rotura de cristales y daños por inundación según lo que necesite.",
  },
  {
    titulo: "Asistencia en la ruta",
    texto:
      "Auxilio mecánico, remolque, cambio de rueda y batería. Casi todas las compañías lo incluyen, pero con topes distintos de kilómetros y de llamadas por año.",
  },
  {
    titulo: "Auto sustituto",
    texto:
      "Un vehículo de reemplazo mientras reparan el suyo. No viene en todas las pólizas y es lo que más se extraña si usa el auto para trabajar.",
  },
];

/* Este bloque es el que muestra el criterio: es lo que un corredor le dice a
   un cliente antes de que firme, y lo que una aseguradora no le va a decir. */
const queMirar = [
  {
    pregunta: "¿Con qué valor queda asegurado el vehículo?",
    texto:
      "Es lo que le pagan si el auto se pierde por completo. Un valor bajo abarata la póliza y aparece justo el día que más lo necesita.",
  },
  {
    pregunta: "¿Cuánto tiene que poner usted en cada siniestro?",
    texto:
      "Casi todas las pólizas dejan una parte del arreglo a cargo del asegurado. Conviene saber el monto antes y no cuando llega el presupuesto del taller.",
  },
  {
    pregunta: "¿Dónde se lo reparan?",
    texto:
      "Algunas compañías trabajan solo con talleres propios y otras le dejan elegir. Cambia mucho el tiempo de espera y también la calidad del arreglo.",
  },
  {
    pregunta: "¿Cubre fuera del Uruguay?",
    texto:
      "Si cruza a Argentina o Brasil necesita la tarjeta verde del Mercosur. No todas las pólizas la incluyen sin costo extra.",
  },
];

export default function Automoviles() {
  return (
    <>
      <Header />
      <SiniestroStrip />
      <main id="contenido">
        {/* Encabezado chico. El sitio actual pone acá el mismo carrusel de
            cuatro slides de venta que usa en todas las páginas. */}
        <section className="border-b border-linea">
          <div className="mx-auto max-w-[1180px] px-5 pb-12 pt-8 lg:px-8 lg:pb-16 lg:pt-10">
            <nav aria-label="Ruta de navegación" className="text-[0.9375rem]">
              <ol className="flex flex-wrap items-center gap-2 text-carbon/70">
                <li>
                  <Link href="/" className="underline-offset-4 hover:underline">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>Seguros</li>
                <li aria-hidden="true">/</li>
                <li className="text-carbon">Automóviles</li>
              </ol>
            </nav>

            <h1 className="mt-6 max-w-[18ch] text-[2.125rem] leading-[1.05] sm:text-[2.75rem] lg:text-[3.125rem]">
              Seguro de automóviles
            </h1>
            <p className="mt-5 max-w-[52ch] text-lg leading-[1.55]">
              Comprar un auto abarca mucho más que la marca y el color: incluye
              elegir una buena póliza. Cotizamos la suya en las nueve compañías
              y le decimos con cuál le conviene quedarse.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/#contacto"
                className="sobre-carbon whitespace-nowrap bg-carbon px-7 py-4 text-center font-display text-lg text-white transition-colors hover:bg-naranja-hondo"
              >
                Pedir cotización
              </a>
              <a
                href={"tel:" + site.telefonos.central.tel}
                className="whitespace-nowrap border-2 border-carbon px-7 py-4 text-center font-display text-lg transition-colors hover:bg-carbon hover:text-white"
              >
                Llamar al {site.telefonos.central.display}
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="cubre-titulo" className="border-b border-linea">
          <div className="mx-auto max-w-[1180px] px-5 py-16 lg:px-8 lg:py-20">
            <h2 id="cubre-titulo" className="text-[1.875rem] sm:text-[2.375rem]">
              Qué cubre
            </h2>
            <p className="mt-4 max-w-[52ch] text-lg">
              Una póliza de auto se arma por partes. Estas son las que conviene
              tener claras antes de comparar precios.
            </p>

            <dl className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
              {queCubre.map((c) => (
                <div key={c.titulo}>
                  <dt className="font-display text-xl leading-[1.15]">{c.titulo}</dt>
                  <dd className="mt-3 max-w-[46ch] leading-relaxed">{c.texto}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          aria-labelledby="mirar-titulo"
          className="border-b border-linea bg-white"
        >
          <div className="mx-auto max-w-[1180px] px-5 py-16 lg:px-8 lg:py-20">
            <h2 id="mirar-titulo" className="max-w-[24ch] text-[1.875rem] sm:text-[2.375rem]">
              Qué mirar antes de contratar
            </h2>
            <p className="mt-4 max-w-[54ch] text-lg">
              Dos pólizas con el mismo precio pueden cubrirlo de forma muy
              distinta. Estas son las cuatro preguntas que le hacemos a cada
              compañía cuando cotizamos para usted.
            </p>

            <dl className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
              {queMirar.map((q) => (
                <div key={q.pregunta}>
                  <dt className="max-w-[28ch] font-display text-xl leading-[1.15]">
                    {q.pregunta}
                  </dt>
                  <dd className="mt-3 max-w-[46ch] leading-relaxed">{q.texto}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* La tabla completa de nueve compañías. La página actual de
            Automóviles lista solo seis: le faltan BSE, MetLife y Berkley,
            que sí están en /siniestro.html. */}
        <section aria-labelledby="asistencia-titulo">
          <div className="mx-auto max-w-[1180px] px-5 py-16 lg:px-8 lg:py-20">
            <h2 id="asistencia-titulo" className="text-[1.875rem] sm:text-[2.375rem]">
              Teléfonos de asistencia
            </h2>
            <p className="mt-4 max-w-[54ch] text-lg">
              Si ya tuvo el siniestro, llame primero a su compañía. Después
              avísenos al {site.telefonos.siniestros[0].display} y seguimos el
              trámite nosotros.
            </p>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[30rem] border-collapse text-left">
                <caption className="sr-only">
                  Teléfonos de asistencia y siniestros de las nueve compañías
                  con las que opera Charrutti Seguros
                </caption>
                <thead>
                  <tr className="border-b-2 border-carbon">
                    <th scope="col" className="pb-3 font-display text-[0.9375rem] font-medium text-carbon/70">
                      Compañía
                    </th>
                    <th scope="col" className="pb-3 font-display text-[0.9375rem] font-medium text-carbon/70">
                      Línea
                    </th>
                    <th scope="col" className="pb-3 text-right font-display text-[0.9375rem] font-medium text-carbon/70">
                      Teléfono
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {asistencia.flatMap((a) =>
                    a.lineas.map((l, i) => (
                      <tr key={a.compania + l.tel} className="border-b border-linea">
                        <th
                          scope="row"
                          className="py-3.5 pr-4 font-display text-base font-medium"
                        >
                          {i === 0 ? a.compania : ""}
                        </th>
                        <td className="py-3.5 pr-4 text-[0.9375rem] text-carbon/80">
                          {l.label}
                        </td>
                        <td className="py-3.5 text-right">
                          <a
                            href={"tel:" + l.tel.replace(/\s/g, "")}
                            className="font-display text-lg tabular-nums underline decoration-naranja decoration-2 underline-offset-4 hover:decoration-carbon"
                          >
                            {l.tel}
                          </a>
                        </td>
                      </tr>
                    )),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ContactoFab />
    </>
  );
}
