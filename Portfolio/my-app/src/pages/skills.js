// pages/skills.js
import Grainient from "../components/Background/Grainient";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";


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
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f5f5f5",
      padding: "60px",
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
      gap: "30px",
      maxWidth: "1000px",
      width: "100%",
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
    },
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 280px)",
      gap: "20px",
    },

    skillCard: {
      padding: "25px",
      borderRadius: "16px",
      background: "rgba(255,255,255,0.10)",
      backdropFilter: "blur(15px)",
      boxShadow: "0 6px 18px rgba(0,0,0,0.10)",
      color: "#fff",
    },
    title: {
      fontSize: "1.6rem",
      fontWeight: "700",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color: "rgba(255,255,255,0.85)",
    },
    cursor: {
      borderRight: "2px solid #4f46e5",
      marginLeft: "4px",
    },
    paragraph: {
      fontSize: "1.1rem",
      lineHeight: "1.7",
      color: "#fff",
    },
    cardTitle: {
      fontSize: "1.2rem",
      marginBottom: "10px",
      color: "rgba(255,255,255,0.9)",
    },
    list: {
      lineHeight: "1.8",
      color: "#fff",
      paddingLeft: "18px",
    },
  };
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
          <div style={styles.wrapper}>

            {/* TOP MAIN CARD */}
            <div style={styles.mainCard}>
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
            </div>

            {/* BOTTOM GRID CARDS */}
            <div style={styles.gridWrapper}>
              <div style={styles.grid}>

                <div style={styles.skillCard}>
                  <h2 style={styles.cardTitle}>Technical Skills</h2>
                  <ul style={styles.list}>
                    <li>HTML & CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Java</li>
                    <li>Git</li>
                    <li>Figma</li>
                  </ul>
                </div>

                <div style={styles.skillCard}>
                  <h2 style={styles.cardTitle}>UI/UX & Design</h2>
                  <ul style={styles.list}>
                    <li>UI design & prototyping</li>
                    <li>Human-Computer Interaction (HCI)</li>
                    <li>User research</li>
                    <li>Wireframing</li>
                  </ul>
                </div>

                <div style={styles.skillCard}>
                  <h2 style={styles.cardTitle}>Strengths</h2>
                  <ul style={styles.list}>
                    <li>User-centered design focus</li>
                    <li>Turning ideas into interfaces</li>
                    <li>Continuous learning mindset</li>
                    <li>UI consistency & attention to detail</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

