# Charrutti Seguros — demo de pitch

Rediseño de la home de [charruttiseguros.com.uy](https://www.charruttiseguros.com.uy),
más una ficha de ramo y un 404. **No es la web final ni un MVP**: es una pieza de
pitch que se manda sin compromiso.

## Cómo levantarlo

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm start   # producción
```

Stack: Next.js 16 (App Router) + Tailwind CSS 4. Sin CMS, sin base de datos,
sin backend.

## Qué está construido

| | |
|---|---|
| `/` | Home completa |
| `/seguros/automoviles` | La única ficha de ramo, como muestra del patrón |
| 404 | Página de error propia |

**Deliberadamente sin construir:** las otras nueve fichas de ramo, la página
"Nosotros" separada, el glosario (~130 términos), los links de interés, la
página completa de siniestro y el área de clientes. Todo eso queda enlazado o
mencionado, sin destino.

## Pendientes del cliente

Nada de esto está inventado en el código: o falta el dato, o falta confirmarlo.

| Dato | Estado | Dónde se carga |
|---|---|---|
| **Número de WhatsApp** | Falta. Mientras tanto el sitio **no ofrece WhatsApp en ningún lado**: un `wa.me` con número inventado falla apenas lo tocan. Todo apunta al teléfono real. | `lib/site.ts` → `site.whatsapp.numero`. Al cargarlo, el botón flotante y la fila de contacto vuelven solos. |
| **Horario de atención** | Dice "Lunes a viernes" a secas. Falta la franja horaria. | `lib/site.ts` → `site.horarios` |
| **Logos de las nueve compañías** | Son marcas de texto. Los PNG del sitio actual **no** se hotlinkean. Reemplazar por los archivos reales, en monocromo. | `components/Companias.tsx` |
| **Logo de Charrutti** | Se referencia desde el sitio actual. Para producción hay que bajarlo a `/public`. | `components/Logo.tsx` |
| **Certificación UNIT-ISO 9001** | Va sin número de versión. La web actual dice `:2008`, que está obsoleta, y no confirmamos si recertificaron. | `lib/site.ts` → `site.certificacion` |
| **Área de Clientes** | El portal es de Broker Solutions. El cliente no confirmó si lo tiene implementado ni a qué apunta. | `lib/site.ts` → `site.areaClientes` |
| **Cuenta de X** | El sitio actual todavía muestra el pajarito de Twitter. Acá va el ícono de X, pero falta confirmar si la cuenta sigue activa. | `lib/site.ts` → `site.redes.x` |
| **Año de fundación** | No se pone. Solo "más de 25 años en plaza", que es lo verificado. | — |
| **Testimonios, cantidad de clientes, reseñas** | Sin datos reales, el bloque no existe. No se inventa ninguno. | — |
| **Imagen OG** | Generada con el logo real sobre el fondo de marca. Si cambia el mensaje principal, hay que regenerarla. | `app/opengraph-image.png` |

## Antes de publicarlo como sitio real

Esta demo está **bloqueada para buscadores** a propósito: es la marca de un
cliente que todavía no cerró, y no debería competir con su sitio actual ni
exponer una propuesta comercial que aún no es pública.

Para darla vuelta hay que tocar tres cosas:

1. `app/robots.ts` — hoy tiene `Disallow: /`
2. `app/layout.tsx` — sacar el bloque `robots: { index: false }`
3. `lib/site.ts` — `site.url` apunta al dominio de la demo, no al del cliente

## El formulario no envía nada

`components/ContactForm.tsx` hace `preventDefault()` y cambia a un estado de
éxito visual. No hay endpoint, ni servicio de mail, ni almacenamiento. Es
intencional: la demo muestra el patrón, no la funcionalidad.

## Dónde se cambian las cosas

Casi todo lo que el cliente podría querer editar vive en **`lib/site.ts`**:
teléfonos, dirección, mail, las nueve compañías, los diez ramos agrupados, los
textos de siniestro y las preguntas frecuentes.

## Decisiones que conviene no romper

- **La paleta sale del logo, muestreada pixel por pixel.** El naranja `#EE9714`
  es el tono dominante del wordmark; el gris `#8C8B8B` es el de "SEGUROS" y es
  neutro (desviación R−B = 1), por eso la base de la página es neutra y no
  crema. Está documentado en `app/globals.css` con las reglas de contraste
  medidas.
- **El naranja nunca es texto sobre fondo claro** (2.2:1). Es superficie.
- **Hay un solo momento de movimiento en todo el sitio**: la hoja comparativa
  del hero, que se arma sola en 1460ms, una vez. Todo lo demás se mueve solo
  como respuesta a una acción.
- **Ningún precio, ninguna prima.** Un corredor no puede dar una cotización
  vinculante desde una web. La comparativa del hero usa Compañía A / B / C y
  está rotulada como ejemplo ilustrativo.
