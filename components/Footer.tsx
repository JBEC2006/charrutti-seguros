import Link from "next/link";
import { site, horario, leyendaPendiente } from "@/lib/site";
import { Logo } from "./Logo";
import { Pendiente } from "./Pendiente";

/**
 * Pie.
 *
 * Diferencias con el actual: el copyright dice el año en curso y no 2013, el
 * ícono social es el de X y no el pajarito de Twitter, la certificación va sin
 * el ":2008" obsoleto, y Glosario y Links de interés aparecen acá — hoy no
 * están en ningún menú y solo se llega a ellos desde la home.
 *
 * El teléfono va en naranja de marca y no en naranja-hondo como en su CSS
 * actual: sobre este fondo oscuro el hondo da 4.4:1 y el de marca 7.1:1.
 */
/* Glosario y Links de interés existían en el sitio actual y no estaban en esta
   demo. Pasaron por dos estados malos antes de este: primero href="#", que se
   siente roto, y después texto plano sin link, que declara el ítem pero no
   lleva a ningún lado.

   Ahora los dos tienen destino real, migrado del sitio del cliente: el
   glosario completo (107 términos) y las cinco compañías con sus gestiones en
   línea. Eran contenido que ya existía y que nadie encontraba: en el sitio
   actual no están en ningún menú.

   "Estado del proyecto" va acá y no en el nav principal a propósito. Es una
   página para nosotros y para Charrutti, no para alguien que entra a cotizar
   un seguro. */
const secundarios = [
  { label: "Glosario de seguros", href: "/glosario" },
  { label: "Links de interés", href: "/links" },
  { label: "En caso de siniestro", href: "/siniestro" },
];

export function Footer() {
  return (
    <footer className="sobre-carbon bg-carbon text-white">
      <div className="mx-auto max-w-[1180px] px-5 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 [&>div]:min-w-0">
          <div>
            <Logo className="h-9 w-auto" />
            <p className="mt-5 max-w-[30ch] leading-relaxed text-white/70">
              Corredor de seguros en Montevideo. {site.trayectoria} asesorando
              en la contratación de seguros.
            </p>
          </div>

          <div>
            <h2 className="text-lg">Contacto</h2>
            <ul className="mt-4 space-y-2.5 text-white/80">
              <li>
                <a
                  href={"tel:" + site.telefonos.central.tel}
                  className="font-display text-xl tabular-nums text-naranja hover:underline"
                >
                  {site.telefonos.central.display}
                </a>
              </li>
              <li>
                <a href={"mailto:" + site.email} className="break-words hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="pt-1">
                {site.direccion.calle}
                <br />
                {site.direccion.ciudad}, {site.direccion.pais}
              </li>
              <li className="pt-1">
                {horario ? (
                  <span className="text-white/60">{horario}</span>
                ) : (
                  <Pendiente tono="oscuro">{leyendaPendiente.horario}</Pendiente>
                )}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg">Siniestros</h2>
            <ul className="mt-4 space-y-2 text-white/80">
              {site.telefonos.siniestros.map((t) => (
                <li key={t.tel}>
                  <a
                    href={"tel:" + t.tel}
                    className="font-display text-lg tabular-nums text-naranja hover:underline"
                  >
                    {t.display}
                  </a>
                </li>
              ))}
              <li className="pt-1 text-white/60">
                Guardia de siniestros. Fuera de hora, llame a su compañía.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg">Más</h2>
            <ul className="mt-4 space-y-2.5 text-white/80">
              {secundarios.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-white">
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.areaClientes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Área de Clientes
                </a>
              </li>
              <li className="pt-1">
                <Link
                  href="/estado"
                  className="underline decoration-dotted decoration-white/40 underline-offset-4 hover:text-white hover:decoration-white"
                >
                  Estado del proyecto
                </Link>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href={site.redes.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center border border-white/25 hover:border-naranja hover:text-naranja"
              >
                <span className="sr-only">Charrutti Seguros en Facebook</span>
                <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                  <path
                    d="M11.3 18v-7.3h2.5l.4-2.9h-2.9V5.9c0-.8.2-1.4 1.4-1.4h1.6V1.9C13.9 1.8 13 1.8 12.1 1.8c-2 0-3.4 1.2-3.4 3.5v2.5H6.2v2.9h2.5V18h2.6Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              {/* Era el pajarito de Twitter en el sitio actual.
                  PENDIENTE: confirmar si la cuenta sigue activa. */}
              <a
                href={site.redes.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center border border-white/25 hover:border-naranja hover:text-naranja"
              >
                <span className="sr-only">Charrutti Seguros en X</span>
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M18.9 1.2h3.7l-8.1 9.2L24 22.8h-7.4l-5.9-7.6-6.7 7.6H.3l8.6-9.9L0 1.2h7.6l5.3 7 6-7Zm-1.3 19.4h2L6.5 3.3H4.3l13.3 17.3Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-[0.9375rem] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Charrutti Seguros — {site.certificacion}
          </p>
          <p>© {new Date().getFullYear()} Charrutti Seguros</p>
        </div>
      </div>
    </footer>
  );
}
