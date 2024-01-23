
import { IconLeaf } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { SectionMotion } from "@/common/motion/section";
import { SectionHeader } from "@/components/organisms/Sectionheader/Sectionheader";

export default function AboutPage() {
  const { section } = SectionMotion;

  const sectionDescription = "Hello my name is fatur nice to meet you.";
  return (
    <div className="text-white px-6">
      <motion.section initial={section.initial} animate={section.animated} transition={section.transition} className="space-y-6">
        <SectionHeader icon={<IconLeaf />} label="About" description={sectionDescription} />
        <div className="flex gap-2 text-md lg:text-xl font-medium">
          <h2 className="font-semibold text-4xl lg:text-2xl">Hello, i'm Fatur</h2>
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <p className="text-xl lg:text-2xl">
          Saya masih harus belajar lebih banyak lagi dalam menggunakan TypeScript dan pengalaman dalam framework populer seperti React JS. Ini bukan hanya tentang pengkodean. Saya bersemangat untuk membuat kode yang bersih dan efisien,
          mengotomatiskan pengujian dan menerapkan modern untuk memberikan pengalaman pengguna yang intuitif. Dengan keahlian teknis saya, saya dapat membuat solusi berkinerja tinggi dan elegan yang mudah dipelihara dan ditingkatkan. Saya
          selalu bersemangat untuk mempelajari teknologi baru.
        </p>
    
      </motion.section>
    </div>
  );
}
