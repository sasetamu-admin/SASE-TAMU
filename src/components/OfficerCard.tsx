import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import type { TeamMemberCard } from "../constants/constants";

interface OfficerCardProps {
  cardInfo: TeamMemberCard;
}

const OfficerCard: React.FC<OfficerCardProps> = ({ cardInfo }) => {
  return (
    <div className="card h-96 w-60 shadow-xl">
      <figure>
        <Image
          src={cardInfo.image.src}
          width={cardInfo.image.width}
          height={cardInfo.image.height}
          alt={cardInfo.image.alt}
        />
      </figure>
      <div className="text-md card-body bg-white rounded-b-xl h-72">
        <div className="flex flex-col">
          <div className="inline-flex">
            <p className="text-black">{cardInfo.role}</p>
            <div className="mt-1 pl-4">
              <Link
                href={cardInfo.link}
                target="_blank"
                className="hover:text-sky-600"
              >
                <BsLinkedin />
              </Link>
            </div>
          </div>
          <p className="text-gray-400">{cardInfo.name}</p>
          <p className="text-gray-400 italic">{cardInfo.major}</p>
        </div>
      </div>
    </div>
  );
};

export default OfficerCard;
