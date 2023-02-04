import Head from 'next/head';
import Layout, { meta } from '../ui/Layout';

type Variable = {
  tag: string;
  pagetitle: string;
};

export const variable: Variable = {
  tag: '0P3NS0URC3 PR0J3CT5',
  pagetitle: 'FE∆TURED BLOGS',
};

function BlogsPage() {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="container">
        <div className="m-3">
          <small className="fw-bold">{variable.tag}</small>
          <h1 className="mb-4">{variable.pagetitle}</h1>
        </div>
      </div>
    </Layout>
  );
}

export default BlogsPage;
