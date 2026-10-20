import type { EBoardOfficerList, GeneralOfficerList } from "./constants";
import { EBoardOfficerRoles, GeneralOfficerRoles } from "./constants";

// add /comingsoon.png for placeholder images

export const EBoardOfficers: EBoardOfficerList = {
  president: {
    image: { src: "/headshots/26-27/President_2627.png", width: 256, height: 256, alt: "President Headshot" },
    name: "Kiera Joy Ocampo",
    major: "IDIS '27",
    role: EBoardOfficerRoles.P,
    link: "https://www.linkedin.com/in/kiera-joy-ocampo-2aa054300/",
  },
  evp: {
    image: { src: "/headshots/26-27/EVP_2627.png", width: 256, height: 256, alt: "EVP Headshot" },
    name: "Mandip Chhteri",
    major: "ELEN '27",
    role: EBoardOfficerRoles.EVP,
    link: "https://www.linkedin.com/in/mandipchhetri/",
  },
  ivp: {
    image: { src: "/headshots/26-27/IVP_2627.png", width: 256, height: 256, alt: "IVP Headshot" },
    name: "Tyler Nguyen",
    major: "MXET '27",
    role: EBoardOfficerRoles.IVP,
    link: "https://www.linkedin.com/in/tylertainguyen/",
  },
  treasurer: {
    image: { src: "/headshots/26-27/Treasurer_2627.png", width: 256, height: 256, alt: "Treasurer Headshot" },
    name: "Nathan Saria",
    major: "IDIS '28",
    role: EBoardOfficerRoles.T,
    link: "https://www.linkedin.com/in/nathan-saria/",
  },
  secretary: {
    image: { src: "/headshots/26-27/Secretary_2627.png", width: 256, height: 256, alt: "Secretary Headshot" },
    name: "Maxwell Vo",
    major: "ELEN '27",
    role: EBoardOfficerRoles.S,
    link: "https://www.linkedin.com/in/maxwell-vo/",
  },
};

export const GeneralOfficers: GeneralOfficerList = {
  techMarketing: {
    image: { src: "/headshots/26-27/Marketing_2627.png", width: 256, height: 256, alt: "Marketing Director Headshot" },
    name: "Eva Cao",
    major: "CPSC '29",
    role: GeneralOfficerRoles.TMD,
    link: "https://www.linkedin.com/in/eva-y-cao/",
  },
  historian: {
    image: { src: "/headshots/26-27/Historian_2627.png", width: 256, height: 256, alt: "Historian Headshot" },
    name: "Vishjit Chandramohan",
    major: "CPSC '28",
    role: GeneralOfficerRoles.H,
    link: "https://www.linkedin.com/in/vishjit/",
  },
  social: {
    image: { src: "/headshots/26-27/Social_2627.png", width: 256, height: 256, alt: "Social Director Headshot" },
    name: "Jamie Moe",
    major: "IDIS '29",
    role: GeneralOfficerRoles.SD,
    link: "https://www.linkedin.com/in/jamie-moe/?isSelfProfile=false",
  },
  pr: {
    image: { src: "/headshots/26-27/PR_2627.png", width: 256, height: 256, alt: "PR Director Headshot" },
    name: "Vincent Nguyen",
    major: "MEEN '28",
    role: GeneralOfficerRoles.PRD,
    link: "https://www.linkedin.com/in/vincent-nguyen15/",
  },
  fundraising: {
    image: { src: "/headshots/26-27/Fundraising_2627.png", width: 256, height: 256, alt: "Fundraising Director Headshot" },
    name: "Victoria Nieto",
    major: "MXET '29",
    role: GeneralOfficerRoles.FD,
    link: "https://www.linkedin.com/in/victoria-nieto/",
  },
  logistics: {
    image: { src: "/headshots/26-27/Logistics_2627.png", width: 256, height: 256, alt: "Logistics Director Headshot" },
    name: "Kenneth Nguyen",
    major: "MXET '28",
    role: GeneralOfficerRoles.LD,
    link: "https://www.linkedin.com/in/kenneth-nguyen-b75a91308/",
  },
  science: {
    image: { src: "/headshots/26-27/Science_2627.png", width: 256, height: 256, alt: "Science Director Headshot" },
    name: "Jasmine Manalastas",
    major: "BIOL '29",
    role: GeneralOfficerRoles.SCID,
    link: "https://www.linkedin.com/in/jasmine-manalastas-3ab601431/",
  },
  sports: {
    image: { src: "/headshots/26-27/Sports_2627.png", width: 256, height: 256, alt: "Recreational Director Headshot" },
    name: "Jake Wei",
    major: "CPSC '29",
    role: GeneralOfficerRoles.RAD,
    link: "https://www.linkedin.com/in/jakerwei/",
  },
  development: {
    image: { src: "/headshots/26-27/Development_2627.png", width: 256, height: 256, alt: "Development Chair Headshot" },
    name: "Rishi Sakhamuri",
    major: "ELEN '29",
    role: GeneralOfficerRoles.DC,
    link: "https://www.linkedin.com/in/rishi-sakhamuri/",
  },
};

export const OfficerTeamPhoto = {
  src: "/headshots/26-27/OfficerTeam_Photo_2627.png",
};