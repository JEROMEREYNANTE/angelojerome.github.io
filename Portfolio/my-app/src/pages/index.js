// pages/index.js
import Grainient from "../components/Background/Grainient";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.4,
};

export default function Home() {
  const fullText = "Graduated Software Engineering Student";
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
        {/* Background */}
        <div style={styles.backgroundLayer}>
          <Grainient
            color1="#0F172A"
            color2="#2563EB"
            color3="#94A3B8"
            timeSpeed={1.6}
          />
        </div>

        {/* HERO */}
        <div style={styles.hero}>

          {/* LEFT SIDE */}
          <div style={styles.left}>
            <h1 style={styles.name}>
              Angelo Jerome Telano Reynante
            </h1>

            <h2 style={styles.title}>
              <FaLaptopCode color="#4f46e5" />
              <span style={{ marginLeft: "10px" }}>
                {typedText}
              </span>
              <span style={styles.cursor} />
            </h2>

            <p style={styles.description}>
              Passionate about building modern web applications and scalable software solutions.
              Experienced in front-end development, UI implementation, and collaborative development
              through academic and team-based projects. Focused on writing clean, maintainable code
              and delivering reliable, user-focused features across the stack.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div style={styles.right}>
            <div style={styles.imageWrapper}>
              <img
                src="/photo.jpg"
                alt="Profile"
                style={styles.image}
              />
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

  hero: {
    position: "relative",
    zIndex: 2,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 8vw",
    gap: "60px",
  },

  left: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "650px",
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    fontSize: "3.2rem",
    fontWeight: "700",
    margin: 0,
    color: "rgba(255,255,255,0.9)",
    lineHeight: "1.1",
  },

  title: {
    fontSize: "1.6rem",
    fontWeight: "400",
    marginTop: "18px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "rgba(255,255,255,0.85)",
  },

  cursor: {
    borderRight: "2px solid #4f46e5",
    marginLeft: "6px",
    height: "22px",
  },

  description: {
    marginTop: "24px",
    fontSize: "1.15rem",
    lineHeight: "1.8",
    color: "rgba(255,255,255,0.85)",
  },

  imageWrapper: {
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    padding: "6px",
    background: "linear-gradient(135deg, #4f46e5, #2563eb, #94a3b8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid rgba(15, 23, 42, 0.8)",
  },
};