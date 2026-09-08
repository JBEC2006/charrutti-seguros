import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { SiniestroStrip } from "@/components/SiniestroStrip";
import { Footer } from "@/components/Footer";
import { ContactoFab } from "@/components/ContactoFab";
import { Pendiente, PendienteInline } from "@/components/Pendiente";
import {
  site,
  asistencia,
  pasosSiniestroCompletos,
  pendienteAsistencia,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Qué hacer en caso de siniestro",
  description:
    "Los nueve pasos a seguir si tuvo un siniestro, y los teléfonos de asistencia de las nueve compañías con las que trabajamos. Guardia de Charrutti Seguros al 2623 1668.",
  alternates: { canonical: "/siniestro" },
};

/* La página que en el sitio actual existe y nadie encuentra.
   /siniestro.html tiene los nueve pasos y la tabla completa de teléfonos —es
   la página más útil del sitio— y no está en ninguno de los dos menús. Se
   llega solo desde un banner de la home. Encima abre con el mismo carrusel de
   venta que las páginas de producto, que es lo último que quiere ver alguien
   que acaba de chocar.

   Acá es de primer nivel en el nav, abre con los teléfonos y los pasos van
   numerados y completos.

   Los nueve pasos y las nueve compañías salen de lib/site.ts, que es la misma
   fuente que usa la franja de la home: una lista sola, imposible que queden
   desincronizadas. */

/* JSON-LD. Los nueve pasos como HowTo: es contenido que un motor de respuestas
   puede citar entero, y es exactamente el tipo de consulta que alguien hace
   con el teléfono en la mano después de un choque. */
const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Qué hacer en caso de siniestro de automóvil",
  description:
    "Los pasos a seguir tras un accidente de tránsito en Uruguay, según el protocolo de Charrutti Seguros.",
  step: pasosSiniestroCompletos.map((paso, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    text: paso,
  })),
};

