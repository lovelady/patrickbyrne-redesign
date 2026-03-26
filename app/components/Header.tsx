import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/timeline", label: "Timeline" },
  { to: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    name: "X (Twitter)",
    url: "https://twitter.com/PatrickByrne",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    url: "https://t.me/s/PatrickMByrne",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: "Locals",
    url: "https://patrickbyrne.locals.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-border/50"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-22 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="relative z-[60] text-[1.5rem] font-body font-semibold tracking-[0.08em] text-foreground/92 hover:text-foreground transition-colors duration-300 uppercase"
        >
          Patrick M. Byrne
        </Link>

        {/* Desktop Nav — uppercase tracked sans */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[0.6875rem] font-body font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isActive
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Social divider + icons */}
          <span className="w-px h-4 bg-border/30" />
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-muted/60 hover:text-accent transition-colors duration-300 -ml-6"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-[60] lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-5 h-px bg-foreground/80 transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-foreground/80 transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-foreground/80 transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
      <div
        className="lg:hidden fixed inset-0 z-50 bg-background animate-fade-in overflow-hidden touch-action-none"
        onTouchMove={(e) => e.preventDefault()}
      >
        <div className="flex flex-col items-start justify-center h-full px-10 gap-8">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-3xl font-heading font-medium tracking-wide animate-fade-in-up ${isActive ? "text-foreground" : "text-muted"}`}
                style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Mobile social icons */}
          <div
            className="flex items-center gap-6 pt-4 animate-fade-in-up"
            style={{ animationDelay: `${navLinks.length * 80}ms`, animationFillMode: "both" }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-muted/60 hover:text-accent transition-colors duration-300"
              >
                <span className="[&_svg]:w-5 [&_svg]:h-5">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      )}
    </header>
  );
}
