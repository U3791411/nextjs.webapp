import Head from 'next/head';
import Layout, { meta } from '../ui/Layout';

type Variable = {
  tag: string;
  company: string;
  version: string;
};

export const variable: Variable = {
  tag: '0P3NS0URC3 PR0J3CT5',
  company: 'SOFTW∆REDEV',
  version: 'Version 1.0.0',
};

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="container-100vh">
        <div className="center-xy">
          <small className="fw-bold">{variable.tag}</small>
          <h1 className="mb-4">{variable.company}</h1>
          <a className="btn btn-outline-light text-capitalize fw-bold" href="/">
            coming soon
          </a>
          <div className="d-flex justify-content-end mt-5">
            <small className="fw-bold">&#x1F4E6; {variable.version}</small>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
