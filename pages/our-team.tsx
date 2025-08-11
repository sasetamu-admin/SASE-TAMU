import { type NextPage } from "next";
import { useState } from "react";
import { NavBar } from "src/components/NavBar";
import { Footer } from "src/components/Footer";
import OfficerCard from "~/components/OfficerCard";
import { Advisors } from "~/constants/Advisor";
import type { EBoardOfficerList, GeneralOfficerList } from "~/constants/constants";
// current year officers
import { EBoardOfficers, GeneralOfficers } from "~/constants/CurrentOfficerList";
//23-24
import {PastEBoardOfficers2324, PastGeneralOfficers2324} from "~/constants/PastOfficerList23-24";
//24-25
import { PastEBoardOfficers2425, PastGeneralOfficers2425 } from "~/constants/PastOfficerList24-25";

// Interface for past officer years
interface PastOfficerYear {
  year: string;
  displayName: string;
  eboard: EBoardOfficerList;
  general: GeneralOfficerList;
}

const Team: NextPage = () => {
  const [openYear, setOpenYear] = useState<string | null>(null);

  //configuration for all past officer years - easy to add new years here
  const pastOfficerYears: PastOfficerYear[] = [
    // latest year should be first
    // to add future past officers, simply add a new object here that looks like this:
    // {
    //   year: "2022-23",
    //   displayName: "2022-23 Officers",
    //   eboard: PastEBoardOfficers2324,
    //   general: PastGeneralOfficers2324,
    // }
    {
      year: "2024-25",
      displayName: "2024-25 Officers",
      eboard: PastEBoardOfficers2425,
      general: PastGeneralOfficers2425,
    },
    {
      year: "2023-24",
      displayName: "2023-24 Officers",
      eboard: PastEBoardOfficers2324,
      general: PastGeneralOfficers2324,
    },
  ];

  const toggleYear = (year: string) => {
    setOpenYear(openYear === year ? null : year);
  };

  // component function to render officers
  const renderOfficerCards = (officers: Record<string, any>) => {
    return (
      <div className="flex flex-wrap justify-center gap-20 pt-10">
        {Object.keys(officers).map((key: string, idx: number) => {
          const officer = officers[key];
          if (!officer) return null;
          return <OfficerCard key={idx} cardInfo={officer} />;
        })}
      </div>
    );
  };

  // component functions to render past officer years
  const renderPastOfficers = () => {
    return pastOfficerYears.map((yearData) => (
      <div key={yearData.year}>
        <div className="mx-auto max-w-4xl px-4 mb-4">
          <button
            onClick={() => toggleYear(yearData.year)}
            className="flex w-full items-center justify-between rounded-lg bg-gray-100 p-4 text-left font-bebas text-2xl text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <span>{yearData.displayName}</span>
            <span className="text-xl">
              {openYear === yearData.year ? "-" : "+"}
            </span>
          </button>
        </div>
        {openYear === yearData.year && (
          <div className="mt-2 pb-10">
            <div className="flex justify-center font-bebas text-4xl text-gray-400">
              Executive Board
            </div>
            {renderOfficerCards(yearData.eboard)}
            <div className="flex justify-center pt-10 font-bebas text-4xl text-gray-400">
              General Officers
            </div>
            {renderOfficerCards(yearData.general)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="bg-white">
      <div className="fixed z-40 w-full">
        <NavBar />
      </div>
      
      <div className="pt-20 flex justify-center font-bebas text-5xl text-black">
        Meet our Team 2025-26
      </div>

      <div className="flex justify-center font-bebas text-4xl text-gray-400">
        Executive Board
      </div>

      {renderOfficerCards(EBoardOfficers)}

      <div className="flex justify-center pt-10 font-bebas text-4xl text-gray-400">
        General Officers
      </div>
      {renderOfficerCards(GeneralOfficers)}

      <div className="flex justify-center pt-10 font-bebas text-4xl text-gray-400">
        Advisors
      </div>

      {renderOfficerCards(Advisors)}

      <div className="flex justify-center pt-10 font-bebas text-4xl text-gray-400">
        Former Officers
      </div>

      <div className="pt-10">
        {renderPastOfficers()}
      </div>

      <div className="pb-20"></div>

      <div className="flex h-96 items-center justify-center bg-white bg-officer_mobile bg-cover bg-fixed bg-center md:hidden"></div>
      <div className="flex h-96 items-center justify-center bg-white bg-officer bg-cover bg-fixed bg-center md:block"></div>
      <Footer />
    </div>
  );
};

export default Team;
