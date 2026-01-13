import Link from 'next/link';

export default function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.active ? 'is-active' : ''}>
            {item.active ? (
              <a href="#" aria-current="page">
                {item.label}
              </a>
            ) : item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <p className="pl-3">{item.label}</p>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
