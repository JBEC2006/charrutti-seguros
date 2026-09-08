import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { SiniestroStrip } from "@/components/SiniestroStrip";
import { Footer } from "@/components/Footer";
import { ContactoFab } from "@/components/ContactoFab";
import { Pendiente } from "@/components/Pendiente";
import { linksInteres } from "@/lib/links";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Links de interés",
  description:
    "Imprima su carta verde, el certificado de SOA o los cupones de pago directo en el sitio de su compañía. Accesos de BSE, SURA, Porto Seguro, Mapfre y Sancor.",
  alternates: { canonical: "/links" },
};

/* Migrado de /links.html. Ver lib/links.ts para el detalle de qué se cambió.

   Todo abre en pestaña nueva: son sitios de terceros y varios son portales de
   sesión. Sacar a alguien de acá para volver con el botón atrás y perder el
   formulario a medio llenar sería peor. */
export default function LinksDeInteres() {
  return (
    <>
      <Header />
      <SiniestroStrip />
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
              <li className="text-carbon">Links de interés</li>
            </ol>
          </nav>

          <h1 className="mt-6 max-w-[16ch] text-[2.125rem] leading-[1.05] sm:text-[2.75rem] lg:text-[3.125rem]">
            Trámites que puede hacer solo
          </h1>
          <p className="mt-5 max-w-[54ch] text-lg leading-[1.55]">
            Imprimir la carta verde, sacar el certificado de SOA, bajar un cupón
            de pago. Son gestiones que se resuelven en el sitio de su compañía en
            dos minutos y sin llamar a nadie. Si algo no sale, nos llama al{" "}
            <a
              href={"tel:" + site.telefonos.central.tel}
              className="font-display tabular-nums underline decoration-naranja decoration-2 underline-offset-4 hover:decoration-carbon"
            >
              {site.telefonos.central.display}
            </a>{" "}
            y lo hacemos nosotros.
          </p>

          <div className="mt-14 grid gap-x-14 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {linksInteres.map((bloque) => (
              <section key={bloque.compania} aria-labelledby={`c-${bloque.compania}`}>
                <h2
                  id={`c-${bloque.compania}`}
                  className="border-b-2 border-carbon pb-2.5 font-display text-xl"
                >
                  {bloque.compania}
                </h2>

                {bloque.pendiente ? (
                  <Pendiente className="mt-5">{bloque.pendiente}</Pendiente>
                ) : (
                  <ul className="mt-5 space-y-3.5">
                    {bloque.links.map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display text-[0.9375rem] font-medium leading-snug underline decoration-naranja decoration-2 underline-offset-4 hover:decoration-carbon"
                        >
                          {l.label}
                          <span className="sr-only"> (se abre en una pestaña nueva)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <Pendiente className="mt-14 max-w-[64ch]">
            Pendiente: probar los enlaces uno por uno antes de publicar. Varios
            de los que publica el sitio actual van por HTTP y algunos portales
            cambiaron de dirección desde entonces.
          </Pendiente>
        </div>
      </main>
      <Footer />
      <ContactoFab />
    </>
  );
}
