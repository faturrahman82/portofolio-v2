import { HomeMotion } from "@/common/motion/Home";
import Experience from "@/components/template/Experience/Experience";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { description, image, resume, wrapImg } = HomeMotion;
  return (
    <main className="flex flex-col">
      <section className="flex flex-col lg:flex-row h-full p-6 items-center min-h-[70vh] text-white">
        <motion.div
          className="flex flex-1 flex-col gap-6 items-center md:items- space-y-6"
          initial={description.initial}
          animate={description.animated}
          transition={description.transition}
        >
          <div className="flex gap-2 text-3xl  font-medium font-sora">
            <span>Hi gaess</span>{" "}
            <div className="ml-1 animate-waving-hand">👋</div>
          </div>
          <div className="mt-20 flex flex-col gap-5">
            <h1 className="text-white font-extrabold text-4xl md:text-6xl">
              Maulvi Ilmullah Faturrahman Al Afghani
            </h1>
            <h2 className="text-gray-300 font-bold text-xl md:text-3xl">
              FrontEnd
            </h2>
            <p className="text-center md:text-start text-xs md:text-2xl ">
              I am Student at Ut School It-progremming saya suka hal yang baru
              di bidang Teknologi, banyak sekali teknologi yang saat ini
              berkembang dengan pesat, oleh karena itu saya perlu lebih banyak
              lagi belajar.
            </p>
          </div>
          <Link
            to="./CV_Maulvi_Ilmullah_Faturrahman_Al_Afghani..pdf"
            target="_blank"
          >
            <motion.div
              initial={resume.initial}
              animate={resume.animated}
              transition={resume.transition}
              className="rounded-3xl font-semibold w-max border px-4 py-2 border-black text-white hover:bg-blue-600 hover:text-black hover:border-blue-500"
            >
              Download Resume
            </motion.div>
          </Link>
        </motion.div>
        <motion.div
          initial={wrapImg.initial}
          animate={wrapImg.animated}
          transition={wrapImg.transition}
          className="flex flex-1 mt-10 items-center justify-center bg-gradient-to-br from-white via-blue-900 to-black overflow-hidden"
        >
          <motion.img
            initial={image.initial}
            animate={image.animated}
            transition={image.transition}
            src="/aku.png"
            alt="profile"
            width="70%"
            height="70%"
          />
        </motion.div>
      </section>
      <Experience />
    </main>
  );
}
