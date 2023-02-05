import Head from 'next/head';
import Layout, { meta } from '../ui/Layout';

export const pageTitle: string = 'SOFTW∆REDEV';
export const version: string = 'Version 1.0.0';

function HomePage() {
  return (
    <Layout>

      <Head>
        <title>{meta.title}</title>
      </Head>

      <div className="container-100vh">
        <div className="center-xy">

          <small className="fw-bold">{meta.tag}</small>

          <h1 className="mb-4">{pageTitle}</h1>

          <a
            className="btn btn-outline-light text-capitalize fw-bold"
            href="/"
          > coming soon
          </a>

          <div className="d-flex justify-content-end mt-5">
            <small className="fw-bold">
              &#x1F4E6; {version}
            </small>
          </div>

        </div>
      </div>

    </Layout>
  );
}

export default HomePage;
