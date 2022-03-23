import { Html, Head, Main, NextScript } from "next/document";

const _document = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-home font-ubuntu text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default _document;
