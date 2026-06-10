// pages/contact.js
import Grainient from "../components/Background/Grainient";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.4,
};

export default function Contact() {

  const fullText = "Contact Me";
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
        <div
          style={styles.container}
        >
          <div
            style={styles.card}
          >
            <h1
              style={{
                fontSize: "1.6rem",
                fontWeight: "700",
                marginTop: "12px",
                marginBottom: "24px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "rgba(255,255,255,0.85)"
              }}
            >
              <FaBriefcase color="#4f46e5" />
              {typedText}
              <span style={{ borderRight: "2px solid #4f46e5", marginLeft: "4px" }} />
            </h1>

            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: "1.6" }}>
              I’m currently open to job opportunities. Feel free to reach out if
              you’d like to collaborate or discuss potential roles.
            </p>

            <div style={infoBox}>
              <FaEnvelope color="#ffffff" />
              <span> <strong>Email:</strong> reynantejerome@yahoo.com</span>
            </div>

            <div style={infoBox}>
              <FaPhone color="#ffffff" />
              <span> <strong>Phone Number:</strong> +1 403 803 9286</span>
            </div>

            <div style={infoBox}>
              <FaGithub color="#ffffff" />
              <span> <strong>Github:</strong> https://github.com/JEROMEREYNANTE</span>
            </div>

            <div style={infoBox}>
              <FaMapMarkerAlt color="#ffffff" />
              <span> <strong>Location:</strong> Calgary, Alberta, Canada</span>
            </div>
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
  },

  container: {
    position: "relative",
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
  },
  card: {
    maxWidth: "700px",
    width: "100%",
    background: "rgba(255, 255, 255, 0.12)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    position: "relative",
    zIndex: 3,

  },
  backgroundLayer: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none",
  }
};

const infoBox = {
  background: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  padding: "14px 18px",
  borderRadius: "12px",
  fontSize: "1rem",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

