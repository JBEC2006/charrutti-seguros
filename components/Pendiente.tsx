/**
 * El marcador de hueco declarado.
 *
 * Esta demo está incompleta a propósito, y eso solo funciona si los huecos se
 * distinguen de los errores. Un dato que falta y se esconde parece un olvido;
 * un dato que falta y se muestra inventado es peor. Este componente es la
 * tercera opción: el hueco se declara, se nombra y se ve que alguien lo puso
 * ahí a mano.
 *
 * Por qué borde punteado y no un color de alerta:
 *
 *  - El punteado es la convención de "provisorio" en cualquier herramienta de
 *    diseño. Se lee sin leyenda.
 *  - Un rojo o un amarillo de alerta diría "algo se rompió", que es
 *    exactamente lo contrario del mensaje.
 *  - No mete un color nuevo en la paleta: es carbón a baja opacidad sobre
 *    claro, y blanco a baja opacidad sobre carbón. El naranja de marca queda
 *    libre para lo que sí funciona.
 *
 * Todo lo pendiente del sitio pasa por acá. Si mañana se decide que los huecos
 * se marcan de otra forma, se cambia en un solo lugar.
 */

type Tono = "claro" | "oscuro";

/** El cuadradito punteado. Es lo que hace que se lea como marcador y no como texto gris. */
function Marca({ tono }: { tono: Tono }) {
  return (
    <span
      aria-hidden="true"
      className={
        "mt-[0.45em] h-2 w-2 shrink-0 border border-dashed " +
        (tono === "oscuro" ? "border-white/55" : "border-carbon/50")
      }
    />
  );
}

const caja: Record<Tono, string> = {
  claro: "border-carbon/30 bg-carbon/[0.035] text-carbon/70",
  oscuro: "border-white/30 bg-white/[0.06] text-white/70",
};

/**
 * Marcador de bloque. Va donde iría el dato.
 *
 * El prefijo "Pendiente:" no lo agrega el componente: viene en el texto, desde
 * `leyendaPendiente` en src/config/contacto.ts, para que la redacción de cada
 * hueco se decida en un solo archivo junto al dato que falta.
 */
export function Pendiente({
  children,
  tono = "claro",
  className = "",
}: {
  children: React.ReactNode;
  tono?: Tono;
  className?: string;
}) {
  return (
    <p
      className={
        "flex items-start gap-2.5 border border-dashed px-3.5 py-2.5 font-display text-[0.9375rem] font-medium leading-snug " +
        caja[tono] +
        (className ? " " + className : "")
      }
    >
      <Marca tono={tono} />
      <span>{children}</span>
    </p>
  );
}

/**
 * Marcador con forma de botón, deshabilitado.
 *
 * Para los casos donde lo que falta no es un dato suelto sino una acción: el
 * botón de WhatsApp sin número, por ejemplo. Se renderiza como <button
 * disabled> real y no como un <a> muerto, para que el navegador y el lector de
 * pantalla coincidan con lo que se ve: esto todavía no se puede tocar.
 *
 * `aria-describedby` no hace falta: la leyenda es el contenido accesible del
 * propio botón.
 */
export function BotonPendiente({
  children,
  tono = "claro",
  className = "",
}: {
  children: React.ReactNode;
  tono?: Tono;
  className?: string;
}) {
  return (
    <button
      type="button"
      disabled
      className={
        "flex w-full cursor-not-allowed items-center justify-center gap-2.5 border border-dashed px-5 py-3.5 text-center font-display text-[0.9375rem] font-medium leading-snug sm:w-auto " +
        caja[tono] +
        (className ? " " + className : "")
      }
    >
      <Marca tono={tono} />
      <span>{children}</span>
    </button>
  );
}

/**
 * Marcador en línea, para meter dentro de una celda de tabla o al lado de otro
 * texto sin romper el flujo. Mismo tratamiento, menos aire.
 */
export function PendienteInline({
  children,
  tono = "claro",
  className = "",
}: {
  children: React.ReactNode;
  tono?: Tono;
  className?: string;
}) {
  return (
    <span
      className={
        "inline-flex items-baseline gap-2 border border-dashed px-2.5 py-1 font-display text-[0.875rem] font-medium " +
        caja[tono] +
        (className ? " " + className : "")
      }
    >
      {children}
    </span>
  );
}
