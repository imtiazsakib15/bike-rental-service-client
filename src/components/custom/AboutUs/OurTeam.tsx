import { TEAM_MEMBERS } from "@/constants/teamMember.constant";
import Container from "./../Container";
import { TTeamMember } from "@/types";
import Title from "../shared/Title";

const OurTeam = () => {
  return (
    <div className="pb-6 sm:pb-8 md:pb-10">
      <Container>
        <Title>Our Team</Title>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-5 text-white pt-8">
          {TEAM_MEMBERS.map((teamMember: TTeamMember) => (
            <div
              key={teamMember.image}
              className="bg-gradient-to-b from-[#0A9FDA] to-[#0F1A43] p-6 pt-0 text-center"
            >
              <img
                className="aspect-[8/5]"
                src={teamMember.image}
                alt={teamMember.name}
              />
              <h5 className="text-xl md:text-2xl font-medium pt-4">
                {teamMember.name}
              </h5>
              <p className="pt-2">{teamMember.designation}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurTeam;
