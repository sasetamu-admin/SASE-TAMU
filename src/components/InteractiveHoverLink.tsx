import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type InteractiveHoverLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const InteractiveHoverLink = ({
  href,
  children,
  className = "",
}: InteractiveHoverLinkProps) => {
  return (
    <Link
      href={href}
      className={`group relative inline-block w-auto cursor-pointer overflow-hidden rounded-full border border-maroon bg-navy p-2 px-6 text-center font-semibold text-paper ${className}`}
    >
      <div className="flex items-center justify-center gap-2">
        <div className="h-2 w-2 rounded-full bg-maroon transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-paper opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <FiArrowRight />
      </div>
    </Link>
  );
};