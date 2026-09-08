import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

/**
 * 404 en la voz del sitio: corta, sin disculpas de más y con las tres salidas
 * que alguien puede necesitar de verdad — volver, ver los seguros, o llamar
 * si lo que tiene entre manos es un siniestro.
 */
export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="contenido"
        className="mx-auto flex min-h-[62vh] max-w-[1180px] flex-col justify-center px-5 py-20 lg:px-8"
      >
        <p className="font-display text-lg font-medium text-carbon/70">Error 404</p>
        <h1 className="mt-3 max-w-[16ch] text-[2.125rem] leading-[1.05] sm:text-[2.75rem] lg:text-[3.125rem]">
          Esta página no existe.
        </h1>
        <p className="mt-5 max-w-[46ch] text-lg leading-[1.55]">
          Puede que la dirección esté mal escrita o que la página haya cambiado
          de lugar. Desde acá llega a todo lo demás.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/"
            className="sobre-carbon whitespace-nowrap bg-carbon px-7 py-4 text-center font-display text-lg text-white transition-colors hover:bg-naranja-hondo"
          >
            Volver al inicio
          </Link>
          <Link
            href="/#seguros"
            className="whitespace-nowrap border-2 border-carbon px-7 py-4 text-center font-display text-lg transition-colors hover:bg-carbon hover:text-white"
          >
            Ver los seguros
          </Link>
        </div>

        <p className="mt-10 border-t border-linea pt-6 text-[0.9375rem] leading-relaxed">
          Si tuvo un siniestro y necesita resolverlo ahora, llame a la guardia
          al{" "}
          <a
            href={"tel:" + site.telefonos.siniestros[0].tel}
            className="font-display text-lg tabular-nums underline decoration-naranja decoration-2 underline-offset-4 hover:decoration-carbon"
          >
            {site.telefonos.siniestros[0].display}
          </a>
          .
        </p>
      </main>
      <Footer />
    </>
  );
}
