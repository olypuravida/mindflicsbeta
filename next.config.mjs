/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //output: 'standalone',

  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{kebabCase}}',
    },
  },

  sassOptions: {
    includePaths: [
      './src/**/*.scss',
      './src/**/*.sass',
    ],
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.trvl-media.com',
      },
    ],
  },

}

export default nextConfig
