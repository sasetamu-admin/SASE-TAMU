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
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <span className="self-center">
                    <div className="flex flex-row items-center">
                      <Image
                        src="/SASE_LOGO.png"
                        width={150}
                        height={50}
                        className="h-8 w-auto md:h-12"
                        alt="Picture of SASE TAMU logo"
                      />
                      <div className="ml-2 mr-2 h-8 w-px bg-paper/40 md:ml-4 md:mr-3 md:h-12"></div>
                      <Image
                        src="/TAMU_LOGO.png"
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
                <Image
                  src="/torii.svg"
                  width={32}
                  height={32}
                  className="h-10 w-10 md:h-12 md:w-12"
                  alt="Menu"
                />
              </button>
            </div>
          </div>
        </nav>
      <NavOverlay open={isNavOpen} onClose={() => setNavOpen(false)} />
    </div>
  );
}