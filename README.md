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
| `/siniestro` | Los nueve pasos y los teléfonos de las nueve compañías |
| `/seguros/automoviles` | Ficha de ramo |
| `/seguros/hogar` | Ficha de ramo |
| `/seguros/industria-y-comercio` | Ficha de ramo |
| `/seguros/accidentes-de-trabajo` | Ficha de ramo |
| `/glosario` | 107 términos, con buscador e índice A-Z |
| `/links` | Gestiones en línea por compañía |
| `/estado` | Inventario del proyecto. No está en el nav: se llega desde el pie |
| 404 | Página de error propia |

**Deliberadamente sin construir:** las otras seis fichas de ramo (Vida, SOA,
Notebooks, Embarcaciones, Transporte, Cultivo), la página "Nosotros" separada y
el área de clientes. Los seis ramos sin ficha abren el formulario de contacto
con el ramo ya elegido: no hay ancla muerta en ningún lado.

La lista completa y actualizada vive en **`/estado`**, que es la misma
información pero presentable en una reunión.

## Cómo se manejan los datos que faltan

Esta demo está incompleta a propósito, y la regla es una sola: **un dato que no
tenemos va en `null`, nunca un valor plausible.**

Un `null` no desaparece de la página. Lo levanta `<Pendiente />`
(`components/Pendiente.tsx`) y se muestra como marcador declarado —borde
punteado, fondo tenue, la leyenda de qué falta—. Esa es la diferencia entre una
demo incompleta y una demo rota: el hueco se lee como una decisión que le falta
al cliente, no como un error nuestro.

Los datos de contacto viven en **`src/config/contacto.ts`**, con las leyendas de
cada hueco al lado del dato que falta. Cargar el valor ahí arregla la página
sola: no hay que tocar ningún componente.

## Pendientes del cliente

Nada de esto está inventado en el código: o falta el dato, o falta confirmarlo.

| Dato | Estado | Dónde se carga |
|---|---|---|
| **Número de WhatsApp** | Falta. El botón se renderiza **deshabilitado**, con la leyenda "Pendiente: número de WhatsApp comercial". Nunca un `wa.me` con número inventado: falla apenas lo tocan. | `src/config/contacto.ts` → `whatsapp.numero`. Al cargarlo, el botón se convierte solo en el link real. |
| **Horario de atención** | Falta. Se muestra "Horario: a confirmar con Charrutti" con tratamiento de pendiente, en contacto y en el pie. | `src/config/contacto.ts` → `horario` |
| **Teléfonos de guardia** | 2623 1668 y 2623 1714 **no están publicados en el sitio actual**. Hay que confirmarlos: la home los empuja como la acción urgente. | `src/config/contacto.ts` → `telefonos.siniestros` |
| **Horarios de las líneas de asistencia** | El sitio actual no publica ninguno. No se afirma "24 h" en ningún lado: la tabla de `/siniestro` lleva un pendiente al pie. | `lib/site.ts` → `pendienteAsistencia` |
| **Revisión legal del glosario** | Varias definiciones citan la ley **17.418, que es argentina**, y nombran un regulador que no es el uruguayo. Están marcadas una por una en la página. | `lib/glosario.ts` → campo `revisar` |
| **Montos en UR de accidentes de trabajo** | Las multas del art. 48 y los códigos de condición especial son los que publica el sitio actual, sin fecha. Verificar contra las condiciones vigentes del BSE. | `app/seguros/accidentes-de-trabajo/page.tsx` |
| **Links de AIG, MetLife, Berkley y HDI** | Las otras cinco compañías tienen gestiones publicadas; estas cuatro no. Se listan igual, con el hueco declarado. | `lib/links.ts` → campo `pendiente` |
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

Y antes de eso, cerrar los pendientes de la tabla de arriba. `/estado` los lista
todos, con el detalle de cuáles son trabajo nuestro y cuáles dependen de que
Charrutti nos pase un dato.

## El formulario no envía nada

`components/ContactForm.tsx` hace `preventDefault()` y cambia a un estado de
éxito visual. No hay endpoint, ni servicio de mail, ni almacenamiento. Es
intencional: la demo muestra el patrón, no la funcionalidad.

## Dónde se cambian las cosas

| Archivo | Qué tiene |
|---|---|
| `src/config/contacto.ts` | Teléfonos, correo, dirección, horario, WhatsApp y las leyendas de cada hueco |
| `lib/site.ts` | Las nueve compañías, los diez ramos agrupados, los pasos de siniestro, los teléfonos de asistencia y las preguntas frecuentes |
| `lib/glosario.ts` | Los 107 términos |
| `lib/links.ts` | Las gestiones en línea por compañía |
| `components/Pendiente.tsx` | Cómo se ve un hueco declarado. Un solo lugar |

## Decisiones que conviene no romper

- **La paleta sale del logo, muestreada pixel por pixel.** El naranja `#EE9714`
  es el tono dominante del wordmark; el gris `#8C8B8B` es el de "SEGUROS" y es
  neutro (desviación R−B = 1), por eso la base de la página es neutra y no
  crema. Está documentado en `app/globals.css` con las reglas de contraste
  medidas.
- **El naranja nunca es texto sobre fondo claro** (2.2:1). Es superficie.
- **Hay dos cosas que se mueven solas, y cada una tiene su regla.** La hoja
  comparativa del hero se arma en 1460ms, una sola vez: dura menos de cinco
  segundos, así que no necesita control. El desfile de compañías es continuo e
  infinito, y por eso **lleva un botón de pausa que no hay que sacar** — sin
  él, el sitio incumpliría WCAG 2.2.2 (nivel A). Todo lo demás se mueve solo
  como respuesta a una acción.
- **Las dos ignoran `prefers-reduced-motion` a propósito.** Antes lo
  respetaban, y el efecto era que dos personas abrían el mismo sitio y veían
  cosas distintas sin saber por qué, porque casi nadie sabe que tiene esa
  opción prendida en Windows. El razonamiento completo, caso por caso, está en
  `app/globals.css`. El scroll suave sí se sigue apagando.
- **Ningún precio, ninguna prima.** Un corredor no puede dar una cotización
  vinculante desde una web. La comparativa del hero usa Compañía A / B / C y
  está rotulada como ejemplo ilustrativo.
- **"Nueve" siempre calificado por CON QUIÉN, nunca por CUÁNTAS HAY.** El BCU
  tiene diecisiete aseguradoras autorizadas; nueve son con las que Charrutti
  trabaja. Se dice "las nueve compañías con las que trabajamos". Nunca "las
  nueve del mercado uruguayo" ni "todas las establecidas en el Uruguay": las dos
  cosas son falsas y un cliente del rubro las detecta en el primer vistazo. La
  regla completa está en `respaldo`, en `lib/site.ts`.
- **Un dato que falta va en `null` y se muestra con `<Pendiente />`.** Nunca un
  valor plausible, nunca un hueco escondido. Ver "Cómo se manejan los datos que
  faltan", más arriba.
