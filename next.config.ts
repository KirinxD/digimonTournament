import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.digimoncard.io',
        port: '',
        pathname: '/images/**', // Esto permite cualquier imagen dentro de la carpeta /images
      },
    ],
  },
};

export default nextConfig;
