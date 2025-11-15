"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Projeto 1",
    desc: "Descrição do projeto 1. Trocaremos depois pelos seus projetos reais.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "#",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Projeto 2",
    desc: "Descrição do projeto 2.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "#",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Projeto 3",
    desc: "Descrição do projeto 3.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "#",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Projeto 4",
    desc: "Descrição do projeto 4.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        {/* TÍTULO */}
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-7xl md:text-8xl text-center font-bold">
          Meu Portfólio
        </div>

        {/* CARROSSEL HORIZONTAL */}
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />

            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center leading-tight max-w-[800px]">
                    {item.title}
                  </h1>


                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill className="rounded-lg object-cover" />
                  </div>

                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px] leading-relaxed">
                    {item.desc}
                  </p>

                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-700 font-semibold m-4 rounded shadow">
                      Ver projeto
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CHAMADA FINAL */}
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">Tem um projeto em mente?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Desenvolvedora Backend • Java • APIs REST • SQL •
              </textPath>
            </text>
          </motion.svg>

          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center font-semibold"
          >
            Fale comigo
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
