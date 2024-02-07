import SectionHeading from "@/components/organisms/SectionHeading/SectionHeading";
import { useTheme } from "@/lib/context/them-context";
import { experiencesData } from "@/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";

export default function Experience() {
  return (
    <main className="text-[#f3f4f6]">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="#64748b">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                fontSize: "1.5rem",
                background: "rgba(255, 255, 255, 0.15)",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-white dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </main>
  );
}
