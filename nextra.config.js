import React from 'react';
import { Logo } from 'components/logo';

export default {
  github: 'https://github.com/yearn/yearn',
  titleSuffix: ' – 🔵',
  logo: (
    <>
      <Logo height={36} />
      <span className=" font-extrabold hidden md:inline sr-only">Yearn Finance</span>
    </>
  ),
  head: () => (
    <>
      {/* Favicons, meta */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="DeFi Made 🔵"
      />
      <meta
        name="og:description"
        content="DeFi Made 🔵"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jaredpalmer" />
      <meta name="twitter:image" content="#" />
      <meta
        name="og:title"
        content="YFI: Modern TypeScript Package Development"
      />
      <meta name="og:url" content="${URL}" />
      <meta name="og:image" content="#" />
      <meta name="apple-mobile-web-app-title" content="YFI" />
      {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
        media="print"
        onload="this.media='all'"
      /> */}
    </>
  ),
  footer: ({ filepath }) => (
    <>
      <div className="mt-24 flex justify-between flex-col-reverse md:flex-row items-center md:items-end">
        <a
          href="https://jaredpalmer.com/?utm_source=YFI"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center no-underline text-current font-semibold"
        >
          <span className="mr-1">Development Governance</span>
        </a>
        <div className="mt-6" />
        <a
          className="text-sm"
          href={
            'https://github.com/sambacha/yearn-regime/tree/master' +
            filepath
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit this page on GitHub
        </a>
      </div>
    </>
  ),
};
