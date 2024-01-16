import React from "react";
import { dataPorto } from "../../lib/data";
import { PortofolioCard } from "../../components/atoms";
import { SectionMotion } from "@/common/motion/section";
import { motion } from "framer-motion";

export default function PortofolioPage() {
  const { section } = SectionMotion;
  return (
    <motion.section animate={section.animated} initial={section.initial} transition={section.transition}>
      <div className="flex flex-wrap">
        {dataPorto.map((card, index) => (
          <PortofolioCard key={index} link={card.link} img={card.img} text={card.text} title={card.title} />
        ))}
      </div>
    </motion.section>
  );
}
