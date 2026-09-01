"use client";
import React from "react";
import { motion } from "framer-motion";
import { NavBar } from "src/components/NavBar";
import { Footer } from "src/components/Footer";
import { ReelsFeed } from "src/components/ReelsFeed";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const UpcomingEvents = () => {
  return (
    <>
      <div className="fixed z-40 w-full">
        <NavBar />
      </div>

      <div className="min-h-screen bg-navy font-source text-paper">
        {/* HEADER */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto w-full max-w-7xl px-6 pb-8 pt-32 text-center md:px-12 md:pb-12 md:pt-40 md:text-left"
        >
          <h1 className="font-bebas text-4xl md:text-6xl">Upcoming Events</h1>
          <div className="mx-auto mt-3 h-[2px] w-24 bg-sakura md:mx-0" />
          <p className="mx-auto mt-4 max-w-2xl text-sm text-paper/70 md:mx-0 md:text-base">
            Everything happening this semester — general body meetings, socials,
            volunteering, and career events. Add us to your calendar so you never
            miss one.
          </p>
        </motion.div>

        {/* CALENDAR */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-12 md:pb-24"
        >
          <div className="w-full overflow-hidden rounded-2xl bg-paper p-3 shadow-xl md:p-6">
            <div className="hidden w-full justify-center md:flex">
              <div className="googleCalendar">
                <iframe src="https://calendar.google.com/calendar/embed?src=sasetamu%40gmail.com&ctz=America%2FChicago"></iframe>
              </div>
            </div>

            <div className="flex w-full justify-center md:hidden">
              <div className="smgoogleCalendar">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=sasetamu%40gmail.com&ctz=America%2FChicago&mode=AGENDA"
                  height="400"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.section>

        {/* RECENT REELS */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 pb-20 md:px-12 md:pb-28"
        >
          <div className="mb-6 w-full text-center md:mb-10">
            <h2 className="font-bebas text-3xl md:text-5xl">Recent Recaps</h2>
            <div className="mx-auto mt-3 h-[2px] w-16 bg-maroon" />
            <p className="mx-auto mt-3 max-w-xl text-sm text-paper/70 md:text-base">
              Catch up on what you missed — straight from our Instagram.
            </p>
          </div>

          <ReelsFeed />

          <a
            href="https://instagram.com/sasetamu"
            target="_blank"
            rel="noreferrer"
            className="mt-8 rounded border border-sakura/40 px-5 py-2 text-sm text-paper transition hover:border-sakura hover:text-sakura md:text-base"
          >
            See more on Instagram
          </a>
        </motion.section>
      </div>

      <div className="flex h-96 items-center justify-center bg-white bg-karaoke bg-cover bg-fixed bg-center"></div>
      <Footer />
    </>
  );
};

export default UpcomingEvents;