import {
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import hookFormImg from "../../assets/react-hook-form.svg";
import react from "../../assets/react.svg";
import tanstack from "../../assets/tanstack.svg";
import vite from "../../assets/vite.svg";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/im3.png";
import img4 from "../../assets/img4.png";
import { INavLink } from "@/types/common";
import { Briefcase, GraduationCap, Laptop } from "lucide-react";

export const dataSkills = [
  {
    nama: "Html",
    icon: (
      <IconBrandHtml5
        className="text-[#ff8a00] transition-transform transform scale-100 duration-900 ease-in-out group-hover:scale-125"
        size={55}
      />
    ),
    link: "https://www.w3schools.com/html/",
  },
  {
    nama: "Css",
    icon: (
      <IconBrandCss3
        size={55}
        className="text-[#0054e3] transition-transform transform scale-100 duration-900 ease-in-out group-hover:scale-125"
      />
    ),
    link: "https://www.w3schools.com/css/default.asp",
  },
  {
    nama: "Java Script",
    icon: (
      <IconBrandJavascript
        size={55}
        className="text-[#f5b900] transition-transform transform scale-100 duration-900 ease-in-out group-hover:scale-125"
      />
    ),
    link: "https://www.w3schools.com/js/default.asp",
  },
  {
    nama: "React",
    icon: (
      <img
        src={react}
        alt=""
        className="w-14 h-14 transition-transform transform scale-100 duration-900 ease-in-out group-hover:scale-125"
      />
    ),
    link: "https://www.w3schools.com/react/default.asp",
  },
  {
    nama: "Typescript",
    icon: (
      <IconBrandTypescript
        size={55}
        className="text-[#0282e3] transition-transform transform scale-100 duration-900 ease-in-out group-hover:scale-125"
      />
    ),
    link: "https://www.w3schools.com/typescript/index.php",
  },

  {
    nama: "Bootstrap",
    icon: (
      <IconBrandBootstrap
        size={55}
        className="text-[#6000ba] transition-transform transform scale-100 duration-900 ease-in-out group-hover:scale-125"
      />
    ),
    link: "https://www.w3schools.com/bootstrap5/index.php",
  },
  {
    nama: "React Hook form",
    icon: (
      <img
        src={hookFormImg}
        alt=""
        className="w-14 h-14 transition-transform transform scale-100 duration-900 ease-in-out group-hover:scale-125"
      />
    ),
    link: "https://react-hook-form.com/",
  },
  {
    nama: "TanStack",
    icon: (
      <img
        src={tanstack}
        alt=""
        className="w-14 h-14 transition-transform transform scale-100 duration-900 ease-in-out group-hover:scale-125"
      />
    ),
    link: "https://tanstack.com/query/latest",
  },
  {
    nama: "Vite",
    icon: (
      <img
        src={vite}
        alt=""
        className="w-14 h-14 transition-transform transform scale-100 duration-900 ease-in-out group-hover:scale-125"
      />
    ),
    link: "https://vitejs.dev/guide/",
  },
  {
    nama: "Tailwind",
    icon: (
      <IconBrandTailwind
        size={55}
        className="text-[#0282e3] transition-transform transform scale-100 duration-900 ease-in-out group-hover:scale-125"
      />
    ),
    link: "https://tailwindcss.com/",
  },
];

export const dataPorto = [
  {
    img: img1,
    link: "https://portofolio-maulvi-a3fae.web.app/",
    title: "Portofolio V1",
    text: "Halo perkenalkan nama saya Maulvi ilmullah faturrahman al afghani, usia saya saat ini 18 tahun, saya lulusan dari SMK Yosonegoro Magetan Jawa timur, Jurusan yang saya ambil adalah Teknik komputer dan jaringan (TKJ). Saat ini saya lagi belajar dalam program United Tractors School di bidang It-progremming sebagai siswa.",
  },
  {
    img: img2,
    link: "https://web-ngopi.web.app/",
    title: "Web Kopi",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat minus dolore sunt repellendus velit voluptatum quam quaerat corrupti nobis atque?",
  },
  {
    img: img3,
    link: "https://my-drems-tour.vercel.app/#",
    title: "Web Drems",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat minus dolore sunt repellendus velit voluptatum quam quaerat corrupti nobis atque?",
  },
  {
    img: img4,
    link: "https://vemo.biz.id/",
    title: "Vemo",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat minus dolore sunt repellendus velit voluptatum quam quaerat corrupti nobis atque?",
  },
];

export const navLink: INavLink[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skils", path: "/skils" },
  { name: "Portofolio", path: "/portofolio" },
  { name: "Contsact", path: "/contact" },
];

export const experiencesData = [
  {
    title: "High School graduation",
    location: "Smk Yosonegoro",
    description:
      "I graduated after 3 Years of studying. Majoring in Computer and network engineering",
    icon: <GraduationCap />,
    date: "2023",
  },
  {
    title: "Fullstack Developer",
    location: "Ut School",
    description: "Learn basic programming via zoom.",
    icon: <Laptop />,
    date: "2023",
  },
  {
    title: "Frontend Developer",
    location: "Pt United tractors tbk",
    description:
      "I interned at Pt United tractors for 4 months, the position of Web Developer Frontend developer section",
    icon: <Briefcase />,
    date: "2023 - 2024",
  },
] as const;
