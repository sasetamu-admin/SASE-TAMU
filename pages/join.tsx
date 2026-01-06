import React from "react";
import { NavBar } from "src/components/NavBar";
import { Footer } from "src/components/Footer";
import EventCard from "~/components/EventCard";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const join = () => {
  return (
    <div className="bg-white text-black">
      <div className="fixed z-40 w-full">
        <NavBar />
      </div>

      <div className="flex flex-col overflow-x-hidden bg-white pb-12 pt-28 font-source md:flex-row">
        <div className="w-full px-8 pb-10 md:w-1/2 md:pb-4">
          <h1 className="font-bebas text-5xl text-center">
            <motion.span className = "text-emerald-700 font-bebas text-5xl font-bold my-2 ml-2 tracking-wide hover:text-6xl hover:text-emerald-800 transition-all duration-500 ease-in-out" whileHover={{ rotateZ: [0, 50, -50, 30, -30, 0], transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror"}}}style={{ perspective: 600 }} animate={{ rotateZ: 0 }} transition={{duration: 0.4, ease: "easeInOut"}}>
              Students!
            </motion.span>
            {" "}Join SASE here</h1>
          <div className="pb-5 pt-5 text-center">
            <div>
              <ul className="mx-auto mt-4 max-w-2xl list-disc space-y-3 pl-6 text-left text-lg text-gray-700">
                <li>Free food at every GBM</li>
                <li>Access to all upcoming GBMs and social events</li>
                <li>Direct networking opportunities with recruiters and engineers</li>
                <li>Opportunities to learn about and engage with Asian culture and heritage</li>
                <li>$40 membership includes a free club shirt </li>
              </ul>
            </div>
            <button className="mt-5 rounded border bg-sky-700 bg-opacity-75 px-4 py-2 text-white hover:bg-sky-700 hover:text-white">
              <Link href="https://linktr.ee/tamusase" target="_blank">
                Sign up here!
              </Link>
            </button>
          </div>
        </div>
          <div className="self-center pl-10 pr-10 pt-5 w-full md:w-1/2">
            <Image
              className="w-full rounded-xl"
              src="/scrc.jpg"
              width={400}
              height={300}
              alt="Picture of SASE SCRC"
            />
          </div>

      </div>

      <div className="flex flex-col overflow-x-hidden bg-white pb-12 pt-28 font-source md:flex-row">
        <div
          id="projects"
          className="w-full flex-col bg-white font-source text-lg text-black"
        >
          <h1 className="px-6 pb-4 font-bebas text-5xl text-center">Some Past Events :)</h1>
          <div className="overflow-x-auto whitespace-nowrap p-6 px-6">
            <div className="flex min-w-max gap-5 ">
              <EventCard
                src="/NCNC.jpg"
                title="SASE @ NC"
                description="Our officer board and scholarship recipients are SASE's National Conference, hosted in Atlanta, GA!"
              />
              <EventCard
                src="/winty.jpg"
                title="SASE squad social!"
                description="A fun day out at Century Square with our SASE Squads!"
              />
              <EventCard
                src="/ging.jpg"
                title="Winter Social"
                description="SASE's Winter Social!"
              />

              <EventCard
                src="/ging.jpg"
                title="Placeholder Event"
                description="Placeholder description for event card."
              />

              <EventCard
                src="/ging.jpg"
                title="Placeholder Event"
                description="Placeholder description for event card."
              />

            </div>
          </div>
        </div>
      </div>

      <div className="flex h-96 items-center justify-center bg-white bg-meow bg-cover bg-fixed bg-center md:block" />
      <Footer />
    </div>
  );
};

export default join;
