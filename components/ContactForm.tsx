"use client";

import { useEffect, useState } from "react";
import { ramos } from "@/lib/site";

/**
 * Formulario de consulta, visual.
 *
 * NO ENVÍA NADA: no hay backend, ni endpoint, ni servicio de mail. El submit
 * solo cambia el estado a "enviado" para mostrar el patrón. Está anotado en
 * el README junto al resto de lo pendiente.
 *
 * Cinco campos. El formulario de SOA del sitio actual tiene 18 y el de
 * notebooks 15; esos no son un formulario de contacto, son una solicitud de
 * contratación, y no van en la home.
 */
const campo =
  "mt-1.5 w-full border border-linea bg-white px-3.5 py-3 text-base focus:border-carbon";

export function ContactForm() {
  const [enviado, setEnviado] = useState(false);
  const [ramo, setRamo] = useState("");

  /* Los nueve ramos sin ficha propia llegan acá con ?ramo=<slug>, así que la
     consulta arranca encaminada en vez de con el desplegable en blanco.
     Se lee de window y no con useSearchParams para no forzar un Suspense
     boundary ni sacar la página del prerender estático. */
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("ramo");
    if (!slug) return;
    const encontrado = ramos.find((r) => r.slug === slug);
    if (encontrado) setRamo(encontrado.nombre);
  }, []);

  if (enviado) {
    return (
      <div className="border-l-4 border-naranja bg-white p-7">
        <h3 className="text-xl">Recibimos su consulta</h3>
        <p className="mt-3 max-w-[40ch] leading-relaxed">
          Un asesor la revisa y le responde. Si es urgente y ya tuvo un
          siniestro, llame directamente al 2623 1668.
        </p>
        <button
          type="button"
          onClick={() => setEnviado(false)}
          className="mt-5 font-display font-medium underline decoration-naranja decoration-2 underline-offset-4"
        >
          Hacer otra consulta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setEnviado(true);
      }}
      className="bg-white p-6 lg:p-8"
    >
      <h3 className="text-xl">Consultar sin compromiso</h3>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="nombre" className="font-display text-[0.9375rem] font-medium">
            Nombre
          </label>
          <input id="nombre" name="nombre" type="text" required className={campo} />
        </div>

        <div>
          <label htmlFor="telefono" className="font-display text-[0.9375rem] font-medium">
            Teléfono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            inputMode="tel"
            className={campo}
          />
        </div>

        <div>
          <label htmlFor="email" className="font-display text-[0.9375rem] font-medium">
            Correo electrónico
          </label>
          <input id="email" name="email" type="email" required className={campo} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="ramo" className="font-display text-[0.9375rem] font-medium">
            Qué quiere asegurar
          </label>
          <select
            id="ramo"
            name="ramo"
            value={ramo}
            onChange={(e) => setRamo(e.target.value)}
            className={campo}
          >
            <option value="" disabled>
              Elija una opción
            </option>
            {ramos.map((r) => (
              <option key={r.slug} value={r.nombre}>
                {r.nombre}
              </option>
            ))}
            <option value="otra">Otra cosa</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="mensaje" className="font-display text-[0.9375rem] font-medium">
            Cuéntenos brevemente
          </label>
          <textarea id="mensaje" name="mensaje" rows={4} className={campo} />
        </div>
      </div>

      <button
        type="submit"
        className="sobre-carbon mt-6 w-full bg-carbon px-7 py-4 font-display text-lg text-white transition-colors hover:bg-naranja-hondo sm:w-auto"
      >
        Enviar consulta
      </button>
      <p className="mt-3 text-[0.9375rem] text-carbon/70">
        No es una cotización automática: le responde un asesor.
      </p>
    </form>
  );
}
