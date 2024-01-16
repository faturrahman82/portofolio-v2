
import { IconLeaf } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { SectionMotion } from "@/common/motion/section";
import { SectionHeader } from "@/components/organisms/Sectionheader/Sectionheader";

export default function AboutPage() {
  const { section } = SectionMotion;

  const sectionDescription = "Hello my name is fatur nice to meet you.";
  return (
    <div className="text-white px-4">
      <motion.section initial={section.initial} animate={section.animated} transition={section.transition} className="space-y-6">
        <SectionHeader icon={<IconLeaf />} label="About" description={sectionDescription} />
        <div className="flex gap-2 text-md lg:text-xl font-medium">
          <h2 className="font-semibold">Hello, i'm Fatur</h2>
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <p className="text-2xl">
          Saya masih harus belajar lebih banyak lagi dalam menggunakan TypeScript dan pengalaman dalam framework populer seperti React JS. Ini bukan hanya tentang pengkodean. Saya bersemangat untuk membuat kode yang bersih dan efisien,
          mengotomatiskan pengujian dan menerapkan modern untuk memberikan pengalaman pengguna yang intuitif. Dengan keahlian teknis saya, saya dapat membuat solusi berkinerja tinggi dan elegan yang mudah dipelihara dan ditingkatkan. Saya
          selalu bersemangat untuk mempelajari teknologi baru.
        </p>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi officiis quas, facilis molestiae adipisci reprehenderit itaque alias atque tempora odit perferendis, nulla voluptatem quo voluptatum enim expedita, numquam
          nemo! Vel necessitatibus provident fugiat asperiores velit? Illum amet cum dignissimos? Quo perferendis vitae eos dolores sunt delectus voluptate ab omnis asperiores dicta, dolor reprehenderit blanditiis et a quod esse. Aut omnis
          rerum distinctio ducimus animi delectus eum architecto voluptatem, tenetur labore eveniet aliquid voluptas facere culpa autem saepe veniam enim et modi minus quod beatae voluptatibus libero blanditiis. Harum ratione quod sunt vero
          quisquam iste accusantium numquam distinctio. Recusandae, aut!
        </p>
      </motion.section>
    </div>
  );
}
