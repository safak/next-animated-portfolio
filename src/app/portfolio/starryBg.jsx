"use client";

import { motion } from "motion/react";

const StarryBg = () => {
  const parentVariants = {
    animate: {
      transition: {
        staggerChildren: 0.5, // Stagger the children animations by 0.5 seconds
      },
    },
  };

  const childVariants = {
    initial: { opacity: 1 },
    animate: {
      opacity: [1, 0.5, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="filter-[url('#goo')] md:blur-sm">
      <svg
        id="freepik--Sparkles--inject-23"
        className="animable"
        style={{ transformOrigin: "251.76px 177.02px" }}
        width="100%"
        height="100%"
        viewBox="0 0 500 500"
      >
        <motion.g variants={parentVariants} initial="initial" animate="animate">
          <motion.path
            d="M109.78,152.59l.72,1.2a8.16,8.16,0,0,0,3.39,3.12l1.26.62-1.2.73a8.19,8.19,0,0,0-3.13,3.39l-.62,1.25-.72-1.19a8.21,8.21,0,0,0-3.4-3.13l-1.25-.62,1.2-.72a8.19,8.19,0,0,0,3.12-3.4Z"
            style={{
              fill: "rgb(var(--secondary-bg))",
              transformOrigin: "109.99px 157.745px",
            }}
            id="el57ea6nj7d9k"
            className="animable"
            variants={childVariants}
          />
          <motion.path
            d="M369.35,284.28l.72,1.2a8.25,8.25,0,0,0,3.39,3.13l1.26.62-1.2.72a8.21,8.21,0,0,0-3.13,3.4l-.62,1.25-.72-1.2a8.32,8.32,0,0,0-3.39-3.13l-1.26-.62,1.2-.72a8.19,8.19,0,0,0,3.13-3.39Z"
            style={{
              fill: "rgb(var(--secondary-bg))",
              transformOrigin: "369.56px 289.44px",
            }}
            id="elkuuo50j053g"
            className="animable"
            variants={childVariants}
          />
          <motion.path
            d="M228.36,37l.72,1.2a8.19,8.19,0,0,0,3.39,3.13l1.26.62-1.2.72A8.25,8.25,0,0,0,229.4,46l-.62,1.26-.72-1.2a8.21,8.21,0,0,0-3.4-3.13l-1.25-.62,1.2-.72a8.22,8.22,0,0,0,3.12-3.39Z"
            style={{
              fill: "rgb(var(--secondary-bg))",
              transformOrigin: "228.57px 42.13px",
            }}
            id="elhlk4unbye5i"
            className="animable"
            variants={childVariants}
          />
          <motion.path
            d="M397.14,150l.72,1.2a8.21,8.21,0,0,0,3.4,3.13l1.25.62-1.2.72a8.22,8.22,0,0,0-3.12,3.39l-.62,1.26-.72-1.2a8.21,8.21,0,0,0-3.4-3.13l-1.25-.62,1.19-.72a8.25,8.25,0,0,0,3.13-3.39Z"
            style={{
              fill: "rgb(var(--secondary-bg))",
              transformOrigin: "397.355px 155.16px",
            }}
            id="eljxvfm43iu1"
            className="animable"
            variants={childVariants}
          />
          <motion.path
            d="M137.12,198.8l.52.87a6,6,0,0,0,2.48,2.28l.92.45-.88.53a6,6,0,0,0-2.28,2.48l-.45.91-.53-.87a6,6,0,0,0-2.48-2.28l-.91-.45.87-.53a5.93,5.93,0,0,0,2.28-2.48Z"
            style={{
              fill: "rgb(var(--secondary-bg))",
              transformOrigin: "137.275px 202.56px",
            }}
            id="ely57i653dav"
            className="animable"
            variants={childVariants}
          />
          <motion.path
            d="M161,310.86l.53.88A6,6,0,0,0,164,314l.92.45-.88.53a6,6,0,0,0-2.28,2.48l-.45.91-.53-.87a6,6,0,0,0-2.47-2.28l-.92-.46.88-.52a6,6,0,0,0,2.28-2.48Z"
            style={{
              fill: "rgb(var(--secondary-bg))",
              transformOrigin: "161.155px 314.615px",
            }}
            id="elmqlhc8ov1w"
            className="animable"
            variants={childVariants}
          />
          <motion.path
            d="M389.3,116l.52.87a5.93,5.93,0,0,0,2.48,2.28l.92.46-.88.52a6,6,0,0,0-2.28,2.48l-.45.92-.53-.88a6,6,0,0,0-2.48-2.28l-.91-.45.87-.53a5.93,5.93,0,0,0,2.28-2.48Z"
            style={{
              fill: "rgb(var(--secondary-bg))",
              transformOrigin: "389.455px 119.765px",
            }}
            id="el8ti6e3pkaep"
            className="animable"
            variants={childVariants}
          />
          <motion.path
            d="M90.3,175.16l.52.87a6,6,0,0,0,2.48,2.29l.92.45-.88.52a6.12,6.12,0,0,0-2.28,2.48l-.45.92-.53-.88a6,6,0,0,0-2.48-2.28l-.91-.45.87-.53a5.93,5.93,0,0,0,2.28-2.48Z"
            style={{
              fill: "rgb(var(--secondary-bg))",
              transformOrigin: "90.455px 178.925px",
            }}
            id="elelh4hw8wkw"
            className="animable"
            variants={childVariants}
          />
          <motion.path
            d="M414.58,121.42l.3.5a3.43,3.43,0,0,0,1.42,1.3l.53.26-.5.3A3.39,3.39,0,0,0,415,125.2l-.26.53-.3-.5a3.39,3.39,0,0,0-1.42-1.31l-.52-.26.5-.3a3.43,3.43,0,0,0,1.3-1.42Z"
            style={{
              fill: "rgb(var(--secondary-bg))",
              transformOrigin: "414.665px 123.575px",
            }}
            id="elkiknju00pw"
            className="animable"
            variants={childVariants}
          />
          <motion.path
            d="M395.89,265.38l.3.51a3.43,3.43,0,0,0,1.42,1.3l.52.26-.5.3a3.45,3.45,0,0,0-1.31,1.42l-.26.53-.3-.51a3.43,3.43,0,0,0-1.42-1.3l-.52-.26.5-.3a3.45,3.45,0,0,0,1.31-1.42Z"
            style={{
              fill: "rgb(var(--secondary-bg))",
              transformOrigin: "395.975px 267.54px",
            }}
            id="el8663yeo58h9"
            className="animable"
            variants={childVariants}
          />
          <motion.path
            d="M266.57,25.73l.3.5a3.43,3.43,0,0,0,1.42,1.3l.53.26-.5.31A3.36,3.36,0,0,0,267,29.51l-.26.53-.3-.5A3.45,3.45,0,0,0,265,28.23L264.5,28l.51-.3a3.43,3.43,0,0,0,1.3-1.42Z"
            style={{
              fill: "rgb(var(--secondary-bg))",
              transformOrigin: "266.66px 27.885px",
            }}
            id="eliclx9hbejer"
            className="animable"
            variants={childVariants}
          />
          <motion.path
            d="M209.3,51.26l.3.5A3.45,3.45,0,0,0,211,53.07l.52.26-.5.3a3.43,3.43,0,0,0-1.3,1.42l-.26.52-.31-.5a3.42,3.42,0,0,0-1.41-1.31l-.53-.26.5-.3A3.39,3.39,0,0,0,209,51.78Z"
            style={{
              fill: "rgb(var(--secondary-bg))",
              transformOrigin: "209.365px 53.415px",
            }}
            id="el8f0cf55118m"
            className="animable"
            variants={childVariants}
          />
          <motion.path
            d="M167.44,324l.3.5a3.45,3.45,0,0,0,1.42,1.31l.52.26-.5.3a3.43,3.43,0,0,0-1.3,1.42l-.26.52-.3-.5a3.51,3.51,0,0,0-1.42-1.31l-.53-.26.5-.3a3.39,3.39,0,0,0,1.31-1.42Z"
            style={{
              fill: "rgb(var(--secondary-bg))",
              transformOrigin: "167.525px 326.155px",
            }}
            id="el2lom9v6htc"
            className="animable"
            variants={childVariants}
          />

          {/* White stars  */}
          <motion.path
            d="M91.12,418.38l1.09,1.82A12.45,12.45,0,0,0,97.37,425l1.91.94L97.46,427a12.38,12.38,0,0,0-4.75,5.16l-.95,1.9-1.09-1.82a12.51,12.51,0,0,0-5.16-4.75l-1.91-.94,1.83-1.1a12.55,12.55,0,0,0,4.75-5.15Z"
            style={{
              fill: "rgb(235, 235, 235)",
              transformOrigin: "91.44px 426.22px",
            }}
            id="el0imq1vexdmkd"
            className="animable"
            variants={childVariants}
          />
          <motion.path
            d="M443.85,60.61l1.09,1.82a12.51,12.51,0,0,0,5.16,4.75l1.9.94-1.82,1.09a12.51,12.51,0,0,0-4.75,5.16l-.94,1.91-1.09-1.82a12.38,12.38,0,0,0-5.16-4.75l-1.91-.94,1.82-1.1a12.38,12.38,0,0,0,4.75-5.16Z"
            style={{
              fill: "rgb(235, 235, 235)",
              transformOrigin: "444.165px 68.445px",
            }}
            id="eljs5j2byo80g"
            className="animable"
            variants={childVariants}
          />
          <motion.path
            d="M456.38,88.86l.95,1.58a10.88,10.88,0,0,0,4.48,4.13l1.66.82-1.58,1a10.84,10.84,0,0,0-4.13,4.49l-.82,1.65L456,100.9a10.84,10.84,0,0,0-4.49-4.13L449.85,96l1.58-1a10.88,10.88,0,0,0,4.13-4.48Z"
            style={{
              fill: "rgb(235, 235, 235)",
              transformOrigin: "456.66px 95.695px",
            }}
            id="elj06rpbonc"
            className="animable"
            variants={childVariants}
          />
          <motion.path
            d="M70,397.81l.77,1.29a8.83,8.83,0,0,0,3.65,3.36l1.35.67-1.29.77a8.83,8.83,0,0,0-3.36,3.65l-.67,1.35-.77-1.29A8.89,8.89,0,0,0,66,404.25l-1.35-.67,1.29-.77a8.83,8.83,0,0,0,3.36-3.65Z"
            style={{
              fill: "rgb(235, 235, 235)",
              transformOrigin: "70.21px 403.355px",
            }}
            id="elx2et8exfxsq"
            className="animable"
            variants={childVariants}
          />
          <motion.path
            d="M400.79,411.93l.78,1.29a8.7,8.7,0,0,0,3.65,3.36l1.34.67-1.29.78a8.87,8.87,0,0,0-3.36,3.64l-.66,1.35-.78-1.29a8.83,8.83,0,0,0-3.65-3.36l-1.35-.66,1.29-.78a8.7,8.7,0,0,0,3.36-3.65Z"
            style={{
              fill: "rgb(235, 235, 235)",
              transformOrigin: "401.015px 417.475px",
            }}
            id="elmgyhgtivx6"
            className="animable"
            variants={childVariants}
          />
          <motion.path
            d="M60.33,43.23l.77,1.29a8.83,8.83,0,0,0,3.65,3.36l1.35.67-1.29.77A8.83,8.83,0,0,0,61.45,53l-.67,1.35L60,53a8.89,8.89,0,0,0-3.65-3.36L55,49l1.29-.78a8.89,8.89,0,0,0,3.36-3.65Z"
            style={{
              fill: "rgb(235, 235, 235)",
              transformOrigin: "60.55px 48.79px",
            }}
            id="el5cprk9h7cj4"
            className="animable"
            variants={childVariants}
          />
          <motion.path
            d="M444.71,278.62l.78,1.29a8.77,8.77,0,0,0,3.65,3.36l1.35.67-1.29.77a8.76,8.76,0,0,0-3.36,3.65l-.67,1.35-.78-1.29a8.87,8.87,0,0,0-3.64-3.36l-1.35-.66,1.29-.78a8.89,8.89,0,0,0,3.36-3.65Z"
            style={{
              fill: "rgb(235, 235, 235)",
              transformOrigin: "444.945px 284.165px",
            }}
            id="elfrdmwt34cqt"
            className="animable"
            variants={childVariants}
          />
          <motion.path
            d="M57,136.16l.78,1.28a8.7,8.7,0,0,0,3.65,3.36l1.34.67-1.28.78a8.7,8.7,0,0,0-3.36,3.65l-.67,1.34L56.71,146a8.83,8.83,0,0,0-3.65-3.36l-1.34-.66,1.28-.78a8.79,8.79,0,0,0,3.37-3.65Z"
            style={{
              fill: "rgb(235, 235, 235)",
              transformOrigin: "57.245px 141.7px",
            }}
            id="el5km74vz5i9r"
            className="animable"
            variants={childVariants}
          />
        </motion.g>
      </svg>
    </div>
  );
};

export default StarryBg;
