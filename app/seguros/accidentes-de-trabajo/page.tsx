import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { SiniestroStrip } from "@/components/SiniestroStrip";
import { Footer } from "@/components/Footer";
import { ContactoFab } from "@/components/ContactoFab";
import {
  CabeceraRamo,
  BloqueDefiniciones,
  CierreRamo,
} from "@/components/CabeceraRamo";
import { Pendiente } from "@/components/Pendiente";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Seguro de accidentes de trabajo",
  description:
    "Accidentes de trabajo y enfermedades profesionales: obligatorio por la Ley 16.074 y en monopolio del Banco de Seguros del Estado. Plazos de denuncia, condiciones especiales y qué cubre.",
  alternates: { canonical: "/seguros/accidentes-de-trabajo" },
};

/* Ficha de Accidentes de Trabajo.
   Base: /seguros-accidentes.html del sitio actual.

   Esta es la página más útil de las tres que se migran, y la que peor está en
   el original: la información importante —los plazos de denuncia y las multas
   por no cumplirlos— está enterrada en un párrafo al final, y las condiciones
   especiales se explican con los códigos numéricos sin decir qué significan.

   Es también la única ficha donde el contenido es normativo. Por eso lleva un
   pendiente explícito: los montos en UR y los códigos de condición especial
   son los que publica el sitio del cliente, y hay que verificarlos contra las
   condiciones vigentes del BSE antes de publicar. No se actualizan por nuestra
   cuenta ni se omiten: se muestran con la advertencia al lado. */

const queCubre = [
  {
    titulo: "Asistencia médica",
    texto:
      "Todos los gastos de atención del trabajador accidentado o con enfermedad profesional, durante todo el tratamiento y hasta el alta.",
  },
  {
    titulo: "Prestaciones económicas",
    texto:
      "El ingreso del trabajador mientras dura la incapacidad, y las indemnizaciones o rentas que correspondan si la incapacidad queda como permanente.",
  },
  {
    titulo: "Enfermedades profesionales",
    texto:
      "No solo el accidente: también las enfermedades clasificadas como profesionales, que se manifiestan con el tiempo y no en un momento puntual.",
  },
  {
    titulo: "Cobertura del empleador",
    texto:
      "Contratada la póliza y cumplidas sus condiciones, la responsabilidad del empleador por el accidente queda cubierta. Sin póliza o con la declaración incompleta, no.",
  },
];

const condiciones = [
  {
    titulo: "Condición especial 1, 4 y 7",
    texto:
      "La cobertura alcanza a todo el personal que figure en la documentación contable y en las planillas de sueldos de la empresa. Si incorpora personal que no estaba declarado, el alta se avisa antes; las bajas se comunican de inmediato.",
  },
  {
    titulo: "Condición especial 3, 6 y 9",
    texto:
      "El seguro cubre exclusivamente al personal declarado previamente al Banco. Todas las altas y bajas del período tienen que comunicarse. Una baja no comunicada sigue computando salarios hasta que se avise.",
  },
  {
    titulo: "Dónde mirar cuál le tocó",
    texto:
      "La condición especial figura en su póliza, al dorso, en la parte superior izquierda. Es lo primero que conviene chequear: las dos familias de condiciones tienen obligaciones distintas.",
  },
  {
    titulo: "Qué verifica el Banco antes de pagar",
    texto:
      "Antes de indemnizar un siniestro, el BSE controla que el dependiente aparezca en la planilla declarada y en los registros de BPS. Si no aparece, el incumplimiento habilita la acción de repetición prevista en la Ley 16.074.",
  },
];

