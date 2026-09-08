import { site, whatsappHref } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { Mapa } from "./Mapa";

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
    <div className="border-t border-linea py-4">
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
                    className="-my-1.5 py-1.5 font-display text-lg tabular-nums hover:underline"
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

            {/* La fila de WhatsApp vuelve sola en cuanto carguemos el número
                real en lib/site.ts. Hasta entonces no se ofrece el canal. */}
            {whatsappHref && (
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
            )}

            {/* El "Cómo llegar" vive en la banda del mapa, abajo: acá quedaba
                duplicado a pocos centímetros del mismo link. */}
            <Dato etiqueta="Oficina">
              <p>{site.direccion.calle}</p>
              <p>
                {site.direccion.ciudad}, {site.direccion.pais}
              </p>
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

        {/* El mapa va debajo, a todo el ancho del contenedor, no dentro de la
            columna de datos: ahí quedaba una caja alta y vacía al lado del
            formulario. Antes vivía afuera de este contenedor, a sangre —por
            eso se veía como un cartel gris suelto en vez de parte del diseño. */}
        <div className="mt-10">
          <Mapa />
        </div>
      </div>
    </section>
  );
}
