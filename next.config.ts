import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
// const nextConfig: NextConfig = {
//   async headers() {
//     return [
//       {
//         source: '/r/:path*',
//         headers: [
//           {
//             key: 'Content-Type',
//             value: 'application/json',
//           },
//         ],
//       },
//     ];
//   },
//   trailingSlash: false,
// };
export default nextConfig;
