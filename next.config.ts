/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allows images from any HTTPS domain
      },
    ],
  },
};

export default nextConfig;