export default function Siniestro() {
  return (
    <>
      <Header />
      <SiniestroStrip />
      <main id="contenido">
        {/* La cabecera va sobre carbón, como la franja de la home: es el mismo
            momento del sitio y tiene que reconocerse como tal. */}
        <section className="sobre-carbon bg-carbon text-white">
          <div className="mx-auto max-w-[1180px] px-5 pb-14 pt-8 lg:px-8 lg:pb-18 lg:pt-10">
            <nav aria-label="Ruta de navegación" className="text-[0.9375rem]">
              <ol className="flex flex-wrap items-center gap-2 text-white/60">
                <li>
                  <Link href="/" className="underline-offset-4 hover:text-white hover:underline">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white">En caso de siniestro</li>
              </ol>
            </nav>

            <h1 className="mt-6 max-w-[17ch] text-[2.125rem] leading-[1.05] sm:text-[2.75rem] lg:text-[3.125rem]">
              Tuvo un siniestro
            </h1>
            <p className="mt-5 max-w-[50ch] text-lg leading-[1.55] text-white/85">
              Llame a nuestra guardia. Hacemos la denuncia, la presentamos en la
              compañía y seguimos el trámite hasta que se resuelva. Si prefiere
              llamar primero a su aseguradora, los teléfonos de las nueve están
              más abajo.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {site.telefonos.siniestros.map((t) => (
                <a
                  key={t.tel}
                  href={"tel:" + t.tel}
                  className="sobre-naranja flex min-h-[3.5rem] flex-1 items-center justify-center gap-2.5 bg-naranja px-6 text-carbon transition-colors hover:bg-naranja-hondo hover:text-white sm:min-w-[13rem] sm:flex-none"
                >
                  <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden="true">
                    <path
                      d="M5.2 1.5 6.9 5 5.3 6.8c.9 2 2.4 3.5 4.4 4.4l1.8-1.6 3.5 1.7-.6 3.1c-.1.6-.7 1-1.3.9C7.3 14.4 2.6 9.7 1.7 4c-.1-.6.3-1.2.9-1.3l2.6-1.2Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="font-display text-[1.6rem] tabular-nums">
                    {t.display}
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-3 text-[0.9375rem] text-white/75">
              Guardia de siniestros. Fuera de hora, llame directamente a su
              compañía.
            </p>
          </div>
        </section>

        {/* Los nueve pasos, numerados y completos. */}
        <section aria-labelledby="pasos-titulo" className="border-b border-linea bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 lg:px-8 lg:py-20">
            <h2 id="pasos-titulo" className="max-w-[20ch] text-[1.875rem] sm:text-[2.375rem]">
              Los nueve pasos
            </h2>
            <p className="mt-4 max-w-[54ch] text-lg">
              El orden importa menos que hacerlos todos. Los tres primeros son
              para el momento; los últimos son los errores que más caro salen
              después.
            </p>

            <ol className="mt-12 grid gap-x-16 gap-y-8 md:grid-cols-2">
              {pasosSiniestroCompletos.map((paso, i) => (
                <li key={paso} className="flex gap-5 border-t border-carbon/20 pt-5">
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-display text-[1.75rem] leading-none tabular-nums text-naranja-hondo"
                  >
                    {i + 1}
                  </span>
                  <p className="max-w-[44ch] leading-relaxed">{paso}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* La tabla completa. Es el activo real de esta página. */}
        <section aria-labelledby="asistencia-titulo" className="border-b border-linea">
          <div className="mx-auto max-w-[1180px] px-5 py-16 lg:px-8 lg:py-20">
            <h2 id="asistencia-titulo" className="max-w-[26ch] text-[1.875rem] sm:text-[2.375rem]">
              Teléfonos de las nueve compañías
            </h2>
            <p className="mt-4 max-w-[54ch] text-lg">
              Si su vehículo quedó en la calle, llame primero a la asistencia de
              su compañía. Después avísenos al{" "}
              {site.telefonos.siniestros[0].display} y del resto nos ocupamos
              nosotros.
            </p>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[32rem] border-collapse text-left">
                <caption className="sr-only">
                  Teléfonos de asistencia y siniestros de las nueve compañías
                  con las que trabaja Charrutti Seguros
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
                      <tr
                        key={a.compania + l.label}
                        className="border-b border-linea"
                      >
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
                          {/* Si algún día falta un número, la fila se queda y
                              muestra el hueco. Nunca se saltea la compañía ni
                              se completa con algo plausible. */}
                          {l.tel ? (
                            <a
                              href={"tel:" + l.tel.replace(/\s/g, "")}
                              className="font-display text-lg tabular-nums underline decoration-naranja decoration-2 underline-offset-4 hover:decoration-carbon"
                            >
                              {l.tel}
                            </a>
                          ) : (
                            <PendienteInline>
                              Pendiente: teléfono
                            </PendienteInline>
                          )}
                        </td>
                      </tr>
                    )),
                  )}
                </tbody>
              </table>
            </div>

            <Pendiente className="mt-6 max-w-[62ch]">
              {pendienteAsistencia}
            </Pendiente>
          </div>
        </section>

        <section aria-labelledby="despues-titulo">
          <div className="mx-auto max-w-[1180px] px-5 py-16 lg:px-8 lg:py-20">
            <h2 id="despues-titulo" className="max-w-[24ch] text-[1.875rem] sm:text-[2.375rem]">
              Qué hacemos nosotros
            </h2>
            <p className="mt-4 max-w-[54ch] text-lg">
              Un corredor no desaparece cuando se firma la póliza. Este es el
              momento en que se nota la diferencia.
            </p>

            <dl className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
              <div className="border-t border-carbon/20 pt-6">
                <dt className="font-display text-xl leading-[1.15]">
                  Presentamos la denuncia
                </dt>
                <dd className="mt-3 max-w-[46ch] leading-relaxed">
                  Con los datos que nos pase, dentro del plazo y ante la compañía
                  que corresponda. Le confirmamos el número de siniestro cuando
                  queda ingresado.
                </dd>
              </div>
              <div className="border-t border-carbon/20 pt-6">
                <dt className="font-display text-xl leading-[1.15]">
                  Seguimos el trámite
                </dt>
                <dd className="mt-3 max-w-[46ch] leading-relaxed">
                  Perito, taller, autorización y pago. Usted no tiene que llamar
                  a la compañía a preguntar en qué quedó: lo hacemos nosotros.
                </dd>
              </div>
              <div className="border-t border-carbon/20 pt-6">
                <dt className="font-display text-xl leading-[1.15]">
                  Discutimos si hace falta
                </dt>
                <dd className="mt-3 max-w-[46ch] leading-relaxed">
                  Si el rechazo o el monto no cierran, es nuestra la
                  conversación con la compañía. Es más fácil desde acá que desde
                  la posición de asegurado individual.
                </dd>
              </div>
              <div className="border-t border-carbon/20 pt-6">
                <dt className="font-display text-xl leading-[1.15]">
                  Le decimos qué firmar
                </dt>
                <dd className="mt-3 max-w-[46ch] leading-relaxed">
                  Si recibe una notificación judicial, preséntela en la compañía y
                  avísenos. No intente negociar por su cuenta: eso puede
                  complicarle la cobertura.
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
      <Footer />
      <ContactoFab />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
    </>
  );
}
