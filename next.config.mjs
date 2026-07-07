/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/products/acoustic-linear-lights/ko-xym-0164-linear-baffle",
        destination: "/products/acoustic-linear-lights/ko-xym-0164-acoustic-linear-light",
        permanent: true
      },
      {
        source: "/products/acoustic-linear-lights/ko-xym-0146-hexagonal-panel",
        destination: "/products/acoustic-linear-lights/ko-xym-0146-acoustic-linear-light",
        permanent: true
      },
      {
        source: "/products/acoustic-pendant-lights/ko-xym-0210b-ring-pendant",
        destination: "/products/acoustic-linear-lights/ko-xym-0210b-acoustic-linear-light",
        permanent: true
      },
      {
        source: "/products/acoustic-pendant-lights/ko-xym-0134-ribbed-pendant",
        destination: "/products/acoustic-pendant-lights/ko-xym-0134-acoustic-pendant-light",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
