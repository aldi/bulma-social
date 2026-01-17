import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';

export const metadata = {
  title: "Getting Started - Bulma-Social Docs",
};

export default function StartPage() {
  const breadcrumbItems = [
    { label: "Bulma-Social", href: "/" },
    { label: "Documentation", href: "/docs" },
    { label: "Getting Started", active: true },
  ];

  return (
    <>
      <Hero title="Getting Started" subtitle="1 CSS file to use Bulma-Social" />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Breadcrumb items={breadcrumbItems} />
              <p className="subtitle is-5 my-4">
                Choose your preferred installation method:
              </p>

              <div className="message is-warning">
                <div className="message-header">Requirement</div>
                <div className="message-body">
                  <p>
                    Bulma-Social is an add-on stylesheet for{" "}
                    <a href="https://bulma.io/" target="_blank" rel="noopener noreferrer">
                      Bulma
                    </a>
                    , so Bulma (<code>&gt;= 1.0.0</code>) must be installed and its
                    CSS loaded <strong>before</strong> Bulma-Social.
                  </p>
                </div>
              </div>

              <article className="media is-large">
                <div className="media-left">
                  <p className="title is-5">1</p>
                </div>
                <div className="media-content">
                  <p className="title is-5">
                    Use <strong>NPM</strong> <em>(recommended)</em>:
                  </p>
                  <div className="highlight-full header-code">
                    <CodeBlock language="bash">
                      npm install bulma-social
                    </CodeBlock>
                  </div>
                </div>
              </article>

              <article className="media is-large">
                <div className="media-left">
                  <p className="title is-5">2</p>
                </div>
                <div className="media-content">
                  <p className="title is-5">
                    Use the{" "}
                    <a href="https://www.jsdelivr.com/" target="_blank">
                      jsDelivr
                    </a>{" "}
                    <strong>CDN</strong>
                    <br />
                    <a href="https://www.jsdelivr.com/package/npm/bulma-social">
                      https://www.jsdelivr.com/package/npm/bulma-social
                    </a>
                  </p>
                  <CodeBlock language="html">{`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-social@3/css/all.min.css">`}</CodeBlock>
                </div>
              </article>

              <article className="media is-large">
                <div className="media-left">
                  <p className="title is-5">3</p>
                </div>
                <div className="media-content">
                  <p className="title is-5">
                    Download from the <strong>repository</strong>
                    <br />
                    <a href="https://github.com/aldi/bulma-social/tree/master/css">
                      https://github.com/aldi/bulma-social/tree/master/css
                    </a>
                  </p>
                </div>
              </article>

              <hr />

              <div className="message is-info">
                <div className="message-header">Font Awesome icons</div>
                <div className="message-body">
                  <p>
                    If you want to use icons with Bulma-Social, don&apos;t
                    forget to include{" "}
                    <a href="https://fontawesome.com">Font Awesome 7</a>:
                  </p>
                  <div className="highlight-full header-code">
                    <CodeBlock language="html">{`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7/css/all.min.css">`}</CodeBlock>
                  </div>
                </div>
              </div>

              <hr className="hr mb-0" />

              <p className="title is-3 pt-5">Starter Template</p>
              <p className="subtitle is-5">
                Copy this HTML template to get started immediately:
              </p>
              <div className="bd-snippet highlight-full header-code">
                <CodeBlock language="html">{`<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Social Buttons and Colors for Bulma!</title>
<!-- Bulma -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1/css/bulma.min.css">
<!-- Your preferred icon library here -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7/css/all.min.css">
<!-- Import all social provider styles from Bulma-Social -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-social@3/css/all.min.css">
</head>`}</CodeBlock>
              </div>

              <hr />

              <div className="column">
                <p className="title is-4">
                  Want a smaller bundle?
                </p>
                <p className="subtitle is-5">
                  Import only the social providers you actually need.
                </p>
                <Link
                  className="button is-link is-outlined is-light mt-2"
                  href="/docs/modularity"
                >
                  <span>Explore Modularity</span>
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
