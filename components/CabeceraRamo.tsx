import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Cabecera común de las fichas de ramo.
 *
 * Existía una sola ficha (Automóviles) y su cabecera estaba escrita a mano
 * dentro de la página. Al sumar tres fichas más, esas cuarenta líneas se iban a
 * copiar cuatro veces, y a la tercera copia alguien iba a cambiar el texto de
 * un botón en una sola.
 *
 * No cambia nada de lo que ya se veía: es exactamente el mismo marcado que
 * tenía Automóviles —miga de pan, H1, bajada y los dos CTAs—, extraído.
 *
 * Lo que reemplaza del sitio actual: ahí cada página de ramo abre con el mismo
 * carrusel de cuatro slides de venta genérica, idéntico en las diez, incluida
 * la de siniestros. Acá cada ficha abre diciendo de qué se trata.
 */
export function CabeceraRamo({
  nombre,
  titulo,
  bajada,
}: {
  /** Como figura en la miga de pan y en el menú. */
  nombre: string;
  /** El H1. Suele ser "Seguro de " + nombre, pero no siempre suena bien. */
  titulo: string;
  bajada: React.ReactNode;
}) {
  return (
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
            <li>
              <Link href="/#seguros" className="underline-offset-4 hover:underline">
                Seguros
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-carbon">{nombre}</li>
          </ol>
        </nav>

        <h1 className="mt-6 max-w-[18ch] text-[2.125rem] leading-[1.05] sm:text-[2.75rem] lg:text-[3.125rem]">
          {titulo}
        </h1>
        <p className="mt-5 max-w-[52ch] text-lg leading-[1.55]">{bajada}</p>

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
  );
}

/**
 * Bloque de pares título/texto, el patrón que ya usaba Automóviles para "Qué
 * cubre" y "Qué mirar antes de contratar". Va como <dl> porque eso es: una
 * lista de definiciones.
 */
export function BloqueDefiniciones({
  id,
  titulo,
  bajada,
  items,
  fondo = "niebla",
}: {
  id: string;
  titulo: string;
  bajada?: React.ReactNode;
  items: { titulo: string; texto: React.ReactNode }[];
  /** Alterna el ritmo de fondos de la página. Ver globals.css. */
  fondo?: "niebla" | "blanco";
}) {
  return (
    <section
      aria-labelledby={id}
      className={"border-b border-linea" + (fondo === "blanco" ? " bg-white" : "")}
    >
      <div className="mx-auto max-w-[1180px] px-5 py-16 lg:px-8 lg:py-20">
        <h2 id={id} className="max-w-[24ch] text-[1.875rem] sm:text-[2.375rem]">
          {titulo}
        </h2>
        {bajada && <p className="mt-4 max-w-[58ch] text-lg">{bajada}</p>}

        <dl className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {items.map((i) => (
            <div key={i.titulo}>
              <dt className="max-w-[28ch] font-display text-xl leading-[1.15]">
                {i.titulo}
              </dt>
              <dd className="mt-3 max-w-[46ch] leading-relaxed">{i.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/**
 * Cierre de ficha: el empujón al formulario y el recordatorio de que la
 * consulta no cuesta nada. Va al final de cada ramo.
 */
export function CierreRamo({
  ramo,
  titulo = "¿Le armamos la comparación?",
  texto,
}: {
  ramo: string;
  /**
   * Para los ramos donde "comparar" no aplica. Accidentes de Trabajo está en
   * monopolio del BSE por la Ley 16.074: prometer una comparación entre nueve
   * compañías ahí sería falso, y de las falsedades que un cliente del rubro
   * detecta al instante.
   */
  titulo?: string;
  texto?: React.ReactNode;
}) {
  return (
    <section aria-labelledby="cierre-titulo">
      <div className="mx-auto max-w-[1180px] px-5 py-16 lg:px-8 lg:py-20">
        <h2 id="cierre-titulo" className="max-w-[22ch] text-[1.875rem] sm:text-[2.375rem]">
          {titulo}
        </h2>
        <p className="mt-4 max-w-[52ch] text-lg">
          {texto ?? (
            <>
              Cotizamos su seguro de {ramo} en las nueve compañías con las que
              trabajamos y le decimos cuál le conviene y por qué. No cobramos por
              asesorarlo: a nosotros nos paga la compañía, no usted.
            </>
          )}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="/#contacto"
            className="sobre-carbon whitespace-nowrap bg-carbon px-7 py-4 text-center font-display text-lg text-white transition-colors hover:bg-naranja-hondo"
          >
            Pedir cotización
          </a>
          <Link
            href="/#seguros"
            className="whitespace-nowrap border-2 border-carbon px-7 py-4 text-center font-display text-lg transition-colors hover:bg-carbon hover:text-white"
          >
            Ver los otros ramos
          </Link>
        </div>
      </div>
    </section>
  );
}
