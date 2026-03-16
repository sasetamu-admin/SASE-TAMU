import React, { useEffect, useState } from "react";
import { NavBar } from "src/components/NavBar";
import { Footer } from "src/components/Footer";
import {getPastSaseEvents, getUpcomingSaseEvents} from "src/getCalendar";
import { GCalEventCard, GCalEventCardMobile } from "~/components/GCalendarEventCard";
import { UpcomingEventsProps } from "~/types/GCalendarTypes";

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

const upcoming_events = ({ u_events, m_events}: UpcomingEventsProps) => {
  const isMobile: boolean = useMediaQuery('(max-width: 768px)');
  return (
    <>  
      <div className="bg-white flex flex-col items-center">
        <div className="fixed z-40 w-full">
          <NavBar />
        </div>
        <div className="flex h-min-20 justify-center m-4 md:p-10"></div>
        <div className="w-2/3 font-source text-black flex flex-col items-center justify-center">
          <h1 className="px-20  font-bebas text-5xl">
            Upcoming Events
          </h1>
          <div className="flex pt-4 flex-col gap-y-8">
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
      </div>
      <div className="flex h-min-20 justify-center m-4 md:p-10"></div>
      <div className="flex h-96 items-center justify-center bg-white bg-karaoke bg-cover bg-fixed bg-center"></div>
      <Footer />
    </>
  );
};

export default upcoming_events;
