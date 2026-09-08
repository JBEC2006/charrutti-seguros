import { ComparativeSheet } from "./ComparativeSheet";
import { site, telHref } from "@/lib/site";

/**
 * Reemplaza el carrusel de 4 slides que hoy se repite idéntico en todas las
 * páginas, incluida la de siniestros.
 *
 * El H1 lleva "corredores de seguros" + "Montevideo" porque es el término por
 * el que hoy no aparecen en Google, y cierra con "el seguro justo", que son
 * palabras propias de Charrutti (están en /nosotros.html).
 */
export function Hero() {
  return (
    <section className="border-b border-linea">
      <div className="mx-auto max-w-[1180px] px-5 pb-16 pt-12 lg:px-8 lg:pb-20 lg:pt-16">
        {/* Una sola afirmación, no dos oraciones. Conserva "corredores de
            seguros" + "Montevideo" dentro del H1 a propósito: es el término
            por el que hoy no aparecen, y los que sí rankean en Uruguay
            (segurosuy.com.uy usa el H1 "Corredores de seguros") lo llevan
            literal. El diferencial va en la misma oración.

            NO se usa "el seguro justo" como titular: elcorredor.com.uy, un
            corredor uruguayo que rankea, ya tiene como H1 "El seguro justo
            para tu auto, tu casa y tu vida". La frase es de Charrutti —está en
            su /nosotros.html— pero como titular chocaría de frente. Queda en
            la bajada, con menos prominencia. */}
        <h1 className="max-w-[21ch] text-[2.0625rem] leading-[1.03] sm:text-[2.75rem] lg:max-w-[36ch] lg:text-[3.4375rem]">
          Corredores de seguros en Montevideo que comparan todas las compañías.
        </h1>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            {/* La bajada carga las señales de confianza que ninguno de los
                corredores que hoy rankean puede mostrar: 25 años y una
                certificación de calidad. En un rubro donde Google mide
                experiencia y solvencia, ese es el activo de Charrutti. */}
            <p className="max-w-[40ch] text-lg leading-[1.55]">
              Más de 25 años en plaza y certificación UNIT-ISO 9001. Cotizamos
              en las nueve compañías del mercado y le recomendamos el seguro
              justo, sin sobredimensionar sus necesidades.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#contacto"
                className="sobre-carbon whitespace-nowrap bg-carbon px-7 py-4 text-center font-display text-lg text-white transition-colors hover:bg-naranja-hondo"
              >
                Pedir cotización
              </a>
              <a
                href={telHref}
                className="whitespace-nowrap border-2 border-carbon px-7 py-4 text-center font-display text-lg transition-colors hover:bg-carbon hover:text-white"
              >
                Llamar al {site.telefonos.central.display}
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ComparativeSheet />
          </div>
        </div>
      </div>
    </section>
  );
}
