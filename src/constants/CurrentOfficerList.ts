import type { EBoardOfficerList, GeneralOfficerList } from "./constants";
import { EBoardOfficerRoles, GeneralOfficerRoles } from "./constants";

// add /comingsoon.png for placeholder images

export const EBoardOfficers: EBoardOfficerList = {
  president: {
    image: { src: "/headshots/26-27/President_2627.png", width: 256, height: 256, alt: "President Headshot" },
    name: "Kiera Joy Ocampo",
    major: "IDIS '26",
    role: EBoardOfficerRoles.P,
    link: "null",
  },
  evp: {
    image: { src: "/headshots/26-27/EVP_2627.png", width: 256, height: 256, alt: "EVP Headshot" },
    name: "Mandip Chhteri",
    major: "ELEN '26",
    role: EBoardOfficerRoles.EVP,
    link: "null",
  },
  ivp: {
    image: { src: "/headshots/26-27/IVP_2627.png", width: 256, height: 256, alt: "IVP Headshot" },
    name: "Tyler Nguyen",
    major: "MXET '26",
    role: EBoardOfficerRoles.IVP,
    link: "null",
  },
  treasurer: {
    image: { src: "/headshots/26-27/Treasurer_2627.png", width: 256, height: 256, alt: "Treasurer Headshot" },
    name: "Nathan Saria",
    major: "IDIS '28",
    role: EBoardOfficerRoles.T,
    link: "null",
  },
  secretary: {
    image: { src: "/headshots/26-27/Secretary_2627.png", width: 256, height: 256, alt: "Secretary Headshot" },
    name: "Maxwell Vo",
    major: "ELEN '26",
    role: EBoardOfficerRoles.S,
    link: "null",
  },
};

export const GeneralOfficers: GeneralOfficerList = {
  techMarketing: {
    image: { src: "/headshots/26-27/Marketing_2627.png", width: 256, height: 256, alt: "Marketing Director Headshot" },
    name: "Eva Cao",
    major: "CPSC '29",
    role: GeneralOfficerRoles.TMD,
    link: "null",
  },
  historian: {
    image: { src: "/headshots/26-27/Historian_2627.png", width: 256, height: 256, alt: "Historian Headshot" },
    name: "Vishjit Chandramohan",
    major: "CPSC '28",
    role: GeneralOfficerRoles.H,
    link: "null",
  },
  social: {
    image: { src: "/headshots/26-27/Social_2627.png", width: 256, height: 256, alt: "Social Director Headshot" },
    name: "Jamie Moe",
    major: "IDIS '29",
    role: GeneralOfficerRoles.SD,
    link: "null",
  },
  pr: {
    image: { src: "/headshots/26-27/PR_2627.png", width: 256, height: 256, alt: "PR Director Headshot" },
    name: "Vincent Nguyen",
    major: "MEEN '28",
    role: GeneralOfficerRoles.PRD,
    link: "null",
  },
  fundraising: {
    image: { src: "/headshots/26-27/Fundraising_2627.png", width: 256, height: 256, alt: "Fundraising Director Headshot" },
    name: "Victoria Nieto",
    major: "MXET '29",
    role: GeneralOfficerRoles.FD,
    link: "null",
  },
  logistics: {
    image: { src: "/headshots/26-27/Logistics_2627.png", width: 256, height: 256, alt: "Logistics Director Headshot" },
    name: "Kenneth Nguyen",
    major: "MXET '28",
    role: GeneralOfficerRoles.LD,
    link: "null",
  },
  science: {
    image: { src: "/headshots/26-27/Science_2627.png", width: 256, height: 256, alt: "Science Director Headshot" },
    name: "Jasmine Manalastas",
    major: "BIOL '29",
    role: GeneralOfficerRoles.SCID,
    link: "null",
  },
  sports: {
    image: { src: "/headshots/26-27/Sports_2627.png", width: 256, height: 256, alt: "Recreational Director Headshot" },
    name: "Jake Wei",
    major: "CSCE '28",
    role: GeneralOfficerRoles.RAD,
    link: "null",
  },
  development: {
    image: { src: "/headshots/26-27/Development_2627.png", width: 256, height: 256, alt: "Development Chair Headshot" },
    name: "Rishi Sakhamuri",
    major: "ITDE '29",
    role: GeneralOfficerRoles.DC,
    link: "null",
  },
};

export const OfficerTeamPhoto = {
  src: "/headshots/26-27/OfficerTeam_Photo_2627.png",
};