// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   experimental: {
//     serverActions: {
//       bodySizeLimit: undefined,
//       allowedOrigins: undefined,
//     },
//   },
  
// };

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Devopsfarm</title>
        <meta name="description" content="Welcome to Devopsfarm" />
      </Head>
      <h1>Welcome to Devopsfarm</h1>
    </>
  );
}
