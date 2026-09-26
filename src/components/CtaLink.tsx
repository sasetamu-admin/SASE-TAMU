import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Magnetic } from "./Magnetic";

type CtaVariant = "primary" | "secondary" | "interactive";
type CtaSize = "sm" | "md" | "lg";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: CtaVariant;
  size?: CtaSize;
  magnetic?: boolean;
  external?: boolean;
  className?: string;
};

const sizeClasses: Record<CtaSize, string> = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-6 py-3 text-lg",
};

const variantClasses: Record<Exclude<CtaVariant, "interactive">, string> = {
  primary:
    "rounded border border-maroon bg-maroon text-paper shadow-lg shadow-black/30 transition hover:bg-maroonDark",
  secondary:
    "rounded border border-paper/70 bg-navy/40 text-paper backdrop-blur-sm transition hover:border-sakura hover:text-sakura",
};

export const CtaLink = ({
  href,
  children,
  variant = "primary",
  size = "md",
  magnetic = false,
  external = false,
  className = "",
}: CtaLinkProps) => {
  const linkProps = external ? { target: "_blank", rel: "noreferrer" } : {};

  const link =
    variant === "interactive" ? (
      <Link
        href={href}
        {...linkProps}
        className={`group relative inline-block overflow-hidden rounded-full border border-maroon bg-navy text-center font-semibold text-paper ${sizeClasses[size]} ${className}`}
      >
        <div className="flex items-center justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-maroon transition-all duration-300 group-hover:scale-[100.8]"></div>
          <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {children}
          </span>
        </div>
        <div className="absolute left-0 top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-paper opacity-0 transition-all duration-300 group-hover:-translate-x-0 group-hover:opacity-100">
          <span>{children}</span>
          <FiArrowRight />
        </div>
      </Link>
    ) : (
      <Link
        href={href}
        {...linkProps}
        className={`inline-block ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      >
        {children}
      </Link>
    );

  return magnetic ? <Magnetic>{link}</Magnetic> : link;
};