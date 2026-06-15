import type { NextConfig } from "next";
// next.config.ts
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
// const nextConfig: NextConfig = {
//   poweredByHeader: false
// };

// export default nextConfig;
