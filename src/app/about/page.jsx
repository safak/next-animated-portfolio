"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  const educationRef = useRef();
  const isEducationRefInView = useInView(educationRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">

          {/* BIOGRAPHY */}
          <div className="flex flex-col gap-12 justify-center">
            <Image
              src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Foto de perfil"
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />

            <h1 className="font-bold text-2xl">BIOGRAFIA</h1>

            <p className="text-lg">
              Sou uma profissional com mais de 3 anos de experiência em desenvolvimento e
              manutenção de sistemas no setor hospitalar, atuando com foco em integração,
              automação e confiabilidade de dados. Tenho sólida base em SQL e Java, experiência
              em APIs REST e forte interesse em criar soluções seguras, escaláveis e de alta
              performance.
            </p>

            <span className="italic">
              Apaixonada por tecnologia, dados e aprendizado contínuo.
            </span>

            {/* SIGN */}
            <div className="self-end">
              (assinatura SVG original permanece aqui)
            </div>

            {/* SCROLL ICON */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              width={50}
              height={50}
              fill="none"
            >
              <path d="M5 15C5 16.85..." stroke="#000" strokeWidth="1"></path>
            </motion.svg>
          </div>

          {/* SKILLS */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              HABILIDADES TÉCNICAS
            </motion.h1>

            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {[
                "Java",
                "Python",
                "SQL",
                "C",
                "Visual FoxPro",
                "Spring Boot",
                "Spring Data JPA",
                "Spring Security",
                "React (básico)",
                "Pandas",
                "SQL Server",
                "MySQL",
                "Git & GitHub",
                "Maven",
                "Postman",
                "Swagger",
                "Scrum",
                "Kanban",
                "Lean Six Sigma (White & Yellow Belt)",
              ].map((skill) => (
                <div
                  key={skill}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-16 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-3xl"
            >
              EXPERIÊNCIA
            </motion.h1>

            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-60 gap-16">

                {/* LEFT SIDE */}
                <div className="w-1/3 flex flex-col gap-4">
                  {/* JOB TITLE */}
                  <div className="bg-white p-8 font-semibold rounded-b-lg rounded-s-lg shadow">
                    Analista de Desenvolvimento de Sistemas
                  </div>

                  {/* JOB DESC */}
                  <div className="text-sm italic leading-relaxed px-1">
                    Desenvolvimento de APIs REST com Java e Spring Boot, integração entre
                    sistemas, criação de consultas SQL, análise de dados e apoio na migração
                    de sistemas legados para tecnologias modernas.
                  </div>

                  {/* JOB DATE */}
                  <div className="text-red-400 text-sm font-semibold px-1">
                    2021 – Presente
                  </div>

                  {/* JOB COMPANY */}
                  <div className="px-3 py-1 rounded bg-white text-sm font-semibold w-fit shadow">
                    Hospital São Marcos
                  </div>
                </div>

                {/* CENTER LINE */}
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT SIDE (empty for alignment) */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>



          {/* EDUCATION + CERTIFICATIONS */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={educationRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              FORMAÇÃO & CERTIFICAÇÕES
            </motion.h1>

            <motion.div
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: "0" } : {}}
              className="text-lg flex flex-col gap-6"
            >
              <div>
                <h2 className="font-semibold">Bacharelado em Sistemas de Informação</h2>
                <p className="italic">2016 - 2023 — Universidade Federal do Piauí</p>
              </div>

              <div>
                <h2 className="font-semibold">Técnico em Informática</h2>
                <p className="italic">2014 - 2016 — PRONATEC</p>
              </div>

              <div>
                <h2 className="font-semibold">MBA em Gerenciamento de Projetos de TI</h2>
                <p className="italic">2025 — Facuvale EAD</p>
              </div>

              <div>
                <h2 className="font-semibold">Pós-graduação em Cloud Computing</h2>
                <p className="italic">2025 — Facuvale EAD</p>
              </div>

              <div>
                <h2 className="font-semibold">Certificações</h2>
                <ul className="list-disc pl-4 text-base">
                  <li>Java do Zero — 2023</li>
                  <li>Curso de Java — 2023</li>
                  <li>POO + Projetos — 2023</li>
                  <li>Git e GitHub Avançado — 2023</li>
                  <li>Desenvolvedor Backend com Java — 2023–2024</li>
                  <li>Lean Six Sigma White Belt — 2024</li>
                  <li>Lean Six Sigma Yellow Belt — 2024</li>
                  <li>Trabalhando em Equipes Ágeis — 2023</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SVG BRAIN */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
