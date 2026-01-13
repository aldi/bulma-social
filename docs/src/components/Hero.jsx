import { socialProviders } from '@/data/socialProviders';

export default function Hero({ title, subtitle }) {
  return (
    <section className="docs-hero is-compact">
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
        {title && <h1 className="docs-hero-title">{title}</h1>}
        {subtitle && <p className="docs-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
