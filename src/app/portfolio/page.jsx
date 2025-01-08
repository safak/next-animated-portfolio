"use client";

import { motion } from "motion/react";

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      Portfolio Page
    </motion.div>
  );
};

export default PortfolioPage;
