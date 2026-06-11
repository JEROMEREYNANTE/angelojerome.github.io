// pages/about.js
import Grainient from "../components/Background/Grainient";
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
        <div style={styles.backgroundLayer}>
          <Grainient
            color1="#0F172A"
            color2="#2563EB"
            color3="#94A3B8"
            timeSpeed={1.6}
          />
        </div>

        <div style={styles.timelineContainer}>
          <h1 style={styles.timelineTitle}>
            <FaUserGraduate color="#4f46e5" />
            {typedText}
            <span style={{ borderRight: "2px solid #4f46e5", marginLeft: "4px" }} />
          </h1>

          <div style={styles.timeline}>

            <div style={styles.timelineItem}>
              <div style={styles.dot}></div>
              <div style={styles.content}>
                <h3 style={styles.heading}>Recent Graduate</h3>
                <p style={styles.text}>
                  I am a recent Software Engineering graduate with practical experience
                  in academic and personal web development, programming, and UI/UX projects.
                </p>
              </div>
            </div>

            <div style={styles.timelineItem}>
              <div style={styles.dot}></div>
              <div style={styles.content}>
                <h3 style={styles.heading}>Development Experience</h3>
                <p style={styles.text}>
                  I have developed software using JavaScript, React, Python, Java, HTML,
                  and CSS, with a strong focus on building responsive front-end interfaces
                  and improving user experience through research and user feedback.
                </p>
              </div>
            </div>

            <div style={styles.timelineItem}>
              <div style={styles.dot}></div>
              <div style={styles.content}>
                <h3 style={styles.heading}>Interests</h3>
                <p style={styles.text}>
                  My interests include web application development, Human-Computer
                  Interaction, 3D modeling, and UI/UX research, combining both technical
                  and creative skills.
                </p>
              </div>
            </div>

            <div style={styles.timelineItem}>
              <div style={styles.dot}></div>
              <div style={styles.content}>
                <h3 style={styles.heading}>Career Goals</h3>
                <p style={styles.text}>
                  My goal is to grow as a software engineer by gaining industry
                  experience, refining my development skills, and delivering impactful,
                  user-centered solutions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

const styles = {
  timelineContainer: {
    position: "relative",
    zIndex: 10,
    maxWidth: "900px",
    width: "100%",
    padding: "40px",
  },

  timelineTitle: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "50px",
    fontSize: "3.5rem",
    color: "rgba(255,255,255,0.9)",
  },

  timeline: {
    position: "relative",
    paddingLeft: "40px",
  },

  timelineItem: {
    position: "relative",
    paddingBottom: "50px",
  },

  dot: {
    position: "absolute",
    left: "-49px",
    top: "8px",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    background: "#4f46e5",
    boxShadow: "0 0 15px #4f46e5",
    zIndex: 2,
  },

  content: {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderRadius: "16px",
    padding: "25px",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  heading: {
    margin: "0 0 12px 0",
    color: "#ffffff",
    fontSize: "1.2rem",
  },

  text: {
    margin: 0,
    color: "rgba(255,255,255,0.85)",
    lineHeight: "1.8",
    fontSize: "1.05rem",
  },


  pageWrapper: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    overflow: "hidden",
  },
  backgroundLayer: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none",
  },
};

