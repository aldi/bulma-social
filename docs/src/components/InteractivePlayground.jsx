"use client";

import { useState, useCallback } from 'react';
import ButtonStyleVariants from '@/components/ButtonStyleVariants';
import ButtonSizeVariants from '@/components/ButtonSizeVariants';
import ProviderPalette from '@/components/ProviderPalette';

export default function InteractivePlayground() {
  const [hoveredProvider, setHoveredProvider] = useState(null);

  const handleProviderHover = useCallback((provider) => {
    setHoveredProvider(provider);
  }, []);

  return (
    <div className="columns">
      <div className="column is-5 social-buttons">
        <p className="subtitle is-3 head-title has-text-centered">Buttons Styles</p>
        <ButtonStyleVariants />
      </div>

      <div className="column is-3">
        <p className="subtitle is-3 head-title has-text-centered">
          Social Classes
        </p>
        <div className="tabs is-centered">
          <ul>
            <li>
              <a className="has-text-grey-dark">Social Providers</a>
            </li>
          </ul>
        </div>
        <ProviderPalette onHover={handleProviderHover} />
        <hr />
        <div className="has-text-centered">
          <p className="subtitle is-4">Disable Hover Animation</p>
          <code>.no-animation</code>
        </div>
        <hr />
        <div className="has-text-centered">
          <p className="subtitle is-5">
            Is there a social provider missing?
          </p>
          <a
            className="button is-primary is-outlined is-light"
            href="https://github.com/aldi/bulma-social/pulls"
          >
            Submit a Pull Request!
          </a>
        </div>
      </div>

      <div className="column is-4">
        <div className="social-sizes has-text-centered">
          <p className="subtitle is-3 head-title">Different Sizes</p>
          <ButtonSizeVariants activeProvider={hoveredProvider} />
        </div>
        <hr />
        <div className="has-text-left ml-6">
          <p className="subtitle is-4 is-spaced">Available Text Styles</p>
          <p className="subtitle is-6">
            <em>
              <code>
                .has-text-{hoveredProvider?.code || "<social-provider>"}
              </code>
            </em>
          </p>
          <p className="subtitle is-6">
            <em>
              <code>
                .has-text-{hoveredProvider?.code || "<social-provider>"}
                -light
              </code>
            </em>
          </p>
          <p className="subtitle is-6">
            <em>
              <code>
                .has-text-{hoveredProvider?.code || "<social-provider>"}
                -dark
              </code>
            </em>
          </p>
        </div>
        <hr />
        <div className="has-text-left pl-6">
          <p className="subtitle is-4 is-spaced">
            Available Background Styles
          </p>
          <p className="subtitle is-6">
            <em>
              <code>
                .has-background-
                {hoveredProvider?.code || "<social-provider>"}
              </code>
            </em>
          </p>
          <p className="subtitle is-6">
            <em>
              <code>
                .has-background-
                {hoveredProvider?.code || "<social-provider>"}-light
              </code>
            </em>
          </p>
          <p className="subtitle is-6">
            <em>
              <code>
                .has-background-
                {hoveredProvider?.code || "<social-provider>"}-dark
              </code>
            </em>
          </p>
        </div>
        <hr />
        <div className="has-text-centered">
          <p className="subtitle is-4 mb-2 has-text-grey-dark">
            Check them out in real projects
          </p>
          <p className="subtitle is-6">
            <a
              href="https://aldi.github.io/awesome-bulma-templates"
              target="_blank"
            >
              Awesome Bulma Templates
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
