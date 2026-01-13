"use client";

import Link from "next/link";
import { useState } from "react";
import { socialProviders } from "@/data/socialProviders";

const INSTALL_COMMAND = "npm install bulma-social";

function getOrbitPosition(index, total, radius, offsetAngle = 0) {
  const angle = (index / total) * 2 * Math.PI + offsetAngle - Math.PI / 2;
  const x = Math.round((Math.cos(angle) * radius + 50) * 100) / 100;
  const y = Math.round((Math.sin(angle) * radius + 50) * 100) / 100;
  return { x, y };
}

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const totalProviders = socialProviders.length;
  const orbit1Count = Math.floor(totalProviders * 0.5);
  const orbit2Count = Math.floor(totalProviders * 0.3);
  
  const orbits = [
    { providers: socialProviders.slice(0, orbit1Count), className: "social-orbit" },
    { providers: socialProviders.slice(orbit1Count, orbit1Count + orbit2Count), className: "social-orbit orbit-2" },
    { providers: socialProviders.slice(orbit1Count + orbit2Count), className: "social-orbit orbit-3" },
  ];

  const renderOrbit = (providers, orbitClassName) => (
    <div className={orbitClassName} key={orbitClassName}>
      {providers.map((provider, i) => {
        const pos = getOrbitPosition(i, providers.length, 50);
        return (
          <Link
            key={provider.code}
            href={`/docs/providers/${provider.code}`}
            className={`button is-${provider.code} orbit-icon`}
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="icon">
              <i className={`fa-brands ${provider.icon}`}></i>
            </span>
          </Link>
        );
      })}
    </div>
  );

  return (
    <>
      <section className="home-hero">
        <div className="hero-orbs">
          <div className="hero-orb"></div>
          <div className="hero-orb"></div>
          <div className="hero-orb"></div>
          <div className="hero-orb"></div>
        </div>

        <div className="home-hero-center">
          {orbits.map((orbit) => renderOrbit(orbit.providers, orbit.className))}

          <div className="home-hero-content">
            <div className="home-hero-badge">
              <span className="tag">v3</span>
              <span>Now with Bulma v1 support</span>
            </div>

            <h1 className="home-hero-title">
              <span className="gradient-text">Social Buttons</span>
              <br />
              <span className="subtitle-text">for Bulma</span>
            </h1>

            <p className="home-hero-subtitle">
              Lightweight, customizable, and ready to use.
            </p>

            <div className="home-cta-group">
              <Link
                href="/docs/getting-started"
                className="home-cta is-primary"
              >
                <i className="fa-solid fa-rocket"></i>
                <span>Get Started</span>
              </Link>
              <Link href="/docs" className="home-cta is-info">
                <i className="fa-solid fa-book"></i>
                <span>Documentation</span>
              </Link>
              <a
                href="https://github.com/aldi/bulma-social"
                className="home-cta is-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
                <span>GitHub</span>
              </a>
            </div>

            <div className="home-install-box">
              <code>{INSTALL_COMMAND}</code>
              <button className="copy-btn" onClick={handleCopy}>
                <i
                  className={copied ? "fa-solid fa-check" : "fa-solid fa-copy"}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="home-features">
        <div className="home-features-header">
          <h2 className="home-features-title">Everything You Need</h2>
          <p className="home-features-subtitle">
            Build beautiful social integrations in minutes, not hours.
          </p>
        </div>

        <div className="home-features-grid">
          <div className="feature-card">
            <div className="feature-card-icon is-blue">
              <i className="fa-solid fa-users"></i>
            </div>
            <h3 className="feature-card-title">
              {socialProviders.length} Providers
            </h3>
            <p className="feature-card-description">
              All major social platforms included, from Facebook and YouTube to WhatsApp and Reddit.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card-icon is-pink">
              <i className="fa-solid fa-puzzle-piece"></i>
            </div>
            <h3 className="feature-card-title">Bulma Native</h3>
            <p className="feature-card-description">
              Seamlessly integrates with Bulma's class naming conventions and design system.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card-icon is-purple">
              <i className="fa-solid fa-cubes"></i>
            </div>
            <h3 className="feature-card-title">Modular Imports</h3>
            <p className="feature-card-description">
              Import only what you need. Keep your bundle size minimal.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card-icon is-green">
              <i className="fa-solid fa-moon"></i>
            </div>
            <h3 className="feature-card-title">Dark Mode Ready</h3>
            <p className="feature-card-description">
              Fully optimized for both light and dark themes out of the box.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card-icon is-orange">
              <i className="fa-solid fa-code"></i>
            </div>
            <h3 className="feature-card-title">Framework Agnostic</h3>
            <p className="feature-card-description">
              Works with React, Vue, Angular, Svelte, or plain HTML.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card-icon is-cyan">
              <i className="fa-solid fa-icons"></i>
            </div>
            <h3 className="feature-card-title">Any Icon Library</h3>
            <p className="feature-card-description">
              Works with Font Awesome, Material Icons, Ionicons, and more.
            </p>
          </div>
        </div>
      </section>

      <section className="home-showcase">
        <div className="home-showcase-container">
          <div className="showcase-header">
            <h2 className="showcase-title">See It In Action</h2>
            <p className="showcase-subtitle">
              All {socialProviders.length} providers with 5 different styles.
              Mix and match to create the perfect buttons for your app.
            </p>
          </div>

          <div className="button-showcase">
            <p className="button-showcase-title">Default Style</p>
            <div className="button-showcase-grid">
              {socialProviders.map((provider) => (
                <Link key={provider.code} href={`/docs/providers/${provider.code}`} className={`button is-${provider.code}`}>
                  <span className="icon">
                    <i className={`fa-brands ${provider.icon}`}></i>
                  </span>
                  <span>{provider.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="button-showcase">
            <p className="button-showcase-title">Outlined Style</p>
            <div className="button-showcase-grid">
              {socialProviders.map((provider) => (
                <Link
                  key={provider.code}
                  href={`/docs/providers/${provider.code}`}
                  className={`button is-${provider.code} is-outlined`}
                >
                  <span className="icon">
                    <i className={`fa-brands ${provider.icon}`}></i>
                  </span>
                  <span>{provider.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="button-showcase">
            <p className="button-showcase-title">Inverted Style</p>
            <div className="button-showcase-grid">
              {socialProviders.map((provider) => (
                <Link
                  key={provider.code}
                  href={`/docs/providers/${provider.code}`}
                  className={`button is-${provider.code} is-inverted`}
                >
                  <span className="icon">
                    <i className={`fa-brands ${provider.icon}`}></i>
                  </span>
                  <span>{provider.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="button-showcase">
            <p className="button-showcase-title">Light Style</p>
            <div className="button-showcase-grid">
              {socialProviders.map((provider) => (
                <Link
                  key={provider.code}
                  href={`/docs/providers/${provider.code}`}
                  className={`button is-${provider.code} is-light`}
                >
                  <span className="icon">
                    <i className={`fa-brands ${provider.icon}`}></i>
                  </span>
                  <span>{provider.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="button-showcase">
            <p className="button-showcase-title">Dark Style</p>
            <div className="button-showcase-grid">
              {socialProviders.map((provider) => (
                <Link
                  key={provider.code}
                  href={`/docs/providers/${provider.code}`}
                  className={`button is-${provider.code} is-dark`}
                >
                  <span className="icon">
                    <i className={`fa-brands ${provider.icon}`}></i>
                  </span>
                  <span>{provider.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="button-showcase">
            <p className="button-showcase-title">Icon Buttons</p>
            <div className="button-showcase-grid">
              {socialProviders.map((provider) => (
                <Link key={provider.code} href={`/docs/providers/${provider.code}`} className={`button is-${provider.code}`}>
                  <span className="icon">
                    <i className={`fa-brands ${provider.icon} fa-lg`}></i>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <div className="home-footer-content">
          <div className="home-footer-left">
            <p>
              Developed with{" "}
              <i className="fa-solid fa-heart heart-icon"></i>{" "}
              by <a href="https://aldi.st">aldi</a>
            </p>
            <p className="mt-xs">
              Licensed under{" "}
              <a href="https://opensource.org/licenses/mit-license.php">MIT</a>
            </p>
          </div>
          <div className="home-footer-links">
            <a
              href="https://github.com/aldi/bulma-social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.npmjs.com/package/bulma-social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-npm"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
