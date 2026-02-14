import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';

export const metadata = {
  title: 'Migration Guide - Bulma-Social Docs',
};

export default function MigrationPage() {
  const breadcrumbItems = [
    { label: 'Bulma-Social', href: '/' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Migration Guide', active: true },
  ];

  return (
    <>
      <Hero title="Migration Guide" subtitle="Upgrade safely from previous Bulma-Social versions" />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Breadcrumb items={breadcrumbItems} />

              <div className="message is-warning mt-4">
                <div className="message-header">What changed?</div>
                <div className="message-body">
                  <p>
                    Bulma-Social <code>v3.0.0</code> introduced breaking changes, and
                    <code> v2.0.0 </code>
                    changed output file paths. Follow the steps below based on your current version.
                  </p>
                </div>
              </div>

              <div className="content mt-5">
                <h2 className="title is-4">From 2.x to 3.x</h2>
                <ol className="subtitle is-5">
                  <li className="pb-3">
                    Update dependencies:
                  </li>
                </ol>
                <CodeBlock language="bash">{`npm install bulma-social@^3 bulma@^1`}</CodeBlock>

                <ol className="subtitle is-5" start={2}>
                  <li className="py-2">
                    Keep your CSS imports as-is (<code>css/all.min.css</code> and
                    <code> css/single/* </code>
                    paths are still valid in v3).
                  </li>
                  <li className="py-2">
                    If you want hover transitions, add <code>.is-animated</code> to each button.
                    In v3 transitions are opt-in.
                  </li>
                </ol>
                <CodeBlock language="html">{`<!-- Before (2.x: transitions enabled by default) -->
<a class="button is-facebook">
  <span>Continue with Facebook</span>
</a>

<!-- After (3.x: add .is-animated to enable transitions) -->
<a class="button is-facebook is-animated">
  <span>Continue with Facebook</span>
</a>`}</CodeBlock>

                <ol className="subtitle is-5" start={4}>
                  <li className="py-2">
                    If you import internal Sass files, update single-provider paths to:
                    <code> sass/social-providers/single/</code>
                  </li>
                </ol>
                <CodeBlock language="scss">{`// Before
@use "bulma-social/sass/social-providers/facebook";

// After
@use "bulma-social/sass/social-providers/single/facebook";`}</CodeBlock>

                <ol className="subtitle is-5" start={5}>
                  <li className="pt-2">
                    Remove any usage of <code>combineSocialProviders()</code>. Provider colors are now
                    centralized in <code>sass/utilities/_providers.scss</code> and generated via the
                    utilities pipeline.
                  </li>
                </ol>
              </div>

              <hr />

              <div className="content mt-5">
                <h2 className="title is-4">From 1.x to 2.x (and then to 3.x)</h2>
                <ol className="subtitle is-5">
                  <li className="pb-2">
                    Update your main CSS import path:
                  </li>
                </ol>
                <CodeBlock language="text">{`before: bin/bulma-social.min.css
after:  css/all.min.css`}</CodeBlock>

                <ol className="subtitle is-5" start={2}>
                  <li className="py-2">
                    Confirm your project uses Bulma <code>&gt;= 1.0.0</code>.
                  </li>
                  <li className="py-2">
                    Continue with the 2.x → 3.x checklist above.
                  </li>
                </ol>
              </div>

              <hr />

              <div className="content mt-5">
                <h2 className="title is-4">Verification Checklist</h2>
                <ul className="subtitle is-6">
                  <li>Your app builds without Sass import errors.</li>
                  <li>Buttons render with expected provider colors.</li>
                  <li>Transitions are enabled only where <code>.is-animated</code> is present.</li>
                  <li>No references remain to removed helper APIs.</li>
                </ul>
              </div>

              <div className="buttons mt-5">
                <Link className="button is-link is-outlined is-light" href="/docs/getting-started">
                  <span>Getting Started</span>
                  <span className="icon">
                    <i className="fa-solid fa-rocket"></i>
                  </span>
                </Link>
                <a
                  className="button is-link is-outlined"
                  href="https://github.com/aldi/bulma-social/blob/master/CHANGELOG.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Changelog</span>
                  <span className="icon">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
