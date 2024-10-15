import { TTeamMember } from "@/types";
import photoOfKarim from "@/assets/images/karim.jpg";
import photoOfRahim from "@/assets/images/rahim.jpg";
import photoOfAkram from "@/assets/images/akram.jpg";
import photoOfYasir from "@/assets/images/yasir.jpg";
import photoOfAkbor from "@/assets/images/akbor.jpg";
import photoOfIkbal from "@/assets/images/ikbal.jpg";

export const TEAM_MEMBERS: TTeamMember[] = [
  {
    image: photoOfKarim,
    name: "Abul Karim",
    designation: "Founder and CEO",
  },
  {
    image: photoOfRahim,
    name: "Abdur Rahim",
    designation: "COO",
  },
  {
    image: photoOfAkram,
    name: "Akram Khan",
    designation: "CTO",
  },
  {
    image: photoOfYasir,
    name: "Yasir Khan",
    designation: "Team Lead",
  },
  {
    image: photoOfAkbor,
    name: "Akbor Ali",
    designation: "Manager",
  },
  {
    image: photoOfIkbal,
    name: "Ikbal Khan",
    designation: "Manager",
  },
];
