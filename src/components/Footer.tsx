import Link from "next/link";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsChatRightHeart } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { SiLinktree } from "react-icons/si";

export const Footer = () => {
  return (
    <div>
      <footer className="bottom-0 left-0 z-20 flex w-full flex-col items-center justify-between border-t border-gray-200 bg-white p-10 shadow md:flex-row md:p-2 md:pl-10 md:pr-10">
        <div className="text-gray-500">Email us: sasetamu@gmail.com</div>
        <ul className="mr-5 mt-5 flex flex-wrap justify-center gap-7 text-center text-xl text-gray-500">
          <li>
            <Link
              href="https://linktr.ee/tamusase"
              target="_blank"
              className="mr-4 hover:text-sky-600  md:mr-6"
            >
              <SiLinktree />
            </Link>
          </li>
          <li>
            <Link
              href="https://discord.gg/q8mDbDb5Ar"
              target="_blank"
              className="mr-4 hover:text-sky-600  md:mr-6"
            >
              <BsDiscord />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/sasetamu/"
              target="_blank"
              className="mr-4 hover:text-sky-600  md:mr-6"
            >
              <BsInstagram />
            </Link>
          </li>
          <li>
            <Link
              href="mailto:sasetamu@gmail.com"
              target="_blank"
              className="mr-4 hover:text-sky-600 "
            >
              <BsChatRightHeart />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};
