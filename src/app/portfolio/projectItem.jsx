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
        <h1>{item.title}</h1>
        <div>{/* <Image src={item.img} alt={item.title} fill /> */}</div>
        <p>{item.desc}</p>
        <Link href={item.link}>
          <button>View</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
