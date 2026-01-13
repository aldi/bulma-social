import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';
import { socialProviders } from '@/data/socialProviders';

export const metadata = {
  title: 'Modularity - Bulma-Social Docs',
};

export default function ModularityPage() {
  const breadcrumbItems = [
    { label: 'Bulma-Social', href: '/' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Modularity', active: true },
  ];

  return (
    <>
      <Hero title="Modularity" subtitle="Import the social providers you really need" />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Breadcrumb items={breadcrumbItems} />
              <div className="content my-4">
                <p className="subtitle is-5">
                  Bulma-Social consists of <code>.css</code> files that you can
                  import <strong>individually.</strong>
                </p>
                <p className="subtitle is-5">
                  You can import them directly from <strong>node_modules</strong>:
                </p>
              </div>
              <CodeBlock language="javascript">
                {socialProviders.map(p => 
                  `import 'bulma-social/css/single/${p.code}/${p.code}.min.css';`
                ).join('\n')}
              </CodeBlock>
              <p className="subtitle is-5 mt-2">
                or link them from your favourite <strong>CDN provider</strong>.
              </p>
              <CodeBlock language="html">
                {socialProviders.map(p => 
                  `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-social@3/css/single/${p.code}/${p.code}.min.css">`
                ).join('\n')}
              </CodeBlock>
              <hr />
              <div className="column">
                <p className="title is-4">
                  Need multiple providers in one file?
                </p>
                <p className="subtitle is-5">
                  Learn how to build a custom CSS bundle with only the providers you need.
                </p>
                <Link
                  className="button is-link is-outlined is-light mt-2"
                  href="/docs/providers"
                >
                  <span>Explore All Providers</span>
                  <span className="icon">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
