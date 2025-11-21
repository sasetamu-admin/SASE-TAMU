import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion"; 
import { useEffect, useState } from "react";

export const NavBar = ({ transparent = false }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navClass = transparent
    ? "bg-transparent border-transparent text-sky-500 font-bold bg-gradient-to-l from-gray-500 to-transparent"
    : "bg-white border-gray-200 text-gray-700 shadow-sm";

  const linkTextClass = transparent ? "text-sky-500 font-bold" : "text-gray-500";


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
 
  //new hook
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className={`font-source ${navClass}`} id="desktop-nav">
        <nav className={`p-2 text-lg transition-colors duration-300 ${ transparent ? "bg-transparent" : "bg-white" }`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-shrink-0">
                <Link href="/" className="flex">
                  <span className="self-center">
                    <div className="flex flex-row">
                      <Image
                        src="/SASE_LOGO.png"
                        width={150}
                        height={50}
                        alt="Picture of SASE TAMU logo"
                      />
                      <div className="vl ml-4 mr-3"></div>
                      <Image
                        src="/TAMU_LOGO.png"
                        width={50}
                        height={50}
                        alt="Picture of TAMU logo"
                      />
                    </div>
                  </span>
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-10">
                  {/* Add your navigation links here */}
                  <Link
                    href="/about"
                    className="hover-underline-animation rounded-md ${linkTextClass}"
                  >
                    About
                  </Link>
                  <Link
                    href="/our-team"
                    className="hover-underline-animation rounded-md ${linkTextClass}"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/upcoming-events"
                    className="hover-underline-animation rounded-md ${linkTextClass}"
                  >
                    Upcoming Events
                  </Link>
                  <Link
                    href="/get-involved"
                    className="hover-underline-animation rounded-md ${linkTextClass}"
                  >
                    Get Involved
                  </Link>
                  <Link
                    href="/join"
                    className="hover-underline-animation rounded-md ${linkTextClass}"
                  >
                    Join
                  </Link>
                  <Link
                    href="/sponsor"
                    className="hover-underline-animation rounded-md ${linkTextClass}"
                  >
                    Sponsor
                  </Link>
                  {/* <Link
                    href="/attendance"
                    className="hover-underline-animation rounded-md ${linkTextClass}"
                  >
                    Attendance
                  </Link> */}
                  {/* ... */}
                </div>
              </div>
              <div className="lg:hidden">
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className="text-black hover:text-slate-500 focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
            {isMobileMenuOpen && (
              <div className="lg:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  <Link
                    href="/"
                    className="block rounded-md px-3 py-2 text-base font-medium ${linkTextClass} hover:bg-gray-700 hover:text-white"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="block rounded-md px-3 py-2 text-base font-medium ${linkTextClass} hover:bg-gray-700 hover:text-white"
                  >
                    About
                  </Link>
                  <Link
                    href="/our-team"
                    className="block rounded-md px-3 py-2 text-base font-medium ${linkTextClass} hover:bg-gray-700 hover:text-white"
                  >
                    Officer Team
                  </Link>
                  <Link
                    href="/upcoming-events"
                    className="block rounded-md px-3 py-2 text-base font-medium ${linkTextClass} hover:bg-gray-700 hover:text-white"
                  >
                    Upcoming Events
                  </Link>
                  <Link
                    href="/get-involved"
                    className="block rounded-md px-3 py-2 text-base font-medium ${linkTextClass} hover:bg-gray-700 hover:text-white"
                  >
                    Get Involved
                  </Link>
                  <Link
                    href="/join"
                    className="block rounded-md px-3 py-2 text-base font-medium ${linkTextClass} hover:bg-gray-700 hover:text-white"
                  >
                    Join
                  </Link>
                  <Link
                    href="/sponsor"
                    className="block rounded-md px-3 py-2 text-base font-medium ${linkTextClass} hover:bg-gray-700 hover:text-white"
                  >
                    Sponsor
                  </Link>
                  {/* <Link
                    href="/attendance"
                    className="block rounded-md px-3 py-2 text-base font-medium ${linkTextClass} hover:bg-gray-700 hover:text-white"
                  >
                    Attendance
                  </Link> */}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </motion.div>
  );
}
