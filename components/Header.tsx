"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "./Logo";
import { site, ramos, hrefConsulta } from "@/lib/site";

/* Nav corto y de primer nivel. Hoy el sitio tiene dos menús distintos según la
   página, y ni Siniestro ni Glosario ni Links de interés están en ninguno de
   los dos. Acá "En caso de siniestro" es de primer nivel, que es lo que
   corresponde al caso de uso más urgente del negocio.

   EL ORDEN SIGUE AL DE LA PÁGINA: siniestro (836px) -> seguros (~2000) ->
   trayectoria (3846) -> contacto (4292). Antes el nav iba Inicio, Nosotros,
   Seguros, Siniestro: recorrerlo de izquierda a derecha saltaba al fondo de
   la página, después subía, después volvía a bajar. Ahora avanza.

   "Seguros" no está en esta lista porque es el desplegable, y se intercala
   en su posición dentro del render. */
/* Marca efímera para saber que el clic en "Inicio" vino de otra página. */
const MARCA_INICIO = "charrutti:ir-al-inicio";

/* "En caso de siniestro" apuntaba a /#siniestro, la franja de la home, porque
   era todo lo que existía. Ahora hay página propia con los nueve pasos y los
   teléfonos de las nueve compañías, así que el ítem de nav lleva ahí. La
   franja de la home se queda: resuelve la llamada urgente sin navegar. */
const nav = [
  { label: "Inicio", href: "/" },
  { label: "En caso de siniestro", href: "/siniestro" },
  { label: "Nosotros", href: "/#trayectoria" },
  { label: "Contacto", href: "/#contacto" },
];

