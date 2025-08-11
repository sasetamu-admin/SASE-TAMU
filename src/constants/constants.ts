import type { ImageProps } from "next/image";

export interface TeamMemberCard {
  image: ImageProps;
  name: string;
  major: string;
  role: string;
  link: string;
}

// add more officer roles if needed
export interface EBoardOfficerList {
  president?: TeamMemberCard;
  evp?: TeamMemberCard;
  ivp?: TeamMemberCard;
  treasurer?: TeamMemberCard;
  secretary?: TeamMemberCard;
}

export const EBoardOfficerRoles = {
    P: "President",
    IVP: "Internal Vice President", 
    EVP: "External Vice President",
    T: "Treasurer", 
    S: "Secretary",
}

// add more general officer roles if needed
export interface GeneralOfficerList {
  techMarketing?: TeamMemberCard;
  historian?: TeamMemberCard;
  social?: TeamMemberCard;
  pr?: TeamMemberCard;
  fundraising?: TeamMemberCard;
  logistics?: TeamMemberCard;
  science?: TeamMemberCard;
  sports?: TeamMemberCard;
  development?: TeamMemberCard;
}

export const GeneralOfficerRoles = {
    TMD: "Technical Marketing Director",
    H: "Historian",
    SD: "Social Director",
    PRD: "Public Relations Director",
    FD: "Fundraising Director",
    LD: "Logistics Director",
    SCID: "Science Director",
    RAD: "Recreational Activities Director",
    DC: "Development Chair",
}

export interface AdvisorList {
  pauline: TeamMemberCard;
}

export type AdvisorRoles = "pauline";