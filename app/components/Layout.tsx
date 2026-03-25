import { Link } from "react-router";

interface LayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border bg-surface">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-heading font-bold text-primary">
            patrickbyrne-redesign
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-sm text-muted">&copy; {new Date().getFullYear()} patrickbyrne-redesign. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
