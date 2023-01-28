import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Next.js WebApp</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="description" content="Front-End Software Development w/ Next.js" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="copyright" content="U3791411" />
        <meta name="language" content="en_US" />
        {/* Apple Web App Meta */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
}
