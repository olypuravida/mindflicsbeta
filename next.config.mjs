/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',

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

  experimental: {
    serverComponentsExternalPackages: ['sequelize'],
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.trvl-media.com',
      },
    ],
  },

  webpack(config) {
    config.ignoreWarnings = [{
      module: /sequelize/,
      message: /Module not found|dependency is an expression|is not a exported from/
    }]

    return config
  },

  async headers() {
    return [
        {
            // matching all API routes
            source: '/api/:path*',
            headers: [
                { key: 'Access-Control-Allow-Credentials', value: 'true' },
                { key: 'Access-Control-Allow-Origin', value: 'https://users-roan-eta.vercel.app' }, // replace this your actual origin
                { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
                { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
            ]
        }
    ]
  }
}

export default nextConfig
