"use client"; // This is a client component

import { type NextPage } from "next";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { NavBar } from "src/components/NavBar";
import { Footer } from "src/components/Footer";
import Link from "next/link";
import { getPastSaseEvents, getUpcomingSaseEvents } from "~/getCalendar";
import { UpcomingEventsProps } from "~/types/GCalendarTypes";
import { GCalEventCard, GCalEventCardMobile } from "~/components/GCalendarEventCard";

export async function getStaticProps() {
  const u_events = await getUpcomingSaseEvents();
  const m_events = await getPastSaseEvents();
  return {
    props: {
      u_events,
      m_events
    },
    revalidate: 3600, 
  };
}

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    const media = window.matchMedia(query);
    
    setMatches(media.matches);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return isMounted ? matches : false;
};

const Home = ({ u_events, m_events}: UpcomingEventsProps) => {
  const isMobile: boolean = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <Head>
        <title>SASE TAMU</title>
      </Head>

      <div className="fixed z-40 w-full">
        <NavBar />
      </div>
      <div className="bg-white font-source text-black">
        <div className="mb-12 flex h-screen items-center justify-center bg-white bg-informational bg-cover bg-fixed bg-center">
          {/* DESKTOP */}
          <div className="animated animatedFadeInUp fadeInUp mt-12 hidden md:block">
            <div>
              <div className="dash md:dash-md mb-5"></div>
            </div>
            <div className="text-center">
              <div className="font-bebas text-8xl text-white">
                Howdy! We are SASE TAMU.
              </div>
            </div>
            <div>
              <div className="dash mt-3"></div>
            </div>
            <div className="mt-3 flex flex-row items-center justify-center space-x-5 font-source text-lg">
              <button className="mt-5 rounded border bg-sky-700 bg-opacity-75 px-4 py-2 text-white hover:bg-sky-700 hover:text-white">
                <Link href="/join">Join SASE!</Link>
              </button>
              <button className="mt-5 rounded border bg-slate-500 bg-opacity-25 px-4 py-2 text-white hover:bg-slate-500 hover:text-white">
                <Link href="/upcoming-events">Upcoming Events</Link>
              </button>
            </div>
          </div>

          {/* MOBILE */}
          <div className="animated animatedFadeInUp fadeInUp block md:hidden">
            <div>
              <div className="dash-sm mb-5"></div>
            </div>
            <div className="text-center">
              <div className="font-bebas text-7xl text-white">
                Howdy! We are SASE TAMU.
              </div>
            </div>
            <div>
              <div className="dash-sm mt-3"></div>
            </div>
            <div className="mt-3 flex flex-row items-center justify-center space-x-5 font-source text-lg">
              <button className="mt-5 rounded border bg-sky-700 bg-opacity-75 px-4 py-2 text-white hover:bg-sky-700 hover:text-white">
                <Link href="/join">Join SASE!</Link>
              </button>
              <button className="mt-5 rounded border bg-slate-500 bg-opacity-25 px-4 py-2 text-white hover:bg-slate-500 hover:text-white">
                <Link href="/upcoming-events">Upcoming Events</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white font-source md:flex-row">
          <div className="pb-20 pl-10 pr-10 pt-5 md:w-1/2 md:pl-20">
            <h1 className="font-bebas text-5xl">Our Mission</h1>
            <div className="pt-5 md:pb-5">
              <div>
                SASE is dedicated to the advancement of Asian heritage
                scientists and engineers in education and employment so that
                they can achieve their full career potential. In addition to
                professional development, SASE also encourages members to
                contribute to the enhancement of the communities in which they
                live.
              </div>
              <button className="mt-5 rounded border bg-sky-700 bg-opacity-75 px-4 py-2 text-white hover:bg-sky-700 hover:text-white">
                <Link href="/about">Learn more!</Link>
              </button>
            </div>
          </div>
          <div className="-mt-10 self-center pl-10 pr-10 md:mt-0 md:w-1/2">
            <Image
              className="w-full rounded-xl"
              src="/LONESTAR.jpg"
              width={450}
              height={50}
              alt="Picture of SASE at Lonestar"
            />
          </div>
        </div>

        <div className="flex justify-center bg-white pt-10 md:p-10"></div>

        <div className="flex flex-col justify-start items-center">

        <h1 className="pb-10 pl-10 pr-5 font-bebas text-5xl md:pl-20">
          Upcoming Events
        </h1>

        <div className="flex pt-4 flex-col gap-y-8 w-5/6">
        {isMobile && u_events.map((event) => (  
                      <GCalEventCardMobile
                        key={event.id}
                        id={event.id} 
                        description={event.description} 
                        start={event.start} 
                        location={event.location} 
                        title={event.title}
                        end = {event.end}
                      />
                    ))}
                    {!isMobile && u_events.map((event) => (  
                      <GCalEventCard
                        key={event.id}
                        id={event.id} 
                        description={event.description} 
                        start={event.start} 
                        location={event.location} 
                        title={event.title}
                        end = {event.end}
                      />
                    ))}
          </div>
          </div>

        <div className="flex h-max justify-center bg-white p-10 pt-20 md:block md:p-20"></div>
      </div>
      <div className="flex h-96 items-center justify-center bg-white bg-cuties bg-cover bg-fixed bg-center md:block"></div>
      <div className="flex h-96 items-center justify-center bg-white bg-elevator bg-cover bg-fixed bg-center md:hidden"></div>
      <Footer />
    </>
  );
};

export default Home;
