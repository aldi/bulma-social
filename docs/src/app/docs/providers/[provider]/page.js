import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { socialProviders, getProviderByCode } from '@/data/socialProviders';

export async function generateStaticParams() {
  return socialProviders.map((provider) => ({
    provider: provider.code,
  }));
}

export async function generateMetadata({ params }) {
  const { provider } = await params;
  const providerData = getProviderByCode(provider);
  if (!providerData) return { title: 'Not Found' };
  return {
    title: `${providerData.name} - Bulma-Social Docs`,
  };
}

export default async function ProviderPage({ params }) {
  const { provider } = await params;
  const providerData = getProviderByCode(provider);
  
  if (!providerData) {
    notFound();
  }

  const { icon, name } = providerData;

  const breadcrumbItems = [
    { label: 'Bulma-Social', href: '/' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Providers', href: '/docs/providers' },
    { label: name, active: true },
  ];

  return (
    <>
      <Hero title={name} subtitle={`Styles and examples for .is-${provider}`} />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Breadcrumb items={breadcrumbItems} />

              <div className="box">
                <p className="title is-4 mb-2">Button Variants</p>
                <p className="subtitle is-6 mb-4 is-gapless">
                  Available modifiers: <code>default</code>, <code>.is-outlined</code>, <code>.is-light</code>, <code>.is-dark</code>, <code>.is-inverted</code>
                </p>
                
                <div className="buttons is-gapless">
                  <a className={`button is-${provider}`}>
                    <span className="icon">
                      <i className={`fa-brands ${icon}`}></i>
                    </span>
                    <span>{name}</span>
                  </a>
                  <a className={`button is-${provider} is-outlined`}>
                    <span className="icon">
                      <i className={`fa-brands ${icon}`}></i>
                    </span>
                    <span>Outlined</span>
                  </a>
                  <a className={`button is-${provider} is-light`}>
                    <span className="icon">
                      <i className={`fa-brands ${icon}`}></i>
                    </span>
                    <span>Light</span>
                  </a>
                  <a className={`button is-${provider} is-dark`}>
                    <span className="icon">
                      <i className={`fa-brands ${icon}`}></i>
                    </span>
                    <span>Dark</span>
                  </a>
                  <a className={`button is-${provider} is-inverted`}>
                    <span className="icon">
                      <i className={`fa-brands ${icon}`}></i>
                    </span>
                    <span>Inverted</span>
                  </a>
                </div>

                <CodeBlock language="html">{`<a class="button is-${provider}">
  <span class="icon">
    <i class="fa-brands ${icon}"></i>
  </span>
  <span>${name}</span>
</a>
<a class="button is-${provider} is-outlined">
  <span class="icon">
    <i class="fa-brands ${icon}"></i>
  </span>
  <span>Outlined</span>
</a>
<a class="button is-${provider} is-light">
  <span class="icon">
    <i class="fa-brands ${icon}"></i>
  </span>
  <span>Light</span>
</a>
<a class="button is-${provider} is-dark">
  <span class="icon">
    <i class="fa-brands ${icon}"></i>
  </span>
  <span>Dark</span>
</a>
<a class="button is-${provider} is-inverted">
  <span class="icon">
    <i class="fa-brands ${icon}"></i>
  </span>
  <span>Inverted</span>
</a>`}</CodeBlock>
              </div>

              <div className="box">
                <p className="title is-4 mb-2">Icon Buttons</p>
                <p className="subtitle is-6 mb-4">Buttons without text, icon-only</p>
                
                <div className="buttons is-gapless">
                  <a className={`button is-${provider}`}>
                    <span className="icon">
                      <i className={`fa-brands ${icon} fa-lg`}></i>
                    </span>
                  </a>
                  <a className={`button is-${provider} is-outlined`}>
                    <span className="icon">
                      <i className={`fa-brands ${icon} fa-lg`}></i>
                    </span>
                  </a>
                  <a className={`button is-${provider} is-light`}>
                    <span className="icon">
                      <i className={`fa-brands ${icon} fa-lg`}></i>
                    </span>
                  </a>
                  <a className={`button is-${provider} is-dark`}>
                    <span className="icon">
                      <i className={`fa-brands ${icon} fa-lg`}></i>
                    </span>
                  </a>
                  <a className={`button is-${provider} is-inverted`}>
                    <span className="icon">
                      <i className={`fa-brands ${icon} fa-lg`}></i>
                    </span>
                  </a>
                </div>

                <CodeBlock language="html">{`
<a class="button is-${provider}">
  <span class="icon">
    <i class="fa-brands ${icon} fa-lg"></i>
  </span>
</a>`}</CodeBlock>
              </div>

              <div className="box">
                <p className="title is-4 mb-2">Button Sizes</p>
                <p className="subtitle is-6 mb-4">
                  Available sizes: <code>.is-small</code>, <code>normal</code>, <code>.is-medium</code>, <code>.is-large</code>
                </p>
                
                <div className="buttons is-align-items-center is-gapless">
                  <a className={`button is-${provider} is-small`}>
                    <span className="icon">
                      <i className={`fa-brands ${icon}`}></i>
                    </span>
                    <span>Small</span>
                  </a>
                  <a className={`button is-${provider}`}>
                    <span className="icon">
                      <i className={`fa-brands ${icon}`}></i>
                    </span>
                    <span>Normal</span>
                  </a>
                  <a className={`button is-${provider} is-medium`}>
                    <span className="icon">
                      <i className={`fa-brands ${icon}`}></i>
                    </span>
                    <span>Medium</span>
                  </a>
                  <a className={`button is-${provider} is-large`}>
                    <span className="icon">
                      <i className={`fa-brands ${icon}`}></i>
                    </span>
                    <span>Large</span>
                  </a>
                </div>

                <CodeBlock language="html">{`<a class="button is-${provider} is-small">
  <span class="icon">
    <i class="fa-brands ${icon}"></i>
  </span>
  <span>Small</span>
</a>
<a class="button is-${provider}">
  <span class="icon">
    <i class="fa-brands ${icon}"></i>
  </span>
  <span>Normal</span>
</a>
<a class="button is-${provider} is-medium">
  <span class="icon">
    <i class="fa-brands ${icon}"></i>
  </span>
  <span>Medium</span>
</a>
<a class="button is-${provider} is-large">
  <span class="icon">
    <i class="fa-brands ${icon}"></i>
  </span>
  <span>Large</span>
</a>`}</CodeBlock>
              </div>

              <div className="box">
                <p className="title is-4">Button States</p>
                <p className="subtitle is-6 mb-4">
                  Available states: <code>.is-hovered</code>, <code>.is-focused</code>, <code>.is-active</code>, <code>.is-loading</code>, <code>disabled</code>
                </p>
                
                <div className="buttons is-gapless">
                  <a className={`button is-${provider} is-hovered`}>
                    <span className="icon">
                      <i className={`fa-brands ${icon}`}></i>
                    </span>
                    <span>Hovered</span>
                  </a>
                  <a className={`button is-${provider} is-focused`}>
                    <span className="icon">
                      <i className={`fa-brands ${icon}`}></i>
                    </span>
                    <span>Focused</span>
                  </a>
                  <a className={`button is-${provider} is-active`}>
                    <span className="icon">
                      <i className={`fa-brands ${icon}`}></i>
                    </span>
                    <span>Active</span>
                  </a>
                  <a className={`button is-${provider} is-loading`}>
                    <span className="icon">
                      <i className={`fa-brands ${icon}`}></i>
                    </span>
                    <span>Loading</span>
                  </a>
                  <a className={`button is-${provider}`} disabled>
                    <span className="icon">
                      <i className={`fa-brands ${icon}`}></i>
                    </span>
                    <span>Disabled</span>
                  </a>
                </div>

                <CodeBlock language="html">{`<a class="button is-${provider} is-hovered">
  <span class="icon">
    <i class="fa-brands ${icon}"></i>
  </span>
  <span>Hovered</span>
</a>
<a class="button is-${provider} is-focused">
  <span class="icon">
    <i class="fa-brands ${icon}"></i>
  </span>
  <span>Focused</span>
</a>
<a class="button is-${provider} is-active">
  <span class="icon">
    <i class="fa-brands ${icon}"></i>
  </span>
  <span>Active</span>
</a>
<a class="button is-${provider} is-loading">
  <span class="icon">
    <i class="fa-brands ${icon}"></i>
  </span>
  <span>Loading</span>
</a>
<a class="button is-${provider}" disabled>
  <span class="icon">
    <i class="fa-brands ${icon}"></i>
  </span>
  <span>Disabled</span>
</a>`}</CodeBlock>
              </div>

              <div className="box">
                <p className="title is-4">Text Colors</p>
                <p className="subtitle is-6 mb-4">Helper classes for text color</p>
                
                <div className="content">
                  <p className={`is-size-4 has-text-${provider} mb-0`}>
                    .has-text-{provider}
                  </p>
                  <p className={`is-size-4 has-text-${provider}-light mb-0`}>
                    .has-text-{provider}-light
                  </p>
                  <p className={`is-size-4 has-text-${provider}-dark mb-0`}>
                    .has-text-{provider}-dark
                  </p>
                </div>

                <CodeBlock language="html">{`<p class="has-text-${provider}">Text with ${name} color</p>
<p class="has-text-${provider}-light">Text with ${name} light color</p>
<p class="has-text-${provider}-dark">Text with ${name} dark color</p>`}</CodeBlock>
              </div>

              <div className="box">
                <p className="title is-4">Background Colors</p>
                <p className="subtitle is-6 mb-4">Helper classes for background color</p>
                
                <div className="content">
                  <div className={`p-3 mb-0 has-background-${provider} has-text-white`}>
                    .has-background-{provider}
                  </div>
                  <div className={`p-3 mb-0 has-background-${provider}-light`}>
                    .has-background-{provider}-light
                  </div>
                  <div className={`p-3 has-background-${provider}-dark has-text-white`}>
                    .has-background-{provider}-dark
                  </div>
                </div>

                <CodeBlock language="html">{`<div class="has-background-${provider} has-text-white">
  .has-background-${provider}
</div>
<div class="has-background-${provider}-light">
  .has-background-${provider}-light
</div>
<div class="has-background-${provider}-dark has-text-white">
  .has-background-${provider}-dark
</div>`}</CodeBlock>
              </div>

              <div className="buttons is-centered mt-5">
                <Link
                  className="button is-link is-outlined is-light"
                  href="/docs/providers"
                >
                  <span className="icon">
                    <i className="fa-solid fa-arrow-left"></i>
                  </span>
                  <span>Back to Providers</span>
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
