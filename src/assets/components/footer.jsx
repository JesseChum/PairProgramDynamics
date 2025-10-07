export function Footer({ siteTitle = "Site", year = new Date().getFullYear(), links = [] }) {
  return (
    <footer>
      <div>
        <p>© {year} {siteTitle}. All rights reserved.</p>
      </div>

      <nav aria-label="Footer navigation">
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}