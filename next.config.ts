import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 genera AGENTS.md y CLAUDE.md por su cuenta. Es ruido en un repo
  // que se le entrega a un cliente.
  agentRules: false,

  // El logo se referencia directamente desde el sitio actual con <img> plano
  // (ver components/Logo.tsx). No se usa next/image para no depender del
  // optimizador contra un servidor ajeno. Para producción: bajar el archivo
  // a /public y servirlo local.
};

export default nextConfig;
