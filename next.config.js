export default {
  images: { unoptimized: true },
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
