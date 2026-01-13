import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';

export const metadata = {
  title: 'Customize - Bulma-Social Docs',
};

export default function CustomizePage() {
  const breadcrumbItems = [
    { label: 'Bulma-Social', href: '/' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Customization', active: true },
  ];

  return (
    <>
      <Hero title="Customization" subtitle="Build a custom CSS bundle with only the providers you need" />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Breadcrumb items={breadcrumbItems} />
              <div className="my-4">
                <p className="subtitle is-5 mb-3">
                  Bulma-Social uses a modular SASS architecture for managing provider colors:
                </p>
                <ul className="subtitle is-6 mb-4">
                  <li className="pb-3">
                    <code>sass/utilities/_providers.scss</code> — Base provider color definitions
                  </li>
                  <li className="pb-3">
                    <code>sass/utilities/_derived.scss</code> — Color generation functions (light, dark, inverted variants)
                  </li>
                  <li className="pb-3">
                    <code>sass/social-providers/_all.scss</code> — Combines all providers into one stylesheet
                  </li>
                </ul>
                <p className="subtitle is-5 mb-5">
                  Follow these steps to create your own customized stylesheet:
                </p>
                <p className="title is-3 mb-2">Steps to follow:</p>
                <ol className="subtitle is-5">
                  <li className="pb-2">
                    Download or clone Bulma-Social from <strong>Github</strong>
                  </li>
                  <li className="pb-2">
                    Open the <strong>Bulma-Social</strong> folder in your favourite Code Editor
                  </li>
                  <li className="pb-2">
                    Open <code>sass/utilities/_providers.scss</code> to modify provider colors
                  </li>
                  <li className="pb-4">
                    Edit the <strong>$providers</strong> map — add, remove, or modify colors:
                  </li>
                </ol>
                <CodeBlock className="mb-3" language="scss">{`// sass/utilities/_providers.scss
$providers: (
  "apple": hsl(0, 0%, 0%),
  "facebook": hsl(213.9, 89.3%, 52.2%),
  "twitter": hsl(202.8, 89.1%, 53.1%),
  "github": hsl(210, 12.2%, 16.1%),
  // Add or remove providers as needed
) !default;`}</CodeBlock>
                <p className="subtitle is-6 mb-4">
                  The <code>_derived.scss</code> file automatically generates light, dark, and inverted color variants:
                </p>
                <CodeBlock className="mb-3" language="scss">{`// sass/utilities/_derived.scss
@use "providers" as p;
@use "functions" as fn;

@function build-provider-colors($provider-list: p.$providers) {
  $colors: ();
  @each $name, $color in $provider-list {
    $colors: map.set($colors, $name, (
      $color,
      fn.findColorInvert($color),
      fn.findLightColor($color),
      fn.findDarkColor($color)
    ));
  }
  @return $colors;
}

$all-provider-colors: build-provider-colors() !default;`}</CodeBlock>
                <ol className="subtitle is-5" start={5}>
                  <li className="pt-2">
                    Save the file
                  </li>
                  <li className="pt-2">
                    Open your console and run <code className="has-background-dark has-text-white">npm run build</code>
                  </li>
                  <li className="py-2">
                    Done! Your files are ready for use in the CSS folder.
                  </li>
                </ol>
                <Link
                  className="button is-link is-outlined is-light mt-2"
                  href="/"
                >
                  <span>Back to homepage</span>
                  <span className="icon">
                    <i className="fa-solid fa-home"></i>
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
