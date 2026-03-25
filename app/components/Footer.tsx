import { Link } from "react-router";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-16">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Patrick M. Byrne"
              className="h-6 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </Link>

          <nav className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-muted hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/30 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted/60 tracking-wide">
            &copy; {new Date().getFullYear()} PatrickByrne.com. All rights reserved.
          </p>
          <p className="text-xs text-muted/40 tracking-wide">
            Builder &middot; Philosopher &middot; Disruptor
          </p>
        </div>
      </div>
    </footer>
  );
}
