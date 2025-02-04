import { motion } from "framer-motion";
import { useState } from "react";
const paths = [
  {
    id: "elg3kuknr7w6l",
    d: "M197.71,128.78H175.4a1,1,0,0,1,0-2h22.31a1,1,0,0,1,0,2Z",
    origin: "186.555px 127.78px",
  },
  {
    id: "elm1ffmeucixl",
    d: "M247,128.78H203.65a1,1,0,0,1,0-2H247a1,1,0,0,1,0,2Z",
    origin: "225.325px 127.78px",
  },
  {
    id: "elw8ur9glunt",
    d: "M236.68,135.31H178.4a1,1,0,0,1,0-2h58.28a1,1,0,0,1,0,2Z",
    origin: "207.54px 134.31px",
  },
  {
    id: "elha9arwi60l6",
    d: "M212.94,141.83H175.4a1,1,0,0,1,0-2h37.54a1,1,0,0,1,0,2Z",
    origin: "194.17px 140.83px",
  },
  {
    id: "el2j8o2vkvfrh",
    d: "M247,141.83h-26.9a1,1,0,0,1,0-2H247a1,1,0,0,1,0,2Z",
    origin: "233.55px 140.83px",
  },
  {
    id: "elldwd66cxnja",
    d: "M196.13,148.36H175.4a1,1,0,1,1,0-2h20.73a1,1,0,0,1,0,2Z",
    origin: "185.765px 147.36px",
  },
  {
    id: "el3c0wrmpmhmq",
    d: "M235.49,148.36H202.85a1,1,0,0,1,0-2h32.64a1,1,0,0,1,0,2Z",
    origin: "219.17px 147.36px",
  },
  {
    id: "el2guyt9pdhop",
    d: "M206.29,154.89H178.4a1,1,0,1,1,0-2h27.89a1,1,0,0,1,0,2Z",
    origin: "192.345px 153.89px",
  },
  {
    id: "elltegrlw5hib",
    d: "M209.78,161.42H178.4a1,1,0,0,1,0-2h31.38a1,1,0,0,1,0,2Z",
    origin: "194.09px 160.42px",
  },
  {
    id: "elb6b7mhh95b6",
    d: "M247,161.42h-32a1,1,0,0,1,0-2h32a1,1,0,0,1,0,2Z",
    origin: "231px 160.42px",
  },
  {
    id: "els8qvfgm8vp",
    d: "M193.36,167.94h-18a1,1,0,0,1,0-2h18a1,1,0,0,1,0,2Z",
    origin: "184.36px 166.94px",
  },
  {
    id: "elpjvamz6gkb",
    d: "M247,167.94H199.49a1,1,0,0,1,0-2H247a1,1,0,0,1,0,2Z",
    origin: "223.245px 166.94px",
  },
  {
    id: "elrn2svmwgrem",
    d: "M209.58,174.47H178.4a1,1,0,0,1,0-2h31.18a1,1,0,0,1,0,2Z",
    origin: "193.99px 173.47px",
  },
  {
    id: "elkp7c28gw73r",
    d: "M234.11,174.47H213.93a1,1,0,0,1,0-2h20.18a1,1,0,0,1,0,2Z",
    origin: "224.02px 173.47px",
  },
  {
    id: "elka55ts1fw3s",
    d: "M214.29,181H178.4a1,1,0,1,1,0-2h35.89a1,1,0,0,1,0,2Z",
    origin: "196.345px 180px",
  },
];

const AnimatedPaths = () => {
  const [key, setKey] = useState(0);

  return (
    <motion.g
      id="elu9hoboxkuls"
      key={key}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{
        duration: paths.length * 0.7, // Duration for the entire sequence
        onComplete: () => setKey((prev) => prev + 1), // Triggers a re-render to restart the animation
      }}
    >
      <g
        style={{ opacity: "0.2", transformOrigin: "211.18px 153.89px" }}
        className="animable"
      >
        {paths.map((path, index) => (
          <motion.path
            key={path.id}
            id={path.id}
            d={path.d}
            className="animable"
            style={{ transformOrigin: path.origin }}
            variants={{
              hidden: { fill: "rgb(200, 200, 200)" },
              visible: { fill: "rgb(50, 50, 50)" },
            }}
            transition={{
              delay: index * 0.7, // Sequential delay for each path
              duration: 0.5, // Duration of each path animation
            }}
          />
        ))}
      </g>
    </motion.g>
  );
};

export default AnimatedPaths;
