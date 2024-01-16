import React from "react";

interface SkillsProps {
  nama: string;
  icon: React.ReactElement;
  link: string;
}

export default function SkillsCard({ nama, icon, link }: SkillsProps) {
  return (
    <div className="group">
      <a href={link} target="_blank">
        <div className="border-2 rounded px-10 mt-10 transition duration-1000 ease-in-out group-hover:bg-gray-100">
          <div className="rounded p-6 flex justify-center gap-4">{icon}</div>
        </div>
      </a>
      <p className="text-center pt-2">{nama}</p>
    </div>
  );
}
