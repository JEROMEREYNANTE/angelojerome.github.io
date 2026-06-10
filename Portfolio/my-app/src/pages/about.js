// pages/about.js
import Waves from "../components/Background/Waves";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
} from "react-icons/fa";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.4,
};

export default function About() {

  const fullText = "About Me";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 70); // typing speed

      return () => clearTimeout(timeout);
    }
  }, [index]);
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
          backgroundColor="#000000"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={25}
          waveAmpY={15}
        />

        <div style={styles.container}>
          <div style={styles.card}>
            <h1
              style={{
                fontSize: "1.6rem",
                fontWeight: "400",
                marginTop: "12px",
                marginBottom: "24px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "rgba(255,255,255,0.85)"
              }}
            >
              <FaUserGraduate color="#4f46e5" />
              {typedText}
              <span style={{ borderRight: "2px solid #4f46e5", marginLeft: "4px" }} />
            </h1>

            <p style={styles.text}>
              I am a recent Software Engineering graduate with practical experience
              in academic and personal web development, programming, and UI/UX projects.
            </p>

            <p style={styles.text}>
              I have developed software using JavaScript, React, Python, Java, HTML,
              and CSS, with a strong focus on building responsive front-end interfaces
              and improving user experience through research and user feedback.
            </p>

            <p style={styles.text}>
              My interests include web application development, Human-Computer Interaction,
              3D modeling, and UI/UX research, combining both technical and creative skills.
            </p>

            <p style={styles.text}>
              My goal is to grow as a software engineer by gaining industry experience,
              refining my development skills, and delivering impactful, user-centered solutions.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const styles = {
  container: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
  },
  card: {
    maxWidth: "800px",
    backgroundColor: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(10px)",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",

    width: "100%",
    background: "rgba(255, 255, 255, 0.12)",
    WebkitBackdropFilter: "blur(20px)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    position: "relative",
    zIndex: 3,
  },
  title: {
    marginBottom: "20px",
    fontSize: "2.5rem",
    color: "rgba(255,255,255,0.85)"

  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "15px",
    color: "rgba(255,255,255,0.85)"

  },

  pageWrapper: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    overflow: "hidden",
  },
};

