import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Next.js WebApp</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="description" content="Front-End Software Development w/ Next.js" />
        <meta name="author" content="U3791411" />
        <meta name="designer" content="U3791411" />
        <meta name="copyright" content="U3791411" />
        <meta name="language" content="en_US" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        {/* Apple Web App Meta */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        {/* Internet Explorer Meta */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Page-Enter" content="RevealTrans(Duration=2.0,Transition=2)" />
        <meta httpEquiv="Page-Exit" content="RevealTrans(Duration=3.0,Transition=12)" />
        <meta name="mssmarttagspreventparsing" content="true" />
        <meta httpEquiv="X-UA-Compatible" content="chrome=1" />
        <meta name="msapplication-starturl" content="http://localhost:3000/blogs" />
        <meta name="msapplication-window" content="width=800;height=600" />
        <meta name="msapplication-navbutton-color" content="black" />
        <meta name="application-name" content="Next.js WebApp" />
        <meta name="msapplication-tooltip" content="SOFTW∆REDEV's Blog" />
        <link rel="icon" href="/favicon.ico" />
        {/* OpenGraph Meta */}
        <meta name="og:title" content="Next.js WebApp" />
        <meta name="og:type" content="Website" />
        <meta name="og:url" content="http://localhost:3000" />
        <meta name="og:site_name" content="SOFTW∆REDEV.IO" />
        <meta name="og:description" content="Front-End Software Development w/ Next.js" />
      </Head>
      <main>{children}</main>
    </>
  );
}
