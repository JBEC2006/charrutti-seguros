import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { SiniestroStrip } from "@/components/SiniestroStrip";
import { Footer } from "@/components/Footer";
import { ContactoFab } from "@/components/ContactoFab";
import {
  CabeceraRamo,
  BloqueDefiniciones,
  CierreRamo,
} from "@/components/CabeceraRamo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Seguro de automóviles",
  description:
    "Seguro de automóviles en Montevideo. Cotizamos su póliza en las nueve compañías con las que trabajamos y le decimos cuál le conviene. Qué mirar antes de contratar.",
  alternates: { canonical: "/seguros/automoviles" },
};

/* La primera ficha de ramo que se construyó, y el patrón que siguen las otras
   tres. El texto sale de /seguros-automoviles.html, reescrito sin tecnicismos.

   Cambió dos cosas desde la primera versión:

   1. La cabecera, los bloques de definiciones y el cierre se extrajeron a
      components/CabeceraRamo.tsx cuando se sumaron Hogar, Industria y
      Accidentes de Trabajo. El marcado que se ve es exactamente el mismo.

   2. La tabla de teléfonos de las nueve compañías ya no está acá. Vive en
      /siniestro, que ahora existe y está en el nav. Tenerla en dos páginas
      significaba mantener dos copias de nueve teléfonos de emergencia, que es
      exactamente el tipo de duplicación que termina con una desactualizada. */

const queCubre = [
  {
    titulo: "Daños a terceros",
    texto:
      "Si en un choque le causa daños a otra persona, a su vehículo o a sus cosas, la compañía responde por usted. Es la cobertura de base y la que más caro sale no tener.",
  },
  {
    titulo: "Su propio vehículo",
    texto:
      "Choque, vuelco, incendio y robo total o parcial. Puede sumar granizo, rotura de cristales y daños por inundación según lo que necesite.",
  },
  {
    titulo: "Asistencia en la ruta",
    texto:
      "Auxilio mecánico, remolque, cambio de rueda y batería. Casi todas las compañías lo incluyen, pero con topes distintos de kilómetros y de llamadas por año.",
  },
  {
    titulo: "Auto sustituto",
    texto:
      "Un vehículo de reemplazo mientras reparan el suyo. No viene en todas las pólizas y es lo que más se extraña si usa el auto para trabajar.",
  },
];

/* Este bloque es el que muestra el criterio: es lo que un corredor le dice a
   un cliente antes de que firme, y lo que una aseguradora no le va a decir. */
const queMirar = [
  {
    titulo: "¿Con qué valor queda asegurado el vehículo?",
    texto:
      "Es lo que le pagan si el auto se pierde por completo. Un valor bajo abarata la póliza y aparece justo el día que más lo necesita.",
  },
  {
    titulo: "¿Cuánto tiene que poner usted en cada siniestro?",
    texto:
      "Casi todas las pólizas dejan una parte del arreglo a cargo del asegurado. Conviene saber el monto antes y no cuando llega el presupuesto del taller.",
  },
  {
    titulo: "¿Dónde se lo reparan?",
    texto:
      "Algunas compañías trabajan solo con talleres propios y otras le dejan elegir. Cambia mucho el tiempo de espera y también la calidad del arreglo.",
  },
  {
    titulo: "¿Cubre fuera del Uruguay?",
    texto:
      "Si cruza a Argentina o Brasil necesita la tarjeta verde del Mercosur. No todas las pólizas la incluyen sin costo extra.",
  },
];

export default function Automoviles() {
  return (
    <>
      <Header />
      <SiniestroStrip />
      <main id="contenido">
        <CabeceraRamo
          nombre="Automóviles"
          titulo="Seguro de automóviles"
          bajada={
            <>
              Comprar un auto abarca mucho más que la marca y el color: incluye
              elegir una buena póliza. Cotizamos la suya en las nueve compañías
              con las que trabajamos y le decimos con cuál le conviene quedarse.
            </>
          }
        />

        <BloqueDefiniciones
          id="cubre-titulo"
          titulo="Qué cubre"
          bajada={
            /* Este párrafo es de ellos. En /seguros-automoviles.html está bajo
               el título "¿Qué es un seguro para el auto y para qué lo
               necesita?" y dice: "Tener un auto implica ser responsable de los
               daños que puede causar Ud. u otras personas cuando manejan su
               auto. Si ocurre un accidente puede quedar expuesto a reclamos de
               terceros y esto provocarle pérdidas económicas importantes. Al
               contratar un seguro para el auto, transfiere estos riesgos a una
               Compañia de Seguros, protegiendo su patrimonio e intereses."
               Acá va con la errata corregida y algo más llano. */
            <>
              Tener un auto implica ser responsable de los daños que pueda causar
              usted u otra persona que lo maneje. Si ocurre un accidente, queda
              expuesto a reclamos de terceros que pueden significar pérdidas
              importantes. Al contratar el seguro, esos riesgos pasan a la
              compañía y su patrimonio queda protegido.
            </>
          }
          items={queCubre}
        />

        <BloqueDefiniciones
          id="mirar-titulo"
          titulo="Qué mirar antes de contratar"
          bajada="Dos pólizas con el mismo precio pueden cubrirlo de forma muy distinta. Estas son las cuatro preguntas que le hacemos a cada compañía cuando cotizamos para usted."
          items={queMirar}
          fondo="blanco"
        />

        {/* Reemplaza la tabla de teléfonos que estaba acá. Los nueve números
            viven en /siniestro, en una sola copia. */}
        <section
          aria-labelledby="siniestro-titulo"
          className="sobre-carbon border-b border-linea bg-carbon text-white"
        >
          <div className="mx-auto max-w-[1180px] px-5 py-14 lg:px-8 lg:py-16">
            <h2 id="siniestro-titulo" className="max-w-[22ch] text-[1.875rem] sm:text-[2.375rem]">
              ¿Ya tuvo el siniestro?
            </h2>
            <p className="mt-4 max-w-[52ch] text-lg leading-[1.5] text-white/85">
              Llame primero a la asistencia de su compañía y después avísenos.
              Hacemos la denuncia y seguimos el trámite hasta que se resuelva.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={"tel:" + site.telefonos.siniestros[0].tel}
                className="sobre-naranja flex min-h-[3.5rem] items-center justify-center gap-2.5 bg-naranja px-6 text-carbon transition-colors hover:bg-naranja-hondo hover:text-white"
              >
                <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden="true">
                  <path
                    d="M5.2 1.5 6.9 5 5.3 6.8c.9 2 2.4 3.5 4.4 4.4l1.8-1.6 3.5 1.7-.6 3.1c-.1.6-.7 1-1.3.9C7.3 14.4 2.6 9.7 1.7 4c-.1-.6.3-1.2.9-1.3l2.6-1.2Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="font-display text-[1.6rem] tabular-nums">
                  {site.telefonos.siniestros[0].display}
                </span>
              </a>
              <Link
                href="/siniestro"
                className="font-display text-lg font-medium underline decoration-naranja decoration-2 underline-offset-4 hover:decoration-white"
              >
                Los nueve pasos y los teléfonos de cada compañía
              </Link>
            </div>
          </div>
        </section>

        <CierreRamo ramo="automóvil" />
      </main>
      <Footer />
      <ContactoFab />
    </>
  );
}
