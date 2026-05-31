// pages/about.js

import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.4,
};

export default function About() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>About Me</h1>

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
    </motion.div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  card: {
    maxWidth: "800px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "20px",
    fontSize: "2.5rem",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
};