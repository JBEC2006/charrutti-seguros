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
  title: "Seguro de hogar",
  description:
    "Seguro de hogar en Montevideo: incendio de la edificación y del contenido, robo, daños por agua, cristales y responsabilidad civil. Cotizamos en las nueve compañías con las que trabajamos.",
  alternates: { canonical: "/seguros/hogar" },
};

/* Ficha de Hogar.
   El contenido sale de /seguros-hogar.html del sitio actual. Se conserva lo
   que dice la póliza —las coberturas y sus nombres técnicos, que son los que
   figuran en el contrato— y se reescribe la redacción al registro del resto de
   este sitio: segunda persona formal, oraciones cortas, sin mayúsculas
   sostenidas.

   Lo que se saca del original: las coberturas venían en MAYÚSCULA CERRADA
   ("ROBO Y/O HURTO DEL CONTENIDO DE LA VIVIENDA"), que es cómo se listan en
   una póliza, no cómo se le explican a alguien que está decidiendo. */

const queCubre = [
  {
    titulo: "Robo y hurto del contenido",
    texto:
      "El televisor, el equipo de audio, la heladera, el lavarropas, el microondas, las computadoras. Incluye también los daños que los ladrones causan al entrar, que muchas veces cuestan más que lo que se llevaron.",
  },
  {
    titulo: "Incendio de la edificación",
    texto:
      "Daños materiales a la vivienda por fuego, rayo o explosión. También por conmoción civil, huelgas, vandalismo, terrorismo y actos maliciosos; por impacto de vehículos o aeronaves; y por humo.",
  },
  {
    titulo: "Incendio del contenido",
    texto:
      "Los daños que el fuego le causa a lo que hay adentro de la casa, sea por acción directa de las llamas o indirecta. Se contrata aparte de la edificación: son dos capitales distintos.",
  },
  {
    titulo: "Responsabilidad civil",
    texto:
      "Si usted, su cónyuge o alguien de quien usted es civilmente responsable le causa un daño a un tercero en la vida privada, responde la compañía. Un caño que rompe y moja al vecino de abajo entra acá.",
  },
  {
    titulo: "Daños por agua y cristales",
    texto:
      "Roturas de cañería, filtraciones y rotura de vidrios, espejos y mamparas. Son las dos coberturas adicionales que más se usan y las que más veces quedan afuera por no preguntarlas.",
  },
  {
    titulo: "Objetos específicos y bienes en viaje",
    texto:
      "Se pueden declarar objetos puntuales por su valor —joyas, instrumentos, equipos— y cubrir el robo de lo que lleva encima cuando viaja.",
  },
];

/* Este bloque no está en el sitio actual. Es el criterio del corredor: lo que
   le dice a un cliente antes de que firme y lo que una aseguradora no le dice.
   Es el mismo patrón de la ficha de Automóviles. */
const queMirar = [
  {
    titulo: "¿A primer riesgo absoluto o a prorrata?",
    texto:
      "Es la decisión que más plata cambia y casi nadie la conversa. A primer riesgo absoluto le pagan el daño hasta la suma asegurada. A prorrata, si declaró menos de lo que vale, le pagan en la misma proporción: declaró la mitad, cobra la mitad.",
  },
  {
    titulo: "¿Por cuánto declaró el contenido?",
    texto:
      "Casi todo el mundo lo subestima. Sume electrodomésticos, ropa, herramientas y equipos: el número real suele ser bastante más alto que el primero que uno dice.",
  },
  {
    titulo: "¿Es propietario o inquilino?",
    texto:
      "Cambia qué le conviene asegurar. Un inquilino no asegura la edificación, pero sí el contenido y la responsabilidad civil frente al propietario y a los vecinos.",
  },
  {
    titulo: "¿Cuánto queda a su cargo?",
    texto:
      "La franquicia es la parte del arreglo que paga usted en cada siniestro. Conviene saber el monto al contratar y no cuando llega el presupuesto.",
  },
];

export default function Hogar() {
  return (
    <>
      <Header />
      <SiniestroStrip />
      <main id="contenido">
        <CabeceraRamo
          nombre="Hogar"
          titulo="Seguro de hogar"
          bajada={
            /* Apertura de /seguros-hogar.html, casi textual: "Seguramente,
               durante mucho tiempo, Ud. ha construído su hogar, haciendo de
               éste un lugar confortable donde guarda sus cosas más queridas,
               donde Ud. y su familia descansan, disfrutando de la tranquilidad
               que significa estar en casa." Va con la errata corregida y algo
               más corto. */
            <>
              Durante años construyó su casa: un lugar confortable, donde están
              sus cosas más queridas y donde su familia descansa. El seguro de
              hogar existe para que un incendio o un robo no borren eso de un
              día para el otro.
            </>
          }
        />

        <BloqueDefiniciones
          id="cubre-titulo"
          titulo="Qué cubre"
          bajada="La póliza se arma por partes y no todas vienen incluidas de fábrica. Estas son las que conviene revisar una por una."
          items={queCubre}
        />

        <BloqueDefiniciones
          id="mirar-titulo"
          titulo="Qué mirar antes de contratar"
          bajada="Dos pólizas de hogar con el mismo precio pueden dejarlo en lugares muy distintos el día del siniestro. Estas son las preguntas que le hacemos a cada compañía cuando cotizamos para usted."
          items={queMirar}
          fondo="blanco"
        />

        <CierreRamo ramo="hogar" />
      </main>
      <Footer />
      <ContactoFab />
    </>
  );
}
