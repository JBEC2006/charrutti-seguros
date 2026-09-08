/**
 * El vocabulario de movimiento del sitio, en un solo lugar.
 *
 * Todo lo que se mueve usa la misma curva y duraciones de la misma familia.
 * Es lo que hace que un sitio se sienta hecho por una persona y no ensamblado:
 * no es que cada animación sea linda, es que todas se mueven igual.
 *
 * LA CURVA
 * --------
 * easeOutQuint. Arranca rápido y frena largo, sin pasarse de largo ni rebotar.
 * Es la misma que ya usaban la hoja del hero y la hamburguesa del menú.
 *
 * Nada elástico, nada con rebote: esto es una correduría de seguros con
 * veinticinco años y una ISO 9001, no una app de fitness.
 */

export const CURVA = "cubic-bezier(0.22, 1, 0.36, 1)";

/** easeOutQuint, la versión en JS de la curva de arriba. */
const suavizar = (t: number) => 1 - Math.pow(1 - t, 5);

/**
 * Alto del header sticky. Si el destino no se corrige por esto, el título al
 * que saltamos queda tapado por la barra.
 * Coincide con el scroll-padding-top de globals.css.
 */
const ALTO_HEADER = 88;

/**
 * Lleva la página hasta un elemento, con curva propia.
 *
 * POR QUÉ NO ALCANZA `scroll-behavior: smooth`
 * --------------------------------------------
 * El scroll nativo del navegador no deja elegir curva ni duración, y la
 * duración la calcula por distancia sin techo. En el glosario, saltar de la A
 * a la V son unos 9000px: con el nativo eso es un viaje larguísimo en el que
 * la pantalla se convierte en un borrón y uno pierde de vista dónde está.
 *
 * Acá la duración está topeada en 720ms sin importar la distancia. Se siente
 * deliberado en un salto corto y sigue siendo corto en uno largo. De paso, un
 * recorrido acotado marea muchísimo menos que uno de varios segundos.
 *
 * SE PUEDE INTERRUMPIR
 * --------------------
 * Si la persona toca la rueda del mouse, la pantalla o una tecla mientras
 * viaja, la animación se cancela en el acto y le devuelve el control. Un
 * scroll automático que pelea contra el dedo del usuario es de las cosas más
 * irritantes que puede hacer una página.
 */
export function scrollSuaveA(
  destino: HTMLElement,
  { offset = ALTO_HEADER }: { offset?: number } = {},
) {
  const raiz = document.documentElement;
  const desde = window.scrollY;

  // Sin pasarse del fondo de la página: si no, la animación "termina" en un
  // punto al que el navegador nunca llega y el último tramo se ve trabado.
  const maximo = document.body.scrollHeight - window.innerHeight;
  const hasta = Math.min(
    Math.max(desde + destino.getBoundingClientRect().top - offset, 0),
    Math.max(maximo, 0),
  );

  const distancia = Math.abs(hasta - desde);
  if (distancia < 2) return;

  // Entre 380 y 720ms. Un salto corto no puede tardar lo mismo que uno largo,
  // pero ninguno puede convertirse en un viaje.
  const duracion = Math.min(720, Math.max(380, 240 + distancia * 0.28));

  /* El scroll-behavior: smooth del CSS pelearía contra esto: el navegador
     intentaría suavizar cada uno de los pasos que ya vienen suavizados, y el
     resultado es una animación que se arrastra. Se apaga mientras dura. */
  const comportamientoPrevio = raiz.style.scrollBehavior;
  raiz.style.scrollBehavior = "auto";

  let cancelado = false;
  let cuadro = 0;

  const cancelar = () => {
    cancelado = true;
  };

  // passive: el navegador no tiene que esperar a ver si cancelamos el evento.
  window.addEventListener("wheel", cancelar, { passive: true });
  window.addEventListener("touchstart", cancelar, { passive: true });
  window.addEventListener("keydown", cancelar);

  const limpiar = () => {
    cancelAnimationFrame(cuadro);
    raiz.style.scrollBehavior = comportamientoPrevio;
    window.removeEventListener("wheel", cancelar);
    window.removeEventListener("touchstart", cancelar);
    window.removeEventListener("keydown", cancelar);
  };

  const inicio = performance.now();

  const paso = (ahora: number) => {
    if (cancelado) return limpiar();

    const t = Math.min((ahora - inicio) / duracion, 1);
    window.scrollTo(0, desde + (hasta - desde) * suavizar(t));

    if (t < 1) cuadro = requestAnimationFrame(paso);
    else limpiar();
  };

  cuadro = requestAnimationFrame(paso);
}

/**
 * Anima el alto de un bloque que se despliega o se pliega.
 *
 * El problema de siempre: `height: auto` no se puede transicionar, así que hay
 * que medir el alto real y animar hacia ese número. Acá se mide, se anima, y
 * al terminar se devuelve a `auto` para que el bloque siga siendo elástico si
 * cambia la pantalla o el texto.
 *
 * Devuelve una función de limpieza para el useEffect que lo llame.
 */
export function animarAlto(
  caja: HTMLElement,
  abierto: boolean,
  duracion = 340,
) {
  const alto = caja.scrollHeight;

  caja.style.overflow = "hidden";
  caja.style.transition = `height ${duracion}ms ${CURVA}`;
  caja.style.height = abierto ? "0px" : `${alto}px`;

  // Forzar un reflow: sin esto el navegador junta los dos valores en uno solo
  // y no hay transición, solo un salto.
  void caja.offsetHeight;

  caja.style.height = abierto ? `${alto}px` : "0px";

  const alTerminar = () => {
    // De vuelta a auto: el bloque tiene que poder crecer solo después.
    caja.style.height = abierto ? "auto" : "0px";
    caja.style.overflow = abierto ? "" : "hidden";
    caja.style.transition = "";
  };

  const t = window.setTimeout(alTerminar, duracion);
  return () => window.clearTimeout(t);
}
