/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 60,
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      port: '',
        pathname: '**',
      },
    ],
    domains: ['loremflickr.com', 'cloudflare-ipfs.com', 'avatars.githubusercontent.com'],
  },
};

export default nextConfig;
