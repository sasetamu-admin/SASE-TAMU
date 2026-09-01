"use client"; // This is a client component

import { type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { NavBar } from "src/components/NavBar";
import { Footer } from "src/components/Footer";
import Link from "next/link";
import { ReelsFeed } from "src/components/ReelsFeed";
import { AnnouncementTicker } from "src/components/AnnouncementTicker";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  const fadeUp = isDesktop
    ? {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
      }
    : {};

  return (
    <>
      <Head>
        <title>SASE TAMU</title>
      </Head>

      <div className="fixed z-40 w-full">
        <NavBar />
      </div>
      <div className="bg-navy font-source text-paper">
        {/* HERO — DESKTOP background */}
        <div className="relative mb-12 hidden h-screen items-center justify-center overflow-hidden bg-white bg-informational bg-cover bg-fixed bg-center [scroll-snap-align:start] md:flex">
          <div className="animated animatedFadeInUp fadeInUp mt-12 block">
            <div>
              <div className="dash md:dash-md mb-5"></div>
            </div>
            <div className="text-center">
              <div className="font-bebas text-8xl animate-gradient-text">
                Howdy! We are SASE TAMU.
              </div>
            </div>
            <div>
              <div className="dash mt-3"></div>
            </div>
            <div className="mt-3 flex flex-row items-center justify-center space-x-5 font-source text-lg">
              <button className="mt-5 rounded border border-maroon bg-maroon px-4 py-2 text-paper hover:bg-maroonDark">
                <Link href="/join">Join SASE!</Link>
              </button>
              <button className="mt-5 rounded border border-sakura/40 px-4 py-2 text-paper hover:border-sakura hover:text-sakura">
                <Link href="/upcoming-events">Upcoming Events</Link>
              </button>
            </div>
          </div>

          <AnnouncementTicker />
        </div>

        {/* HERO — MOBILE background */}
        <div className="relative mb-12 flex h-screen items-center justify-center overflow-hidden bg-white bg-informational_mobile bg-cover bg-fixed bg-center [scroll-snap-align:start] md:hidden">
          <div className="animated animatedFadeInUp fadeInUp block px-6">
            <div>
              <div className="dash-sm mb-5"></div>
            </div>
            <div className="text-center">
              <div className="font-bebas text-4xl text-white">
                Howdy! We are SASE TAMU.
              </div>
            </div>
            <div>
              <div className="dash-sm mt-3"></div>
            </div>
            <div className="mt-3 flex flex-row items-center justify-center gap-3">
              <button className="mt-5 rounded border border-maroon bg-maroon px-3 py-1.5 text-sm text-paper hover:bg-maroonDark">
                <Link href="/join">Join SASE!</Link>
              </button>
              <button className="mt-5 rounded border border-sakura/40 px-3 py-1.5 text-sm text-paper hover:border-sakura hover:text-sakura">
                <Link href="/upcoming-events">Upcoming Events</Link>
              </button>
            </div>
          </div>

          <AnnouncementTicker />
        </div>

        <div className="mx-auto flex h-screen max-w-7xl flex-col items-center overflow-hidden bg-navy font-source md:flex-row [scroll-snap-align:start]">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="px-6 pb-6 pt-24 text-center md:w-1/2 md:px-0 md:pb-20 md:pl-20 md:pt-5 md:pr-10 md:text-left"
          >
            <h1 className="font-bebas text-3xl md:text-5xl">Our Mission</h1>
            <div className="pt-3 md:pt-5 md:pb-5">
              <div className="text-sm md:text-base">
                SASE is dedicated to the advancement of Asian heritage
                scientists and engineers in education and employment so that
                they can achieve their full career potential. In addition to
                professional development, SASE also encourages members to
                contribute to the enhancement of the communities in which they
                live.
              </div>
              <button className="mt-2 rounded border border-maroon bg-maroon px-4 py-2 text-paper hover:bg-maroonDark">
                <Link href="/about">Learn more!</Link>
              </button>
            </div>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mt-0 self-center px-6 md:mt-0 md:w-1/2 md:px-10"
          >
            <Image
              className="max-h-[24vh] w-full rounded-xl object-cover md:max-h-none"
              src="/LONESTAR.jpg"
              width={450}
              height={50}
              alt="Picture of SASE at Lonestar"
            />
          </motion.div>
        </div>

        <div className="flex h-screen flex-col items-center justify-center overflow-hidden px-4 [scroll-snap-align:start]">
          <h1 className="pb-4 font-bebas text-3xl md:pb-10 md:text-5xl">Latest Content</h1>

          <ReelsFeed />
        </div>

        <div className="flex h-screen items-center justify-center overflow-hidden bg-white bg-cuties bg-cover bg-fixed bg-center [scroll-snap-align:start] md:block"></div>
        <div className="flex h-screen items-center justify-center overflow-hidden bg-white bg-elevator bg-cover bg-fixed bg-center [scroll-snap-align:start] md:hidden"></div>
      </div>
      <Footer />
    </>
  );
};

export default Home;