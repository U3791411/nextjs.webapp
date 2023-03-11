import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

type Meta = {
  type: string;
  url: string;
  author: string;
  encoding: string;
  viewport: string;
  title: string;
  description: string;
  lang: string;
  edge: string;
  chrome: string;
  tag: string;
};

export const meta: Meta = {
  type: 'Website',
  url: 'http://localhost:3000',
  author: 'U3791411',
  encoding: 'utf-8',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  title: 'SOFTW∆REDEV.IO',
  description: 'Front-end Software Development w/ Next.js',
  lang: 'en_US',
  edge: 'IE=edge',
  chrome: 'chrome=1',
  tag: '0P3NS0URC3 PR0J3CT5',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta charSet={meta.encoding} />
        <meta name="viewport" content={meta.viewport} />
        <meta name="description" content={meta.description} />
        <meta name="author" content={meta.author} />
        <meta name="designer" content={meta.author} />
        <meta name="copyright" content={meta.author} />
        <meta name="language" content={meta.lang} />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        {/* Apple Web App Meta */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        {/* Internet Explorer Meta */}
        <meta httpEquiv="X-UA-Compatible" content={meta.edge} />
        <meta httpEquiv="X-UA-Compatible" content={meta.chrome} />
        <meta httpEquiv="Page-Enter" content="RevealTrans(Duration=2.0,Transition=2)" />
        <meta httpEquiv="Page-Exit" content="RevealTrans(Duration=3.0,Transition=12)" />
        <meta name="mssmarttagspreventparsing" content="true" />
        <meta name="msapplication-starturl" content={meta.url} />
        <meta name="msapplication-window" content="width=800;height=600" />
        <meta name="msapplication-navbutton-color" content="black" />
        <meta name="application-name" content={meta.title} />
        <meta name="msapplication-tooltip" content="SOFTW∆REDEV's WebApp" />
        {/* OpenGraph Meta */}
        <meta name="og:title" content={meta.title} />
        <meta name="og:type" content={meta.type} />
        <meta name="og:url" content={meta.url} />
        <meta name="og:site_name" content={meta.title} />
        <meta name="og:description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
