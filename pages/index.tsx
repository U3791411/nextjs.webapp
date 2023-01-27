import Head from 'next/head';
import Layout from '../ui/Layout';

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Next.js WebApp</title>
      </Head>
      <div>Welcome to Next.js!</div>
    </Layout>
  );
}

export default HomePage;
