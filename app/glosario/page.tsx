import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { SiniestroStrip } from "@/components/SiniestroStrip";
import { Footer } from "@/components/Footer";
import { ContactoFab } from "@/components/ContactoFab";
import { GlosarioLista } from "@/components/GlosarioLista";
import { glosario } from "@/lib/glosario";

export const metadata: Metadata = {
  title: "Glosario de seguros",
  description:
    "Qué significan franquicia, prima, infraseguro, subrogación y el resto de los términos que aparecen en una póliza, explicados. Glosario de seguros de Charrutti Seguros, Montevideo.",
  alternates: { canonical: "/glosario" },
};

/* El glosario del sitio actual, migrado entero y por fin encontrable.
   Ver lib/glosario.ts para qué se corrigió y qué quedó marcado para revisar.

   DefinedTermSet en JSON-LD: las 107 definiciones, que un motor de respuestas puede
   citar. Es, por lejos, el contenido con más superficie de búsqueda de todo el
   sitio —cada término es una consulta que alguien hace— y hoy no lo indexa
   nadie porque la página no está enlazada desde ningún menú. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Glosario de seguros",
  inDefinedTermSet: "https://charrutti-seguros.vercel.app/glosario",
  hasDefinedTerm: glosario.map((t) => ({
    "@type": "DefinedTerm",
    name: t.termino,
    description: t.definicion,
  })),
};

export default function Glosario() {
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
              <li className="text-carbon">Glosario</li>
            </ol>
          </nav>

          <h1 className="mt-6 max-w-[18ch] text-[2.125rem] leading-[1.05] sm:text-[2.75rem] lg:text-[3.125rem]">
            Glosario de seguros
          </h1>
          <p className="mt-5 max-w-[54ch] text-lg leading-[1.55]">
            Una póliza está escrita en un idioma que no es el de nadie. Estos
            son los {glosario.length} términos que aparecen en los contratos,
            explicados. Si el suyo no está, pregúntenos.
          </p>

          <GlosarioLista />
        </div>
      </main>
      <Footer />
      <ContactoFab />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
