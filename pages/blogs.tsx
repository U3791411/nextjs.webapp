import Head from 'next/head';
import { GetStaticProps } from 'next';
import Layout, { meta } from '../ui/Layout';
import Date from '../ui/Date';
import { getSortedByDateData } from '../lib/api';

type Variable = {
  tag: string;
  pagetitle: string;
};

export const variable: Variable = {
  tag: '0P3NS0URC3 PR0J3CT5',
  pagetitle: 'FE∆TURED BLOGS',
};

function BlogsPage({ markdownData }: {
  markdownData: {
    slug: string
    title: string
    date: string
  }[]
}) {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="container">
        <div className="m-3">
          <small className="fw-bold">{variable.tag}</small>
          <h1 className="mb-4">{variable.pagetitle}</h1>
          <ul>
            {markdownData.map(({ slug, title, date }) => (
              <li className="mb-2 pb-3" key={slug}>
                <h6 className="mb-0">{title}</h6>
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default BlogsPage;

export const getStaticProps: GetStaticProps = async () => {
  const markdownData = getSortedByDateData();

  return {
    props: {
      markdownData
    }
  };
}
