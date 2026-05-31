// pages/contact.js

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

export default function Contact() {
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
            maxWidth: "700px",
            width: "100%",
            backgroundColor: "#ffffff",
            padding: "40px",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
            Contact Me
          </h1>

          <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.6" }}>
            I’m currently open to job opportunities. Feel free to reach out if
            you’d like to collaborate or discuss potential roles.
          </p>

          <div style={infoBox}>
            <strong>Email:</strong> reynantejerome@yahoo.com
          </div>

          <div style={infoBox}>
            <strong>Phone:</strong> +1 403 803 9286
          </div>

          <div style={infoBox}>
            <strong>GitHub:</strong> github.com/yourusername
          </div>

          <div style={infoBox}>
            <strong>Location:</strong> 122 Livingston Ave NE, Calgary, AB T3P 0V9, Canada
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const infoBox = {
  backgroundColor: "#f9f9f9",
  padding: "12px 15px",
  borderRadius: "10px",
  fontSize: "1rem",
  color: "#333",
};