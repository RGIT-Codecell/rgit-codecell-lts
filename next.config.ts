import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'rgitcess.netlify.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd8it4huxumps7.cloudfront.net',
        port: '',
        pathname: '/**',
      }
    ],
  },
  async rewrites() {
    return [
{
source: "/codertine-26",
destination: "https://codertine.vercel.app/",
},
{
source: "/codertine-26/:path*",
destination: "https://codertine.vercel.app/:path*",
},
];
},
};

export default nextConfig;
