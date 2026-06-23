/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
      },
    ],
    dangerouslyAllowSVG: true,
    unoptimized: true,  // ← this bypasses the private IP restriction
  },
};

export default nextConfig;
