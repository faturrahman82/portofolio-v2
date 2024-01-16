import React from "react";
import { MessageCircleCode, PaperclipIcon } from "lucide-react";

import { FormProvider, useForm } from "react-hook-form";
import { Input } from "@/components/atoms";
import Button from "@/components/atoms/Button/Button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { SectionMotion } from "@/common/motion/section";

export default function ContactPage() {
  const metodth = useForm();
  const {section} = SectionMotion

  return (
    <div className="text-white px-4 w-full">
      <motion.section animate={section.animated}
      initial={section.initial}
      transition={section.transition} className="space-y-6">
        <div className="flex gap-2 items-center mt-10">
          <MessageCircleCode size={33} />
          <p className="text-4xl font-semibold">My Contact</p>
        </div>
        <div className="flex justify-center mt-10">
          <FormProvider {...metodth}>
            <form action="" onSubmit={metodth.handleSubmit((data) => console.log(data))} className="w-[40rem]  flex flex-col gap-4 ">
              <input type="text" placeholder="Email" className="w-full  outline-none py-3 mt-2 font-sans text-black text-sm rounded px-4 border-[1px] lg:text-base placeholder:text-lg" />
              <textarea placeholder="Ketik" className="h-52 my-3 text-black rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" />
              <div className="px-10">
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
                >
                  send
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </motion.section>
    </div>
  );
}
