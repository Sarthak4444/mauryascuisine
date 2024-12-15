// next.config.mjs

export const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.cactusclubcafe.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'mauryascuisine.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'storage.googleapis.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: "encrypted-tbn0.gstatic.com",
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  