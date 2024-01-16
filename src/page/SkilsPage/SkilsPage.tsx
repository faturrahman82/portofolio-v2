import { SkillsCard } from "../../components/atoms";
import { dataSkills } from "../../lib/data";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/organisms/Sectionheader/Sectionheader";
import { SectionMotion } from "@/common/motion/section";
import { IconCodeCircle } from "@tabler/icons-react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function SkilsPage() {
  const { section } = SectionMotion;

  

  const sectionDescription = "This is my skills that I still need to learn more about";
  return (
    <div className="w-full  px-8 text-white">
      <motion.section  className="space-y-6">
        <SectionHeader icon={<IconCodeCircle />} label="My Skills" description={sectionDescription} />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
        {dataSkills.map((skill, index) => (
          <motion.section
            className="border-black rounded-xl  dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <SkillsCard key={index} icon={skill.icon} nama={skill.nama} link={skill.link} />
          </motion.section>
        ))}
        </div>
      </motion.section>


      
    </div>
  );
}
