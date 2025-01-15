"use client";

import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ item }) => {
  return (
    <div
      className={`w-screen h-screen flex justify-center items-center bg-gradient-to-r ${item.color}`}
      style={{ backgroundColor: item.color }}
    >
      <div className="flex flex-col gap-8 text-white">
        <h1 className="text-xl md:text-4xl lg:text-6xl xl:text-8xl font-bold ">
          {item.title}
        </h1>
        <div className="relative h-56 md:h-64 lg:h-[350px] xl:h-[420px] project-image-width">
          <Image src={item.img} alt={item.title} fill />
        </div>
        <p className="project-image-width lg:text-lg">{item.desc}</p>
        <Link href={item.link} className="flex justify-end">
          <button className="p-2 text-sm md:p-4 md:text-base lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded-md">
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
