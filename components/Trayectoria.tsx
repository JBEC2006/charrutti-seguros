import { site } from "@/lib/site";

/**
 * Trayectoria, respaldo y Política de Calidad.
 *
 * La Política de Calidad del sitio actual son seis párrafos de documento
 * interno metidos en el medio de la home, más Misión y Visión abajo. Acá queda
 * en tres líneas, dice lo mismo en concreto, y va donde corresponde: como
 * respaldo, no como apertura. Misión y Visión no van; su contenido ya está
 * dicho en el hero y en el bloque de corredor.
 *
 * Las nueve compañías se movieron a su propia franja debajo del hero: acá,
 * al final de la página, llegaban después de que el visitante ya decidió si
 * le importaban.
 *
 * La certificación va sin número de versión: la web dice UNIT-ISO 9001:2008,
 * que está obsoleta, y no confirmamos si recertificaron.
 */
export function Trayectoria() {
  return (
    <section
      id="trayectoria"
      aria-labelledby="trayectoria-titulo"
      className="sobre-carbon bg-carbon text-white"
    >
      <div className="mx-auto max-w-[1180px] px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 id="trayectoria-titulo" className="text-[1.875rem] sm:text-[2.375rem]">
              {site.trayectoria}
            </h2>
            <p className="mt-5 max-w-[42ch] leading-relaxed text-white/85">
              Operamos en todas las carteras de seguros generales y trabajamos
              con todas las compañías establecidas en el Uruguay. Es lo que nos
              deja conseguirle las mejores condiciones de contratación, con
              asesoramiento personalizado también después de la venta.
            </p>
            {/* Cierre de /nosotros.html, casi textual: "cuando se trata de su
                seguridad, es fundamental conocer la experiencia de la empresa a
                la cual usted le va a confiar su capital" + "encontrará en
                nosotros gente en quién confiar". */}
            <p className="mt-4 max-w-[42ch] leading-relaxed text-white/85">
              Cuando se trata de su seguridad, importa conocer la experiencia de
              la empresa a la que le va a confiar su capital. Va a encontrar en
              nosotros gente en quién confiar.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h3 className="text-lg">{site.certificacion}</h3>
            <p className="mt-3 max-w-[48ch] leading-relaxed text-white/85">
              Todos los procesos de nuestra oficina están certificados por UNIT
              según la norma ISO 9001. En la práctica son tres cosas: cada
              consulta queda registrada y tiene un responsable, revisamos su
              póliza cuando cambian sus necesidades o las condiciones del
              mercado, y si algo falla lo corregimos y dejamos constancia para
              que no se repita.
            </p>

            {/* Servicio concreto que figura en /nosotros.html y que no estaba
                en ningún lado de la demo: "Emisión de certificados para
                despacho (Importación y Exportación) en forma electrónica e
                inmediata, a los efectos de agilitar vuestra tramitación ante
                los organismos competentes". Es de lo poco medible que
                diferencia a un corredor con oficina de uno independiente. */}
            <h3 className="mt-8 text-lg">Certificados de despacho</h3>
            <p className="mt-3 max-w-[48ch] leading-relaxed text-white/85">
              Emitimos los certificados de importación y exportación de forma
              electrónica e inmediata, para que el trámite ante los organismos
              no le frene la operación.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
