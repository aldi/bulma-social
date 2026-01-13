import Footer from '@/components/Footer';
import Link from 'next/link';
import { socialProviders } from '@/data/socialProviders';

export const metadata = {
  title: 'Bulma-Social - Documentation',
};

export default function DocsIndex() {
  return (
    <>
      <section className="docs-hero">
        <div className="floating-icons">
          {socialProviders.map((provider, index) => {
            const cols = 6;
            const row = Math.floor(index / cols);
            const col = index % cols;
            const top = 10 + (row * 25) + ((col % 2) * 8);
            const left = 5 + (col * 15) + ((row % 2) * 5);
            const delay = (index * 0.08) % 2;
            
            return (
              <i
                key={provider.code}
                className={`floating-icon fa-brands ${provider.icon}`}
                style={{
                  color: provider.hsl,
                  top: `${top}%`,
                  left: `${left}%`,
                  animationDelay: `${delay}s`,
                }}
              ></i>
            );
          })}
        </div>
        <div className="docs-hero-content">
          <h1 className="docs-hero-title">Documentation</h1>
          <p className="docs-hero-subtitle">
            Everything you need to build beautiful social buttons
          </p>
        </div>
      </section>

      <section className="docs-section">
        <div className="docs-container">
          <div className="columns is-multiline py-6">
            <div className="column is-half">
              <Link className="glass-card is-fullheight" href="/docs/getting-started">
                <div className="glass-card-icon is-warning">
                  <i className="fa-solid fa-rocket"></i>
                </div>
                <h2 className="glass-card-title">
                  Getting Started
                  <span className="arrow">→</span>
                </h2>
                <p className="glass-card-description">
                  You only need <strong>1 CSS file</strong> to use Bulma-Social.
                  Get up and running in less than 2 minutes with npm, CDN, or direct download.
                </p>
              </Link>
            </div>
            <div className="column is-half">
              <Link className="glass-card is-fullheight" href="/docs/modularity">
                <div className="glass-card-icon is-success">
                  <i className="fa-solid fa-cubes"></i>
                </div>
                <h2 className="glass-card-title">
                  Modularity
                  <span className="arrow">→</span>
                </h2>
                <p className="glass-card-description">
                  Import only the providers you <strong>really need</strong> to keep your bundle size minimal.
                </p>
              </Link>
            </div>
            <div className="column is-half">
              <Link className="glass-card is-fullheight" href="/docs/providers">
                <div className="glass-card-icon is-info">
                  <i className="fa-solid fa-users"></i>
                </div>
                <h2 className="glass-card-title">
                  Providers
                  <span className="arrow">→</span>
                </h2>
                <p className="glass-card-description">
                  Browse all <strong>{socialProviders.length} social providers</strong> with complete style examples,
                  code snippets, and live previews for every variant.
                </p>
              </Link>
            </div>
            <div className="column is-half">
              <Link className="glass-card is-fullheight" href="/docs/customization">
                <div className="glass-card-icon is-danger">
                  <i className="fa-solid fa-paintbrush"></i>
                </div>
                <h2 className="glass-card-title">
                  Customization
                  <span className="arrow">→</span>
                </h2>
                <p className="glass-card-description">
                  Build a <strong>custom bundle</strong> with your own color palette and brand preferences.
                </p>
              </Link>
            </div>
          </div>
          <div className="brand-strip">
            <p className="brand-strip-title">Supported Platforms</p>
            <div className="brand-strip-items column is-8 mx-auto">
              {socialProviders.map((provider) => (
                <div
                  key={provider.code}
                  className="brand-chip"
                  style={{ backgroundColor: provider.hsl }}
                  title={provider.name}
                >
                  <i className={`fa-brands ${provider.icon}`}></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
