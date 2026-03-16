import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Days, EventCardProps, getDayEnding, getURL, Months } from "~/types/GCalendarTypes";

export const GCalEventCardMobile:React.FC<EventCardProps> = ({title, start, location, description, end}) => {
  var date_start = new Date(start)
  var date_end = new Date(end)
  return (
    <div className="pl-[4px] pb-[4px] bg-gradient-to-r from-blue-500 via-emerald-500 to-green-500">
      <div className="bg-white rounded-[inherit] p-6 hover:bg-slate-200 transition-all duration-300 ease-in-out">
        <div className="flex flex-col">
            <div className="flex flex-col items-start">
              <div className="text-5xl text-blue-900">
                {Months[date_start.getMonth()]} {date_start.getDate()}{getDayEnding(date_start.getDate())}
              </div>
              <div className="text-2xl text-blue-700">
                {Days[date_start.getDay()]}
              </div>
            </div>
            <div className="flex flex-col pt-6">
              <div className="flex flex-row items-center">
                <a className="relative text-4xl text-blue-900 group w-fit peer" href={getURL(description ?? "")} target="_blank" rel="noopener noreferrer">
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
      </div>
    </div> 
  )
}

export const GCalEventCard:React.FC<EventCardProps> = ({title, start, location, description, end}) => {
  var date_start = new Date(start)
  var date_end = new Date(end)
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
                <a className="relative text-4xl text-blue-900 group w-fit peer" href={getURL(description ?? "")} target="_blank" rel="noopener noreferrer">
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
        </div>
      </div>
    </div> 
  )
}