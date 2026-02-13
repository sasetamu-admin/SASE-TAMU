"use client";
import React from "react";
import { NavBar } from "src/components/NavBar";
import { Footer } from "src/components/Footer";
import EventCard from "~/components/EventCard";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useState, useEffect } from "react";


const list = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};


const item = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
};


const Join = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);


  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;


    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollRight(maxScroll > 0);
    setCanScrollLeft(el.scrollLeft > 1);
  }, []);
  return (
    <div className="bg-white text-black">
      <div className="fixed z-40 w-full">
        <NavBar />
      </div>


      <div className="relative flex flex-col overflow-x-hidden bg-white pb-12 pt-28 font-source md:flex-row">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-emerald-200/60 via-emerald-100/30 to-transparent blur-3xl" />


        <div className="w-full px-8 pb-10 md:w-1/2 md:pb-4">
          <h1 className="font-bebas text-5xl text-center">
            <motion.span
              className="text-emerald-700 font-bebas text-5xl font-bold my-2 ml-2 tracking-wide hover:text-6xl hover:text-emerald-800 transition-all duration-500 ease-in-out"
              whileHover={{
                rotateZ: [0, 50, -50, 30, -30, 0],
                transition: {
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }}
              style={{ perspective: 600 }}
              animate={{ rotateZ: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              Students!
            </motion.span>{" "}
            Join SASE here
          </h1>


          <div className="pb-5 pt-5 text-center">
            <motion.ul
              variants={list}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mx-auto mt-4 max-w-2xl list-disc space-y-3 pl-6 text-left text-lg text-gray-700"
            >
              {[
                "Direct networking opportunities with recruiters and engineers",
                "Meeting a community of like-minded peers and building lifelong friendships",
                "Developing leadership skills through officer and committee positions",
                "Learning and engaging with Asian culture and heritage",
                "Enabling personal and professional growth through workshops and events",
              ].map((text, i) => (
                <motion.li key={i} variants={item}>
                  {text}
                </motion.li>
              ))}
            </motion.ul>


            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 rounded-lg bg-sky-700 px-6 py-3 text-white shadow-md hover:bg-sky-800"
            >
              <Link href="https://linktr.ee/tamusase" target="_blank">
                Sign up here through our linktr.ee!
              </Link>
            </motion.button>
          </div>
        </div>


        <div className="self-center pl-10 pr-10 pt-5 w-full md:w-1/2">
              <motion.div whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    className="overflow-hidden rounded-xl"
  >
          <Image
            className="w-full rounded-xl"
            src="/lonestarsquad.jpg"
            width={400}
            height={300}
            alt="Picture of SASE Lonestar 2025!"
          />
          </motion.div>
        </div>
      </div>


      <div className="flex flex-col overflow-x-hidden bg-white pb-12 pt-28 font-source md:flex-row">
        <div
          id="projects"
          className="w-full flex-col bg-white font-source text-lg text-black"
        >
          <h1 className="px-6 pb-4 font-bebas text-5xl text-center">
            Some Past Events :)
          </h1>


          <div className="relative">
            {canScrollRight && (
  <>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />
              <button
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;


                  el.scrollBy({
                    left: el.clientWidth * 0.8,
                    behavior: "smooth",
                  });
                }}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-gradient-to-l from-white to-transparent px-4 py-2 font-bebas text-xl text-gray-700 shadow-md backdrop-blur hover:bg-white hover:text-black transition"
              >
                →
              </button>
  </>)}
  {canScrollLeft && ( <>
              <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />


              <button
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;


                  el.scrollBy({
                    left: -el.clientWidth * 0.8,
                    behavior: "smooth",
                  });
                }}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 px-4 py-2 font-bebas text-xl text-gray-700 shadow-md backdrop-blur hover:bg-white hover:text-black transition"
              >
                ←
              </button>
              </>


  )}
            <div ref={scrollRef}
              onScroll={() => {
                const el = scrollRef.current;
                if (!el) return;


                const maxScroll = el.scrollWidth - el.clientWidth;
                setCanScrollRight(el.scrollLeft < maxScroll - 1);
                setCanScrollLeft(el.scrollLeft > 1);
              }}
  className="overflow-x-auto whitespace-nowrap scroll-smooth p-6 px-6">
              <div className="flex min-w-max gap-5">
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
                src="/soccer.jpeg"
                title="Intramural Soccer!"
                description="SASE's Intramural Soccer Team!"
              />
              <EventCard
                src="/Halloween.JPG"
                title="SASE Halloween Social!"
                description="A fun Halloween event!"
              />
              <EventCard
                src="/marathon_volunteering.jpg"
                title="Volunteering at the BCS Marathon!"
                description="SASE volunteers at the BCS Marathon!"
              />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex h-96 items-center justify-center bg-white bg-meow bg-cover bg-fixed bg-center md:block" />
      <Footer />
    </div>
  );
};


export default Join;





