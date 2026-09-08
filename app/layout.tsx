import type { Metadata } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import { site, companias, ramos } from "@/lib/site";
import { ScrollAlTope } from "@/components/ScrollAlTope";
import "./globals.css";

/* Archivo: grotesca de Omnibus-Type (Buenos Aires). Es la voz del sitio.
   Source Serif 4: el cuerpo, callado. La serif es el texto, no el titular. */
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["500", "600", "700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Charrutti Seguros — Corredor de seguros en Montevideo, Uruguay",
    template: "%s — Charrutti Seguros",
  },
  description:
    "Corredor de seguros en Montevideo con más de 25 años en plaza. Cotizamos en las nueve compañías del mercado uruguayo y le recomendamos el seguro justo. Consultas al 2623 1000.",
  alternates: { canonical: "/" },

  /* Esta es una demo de pitch sobre la marca de un cliente que todavía no
     cerró. No tiene que indexarse: competiría con su sitio real y expondría
     una propuesta comercial que aún no es pública. */
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },

  openGraph: {
    type: "website",
    locale: "es_UY",
    siteName: "Charrutti Seguros",
    title: "Charrutti Seguros — Corredor de seguros en Montevideo, Uruguay",
    description:
      "Cotizamos su seguro en todas las compañías establecidas en el Uruguay y le decimos cuál le conviene. Más de 25 años en plaza.",
  },

  /* La demo se manda por WhatsApp: la tarjeta de previsualización es lo
     primero que ve el cliente, antes de abrir nada. Con "summary" salía una
     tarjeta chica y gris. La imagen la toma Next de app/opengraph-image.png. */
  twitter: {
    card: "summary_large_image",
    title: "Charrutti Seguros — Corredor de seguros en Montevideo, Uruguay",
    description:
      "Cotizamos su seguro en todas las compañías establecidas en el Uruguay y le decimos cuál le conviene.",
  },
};

/* Datos estructurados. El sitio actual no tiene ninguno, ni un solo <h1>,
   ni meta-description: por eso no aparece buscando "corredor de seguros
   uruguay". Esto es la base para que Google y los motores de respuestas
   entiendan a qué se dedican. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: site.nombre,
  url: site.url,
  email: site.email,
  telephone: site.telefonos.central.tel,
  description:
    "Corredor de seguros en Montevideo, Uruguay. Asesoramiento profesional e intermediación en la contratación de seguros, cotizando en todas las compañías establecidas en el país.",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.direccion.calle,
    addressLocality: site.direccion.ciudad,
    addressCountry: "UY",
  },
  areaServed: { "@type": "Country", name: "Uruguay" },
  knowsAbout: ramos.map((r) => `Seguro de ${r.nombre.toLowerCase()}`),
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name: "UNIT-ISO 9001",
  },
  // Sin foundingDate a propósito: no tenemos el año exacto, solo "más de 25 años".
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-UY" className={`${archivo.variable} ${sourceSerif.variable}`}>
      <body>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-carbon focus:px-4 focus:py-3 focus:font-display focus:text-white"
        >
          Ir al contenido
        </a>
        <ScrollAlTope />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
