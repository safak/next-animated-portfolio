"use client";

import { motion } from "framer-motion";

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div>PortfolioPage</div>
    </motion.div>
  );
};

export default PortfolioPage;
