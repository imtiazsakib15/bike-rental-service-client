import ContactInfo from "@/components/custom/AboutUs/ContactInfo";
import HistoryAndMilestones from "@/components/custom/AboutUs/HistoryAndMilestones";
import MissionAndVision from "@/components/custom/AboutUs/MissionAndVision";
import OurStory from "@/components/custom/AboutUs/OurStory";
import OurTeam from "@/components/custom/AboutUs/OurTeam";

const AboutUs = () => {
  return (
    <>
      <OurStory />
      <MissionAndVision />
      <ContactInfo />
      <OurTeam />
      <HistoryAndMilestones />
    </>
  );
};

export default AboutUs;
