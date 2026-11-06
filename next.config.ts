import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.4.23", "samuels-macbook-pro.tail3647b1.ts.net", "localhost", "127.0.0.1"],
  // Landings de campaña en HTML estático: public/<slug>/index.html → solinsa.mx/<slug>
  async rewrites() {
    return [{ source: "/cierre-anio", destination: "/cierre-anio/index.html" }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
