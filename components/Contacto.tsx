import { site, mapsHref, whatsappHref } from "@/lib/site";
import { ContactForm } from "./ContactForm";

/**
 * Sección de contacto.
 *
 * El sitio actual no tiene página de contacto: el ítem CONTACTO existe solo en
 * /glosario.html y /links.html, y apunta a contacto.aspx, que no devuelve HTML
 * válido. La dirección está como texto plano en el pie, sin mapa, sin horarios
 * y sin WhatsApp.
 */
function Dato({
  etiqueta,
  children,
}: {
  etiqueta: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-arena py-4">
      <h3 className="font-display text-[0.9375rem] font-medium text-carbon/70">
        {etiqueta}
      </h3>
      <div className="mt-1">{children}</div>
    </div>
  );
}

export function Contacto() {
  return (
    <section id="contacto" aria-labelledby="contacto-titulo">
      <div className="mx-auto max-w-[1180px] px-5 py-16 lg:px-8 lg:py-24">
        <h2 id="contacto-titulo" className="text-[1.875rem] sm:text-[2.375rem]">
          Hablemos
        </h2>
        <p className="mt-4 max-w-[48ch] text-lg">
          Cuéntenos qué necesita y le armamos la comparación. No cobramos por
          asesorarlo.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-5">
            <Dato etiqueta="Teléfono">
              <a
                href={"tel:" + site.telefonos.central.tel}
                className="font-display text-[1.75rem] tabular-nums text-naranja-hondo hover:underline"
              >
                {site.telefonos.central.display}
              </a>
            </Dato>

            <Dato etiqueta="Siniestros">
              <div className="flex flex-wrap gap-x-5">
                {site.telefonos.siniestros.map((t) => (
                  <a
                    key={t.tel}
                    href={"tel:" + t.tel}
                    className="font-display text-lg tabular-nums hover:underline"
                  >
                    {t.display}
                  </a>
                ))}
              </div>
            </Dato>

            <Dato etiqueta="Correo">
              <a href={"mailto:" + site.email} className="break-words hover:underline">
                {site.email}
              </a>
            </Dato>

            <Dato etiqueta="WhatsApp">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-medium underline decoration-naranja decoration-2 underline-offset-4 hover:decoration-carbon"
              >
                Escribirnos por WhatsApp
              </a>
            </Dato>

            <Dato etiqueta="Oficina">
              <p>{site.direccion.calle}</p>
              <p>
                {site.direccion.ciudad}, {site.direccion.pais}
              </p>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-block font-display text-[0.9375rem] font-medium underline decoration-naranja decoration-2 underline-offset-4 hover:decoration-carbon"
              >
                Cómo llegar
              </a>
            </Dato>

            {/* PENDIENTE: horario real de atención. */}
            <Dato etiqueta="Atención">
              <p>{site.horarios}</p>
            </Dato>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* El mapa va a todo el ancho y no dentro de la columna de datos: ahí
          quedaba como una caja alta y vacía al lado del formulario. */}
      <div className="border-y border-arena">
        <iframe
          title="Mapa de la oficina de Charrutti Seguros en 26 de Marzo 3454, Montevideo"
          src={
            "https://www.google.com/maps?q=" +
            encodeURIComponent(site.direccion.mapsQuery) +
            "&z=16&output=embed"
          }
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[16rem] w-full lg:h-[21rem]"
        />
      </div>
    </section>
  );
}
