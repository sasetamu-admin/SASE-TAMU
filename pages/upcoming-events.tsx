import React, { useEffect } from "react";
import { NavBar } from "src/components/NavBar";
import { Footer } from "src/components/Footer";
import { getPastSaseEvents, getUpcomingSaseEvents } from "src/getCalendar";
import { hover, motion } from "framer-motion";
import { MdArrowForwardIos } from "react-icons/md";

interface MonthDict {
  [key: number]: string
}

const Months:MonthDict = {
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

function getDayEnding(day: number): string {
  if(day == 1){
    return "st";
  }
  if(day == 2){
    return "nd";
  }
  if(day == 3){
    return "rd";
  }
  return "th";
}

interface EventCardProps {
  id: string;
  title: string;
  start: string;
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
  console.log(desc);
  console.log(desc.substring(desc.indexOf("\"")+1, desc.lastIndexOf("\"")));
  return desc.substring(desc.indexOf("\"")+1, desc.lastIndexOf("\""));
}

const EventCard:React.FC<EventCardProps> = ({id, title, start, location, description, color, hover_color, has_rsvp}) => {
  var date = new Date(start)
  return (
    <motion.div 
    initial="initial"
    whileHover="onParentHover"
    className={`min-h-8  w-full flex flex-row items-center ${color} ${hover_color} justify-between m-2 rounded-xl group hover:py-2 transition-all ease-in-out duration-500`}>
      <div className="flex-1 flex justify-start items-center">
        <span className="text-2xl my-4 ml-4 group-hover:text-white transition-all ease-in-out duration-500">
          {title}
        </span>
        {has_rsvp && <MdArrowForwardIos size = {24} className="text-black" />}
        {has_rsvp && (
          <motion.a 
          href={getURL(description ?? "")} 
          target="_blank"               
          rel="noopener noreferrer"     
          variants={childVariants}
          className="text-3xl hover:text-white transition-colors ease-in-out duration-200 cursor-pointer hover:underline underline-offset-4"
          >
            RSVP
          </motion.a>
        )}
      </div>

      <div className="flex-1 flex justify-center">
        <span className="text-2xl m-2 group-hover:text-white transition-all ease-in-out duration-500 text-center">
          {location}
        </span>
      </div>

      <div className="flex-1 flex justify-end items-center text-2xl group-hover:text-white transition-all ease-in-out duration-500 pr-4">
        <span className="mr-1">{date.getHours() % 12 || 12}</span>
        {date.getHours() >= 12 ? <span>PM</span> : <span>AM</span>}
        <span className="mr-1">, </span>
        <span className="mr-2">{Months[date.getMonth()]}</span>
        <span>{date.getDate()}</span>
        <span>{getDayEnding(date.getDate())}</span>
      </div>
    </motion.div>
  )
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
          <div className="w-full flex flex-col items-center justify-center">
            {u_events.map((event) => (
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
            ))}
          </div>
        </div>
      </div>
      <div className="flex h-96 items-center justify-center bg-white bg-karaoke bg-cover bg-fixed bg-center"></div>
      <Footer />
    </>
  );
};

export default upcoming_events;
