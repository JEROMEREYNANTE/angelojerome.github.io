// pages/index.js
import Waves from "../components/Background/Waves";
import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.4,
};

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >

      <div style={styles.pageWrapper}>

      <Waves
        lineColor="#4f46e5"
        backgroundColor="rgb(0, 0, 0)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={25}
        waveAmpY={15}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
          margin: 0,
          minHeight: "100vh",
          zIndex: 2,

        }}
      >
<div
  style={{
    maxWidth: "900px",
    width: "100%",
    background: "rgba(255, 255, 255, 0.12)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    padding: "70px 60px",
    borderRadius: "20px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    position: "relative",
    zIndex: 3,
  }}
>

<img
  src="/photo.jpg"
  alt="Profile picture"
  style={{
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
    border: "4px solid #4f46e5",
  }}
/>
          <h1
            style={{
              fontSize: "3.2rem",
              fontWeight: "700",
              margin: 0,
              lineHeight: "1.1",
              color: "rgba(255,255,255,0.85)"
            }}
          >
            Angelo Jerome Telano Reynante
          </h1>

<h2
  style={{
    fontSize: "1.6rem",
    fontWeight: "400",
    marginTop: "12px",
    marginBottom: "24px",
    color: "#444",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "rgba(255,255,255,0.85)"
  }}
>
  <FaLaptopCode color="#4f46e5" />
  Graduated Software Engineering Student
</h2>

          <p
            style={{
              maxWidth: "100%",
              fontSize: "1.15rem",
              lineHeight: "1.8",
              margin: 0,
              color: "#ffffff",
            }}
          >
            Passionate about building modern web applications and intuitive user
            experiences. Experienced in front-end development, UI/UX design, and
            collaborative software development through academic and team-based
            projects. Focused on creating clean, efficient, and user-centered digital solutions.
          </p>
        </div>
        </div>
      </div>
    </motion.div>
  );
}

const styles = {

  pageWrapper: {
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
}
};

