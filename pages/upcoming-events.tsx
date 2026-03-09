import React, { useEffect } from "react";
import { NavBar } from "src/components/NavBar";
import { Footer } from "src/components/Footer";
import { getPastSaseEvents, getUpcomingSaseEvents } from "src/getCalendar";
import { hover, motion } from "framer-motion";
import { MdArrowForwardIos, MdOutlineEmail, MdLink } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

interface TimeDict {
  [key: number]: string
}

const Months:TimeDict = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
}

const Days:TimeDict = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
}

function getDayEnding(day: number): string {
  if(day % 10 == 1){
    return "st";
  }
  if(day % 10 == 2){
    return "nd";
  }
  if(day % 10 == 3){
    return "rd";
  }
  return "th";
}

interface EventCardProps {
  id: string;
  title: string;
  start: string;
  end: string;
  location: string;
  description?: string;
  color: string;
  hover_color: string;
  has_rsvp: boolean
}

interface UpcomingEventsProps {
  u_events: EventCardProps[];
  m_events: EventCardProps[];
}

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

const childVariants = {
  initial: { 
    opacity: 0, 
    x: -20,
    scale: 0,
    originX: 0 
  },
  onParentHover: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 500, 
      damping: 60,
    } 
  }
} as const;

function getURL(desc: string): string {
  /* console.log(desc);
  console.log(desc.substring(desc.indexOf("\"")+1, desc.lastIndexOf("\""))); */
  return desc.substring(desc.indexOf("\"")+1, desc.lastIndexOf("\""));
}

const EventCardNEW:React.FC<EventCardProps> = ({id, title, start, location, description, color, hover_color, has_rsvp, end}) => {
  var date_start = new Date(start)
  var date_end = new Date(end)
  /* console.log(date_end); */
  return (
    <div className="pl-[4px] pb-[4px] bg-gradient-to-r from-blue-500 via-emerald-500 to-green-500">
  <div className="bg-white rounded-[inherit] p-6 hover:bg-slate-200 transition-all duration-300 ease-in-out">
    <div className="grid grid-cols-10 grid-rows-3">
      <div className="row-start-1 row-end-3 col-start-1 col-end-3">
        <div className="flex flex-col">
          <div className="text-5xl text-blue-900">
            {date_start.getDate()}{getDayEnding(date_start.getDate())}
          </div>
          <div className="text-2xl text-blue-700">
            {Months[date_start.getMonth()]}, {Days[date_start.getDay()]}
          </div>
        </div>
      </div>
      <div className="row-start-2 row-end-4 col-start-4 col-end-11">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <a className="relative text-4xl text-blue-900 group w-fit peer" href={getURL(description ?? "")} target="_blank" 
  rel="noopener noreferrer">
              {title} 
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r to-blue-700 via-emerald-500 from-green-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <FaExternalLinkAlt className="text-blue-700 pl-2 pt-2 peer-hover:text-emerald-500 transition-all" size = {32}/>
          </div>
          
          <div className="text-2xl text-blue-700">
            {date_start.getHours() % 12 || 12} {date_start.getHours() >= 12 ? <span>PM</span> : <span>AM</span>} - {date_end.getHours() % 12 || 12} {date_end.getHours() >= 12 ? <span>PM</span> : <span>AM</span>}
          </div>
          <div className="text-2xl text-blue-700">
            {location}
          </div>
        </div>
      </div>
      {/* <div className="row-start-3 row-end-4 col-start-1 col-end-2">
        <div className="flex flex-row justify-end pr-8 items-center">  
          <MdOutlineEmail className="text-blue-400" size = {48}/>
          <MdArrowForwardIos className="text-blue-400" size = {48}/>
        </div>
      </div> */}
    </div>
  </div>
</div>)
    
      }

const upcoming_events = ({ u_events, m_events}: UpcomingEventsProps) => {
  m_events.map((event) => {var d = new Date(event.start); console.log(d.getMonth())})
  return (
    <>  
      <div className="bg-white flex flex-col items-center">
        <div className="fixed z-40 w-full">
          <NavBar />
        </div>
        <div className="flex h-min-20 justify-center m-4 md:p-10"></div>
        {/* <div className="flex h-max justify-center bg-white p-10 md:p-10"></div> */}
        <div className="w-2/3 font-source text-black flex flex-col items-center justify-center">
          <h1 className="px-20  font-bebas text-5xl">
            Upcoming Events
          </h1>
          {/* <div className="w-full flex flex-row flex-wrap items-center justify-center"> */}
          <div className="flex flex-col gap-y-8">
            {u_events.map((event) => (  
              <EventCardNEW
                key={event.id}
                id={event.id} 
                description={event.description} 
                start={event.start} 
                location={event.location} 
                title={event.title}
                color="bg-emerald-300"
                hover_color="hover:bg-emerald-600"
                has_rsvp = {true}
                end = {event.end}
              />
            ))}
            </div>
            {/* {u_events.map((event) => (
              <EventCard 
                key={event.id}
                id={event.id} 
                description={event.description} 
                start={event.start} 
                location={event.location} 
                title={event.title}
                color="bg-emerald-300"
                hover_color="hover:bg-emerald-600"
                has_rsvp = {true}
              />
            ))}
            <div className="w-full h-2 bg-slate-800 rounded-xl"></div>
            {m_events.map((event) => (
              <EventCard 
                key={event.id}
                id={event.id} 
                description={event.description} 
                start={event.start} 
                location={event.location} 
                title={event.title}
                color="bg-sky-200"
                hover_color="hover:bg-sky-400"
                has_rsvp = {false}
              />
            ))} */}
          {/* </div> */}
        </div>
      </div>
      <div className="flex h-min-20 justify-center m-4 md:p-10"></div>
      <div className="flex h-96 items-center justify-center bg-white bg-karaoke bg-cover bg-fixed bg-center"></div>
      <Footer />
    </>
  );
};

export default upcoming_events;
