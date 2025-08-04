/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/carreras',
        destination: '/',
        permanent: true,
      },
      {
        source: '/test-vocacional-gratis',
        destination: '/',
        permanent: true,
      },
      {
        source: '/orientacion-vocacional',
        destination: '/',
        permanent: true,
      },
      {
        source: '/que-estudiar',
        destination: '/',
        permanent: true,
      },
      {
        source: '/explore',
        destination: '/',
        permanent: true,
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
