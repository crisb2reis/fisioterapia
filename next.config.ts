import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Ajuste o basePath se o repositório for diferente.
  // Utilizando 'Fisioterapia' conforme o padrão de pastas para o GitHub Pages.
  basePath: '/Fisioterapia',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
