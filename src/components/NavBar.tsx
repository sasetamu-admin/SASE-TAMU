import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";
import { NavOverlay } from "./NavOverlay";

export const NavBar = () => {  

  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <div className="font-source bg-transparent" id="desktop-nav">
      <nav className="bg-transparent p-2 text-lg">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="shrink-0">
                <Link href="/" className="flex items-center">
                  <span className="self-center">
                    <div className="flex flex-row items-center">
                      <Image
                        src="/logos/SASE_logo_icon.png"
                        width={150}
                        height={50}
                        className="h-8 w-auto md:h-12"
                        alt="Picture of SASE TAMU logo"
                      />
                      <div className="ml-2 mr-2 h-8 w-px bg-paper/40 md:ml-4 md:mr-3 md:h-12"></div>
                      <Image
                        src="/logos/TAMU_logo_white.png"
                        width={50}
                        height={50}
                        className="h-8 w-auto md:h-12"
                        alt="Picture of TAMU logo"
                      />
                    </div>
                  </span>
                </Link>
              </div>
              <button
                type="button"
                onClick={() => setNavOpen(true)}
                aria-label="Open menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><title>hamburger-menu-linear</title><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"><path d="M20 7L4 7"/><path d="M20 12L4 12"/><path d="M20 17L4 17"/></g></svg>
              </button>
            </div>
          </div>
        </nav>
      <NavOverlay open={isNavOpen} onClose={() => setNavOpen(false)} />
    </div>
  );
}