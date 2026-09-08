import { ComparativeSheet } from "./ComparativeSheet";
import { whatsappHref } from "@/lib/site";

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
    <section className="border-b border-arena">
      <div className="mx-auto max-w-[1180px] px-5 pb-16 pt-12 lg:px-8 lg:pb-20 lg:pt-16">
        {/* El titular va a todo el ancho: con 100 caracteres, encajarlo en una
            columna de cinco lo parte en siete líneas y se come el hero. */}
        <h1 className="max-w-[21ch] text-[2.0625rem] leading-[1.03] sm:text-[2.75rem] lg:max-w-none lg:text-[3.4375rem]">
          Corredores de seguros en Montevideo. Comparamos todas las compañías y
          le recomendamos el seguro justo.
        </h1>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="max-w-[38ch] text-lg leading-[1.55]">
              Trabajamos con todas las compañías establecidas en el Uruguay. Eso
              nos permite conseguirle mejores condiciones de contratación, sin
              sobredimensionar sus necesidades.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#contacto"
                className="sobre-carbon whitespace-nowrap bg-carbon px-7 py-4 text-center font-display text-lg text-white transition-colors hover:bg-naranja-hondo"
              >
                Pedir cotización
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap border-2 border-carbon px-7 py-4 text-center font-display text-lg transition-colors hover:bg-carbon hover:text-white"
              >
                Hablar por WhatsApp
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
