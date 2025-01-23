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
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
          <div className="relative h-80 md:h-96 lg:h-[500px] xl:h-[600px] project-image-width bg-neutral-100 rounded">
            <Image src={item.img} alt={item.title} fill className="rounded" />
          </div>
          <div className="project-image-width lg:text-lg flex flex-col gap-8">
            <div className="">{item.desc()}</div>

            <div className="flex flex-wrap gap-4">
              {item.tools.map((tool, index) => (
                <span
                  key={index}
                  className="p-2 text-sm lg:text-base bg-white text-gray-600  rounded-md"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Link href={item.link} target="_blank" className="">
            <button className="p-2 text-sm md:p-4 md:text-base lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded-md">
              View Live
            </button>
          </Link>
          <Link href={item.repo} target="_blank" className="">
            <button className="p-2 text-sm md:p-4 md:text-base lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded-md">
              GitHub
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
