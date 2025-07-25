import withLinaria, { LinariaConfig } from 'next-with-linaria';

const config: LinariaConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'mosaic.scdn.co',
        port: '',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.mp3$/,
        type: "asset/resource"
      }
    );

    return config;
  },
};

export default withLinaria(config);
