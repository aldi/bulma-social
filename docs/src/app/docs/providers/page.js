import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { socialProviders } from "@/data/socialProviders";

export const metadata = {
  title: "Providers - Bulma-Social Docs",
};

export default function ProvidersPage() {
  const breadcrumbItems = [
    { label: "Bulma-Social", href: "/" },
    { label: "Documentation", href: "/docs" },
    { label: "Providers", active: true },
  ];

  return (
    <>
      <Hero
        title="Providers"
        subtitle="Click on any provider to see all available styles and code examples"
      />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Breadcrumb items={breadcrumbItems} />
              <div className="columns is-multiline mt-4">
                {socialProviders.map((provider) => (
                  <div key={provider.code} className="column is-4">
                    <Link
                      href={`/docs/providers/${provider.code}`}
                      className="box has-text-centered provider-card"
                    >
                      <span
                        className={`icon is-large has-text-${provider.code}`}
                      >
                        <i className={`fa-brands ${provider.icon} fa-2x`}></i>
                      </span>
                      <p className="title is-5 mt-3">{provider.name}</p>
                      <span className={`button is-${provider.code} is-small`}>
                        <span className="icon">
                          <i className={`fa-brands ${provider.icon}`}></i>
                        </span>
                        <span>View Styles</span>
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="column">
                <p className="title is-4">
                  Need multiple providers in one file?
                </p>
                <p className="subtitle is-5">
                  Learn how to build a custom CSS bundle with only the providers
                  you need.
                </p>
                <Link
                  className="button is-link is-outlined is-light mt-2"
                  href="/docs/customization"
                >
                  <span>Explore Customization</span>
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
