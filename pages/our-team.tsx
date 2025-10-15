import { type NextPage } from "next";
import { useState } from "react";
import { NavBar } from "src/components/NavBar";
import { Footer } from "src/components/Footer";
import OfficerCard from "~/components/OfficerCard";
import { Advisors } from "~/constants/Advisor";
import Image from "next/image";
import type { AdvisorList, EBoardOfficerList, GeneralOfficerList, TeamMemberCard } from "~/constants/constants";
// current year officers
import { EBoardOfficers, GeneralOfficers, OfficerTeamPhoto } from "~/constants/CurrentOfficerList";
//23-24
import {PastEBoardOfficers2324, PastGeneralOfficers2324} from "~/constants/pastofficerlists/PastOfficerList23-24";
//24-25
import { PastEBoardOfficers2425, PastGeneralOfficers2425 } from "~/constants/pastofficerlists/PastOfficerList24-25";

// Interface for past officer years
interface PastOfficerYear {
  year: string;
  displayName: string;
  eboard: EBoardOfficerList;
  general: GeneralOfficerList;
}

const Team: NextPage = () => {
  const [openYear, setOpenYear] = useState<string | null>(null);

  /**
   * Configuration for all past officer years.
   * 
   * To add future past officers:
   * 1. Create new constants for the officer lists in the appropriate file (e.g., PastEBoardOfficers2526, PastGeneralOfficers2526).
   * 2. Add a new object to the 'pastOfficerYears' array below, following the format:
   *    {
   *      year: "2025-26",
   *      displayName: "2025-26 Officers",
   *      eboard: PastEBoardOfficers2526,
   *      general: PastGeneralOfficers2526,
   *    }
   * 3. Place the newest year at the top of the array for correct display order.
   */
  const pastOfficerYears: PastOfficerYear[] = [
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

  

  const renderOfficerCards = (
  officers: EBoardOfficerList | GeneralOfficerList | AdvisorList
) => {
  return (
    <div className="flex flex-wrap justify-center gap-20 pt-10">
      {Object.keys(officers).map((key: string, idx: number) => {
        const officer = (officers as Record<string, TeamMemberCard>)[key];
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

      <div className="my-10 mx-5 flex justify-center">
        <Image
          src={OfficerTeamPhoto.src}
          alt="Officer Team Photo"
          width={1200}
          height={600}
          className="w-full max-w-6xl rounded-lg object-cover"
        />
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