export default function AccidentesDeTrabajo() {
  return (
    <>
      <Header />
      <SiniestroStrip />
      <main id="contenido">
        <CabeceraRamo
          nombre="Accidentes de Trabajo"
          titulo="Accidentes de trabajo"
          bajada={
            /* Apertura del original, casi textual: "El seguro de Accidentes de
               Trabajo y Enfermedades Profesionales es obligatorio de acuerdo
               con lo establecido en la Ley Nº 16.074, por la cual el mismo se
               mantiene bajo el monopolio de B.S.E." */
            <>
              El seguro de accidentes de trabajo y enfermedades profesionales es
              obligatorio por la Ley 16.074, que además lo mantiene en monopolio
              del Banco de Seguros del Estado. No se elige compañía: se elige
              cómo declarar al personal y cómo cumplir los plazos. En eso lo
              asesoramos y hacemos el trámite.
            </>
          }
        />

        {/* Esto va primero y no al final como en el sitio actual. Es lo único
            de toda la página que tiene una multa asociada, y quien entra
            después de un accidente necesita el plazo, no la definición. */}
        <section aria-labelledby="plazos-titulo" className="sobre-carbon bg-carbon text-white">
          <div className="mx-auto max-w-[1180px] px-5 py-14 lg:px-8 lg:py-18">
            <h2 id="plazos-titulo" className="text-[1.875rem] sm:text-[2.375rem]">
              Si hay un accidente
            </h2>
            <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="text-lg">Primero, el trabajador</h3>
                <p className="mt-3 max-w-[44ch] leading-relaxed text-white/85">
                  Traslade al accidentado a las dependencias del Banco de
                  Seguros. Si la urgencia no lo permite, al centro asistencial
                  más próximo, y después se hace el pase.
                </p>

                <h3 className="mt-8 text-lg">Después, la denuncia</h3>
                <p className="mt-3 max-w-[44ch] leading-relaxed text-white/85">
                  La denuncia patronal tiene plazo: 72 horas en Montevideo y 5
                  días hábiles en el interior. El artículo 48 de la Ley 16.074
                  sanciona al empleador que no denuncia en fecha con 50 UR la
                  primera vez y 100 UR las siguientes.
                </p>
                <p className="mt-4 max-w-[44ch] leading-relaxed text-white/85">
                  Si nos avisa al{" "}
                  <a
                    href={"tel:" + site.telefonos.siniestros[0].tel}
                    className="font-display tabular-nums text-naranja underline decoration-naranja decoration-2 underline-offset-4 hover:decoration-white"
                  >
                    {site.telefonos.siniestros[0].display}
                  </a>{" "}
                  la hacemos nosotros y le confirmamos que quedó presentada.
                </p>
              </div>

              <div>
                <h3 className="text-lg">Antes de que pase nada</h3>
                <p className="mt-3 max-w-[44ch] leading-relaxed text-white/85">
                  La mitad de los problemas con este seguro no son del accidente
                  sino de la declaración: personal que entró y no se avisó, o que
                  salió y se siguió computando. Revisar la planilla una vez por
                  mes evita casi todo.
                </p>
                <Pendiente tono="oscuro" className="mt-6 max-w-[44ch]">
                  Pendiente: verificar con Charrutti los montos en UR y los
                  códigos de condición especial contra las condiciones vigentes
                  del BSE. Son los que publica el sitio actual y no tienen fecha.
                </Pendiente>
              </div>
            </div>
          </div>
        </section>

        <BloqueDefiniciones
          id="cubre-titulo"
          titulo="Qué cubre"
          bajada="La cobertura alcanza la asistencia médica y las prestaciones económicas durante todo el tratamiento del trabajador."
          items={queCubre}
        />

        <BloqueDefiniciones
          id="condiciones-titulo"
          titulo="Las condiciones especiales, en castellano"
          bajada="Su póliza tiene un número de condición especial que decide a quién cubre y qué tiene que avisar. El sitio actual las lista por código, sin explicarlas. Son dos familias y esta es la diferencia."
          items={condiciones}
          fondo="blanco"
        />

        {/* Sin la promesa de comparar nueve compañías: este ramo está en
            monopolio del BSE. Lo que sí podemos ofrecer es el trabajo
            administrativo, que es donde está el problema real del cliente. */}
        <CierreRamo
          ramo="accidentes de trabajo"
          titulo="¿Se lo llevamos nosotros?"
          texto={
            <>
              Acá no hay compañías para comparar: la Ley 16.074 lo pone en
              monopolio del Banco de Seguros. Lo que sí hacemos es el trámite —
              la contratación, las altas y bajas de personal, y la denuncia
              dentro del plazo cuando pasa algo. No cobramos por asesorarlo.
            </>
          }
        />
      </main>
      <Footer />
      <ContactoFab />
    </>
  );
}
