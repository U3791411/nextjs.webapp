import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout, { meta } from '../../ui/Layout';
import Date from '../../ui/Date';
import { getSlug, getMarkdownData } from '../../lib/api';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlug();

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getMarkdownData(params?.slug as string);

  return { props: { postData } };
}

export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <Layout>

      <Head>
        <title>{postData.title}</title>
      </Head>

      <div className="container">
        <div className="m-3">
          <article>

            <small>{meta.tag}</small>

            <h1 className="display-5">{postData.title}</h1>

            <small>
              <Date dateString={postData.date} />
            </small>

            <hr className="mb-4" />

            <div
              dangerouslySetInnerHTML={
                { __html: postData.contentHtml }
              }
            />

          </article>
        </div>
      </div>

    </Layout>
  );
}
