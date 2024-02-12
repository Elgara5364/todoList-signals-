/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [
      ["@preact-signals/safe-react/swc", {} /* plugin options here */],
    ],
  },
};

export default nextConfig;
