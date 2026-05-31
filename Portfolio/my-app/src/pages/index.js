// pages/index.js

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

export default function Home() {
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
          padding: "60px",
          margin: 0,
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            maxWidth: "800px",
            padding: "40px",
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
          }}
        >
          <h1
            style={{
              fontSize: "3.2rem",
              fontWeight: "700",
              margin: 0,
              lineHeight: "1.1",
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
            }}
          >
            Graduated Software Engineering Student
          </h2>

          <p
            style={{
              maxWidth: "100%",
              fontSize: "1.15rem",
              lineHeight: "1.8",
              margin: 0,
              color: "#555",
            }}
          >
            Passionate about building modern web applications and intuitive user
            experiences. Experienced in front-end development, UI/UX design, and
            collaborative software development through academic and team-based
            projects. Focused on creating clean, efficient, and user-centered digital solutions.
          </p>
        </div>
      </div>
    </motion.div>
  );
}