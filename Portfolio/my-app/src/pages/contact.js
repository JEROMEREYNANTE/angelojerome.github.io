
// pages/contact.js
import Grainient from "../components/Background/Grainient";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaMapMarkerAlt,
  FaDownload,
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

        <div style={styles.container}>
          <div style={styles.content}>

            {/* HEADER */}
            <h1 style={styles.title}>
              <FaBriefcase color="#4f46e5" />
              {typedText}
              <span style={styles.cursor} />
            </h1>

            {/* AVAILABILITY BADGE */}
            <div style={styles.status}>
              🟢 Available for Job Opportunities
            </div>

            {/* SUMMARY */}
            <p style={styles.subtitle}>
              I'm looking for opportunities to contribute to impactful products, work with collaborative teams, and continue growing as a developer.
            </p>

            {/* CTA BUTTONS */}
            <div style={styles.buttonGroup}>
              <a href="mailto:reynantejerome@yahoo.com" style={styles.primaryButton}>
                Email Me
              </a>

              <a
                href="https://github.com/JEROMEREYNANTE"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.secondaryButton}
              >
                GitHub
              </a>

              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.secondaryButton}
              >
                <FaDownload style={{ marginRight: "6px" }} />
                Resume
              </a>
            </div>

            {/* CONTACT GRID */}
            <div style={styles.grid}>
              <div style={styles.item}>
                <FaEnvelope />
                <span>reynantejerome@yahoo.com</span>
              </div>

              <div style={styles.item}>
                <FaPhone />
                <span>+1 403 803 9286</span>
              </div>

              <div style={styles.item}>
                <FaGithub />
                <span>github.com/JEROMEREYNANTE</span>
              </div>
              {
                /*<div style={styles.item}>
                  <FaLinkedin />
                  <span>linkedin.com/in/your-profile</span>
                </div>
                */
              }
              <div style={styles.item}>
                <FaMapMarkerAlt />
                <span>Calgary, Alberta, Canada</span>
              </div>
            </div>

            {/* FOOTER MESSAGE */}
            <div style={styles.footer}>
              <h3>Let’s build something together.</h3>
              <p>
                Whether it’s a job opportunity, collaboration, or project idea,
                I’m always open to connecting.
              </p>
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

  backgroundLayer: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none",
  },

  container: {
    position: "relative",
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    padding: "120px 20px",
  },

  content: {
    maxWidth: "800px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
  },

  title: {
    fontSize: "2.6rem",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: "rgba(255,255,255,0.9)",
    marginBottom: "12px",
  },

  cursor: {
    borderRight: "2px solid #4f46e5",
    marginLeft: "6px",
  },

  status: {
    marginBottom: "20px",
    padding: "8px 14px",
    borderRadius: "999px",
    background: "rgba(34,197,94,0.12)",
    border: "1px solid rgba(34,197,94,0.4)",
    color: "#86efac",
    fontWeight: "600",
    fontSize: "0.9rem",
  },

  subtitle: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "rgba(255,255,255,0.75)",
    maxWidth: "650px",
    marginBottom: "30px",
  },

  buttonGroup: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "40px",
  },

  primaryButton: {
    padding: "10px 16px",
    borderRadius: "10px",
    background: "#4f46e5",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
  },

  secondaryButton: {
    padding: "10px 16px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    border: "1px solid rgba(255,255,255,0.12)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    width: "100%",
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "14px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#fff",
    fontSize: "0.95rem",
  },

  footer: {
    marginTop: "50px",
    color: "rgba(255,255,255,0.8)",
  },
};

