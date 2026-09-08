"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { site, ramos, hrefConsulta } from "@/lib/site";

/* Nav corto y de primer nivel. Hoy el sitio tiene dos menús distintos según la
   página, y ni Siniestro ni Glosario ni Links de interés están en ninguno de
   los dos. Acá "En caso de siniestro" es de primer nivel, que es lo que
   corresponde al caso de uso más urgente del negocio. */
const nav = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/#trayectoria" },
  { label: "En caso de siniestro", href: "/#siniestro" },
  { label: "Contacto", href: "/#contacto" },
];

export function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
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

  // El panel móvil atrapa el foco mientras está abierto.
  useEffect(() => {
    if (!menuAbierto) return;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>("a, button");
    focusables?.[0]?.focus();

    function onKeydown(e: KeyboardEvent) {
      if (e.key !== "Tab" || !focusables || focusables.length === 0) return;
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
    panel?.addEventListener("keydown", onKeydown);
    return () => {
      document.body.style.overflow = "";
      panel?.removeEventListener("keydown", onKeydown);
    };
  }, [menuAbierto]);

  return (
    <header className="sobre-carbon sticky top-0 z-50 bg-carbon text-white">
      <div className="mx-auto flex max-w-[1180px] items-center px-5 py-3.5 lg:px-8">
        {/* -my-1.5 py-1.5: agranda el area tactil a 44px sin crecer el header. */}
        <Link
          href="/"
          className="-my-1.5 shrink-0 py-1.5"
          aria-label="Charrutti Seguros, inicio"
        >
          <Logo className="h-8 w-auto lg:h-9" />
        </Link>

        <nav aria-label="Principal" className="mx-auto hidden lg:block">
          <ul className="flex items-center gap-7 font-display text-[0.9375rem] font-medium">
            <li>
              <Link href="/" className="hover:text-naranja">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/#trayectoria" className="hover:text-naranja">
                Nosotros
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
              <Link href="/#siniestro" className="hover:text-naranja">
                En caso de siniestro
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

          <button
            ref={botonMenuRef}
            type="button"
            onClick={() => setMenuAbierto(true)}
            aria-expanded={menuAbierto}
            aria-controls="menu-movil"
            className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span className="sr-only">Abrir menú</span>
            <svg width="24" height="16" viewBox="0 0 24 16" aria-hidden="true">
              <path d="M0 1h24M0 8h24M0 15h24" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {menuAbierto && (
        <div
          id="menu-movil"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-carbon px-5 pb-10 pt-3.5 lg:hidden"
        >
          <div className="flex items-center">
            <Logo className="h-8 w-auto" />
            <button
              type="button"
              onClick={() => {
                setMenuAbierto(false);
                botonMenuRef.current?.focus();
              }}
              className="-mr-2 ml-auto flex h-11 w-11 items-center justify-center"
            >
              <span className="sr-only">Cerrar menú</span>
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M1 1l18 18M19 1L1 19" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>

          <nav aria-label="Principal" className="mt-8">
            <ul className="font-display text-2xl">
              {nav.map((n) => (
                <li key={n.href} className="border-b border-white/15">
                  <Link
                    href={n.href}
                    onClick={() => setMenuAbierto(false)}
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
