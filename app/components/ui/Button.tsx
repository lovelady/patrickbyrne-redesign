import { Link } from "react-router";

type ButtonVariant = "primary" | "secondary" | "outline" | "quiet";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: "button";
  to?: never;
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  as: "link";
  to: string;
  href?: never;
  type?: never;
  onClick?: never;
  disabled?: never;
}

interface ButtonAsAnchor extends ButtonBaseProps {
  as: "a";
  href: string;
  to?: never;
  type?: never;
  onClick?: never;
  disabled?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent/90 text-background font-medium hover:bg-accent active:bg-accent/80",
  secondary:
    "border border-border text-foreground/80 font-medium hover:border-muted/40 hover:text-foreground active:bg-surface",
  outline:
    "border border-accent/30 text-accent font-medium hover:border-accent/60 hover:bg-accent/5",
  quiet:
    "text-muted font-medium hover:text-foreground",
};

const baseStyles =
  "inline-flex items-center justify-center px-7 py-3.5 text-[0.6875rem] uppercase tracking-[0.18em] rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Button(props: ButtonProps) {
  const { variant = "primary", className = "", children } = props;
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (props.as === "link") {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  if (props.as === "a") {
    return (
      <a
        href={props.href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${classes} disabled:opacity-40 disabled:pointer-events-none`}
    >
      {children}
    </button>
  );
}
