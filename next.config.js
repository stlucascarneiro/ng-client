/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/landing',
        permanent: true
      }
    ]
  }
}
  
module.exports = nextConfig