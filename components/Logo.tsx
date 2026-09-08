/**
 * Único punto de cambio del logo.
 *
 * Se referencia el archivo del sitio actual con <img> plano en vez de
 * next/image, para no hacer pasar el optimizador de Next por un servidor
 * ajeno. Para producción: bajar charrutti-logo.png a /public y apuntar acá.
 *
 * El PNG es 299x57, paleta con transparencia. Su tinta más oscura es un gris
 * #858484: por eso el header va sobre carbón y no sobre papel. Sobre fondo
 * claro el logo se lava.
 */
const LOGO_SRC =
  "https://www.charruttiseguros.com.uy/assets/img/charrutti-logo.png";

export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGO_SRC}
      alt="Charrutti Seguros"
      width={299}
      height={57}
      className={className}
    />
  );
}
