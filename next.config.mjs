/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ourtrips.s3.amazonaws.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };

export default nextConfig;
