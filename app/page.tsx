import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Companias } from "@/components/Companias";
import { SiniestroBand } from "@/components/SiniestroBand";
import { SiniestroStrip } from "@/components/SiniestroStrip";
import { RamosGrid } from "@/components/RamosGrid";
import { PorQueCorredor } from "@/components/PorQueCorredor";
import { Trayectoria } from "@/components/Trayectoria";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";
import { ContactoFab } from "@/components/ContactoFab";
import { preguntas } from "@/lib/site";

/* Las mismas cuatro preguntas del bloque "por qué un corredor", en JSON-LD.
   Sin contenido duplicado: es el bloque que ya está en la página, marcado para
   que Google y los motores de respuestas lo puedan citar. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: preguntas.map((p) => ({
    "@type": "Question",
    name: p.q,
    acceptedAnswer: { "@type": "Answer", text: p.a },
  })),
};

export default function Home() {
  return (
    <>
      <Header />
      <SiniestroStrip />
      <main id="contenido">
        <Hero />
        <Companias />
        {/* El bloque de siniestro va acá arriba a propósito: es el caso de uso
            más urgente y el que hoy está peor resuelto en el sitio. */}
        <SiniestroBand />
        <RamosGrid />
        <PorQueCorredor />
        <Trayectoria />
        <Contacto />
      </main>
      <Footer />
      <ContactoFab />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
