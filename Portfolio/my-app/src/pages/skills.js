// pages/skills.js
import Waves from "../components/Background/Waves";
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#f5f5f5",
            padding: "60px",
            zIndex: 2,


          }}
        >
          <div
            style={{
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

            }}
          >


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
              <FaCode color="#5048e5" size={32} />
              {typedText}
              <span style={{ borderRight: "2px solid #4f46e5", marginLeft: "4px" }} />
            </h1>

            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.7",
                color: "#ffffff",
                marginBottom: "20px",
              }}
            >
              I am skilled in front-end development, UI/UX design principles, and
              user-centered development practices. I enjoy building clean, responsive,
              and interactive web applications while continuously improving user
              experience through research and feedback.
            </p>

            <h2 style={{
              fontSize: "1.3rem", marginBottom: "10px", color: "rgba(255,255,255,0.85)"
            }}>
              Technical Skills
            </h2>

            <ul style={{ lineHeight: "1.8", color: "#ffffff" }}>
              <li>HTML & CSS – building structured and responsive web layouts</li>
              <li>JavaScript – interactive and dynamic web functionality</li>
              <li>React – component-based front-end development</li>
              <li>Java – object-oriented programming and application development</li>
              <li>Git – version control and collaborative development</li>
              <li>Figma – UI design, prototyping, and interface planning</li>
            </ul>

            <h2 style={{
              fontSize: "1.3rem", marginTop: "20px", marginBottom: "10px", color: "rgba(255,255,255,0.85)"
            }}>
              UI/UX & Design Skills
            </h2>

            <ul style={{ lineHeight: "1.8", color: "#ffffff" }}>
              <li>UI design and interface prototyping</li>
              <li>Human-Computer Interaction (HCI) principles</li>
              <li>User research and feedback analysis</li>
              <li>Wireframing and visual planning of interfaces</li>
            </ul>

            <h2 style={{
              fontSize: "1.3rem", marginTop: "20px", marginBottom: "10px", color: "rgba(255,255,255,0.85)"
            }}>
              Strengths
            </h2>

            <ul style={{ lineHeight: "1.8", color: "#ffffff" }}>
              <li>Strong focus on user-centered design</li>
              <li>Ability to translate ideas into functional interfaces</li>
              <li>Continuous learning and improvement mindset</li>
              <li>Attention to detail in UI consistency and usability</li>
            </ul>
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