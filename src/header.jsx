export function Header({ siteTitle = "Site", logoUrl, navLinks = [] }) {
  return (
    <header>
      <div>
        <a href="/" aria-label={`${siteTitle} home`}>
          {logoUrl ? (
            <img src={logoUrl} alt={`${siteTitle} logo`} width="48" height="48" />
          ) : (
            <strong>{siteTitle}</strong>
          )}
        </a>
      </div>

      <nav aria-label="Main navigation">
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}