
interface TimeDict {
  [key: number]: string
}

export const Months:TimeDict = {
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

export const Days:TimeDict = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
}



export function getDayEnding(day: number): string {
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

export interface EventCardProps {
  id: string;
  title: string;
  start: string;
  end: string;
  location: string;
  description?: string;
}

export interface UpcomingEventsProps {
  u_events: EventCardProps[];
  m_events: EventCardProps[];
}

export function getURL(desc: string): string {
  return desc.substring(desc.indexOf("\"")+1, desc.lastIndexOf("\""));
}