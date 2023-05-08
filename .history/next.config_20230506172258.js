/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.themoviedb.org',
        port: '',
        pathname: '/3/movie',
      },
    ],
  },
}

module.exports = nextConfig
