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

export const metadata: Metadata = {
  title: "Seguro de industria y comercio",
  description:
    "Seguro para empresas en Montevideo: incendio, robo, responsabilidad civil, lucro cesante y transporte de mercadería. Cotizamos en las nueve compañías con las que trabajamos.",
  alternates: { canonical: "/seguros/industria-y-comercio" },
};

/* Ficha de Industria y Comercio.
   Base: /seguros-industria-y-comercio.html. Es una de las páginas más flacas
   del sitio actual —tres párrafos y dos frases sueltas de venta— pero la idea
   central que tiene es buena y propia, así que se conserva textual y se le
   construye la estructura alrededor.

   Del original se corrige la errata "asegurar todas susu inversiones". */

const queAsegurar = [
  {
    titulo: "El local y las instalaciones",
    texto:
      "Incendio, rayo y explosión sobre el edificio y sobre las mejoras que usted hizo adentro. Es la base de cualquier póliza de empresa y suele ser lo más barato en relación a lo que cubre.",
  },
  {
    titulo: "La mercadería y el stock",
    texto:
      "Lo que tiene para vender y lo que tiene guardado. Si el stock se mueve mucho a lo largo del año, conviene revisar el capital declarado más de una vez y no dejarlo fijo.",
  },
  {
    titulo: "Maquinaria y equipos",
    texto:
      "Rotura de maquinaria y daños a equipos electrónicos. En una industria suele ser el activo que más caro sale reponer y el que más rápido frena la producción.",
  },
  {
    titulo: "Robo y hurto",
    texto:
      "De la mercadería, del contenido y de los valores en caja o en tránsito. Incluye los daños que causa el ladrón al entrar.",
  },
  {
    titulo: "Responsabilidad civil",
    texto:
      "Los daños que su actividad, su local o sus productos le pueden causar a un tercero. Es la cobertura que más se subestima y la que puede terminar en un juicio.",
  },
  {
    titulo: "Lucro cesante",
    texto:
      "Las ganancias que deja de tener mientras la empresa está parada por un siniestro cubierto. El incendio se arregla en meses; la facturación de esos meses no vuelve sola.",
  },
];

const queMirar = [
  {
    titulo: "¿Por cuánto está declarado cada rubro?",
    texto:
      "Si declara menos de lo que vale, la mayoría de las pólizas indemnizan en la misma proporción. Vale para el edificio, para la mercadería y para la maquinaria por separado.",
  },
  {
    titulo: "¿Qué pasa mientras la empresa está parada?",
    texto:
      "Reponer la máquina es una cosa; sostener sueldos y alquiler los tres meses que tarda en llegar es otra. Eso lo cubre el lucro cesante y casi nunca viene incluido.",
  },
  {
    titulo: "¿Cubre a sus productos después de vendidos?",
    texto:
      "La responsabilidad civil por producto es distinta de la responsabilidad civil del local. Si fabrica o distribuye, conviene tenerla clara antes y no cuando llega el reclamo.",
  },
  {
    titulo: "¿La mercadería viaja?",
    texto:
      "El seguro del local termina en la puerta del local. La mercadería en tránsito, importada o exportada, se cubre con una póliza de transporte, que cotizamos aparte.",
  },
];

export default function IndustriaYComercio() {
  return (
    <>
      <Header />
      <SiniestroStrip />
      <main id="contenido">
        <CabeceraRamo
          nombre="Industria y Comercio"
          titulo="Seguro para su empresa"
          bajada={
            /* La idea central de /seguros-industria-y-comercio.html, casi
               textual: "En una Empresa existen muchos riesgos; desde la
               posibilidad de que el producto se vuelva obsoleto o hasta la
               ocurrencia de un incendio. Como dueño de una empresa, Ud. ya
               tiene muchos riesgos, muchos de los cuales son inevitables, pero
               otros pueden ser transferidos a una Compañía de Seguros."

               Es la mejor frase que tiene el sitio actual y resume el negocio
               entero, así que se conserva casi como está. */
            <>
              En una empresa hay riesgos de todo tipo, desde que un producto se
              vuelva obsoleto hasta un incendio. Como dueño usted ya carga con
              muchos, y buena parte son inevitables. Otros no: esos se le pueden
              transferir a una compañía de seguros.
            </>
          }
        />

        <BloqueDefiniciones
          id="asegurar-titulo"
          titulo="Qué asegurar en su empresa"
          bajada={
            /* Segundo párrafo del original, con la errata "susu" corregida y
               sin la promesa de "tarifas accesibles", que es una afirmación de
               precio que un corredor no puede sostener desde una web. */
            <>
              No hace falta asegurarlo todo desde el primer día. Si la empresa
              está en buena situación, conviene cubrir el conjunto de las
              inversiones; si no, se eligen los activos críticos y se asume el
              riesgo del resto a conciencia. Esa decisión la tomamos con usted.
            </>
          }
          items={queAsegurar}
        />

        <BloqueDefiniciones
          id="mirar-titulo"
          titulo="Qué mirar antes de contratar"
          bajada="Las pólizas de empresa se parecen mucho en la carátula y se diferencian en las condiciones particulares. Estas son las cuatro preguntas que le hacemos a cada compañía."
          items={queMirar}
          fondo="blanco"
        />

        <CierreRamo ramo="industria y comercio" />
      </main>
      <Footer />
      <ContactoFab />
    </>
  );
}
