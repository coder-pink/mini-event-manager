// import { env } from '@/env';
// import { withCMS } from '@repo/cms/next-config';
// import { withToolbar } from '@repo/feature-flags/lib/toolbar';
// import { config, withAnalyzer } from '@repo/next-config';
// import { withLogging, withSentry } from '@repo/observability/next-config';
// import type { NextConfig } from 'next';

// let nextConfig: NextConfig = withToolbar(withLogging(config));

// nextConfig.images?.remotePatterns?.push({
//   protocol: 'https',
//   hostname: 'assets.basehub.com',
// });

// if (process.env.NODE_ENV === 'production') {
//   const redirects: NextConfig['redirects'] = async () => [
//     {
//       source: '/legal',
//       destination: '/legal/privacy',
//       statusCode: 301,
//     },
//   ];

//   nextConfig.redirects = redirects;
// }

// if (env.VERCEL) {
//   nextConfig = withSentry(nextConfig);
// }

// if (env.ANALYZE === 'true') {
//   nextConfig = withAnalyzer(nextConfig);
// }

// export default withCMS(nextConfig);



// import { env } from '@/env';
// import { withToolbar } from '@repo/feature-flags/lib/toolbar';
// import { config, withAnalyzer } from '@repo/next-config';
// import { withLogging, withSentry } from '@repo/observability/next-config';
// import type { NextConfig } from 'next';

// let nextConfig: NextConfig = withToolbar(withLogging(config));

// nextConfig.images?.remotePatterns?.push({
//   protocol: 'https',
//   hostname: 'assets.basehub.com',
// });

// if (process.env.NODE_ENV === 'production') {
//   const redirects: NextConfig['redirects'] = async () => [
//     {
//       source: '/legal',
//       destination: '/legal/privacy',
//       statusCode: 301,
//     },
//   ];

//   nextConfig.redirects = redirects;
// }

// if (process.env.VERCEL) {
//   nextConfig = withSentry(nextConfig);
// }

// if (process.env.ANALYZE === 'true') {
//   nextConfig = withAnalyzer(nextConfig);
// }

// // 🚀 Removed withCMS wrapper
// export default nextConfig;


// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'assets.basehub.com',
//       },
//     ],
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
