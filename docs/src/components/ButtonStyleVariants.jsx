"use client";

import { useState } from 'react';
import { socialProviders } from '@/data/socialProviders';

const tabLabels = ["default", ".is-outlined", ".is-inverted", ".is-light"];
const modifiers = ["", "is-outlined", "is-inverted", "is-light"];

export default function ButtonStyleVariants() {
  const [activeTab, setActiveTab] = useState(0);

  const renderButtons = (modifier) => (
    <div className="columns is-multiline is-mobile">
      {socialProviders.map((provider) => (
        <div key={provider.code} className="column is-full-tablet is-half-widescreen">
          <a
            className={`button is-${provider.code} ${modifier}`}
            title={`.is-${provider.code}`}
          >
            <span className="icon">
              <i className={`fa-brands fa-${provider.icon || provider.code}`}></i>
            </span>
            <span>Sign in with {provider.name}</span>
          </a>
        </div>
      ))}
    </div>
  );

  const renderIconButtons = (modifier) => (
    <div id="icons" className="text-center">
      {socialProviders.map((provider) => (
        <a
          key={provider.code}
          className={`button is-medium is-${provider.code} ${modifier}`}
        >
          <span className="icon">
            <i
              className={`fa-brands fa-${provider.icon || provider.code} fa-lg`}
            ></i>
          </span>
        </a>
      ))}
    </div>
  );

  const isGradient = activeTab === 2 || activeTab === 3;

  return (
    <div id="tabs-with-content">
      <div className="left-tabs tabs is-centered">
        <ul>
          {tabLabels.map((label, index) => (
            <li key={label} className={activeTab === index ? "is-active" : ""}>
              <a
                className="has-text-grey-dark"
                onClick={() => setActiveTab(index)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`columns tab-content left-tabs-content is-active ${
          isGradient ? "gradient" : ""
        }`}
      >
        {renderButtons(modifiers[activeTab])}
        <hr />
        {renderIconButtons(modifiers[activeTab])}
      </div>
    </div>
  );
}
