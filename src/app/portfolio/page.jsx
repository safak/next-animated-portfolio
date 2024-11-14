'use client'
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import Image from "next/image";
import Link from "next/link";


const items = [
    {
        id: 1,
        color: "from-red-300 to-blue-300",
        title: "SURF",
        desc: "SURF - ウェブサイト - コーディングを担当 CSS アニメーションと外部 JavaScript ライブラリを使用。\n" +
            "\n" +
            "上質なサイトになるようアニメーションにこだわりました。",
        img: "/surf.png",
        link: "https://amirzukhair.github.io/website-surf/",
    },
    {
        id: 2,
        color: "from-blue-300 to-violet-300",
        title: "Playside",
        desc: "PlaySide - ウェブサイト - コーディングを担当\n" +
            "\n" +
            "アプリの評価機能や検索システムを備えたオンラインアプリケーションのカタログサイトです。\n" +
            "\n" +
            "アクセスを強化するために、プラットフォーム用の新しいデザインとフレームワークを作成しました。",
        img: "/mobzik.png",
        link: "https://playside.ru/",
    },
    {
        id: 3,
        color: "from-violet-300 to-purple-300",
        title: "TD URAL",
        desc: "建材会社 - ウェブサイト - コーディングを担当\n" +
            "\n" +
            "クライアントが管理パネルから製品を追加したり、サイトのコンテンツを変更したりできるようにCMSの設定を行いました。",
        img: "/td-ural.png",
        link: "https://tdural.com/",
    },
    {
        id: 4,
        color: "from-purple-300 to-red-300",
        title: "School 28",
        desc: "学生と教師のための学校ポータル。故郷の学校のために作りました。\n" +
            "\n" +
            "インタラクティブ アニメーションに使用される GSAP。 DLEをCMSとして使用しました。",
        img: "/school.png",
        link: "https://28.te.ua/",
    },
];
const Portfolio = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target: ref})
    const x = useTransform(scrollYProgress, [0,1],["0%","-80%"])
    return (
        <motion.div className="h-full"
                    initial={{y: "-200vh"}}
                    animate={{y: "0%"}}
                    transition={{duration: 1}}>
            <div className="h-[600vh]" ref={ref}>
                <div className="h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">My
                    Works
                </div>
                <div className="sticky overflow-x-hidden top-0 flex h-screen gap-4 items-center overflow-hidden omelko">
                    <motion.div style={{x}} className="flex">
                        <div
                            className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"/>
                        {items.map((item) => (
                            <div
                                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}
                            >
                                <div className="flex flex-col gap-2 text-white">
                                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                                        {item.title}
                                    </h1>
                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                                        <Image src={item.img} className="object-contain" alt="" fill />
                                    </div>
                                    <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                                        {item.desc}
                                    </p>
                                    <Link href={item.link} className="flex justify-end">
                                        <button className="p-2 text-sm md:p-2 md:text-md lg:p-4 lg:text-lg bg-white hover:bg-black text-black hover:text-white transition-all font-semibold m-4 rounded">View project</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="h-screen flex flex-col gap-16 items-center justify-center text-center">
                <h1 className="text-8xl">Do you have a project?</h1>
                <div className="relative">
                    <motion.svg
                        animate={{rotate: 360}}
                        transition={{duration: 8, ease: "linear", repeat: Infinity}}
                        viewBox="0 0 300 300"
                        className="w-64 h-64 md:w-[500px] md:h-[500px] "
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-xl">
                                Front-end Developer and UI Designer
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="/contact"
                        className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default Portfolio;