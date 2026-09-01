import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SocialLinks } from "./SocialLinks";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/upcoming-events" },
  { label: "Our Team", href: "/our-team" },
  // { label: "Development", href: "/development" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Sponsors", href: "/sponsor" },
  // { label: "SCRC", href: "/scrc" },
  { label: "Join SASE", href: "/join" },
  // {label: "Photos", href: "/contact" },
];

type NavOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export const NavOverlay = ({ open, onClose }: NavOverlayProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-maroonDark bg-opacity-95"
        >
          <div className="flex justify-end px-6 py-4">
            <button
              onClick={onClose}
              className="font-source text-sm tracking-wide text-paper"
            >
              CLOSE
            </button>
          </div>

          <div className="flex h-[calc(100%-80px)] flex-col justify-center gap-10 px-10 py-8 md:flex-row md:items-center md:justify-between md:overflow-visible md:px-24">
            <nav className="flex flex-col gap-2">
              {pages.map((page, i) => (
                <motion.div
                  key={page.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={page.href}
                    onClick={onClose}
                    className="font-bebas text-3xl text-paper transition hover:text-sakura md:text-7xl"
                  >
                    {page.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <SocialLinks />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};