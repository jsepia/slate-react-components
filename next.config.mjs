// import createMDX from "@next/mdx";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// const withMDX = createMDX({
//   extension: /\.mdx?$/,
//   options: {
//     useDynamicImport: false,
//     // remarkPlugins: [
//     //   remarkToc,
//     // ],
//     rehypePlugins: [
//       rehypeSlug,
//       [
//         rehypeAutolinkHeadings,
//         {
//           behaviour: 'append',
//           properties: {
//             ariaHidden: true,
//             tabIndex: -1,
//             className: 'hash-link',
//           }
//         }
//       ]
//     ]
//   }
// })

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // experimental: {
  //   appDir: true,
  // },
  pageExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'md',
  ],
  i18n: {
    locales: ['en-US', 'ca-ES'],
    defaultLocale: 'en-US',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '9776',
        pathname: '/'
      },
      {
        protocol: 'https',
        hostname: 'beta.juliosepia.com',
        port: '',
        pathname: '/'
      },
      {
        protocol: 'https',
        hostname: 'juliosepia.com',
        port: '',
        pathname: '/'
      },
    ]
  }
}

export default nextConfig

// export default withMDX(nextConfig)
