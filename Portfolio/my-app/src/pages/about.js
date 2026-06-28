// pages/about.js

import Grainient from "../components/Background/Grainient";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaPalette,
  FaRocket,
} from "react-icons/fa";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.4,
};

const timelineData = [
  {
    icon: FaUserGraduate,
    title: "Recent Graduate",
    text: "I am a recent Software Engineering graduate with practical experience in academic and personal web development, programming, and UI/UX projects.",
  },
  {
    icon: FaLaptopCode,
    title: "Development Experience",
    text: "I have developed software using JavaScript, React, Python, Java, HTML, and CSS, with a strong focus on building responsive front-end interfaces and improving user experience through research and user feedback.",
  },
  {
    icon: FaPalette,
    title: "Interests",
    text: "My interests include web application development, Human-Computer Interaction, 3D modeling, and UI/UX research, combining both technical and creative skills.",
  },
  {
    icon: FaRocket,
    title: "Career Goals",
    text: "My goal is to grow as a software engineer by gaining industry experience, refining my development skills, and delivering impactful, user-centered solutions.",
  },
];

function TimelineItem({ icon: Icon, title, text }) {
  return (
    <motion.div
      style={styles.timelineItem}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div style={styles.dot}></div>

      <div style={styles.content}>
        <h3 style={styles.heading}>
          <Icon style={styles.icon} />
          {title}
        </h3>

        <p style={styles.text}>{text}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const fullText = "About Me";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 70);

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
            <span
              style={{
                borderRight: "2px solid #4f46e5",
                marginLeft: "4px",
              }}
            />
          </h1>

          <p style={styles.subtitle}>
            Building user-focused digital experiences through software
            engineering, front-end development, and thoughtful design.
          </p>

          <div style={styles.timeline}>
            <div style={styles.timelineLine}></div>

            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            ))}
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "100px 20px",
  },

  backgroundLayer: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none",
  },

  timelineContainer: {
    position: "relative",
    zIndex: 10,
    maxWidth: "850px",
    width: "100%",
  },

  timelineTitle: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "20px",
    fontSize: "3.5rem",
    color: "rgba(255,255,255,0.95)",
    fontWeight: "700",
  },

  subtitle: {
    color: "rgba(255,255,255,0.75)",
    fontSize: "1.15rem",
    lineHeight: "1.8",
    maxWidth: "700px",
    marginBottom: "70px",
  },

  timeline: {
    position: "relative",
    paddingLeft: "50px",
  },

  timelineLine: {
    position: "absolute",
    left: "7px",
    top: "10px",
    bottom: "10px",
    width: "2px",
    background: "rgba(255,255,255,0.25)",

  },

  timelineItem: {
    position: "relative",
    paddingBottom: "70px",
  },

  dot: {
    position: "absolute",
    left: "-50px",
    top: "12px",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    background: "#4f46e5",
    boxShadow: "0 0 15px rgba(79,70,229,0.9)",
    zIndex: 2,
  },

  content: {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderRadius: "18px",
    padding: "28px",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "all 0.3s ease",
  },

  heading: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "0 0 15px 0",
    color: "#ffffff",
    fontSize: "1.25rem",
    fontWeight: "600",
  },

  icon: {
    color: "#4f46e5",
  },

  text: {
    margin: 0,
    color: "rgba(255,255,255,0.85)",
    lineHeight: "1.9",
    fontSize: "1.05rem",
  },
};