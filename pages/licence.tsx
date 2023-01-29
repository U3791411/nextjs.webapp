import Head from 'next/head';
import Layout, { meta } from '../ui/Layout';

export default function Licence() {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <section className="container">
        <div className="m-3">
          <small className="fw-bold text-uppercase">0p3ns0urce pr0j3ct5</small>
          <h1 className="text-uppercase">licence mit</h1>
          <small className="d-block mb-3">
            Copyright (c) 2023 U3791411
          </small>
          <small className="d-block mb-3">
            Permission is hereby granted, free of charge,
            to any person obtaining a copy of this software
            and associated documentation files (the "Software"),
            to deal in the Software without restriction, including
            without limitation the rights to use, copy, modify,
            merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom
            the Software is furnished to do so, subject to the
            following conditions:
          </small>
          <small className="d-block mb-3">
            The above copyright notice and this permission
            notice shall be included in all copies or
            substantial portions of the Software.
          </small>
          <small className="d-block mb-3">
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY
            OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
            LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
            FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
            SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
            CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
            OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
            IN CONNECTION WITH THE SOFTWARE OR THE USE OR
            OTHER DEALINGS IN THE SOFTWARE.
          </small>
        </div>
      </section>
    </Layout>
  );
}