export function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const pathname = usePathname();

  /* Al aterrizar en la home viniendo de otra página, el navegador restaura la
     posición previa y quedábamos en el medio.

     La marca va en sessionStorage y no en un ref porque cada página renderiza
     su propio <Header>: al navegar, este componente se desmonta y se vuelve a
     montar, así que cualquier ref se perdería en el camino.

     Dos frames de espera alcanzan para pisar la restauración del navegador. */
  useEffect(() => {
    if (pathname !== "/") return;
    try {
      if (sessionStorage.getItem(MARCA_INICIO) !== "1") return;
      sessionStorage.removeItem(MARCA_INICIO);
    } catch {
      return; // modo privado o cookies bloqueadas: no pasa nada
    }
    requestAnimationFrame(() =>
      requestAnimationFrame(() => window.scrollTo({ top: 0 })),
    );
  }, [pathname]);

  /**
   * "Inicio" estaba roto en dos escenarios distintos:
   *
   *  - En la home ya scrolleada, hacer clic no hacía nada: para Next es la
   *    misma ruta, así que no navega ni mueve el scroll.
   *  - Viniendo de otra página, aterrizaba en el medio de la home en vez de
   *    arriba, porque el navegador restauraba la posición previa.
   *
   * Acá se resuelven los dos: si ya estamos en la home, se cancela la
   * navegación y se sube con scroll suave limpiando el hash; si venimos de
   * otra página, se deja navegar a Next y se fuerza el tope al llegar.
   */
  function irAlInicio(e: React.MouseEvent<HTMLAnchorElement>) {
    setMenuAbierto(false);

    if (window.location.pathname === "/") {
      e.preventDefault();
      if (window.location.hash) {
        window.history.replaceState(null, "", "/");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Venimos de otra página: Next todavía no navegó, así que no sirve
    // scrollear acá. Se deja la marca y el efecto de abajo lo hace al llegar.
    try {
      sessionStorage.setItem(MARCA_INICIO, "1");
    } catch {
      /* sin sessionStorage se pierde el ajuste fino, no la navegación */
    }
  }

  const [dropAbierto, setDropAbierto] = useState(false);
  const dropRef = useRef<HTMLLIElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const botonMenuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      setDropAbierto(false);
      if (menuAbierto) {
        setMenuAbierto(false);
        botonMenuRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuAbierto]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropAbierto(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  /* El panel móvil atrapa el foco mientras está abierto.
     El botón que cierra ahora vive en la barra, fuera del panel, así que va
     incluido a mano en el ciclo: si no, con teclado no habría forma de
     llegar a cerrar el menú. */
  useEffect(() => {
    if (!menuAbierto) return;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    const focusables = [
      ...(botonMenuRef.current ? [botonMenuRef.current] : []),
      ...Array.from(panel?.querySelectorAll<HTMLElement>("a, button") ?? []),
    ];
    focusables[0]?.focus();

    function onKeydown(e: KeyboardEvent) {
      if (e.key !== "Tab" || focusables.length === 0) return;
      const primero = focusables[0];
      const ultimo = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === primero) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primero.focus();
      }
    }
    /* Va en document y no en el panel: el boton que cierra esta fuera del
       panel, asi que un listener sobre el panel no veria su Tab. */
    document.addEventListener("keydown", onKeydown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeydown);
    };
  }, [menuAbierto]);

  return (
    <header className="sobre-carbon sticky top-0 z-50 bg-carbon text-white">
      <div className="mx-auto flex max-w-[1180px] items-center px-5 py-3.5 lg:px-8">
        {/* -my-1.5 py-1.5: agranda el area tactil a 44px sin crecer el header. */}
        <Link
          href="/"
          onClick={irAlInicio}
          className="-my-1.5 shrink-0 py-1.5"
          aria-label="Charrutti Seguros, inicio"
        >
          <Logo className="h-8 w-auto lg:h-9" />
        </Link>

        <nav aria-label="Principal" className="mx-auto hidden lg:block">
          <ul className="flex items-center gap-7 font-display text-[0.9375rem] font-medium">
            <li>
              <Link href="/" onClick={irAlInicio} className="hover:text-naranja">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/siniestro" className="hover:text-naranja">
                En caso de siniestro
              </Link>
            </li>
            <li ref={dropRef} className="relative">
              <button
                type="button"
                onClick={() => setDropAbierto((v) => !v)}
                aria-expanded={dropAbierto}
                className="flex items-center gap-1.5 hover:text-naranja"
              >
                Seguros
                <svg width="10" height="7" viewBox="0 0 10 7" aria-hidden="true">
                  <path
                    d="M1 1.5L5 5.5L9 1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </button>
              {dropAbierto && (
                <div className="absolute left-1/2 top-[calc(100%+0.95rem)] w-[18rem] -translate-x-1/2 border-t-2 border-naranja bg-white py-2 text-carbon shadow-[0_18px_44px_-14px_rgba(34,30,26,.5)]">
                  <ul>
                    {ramos.map((r) => (
                      <li key={r.nombre}>
                        <Link
                          href={r.href ?? hrefConsulta(r.slug)}
                          onClick={() => setDropAbierto(false)}
                          className="block px-5 py-2 font-display text-[0.9375rem] font-medium hover:bg-niebla"
                        >
                          {r.nombre}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link href="/#trayectoria" className="hover:text-naranja">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/#contacto" className="hover:text-naranja">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-4 lg:ml-0">
          <a
            href={"tel:" + site.telefonos.central.tel}
            className="hidden font-display text-lg font-bold tabular-nums hover:text-naranja xl:block"
          >
            {site.telefonos.central.display}
          </a>
          {/* Área de Clientes va como botón secundario, no como ítem de nav.
              PENDIENTE: el portal es de Broker Solutions y el cliente todavía
              no confirmó si lo tiene implementado. */}
          <a
            href={site.areaClientes}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-white/35 px-4 py-2 font-display text-sm font-medium hover:border-naranja hover:text-naranja lg:block"
          >
            Área de Clientes
          </a>

          {/* Un solo botón que alterna. Antes eran dos —la hamburguesa acá y
              una X adentro del panel—, y entre dos elementos distintos no hay
              transformación posible: uno desaparece y aparece el otro. */}
          <button
            ref={botonMenuRef}
            type="button"
            onClick={() => setMenuAbierto((v) => !v)}
            aria-expanded={menuAbierto}
            aria-controls="menu-movil"
            className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span className="sr-only">
              {menuAbierto ? "Cerrar menú" : "Abrir menú"}
            </span>
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              aria-hidden="true"
              className="hamburguesa"
              data-abierto={menuAbierto}
            >
              <line x1="0" y1="1" x2="24" y2="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="0" y1="8" x2="24" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="0" y1="15" x2="24" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* El panel arranca abajo de la barra (3.75rem = alto real en movil) y
          va en z-40, para que la barra con el logo y el boton-X queden
          visibles encima. Antes el panel tapaba todo y repetia ambos. */}
      {menuAbierto && (
        <div
          id="menu-movil"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
          className="fixed inset-x-0 bottom-0 top-[3.75rem] z-40 flex flex-col overflow-y-auto bg-carbon px-5 pb-10 lg:hidden"
        >
          <nav aria-label="Principal" className="mt-6">
            <ul className="font-display text-xl">
              {nav.map((n) => (
                <li key={n.href} className="border-b border-white/15">
                  <Link
                    href={n.href}
                    onClick={
                      n.href === "/" ? irAlInicio : () => setMenuAbierto(false)
                    }
                    className="block py-4"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-9 font-display text-sm font-medium text-white/55">Seguros</p>
            <ul className="mt-1 grid grid-cols-2 gap-x-6">
              {ramos.map((r) => (
                <li key={r.nombre} className="border-b border-white/15">
                  <Link
                    href={r.href ?? hrefConsulta(r.slug)}
                    onClick={() => setMenuAbierto(false)}
                    className="block py-3 font-display text-[0.9375rem] font-medium"
                  >
                    {r.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 space-y-3">
            <a
              href={"tel:" + site.telefonos.central.tel}
              className="sobre-naranja block bg-naranja px-5 py-4 text-center font-display text-lg text-carbon"
            >
              Llamar al {site.telefonos.central.display}
            </a>
            <a
              href={site.areaClientes}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-white/35 px-5 py-4 text-center font-display font-medium"
            >
              Área de Clientes
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
