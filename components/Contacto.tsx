import { site, whatsappHref, horario, leyendaPendiente } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { Mapa } from "./Mapa";
import { Pendiente, BotonPendiente } from "./Pendiente";

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

            {/* WhatsApp.
                Una versión anterior de esta demo escondía la fila entera
                mientras no hubiera número. Era prolijo y era peor: el hueco
                desaparecía, y con él la conversación de que falta un dato.
                Ahora la fila se queda, el botón se muestra deshabilitado y
                dice exactamente qué falta. Cuando llegue el número, se escribe
                en src/config/contacto.ts y esto se convierte solo en el link
                real: no hay que tocar este archivo. */}
            <Dato etiqueta="WhatsApp">
              {whatsappHref ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-medium underline decoration-naranja decoration-2 underline-offset-4 hover:decoration-carbon"
                >
                  Escribirnos por WhatsApp
                </a>
              ) : (
                <BotonPendiente>{leyendaPendiente.whatsapp}</BotonPendiente>
              )}
            </Dato>

            {/* El "Cómo llegar" vive en la banda del mapa, abajo: acá quedaba
                duplicado a pocos centímetros del mismo link. */}
            <Dato etiqueta="Oficina">
              <p>{site.direccion.calle}</p>
              <p>
                {site.direccion.ciudad}, {site.direccion.pais}
              </p>
            </Dato>

            {/* Horario.
                Antes decía "Lunes a viernes" a secas, en el mismo tono que el
                resto de los datos. Eso es lo peor de los dos mundos: no le
                sirve a nadie que quiera saber si llega a las 17:30, y encima
                se lee como dato confirmado. Va como pendiente declarado. */}
            <Dato etiqueta="Atención">
              {horario ? (
                <p>{horario}</p>
              ) : (
                <Pendiente>{leyendaPendiente.horario}</Pendiente>
              )}
            </Dato>

            {/* El mapa cierra esta columna. El formulario de al lado es unos
                300px más alto, así que sin esto quedaba un hueco muerto justo
                acá abajo. Además, en una columna angosta la tarjeta se llena
                con su propio contenido en vez de dejar trama vacía. */}
            <div className="mt-8">
              <Mapa />
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
