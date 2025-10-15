import type { EBoardOfficerList, GeneralOfficerList } from "./constants";
import { EBoardOfficerRoles, GeneralOfficerRoles } from "./constants";

// add /comingsoon.png for placeholder images

export const EBoardOfficers: EBoardOfficerList = {
  president: {
    image: {
      src: "/headshots/25-26/Pres_Pranav_2526.JPG",
      width: 256,
      height: 256,
      alt: "Pranav Headshot",
    },
    name: "Pranav Moogala",
    major: "Architectural Engineering '26",
    role: EBoardOfficerRoles.P,
    link: "https://www.linkedin.com/in/pranav-moogala-b826b221b/",
  },
  evp: {
    image: {
      src: "/headshots/25-26/EVP_Kiera_2526.JPG",
      width: 256,
      height: 256,
      alt: "Kiera Headshot",
    },
    name: "Kiera Joy Ocampo",
    major: "Industrial Distribution '27",
    role: EBoardOfficerRoles.EVP,
    link: "https://www.linkedin.com/in/kiera-joy-ocampo-2aa054300/",
  },
  ivp: {
    image: {
      src: "/headshots/25-26/IVP_Samantha_2526.JPG",
      width: 256,
      height: 256,
      alt: "Sam Headshot",
    },
    name: "Samantha Li",
    major: "Chemical Engineering '27",
    role: EBoardOfficerRoles.IVP,
    link: "https://www.linkedin.com/in/samantha-li-069a282b7/",
  },
  treasurer: {
    image: {
      src: "/headshots/25-26/Treasurer_Mya_2526.JPG",
      width: 256,
      height: 256,
      alt: "Mya Headshot",
    },
    name: "Mya Tinsay",
    major: "Mechatronics Engineering '26",
    role: EBoardOfficerRoles.T,
    link: "https://www.linkedin.com/in/mya-tinsay/",
  },
  secretary: {
    image: {
      src: "/headshots/25-26/Secretary_Nick_2526.JPG",
      width: 256,
      height: 256,
      alt: "Nick Headshot",
    },
    name: "Nick Truong",
    major: "Computer Science '26",
    role: EBoardOfficerRoles.S,
    link: "https://www.linkedin.com/in/nick-truong/",
  },
};

export const GeneralOfficers: GeneralOfficerList = {
  techMarketing: {
    image: {
      src: "/headshots/25-26/Marketing_Elena_2526.JPG",
      width: 256,
      height: 256,
      alt: "Elena Headshot",
    },
    name: "Elena Lai",
    major: "Mechatronics Engineering '27",
    role: GeneralOfficerRoles.TMD,
    link: "https://www.linkedin.com/in/elena-lai-a625131b2/",
  },
  historian: {
    image: {
      src: "/headshots/25-26/Historian_Maxwell_2526.JPG",
      width: 256,
      height: 256,
      alt: "Max Headshot",
    },
    name: "Maxwell Vo",
    major: "Electrical Engineering '27",
    role: GeneralOfficerRoles.H,
    link: "https://www.linkedin.com/in/maxwell-vo/",
  },
  social: {
    image: {
      src: "/headshots/25-26/Social_Leon_2526.JPG",
      width: 256,
      height: 256,
      alt: "Leon Headshot",
    },
    name: "Leon Fong",
    major: "Electrical Engineering '27",
    role: GeneralOfficerRoles.SD,
    link: "https://www.linkedin.com/in/leon-fong/",
  },
  pr: {
    image: {
      src: "/headshots/25-26/PR_Kelly_2526.JPG",
      width: 256,
      height: 256,
      alt: "Kelly Headshot",
    },
    name: "Kelly Vu",
    major: "Electrical Engineering '27",
    role: GeneralOfficerRoles.PRD,
    link: "https://www.linkedin.com/in/vu-kelly/",
  },
  fundraising: {
    image: {
      src: "/headshots/25-26/Fundraising_Tyler_2526.JPG",
      width: 256,
      height: 256,
      alt: "Tyler Headshot",
    },
    name: "Tyler Nguyen",
    major: "Mechatronics Engineering '27",
    role: GeneralOfficerRoles.FD,
    link: "https://www.linkedin.com/in/tylertainguyen/",
  },
  logistics: {
    image: {
      src: "/headshots/25-26/Logistics_Matthew_2526.JPG",
      width: 256,
      height: 256,
      alt: "Matthew Headshot",
    },
    name: "Matthew Fan",
    major: "Biomedical Engineering '27",
    role: GeneralOfficerRoles.LD,
    link: "https://www.linkedin.com/in/matthewjfan/",
  },
  science: {
    image: {
      src: "/headshots/25-26/Science_Aidan_2526.JPG",
      width: 256,
      height: 256,
      alt: "Aidan Headshot",
    },
    name: "Aidan Chance",
    major: "Biomedical Engineering '28",
    role: GeneralOfficerRoles.SCID,
    link: "https://www.linkedin.com/in/aidan-chance/",
  },
  sports: {
    image: {
      src: "/headshots/25-26/Sports_Ryan_2526.JPG",
      width: 256,
      height: 256,
      alt: "Ryan Headshot",
    },
    name: "Ryan Soriano",
    major: "Data Engineering '27",
    role: GeneralOfficerRoles.RAD,
    link: "https://www.linkedin.com/in/ryansori/",
  },
  development: {
    image: {
      src: "/headshots/25-26/Development_Emmaus_2526.JPG",
      width: 256,
      height: 256,
      alt: "Emmaus Headshot",
    },
    name: "Emmaus Torres",
    major: "Ocean Engineering '26",
    role: GeneralOfficerRoles.DC,
    link: "https://www.linkedin.com/in/emmaustorres/",
  },
};

export const OfficerTeamPhoto = {
  src: "/headshots/25-26/OfficerTeam_Photo_2526.jpg",
}