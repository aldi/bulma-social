"use client";

import { useState } from 'react';

const tabLabels = ["default", ".is-rounded", ".is-loading"];
const modifiers = ["", "is-rounded", "is-loading"];

export default function ButtonSizeVariants({ activeProvider }) {
  const [activeTab, setActiveTab] = useState(0);

  const iconName = activeProvider?.icon || activeProvider?.code || "github";
  const providerName = activeProvider?.name || "GitHub";
  const providerCode = activeProvider?.code || "github";

  const renderSizeButtons = (modifier) => (
    <>
      <div className="columns is-flex-direction-column">
        <div className="column">
          <a
            className={`button is-large is-${providerCode} ${modifier}`}
            title={`.is-large ${modifier ? "." + modifier : ""}`}
          >
            <span className="icon is-medium">
              <i className={`fa-brands fa-${iconName}`}></i>
            </span>
            <span>{providerName}</span>
          </a>
        </div>
        <div className="column">
          <a
            className={`button is-medium is-${providerCode} ${modifier}`}
            title={`.is-medium ${modifier ? "." + modifier : ""}`}
          >
            <span className="icon">
              <i className={`fa-brands fa-${iconName}`}></i>
            </span>
            <span>{providerName}</span>
          </a>
        </div>
        <div className="column">
          <a
            className={`button is-${providerCode} ${modifier}`}
            title={`.is-normal ${modifier ? "." + modifier : ""}`}
          >
            <span className="icon">
              <i className={`fa-brands fa-${iconName}`}></i>
            </span>
            <span>{providerName}</span>
          </a>
        </div>
        <div className="column">
          <a
            className={`button is-small is-${providerCode} ${modifier}`}
            title={`.is-small ${modifier ? "." + modifier : ""}`}
          >
            <span className="icon is-small">
              <i className={`fa-brands fa-${iconName}`}></i>
            </span>
            <span>{providerName}</span>
          </a>
        </div>
      </div>
      <hr />
      <div className="column">
        <a
          className={`button is-large is-${providerCode} social-icon ${modifier}`}
          title={`.is-large ${modifier ? "." + modifier : ""}`}
        >
          <span className="icon">
            <span className={`fa-brands fa-fw fa-${iconName}`}></span>
          </span>
        </a>
        <a
          className={`button is-medium is-${providerCode} social-icon ${modifier}`}
          title={`.is-medium ${modifier ? "." + modifier : ""}`}
        >
          <span className="icon">
            <span className={`fa-brands fa-${iconName}`}></span>
          </span>
        </a>
        <a
          className={`button is-${providerCode} social-icon ${modifier}`}
          title={`.is-normal ${modifier ? "." + modifier : ""}`}
        >
          <span className="icon">
            <span className={`fa-brands fa-${iconName}`}></span>
          </span>
        </a>
        <a
          className={`button is-small is-${providerCode} social-icon ${modifier}`}
          title={`.is-small ${modifier ? "." + modifier : ""}`}
        >
          <span className="icon">
            <span className={`fa-brands fa-${iconName}`}></span>
          </span>
        </a>
      </div>
    </>
  );

  return (
    <div id="tabs-with-content">
      <div className="right-tabs tabs is-centered">
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
      <div className="columns tab-content right-tabs-content is-active">
        {renderSizeButtons(modifiers[activeTab])}
      </div>
    </div>
  );
}
