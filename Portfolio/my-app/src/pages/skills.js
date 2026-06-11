// pages/skills.js
import Grainient from "../components/Background/Grainient";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaCode,
  FaWindows, FaGithub
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";


import {
  SiFigma,
  SiPython,
  SiOpenai,

} from "react-icons/si";


const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.4,
};

export default function Skills() {

  const fullText = "Skills & Expertise";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 900);
    checkSize();
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 70); // typing speed

      return () => clearTimeout(timeout);
    }
  }, [index]);
  const styles = {

    pageWrapper: {
      position: "relative",
      width: "100%",
      minHeight: "100vh",
      overflow: "hidden",
    },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      minHeight: "100vh",
      padding: "80px 20px",
      zIndex: 2,
    },
    card: {
      maxWidth: "800px",
      width: "100%",
      padding: "40px",
      borderRadius: "16px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
      zIndex: 3,

      background: "rgba(255, 255, 255, 0.12)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      position: "relative",
    },
    backgroundLayer: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
      pointerEvents: "none",
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "35px",
      maxWidth: "1100px",
      width: "100%",
      marginTop: "40px",
    },
    mainCard: {
      padding: "40px",
      borderRadius: "16px",
      background: "rgba(255,255,255,0.12)",
      backdropFilter: "blur(20px)",
      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
    },
    gridWrapper: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      marginTop: "10px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 280px)",
      gap: "20px",
    },
    toolsGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(5, 1fr)",
      gap: "20px",
      marginTop: "10px",

    },
    toolItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      borderRadius: "14px",
      background: "rgba(255,255,255,0.08)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      color: "rgba(255,255,255,0.85)",
      fontSize: "0.9rem",
      transition: "transform 0.2s ease",
      cursor: "pointer",
    },

    toolswrapper: {
      marginTop: "60px",
      width: "100%",
      zIndex: 1,
    },

    toolsTitle: {
      fontSize: "2rem",
      fontWeight: "700",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      color: "rgba(255,255,255,0.9)",
    },
    toolImg: {
      width: "40px",
      height: "40px",
      objectFit: "contain",
      marginBottom: "10px",
    },
    skillCard: {
      padding: "25px",
      borderRadius: "16px",
      background: "rgba(255,255,255,0.10)",
      backdropFilter: "blur(15px)",
      boxShadow: "0 6px 18px rgba(0,0,0,0.10)",
      color: "#fff",
      transition: "transform 0.2s ease",

    },
    title: {
      fontSize: "2.6rem",
      fontWeight: "800",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      color: "rgba(255,255,255,0.95)",
      letterSpacing: "0.5px",
      zIndex: 1,
    },
    cursor: {
      borderRight: "2px solid #4f46e5",
      marginLeft: "4px",
    },
    paragraph: {
      fontSize: "1.15rem",
      lineHeight: "1.8",
      color: "rgba(255,255,255,0.75)",
      maxWidth: "750px",
      zIndex: 3,

    },
    cardTitle: {
      fontSize: "1.2rem",
      marginBottom: "10px",
      color: "rgba(255,255,255,0.9)",
      zIndex: 1,
    },
    list: {
      lineHeight: "1.8",
      color: "#fff",
      paddingLeft: "18px",
    },
    toolIcon: {
      fontSize: "34px",
      marginBottom: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.4))",
    },
  };

  const icons = [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "Java", icon: <FaJava color="#f89820" /> },
    { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
    { name: "Figma", icon: <SiFigma color="#A259FF" /> },
    { name: "ChatGPT", icon: <SiOpenai color="#ffffff" /> },
    { name: "Python", icon: <SiPython color="#3776AB" /> },
    { name: "Windows", icon: <FaWindows color="#00A4EF" /> },
    { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
    { name: "Visual Studio Code", icon: <VscVscode color="#ffffff" /> }
  ];
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >

      <div style={styles.pageWrapper}>
        <div style={styles.backgroundLayer}>
          <Grainient
            color1="#0F172A"
            color2="#2563EB"
            color3="#94A3B8"
            timeSpeed={1.6}
          />
        </div>

        <div style={styles.container}>
          <motion.div
            style={styles.wrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 style={styles.title}>
              <FaCode color="#5048e5" size={32} />
              {typedText}
              <span style={styles.cursor} />
            </h1>

            <p style={styles.paragraph}>
              I am skilled in front-end development, UI/UX design principles, and
              user-centered development practices. I enjoy building clean, responsive,
              and interactive web applications while continuously improving user
              experience through research and feedback.
            </p>
            {/* BOTTOM GRID CARDS */}
            <div style={styles.gridWrapper}>
              <div style={styles.grid}>

                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  style={styles.skillCard}
                >                  <h2 style={styles.cardTitle}>Technical Skills</h2>
                  <ul style={styles.list}>
                    <li>HTML & CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Java</li>
                    <li>Git</li>
                    <li>Figma</li>
                  </ul></motion.div>


                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  style={styles.skillCard}
                >                  
                    <h2 style={styles.cardTitle}>UI/UX & Design</h2>
                  <ul style={styles.list}>
                    <li>UI design & prototyping</li>
                    <li>Human-Computer Interaction (HCI)</li>
                    <li>User research</li>
                    <li>Wireframing</li>
                  </ul></motion.div>
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  style={styles.skillCard}
                >
                  <h2 style={styles.cardTitle}>Strengths</h2>
                  <ul style={styles.list}>
                    <li>User-centered design focus</li>
                    <li>Turning ideas into interfaces</li>
                    <li>Continuous learning mindset</li>
                    <li>UI consistency & attention to detail</li>
                  </ul></motion.div>
              </div>
            </div>

            {/* TOOLS SECTION */}
            <div style={styles.toolswrapper}>
              <h2 style={styles.toolsTitle}>
                Tools & Software Applications I Used
              </h2>

              <div style={styles.toolsGrid}>
                {icons.map((tool, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8, scale: 1.05 }}
                    style={styles.toolItem}
                  >
                    <div style={styles.toolIcon}>
                      {tool.icon}
                    </div>
                    <span>{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

