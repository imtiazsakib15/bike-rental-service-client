import { StarIcon, WorkflowIcon } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Container from "../Container";
import Title from "../shared/Title";

const HistoryAndMilestones = () => {
  return (
    <div className="overflow-x-hidden pb-6 sm:pb-8 md:pb-10">
      <Container>
        <Title>History & Milestones</Title>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(40, 150, 200)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(40, 150, 200)" }}
            date="2021"
            iconStyle={{ background: "rgb(40, 150, 200)", color: "#fff" }}
            icon={<WorkflowIcon />}
          >
            <p className="text-white">
              RideEasy was founded with a small fleet of bikes in Dhaka, driven
              by a passion for promoting eco-friendly transportation. Our
              mission was simple—provide a seamless and affordable bike rental
              service to reduce traffic congestion and carbon emissions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(40, 150, 200)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(40, 150, 200)" }}
            date="2022"
            iconStyle={{ background: "rgb(40, 150, 200)", color: "#fff" }}
            icon={<WorkflowIcon />}
          >
            <p className="text-white">
              We expanded our operations to multiple neighborhoods, introducing
              new bikes and improving our booking platform to make the user
              experience smoother and more efficient.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(40, 150, 200)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(40, 150, 200)" }}
            date="2023"
            iconStyle={{ background: "rgb(40, 150, 200)", color: "#fff" }}
            icon={<WorkflowIcon />}
          >
            <p className="text-white">
              In response to growing demand, we launched our mobile app,
              allowing users to easily locate, rent, and return bikes with just
              a few taps. This marked a major leap in convenience and
              accessibility.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(40, 150, 200)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(40, 150, 200)" }}
            date="2024"
            iconStyle={{ background: "rgb(40, 150, 200)", color: "#fff" }}
            icon={<WorkflowIcon />}
          >
            <p className="text-white">
              We partnered with local businesses and city governments,
              increasing our bike stations and growing our fleet to serve more
              people across Dhaka and beyond. Our commitment to reducing urban
              carbon footprints gained recognition, and we were awarded for our
              contribution to sustainable transport.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(40, 150, 200)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(40, 150, 200)" }}
            date="2025"
            iconStyle={{ background: "rgb(40, 150, 200)", color: "#fff" }}
            icon={<WorkflowIcon />}
          >
            <p className="text-white">
              RideEasy introduced electric bikes (e-bikes) to our service,
              offering faster, more energy-efficient options for longer
              commutes. With this addition, we reached a significant milestone
              of serving over 100,000 rides.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(40, 150, 200)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(40, 150, 200)" }}
            date="Future Goals"
            iconStyle={{ background: "rgb(40, 150, 200)", color: "#fff" }}
            icon={<StarIcon />}
          >
            <p className="text-white">
              As we look ahead, we aim to expand into more cities, introduce
              innovative features, and continuously work toward making urban
              transportation greener, healthier, and more accessible for
              everyone.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </div>
  );
};

export default HistoryAndMilestones;
