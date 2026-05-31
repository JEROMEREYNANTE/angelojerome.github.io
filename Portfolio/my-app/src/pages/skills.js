// pages/skills.js

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

export default function Skills() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          padding: "60px",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            backgroundColor: "#ffffff",
            padding: "40px",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
            Skills & Expertise
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.7",
              color: "#444",
              marginBottom: "20px",
            }}
          >
            I am skilled in front-end development, UI/UX design principles, and
            user-centered development practices. I enjoy building clean, responsive,
            and interactive web applications while continuously improving user
            experience through research and feedback.
          </p>

          <h2 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
            Technical Skills
          </h2>

          <ul style={{ lineHeight: "1.8", color: "#555" }}>
            <li>HTML & CSS – building structured and responsive web layouts</li>
            <li>JavaScript – interactive and dynamic web functionality</li>
            <li>React – component-based front-end development</li>
            <li>Java – object-oriented programming and application development</li>
            <li>Git – version control and collaborative development</li>
            <li>Figma – UI design, prototyping, and interface planning</li>
          </ul>

          <h2 style={{ fontSize: "1.3rem", marginTop: "20px", marginBottom: "10px" }}>
            UI/UX & Design Skills
          </h2>

          <ul style={{ lineHeight: "1.8", color: "#555" }}>
            <li>UI design and interface prototyping</li>
            <li>Human-Computer Interaction (HCI) principles</li>
            <li>User research and feedback analysis</li>
            <li>Wireframing and visual planning of interfaces</li>
          </ul>

          <h2 style={{ fontSize: "1.3rem", marginTop: "20px", marginBottom: "10px" }}>
            Strengths
          </h2>

          <ul style={{ lineHeight: "1.8", color: "#555" }}>
            <li>Strong focus on user-centered design</li>
            <li>Ability to translate ideas into functional interfaces</li>
            <li>Continuous learning and improvement mindset</li>
            <li>Attention to detail in UI consistency and usability</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}