// pages/contact.js
import Waves from "../components/Background/Waves";
import React from "react";
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
    padding: "60px",
    zIndex: 2,
  }}
      >
<div
style={{
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
}}
>
<h1
  style={{
    color: "#fff",
    fontSize: "2.5rem",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  }}
>
  <FaBriefcase color="#4f46e5" />
  Contact Me
</h1>

          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: "1.6" }}>
            I’m currently open to job opportunities. Feel free to reach out if
            you’d like to collaborate or discuss potential roles.
          </p>

<div style={infoBox}>
  <FaEnvelope color="#4f46e5" />
  <span> <strong>Email:</strong> reynantejerome@yahoo.com</span>
</div>

<div style={infoBox}>
  <FaPhone color="#4f46e5" />
  <span> <strong>Phone Number:</strong> +1 403 803 9286</span>
</div>

<div style={infoBox}>
  <FaGithub color="#4f46e5" />
  <span> <strong>Github:</strong> https://github.com/JEROMEREYNANTE</span>
</div>

<div style={infoBox}>
  <FaMapMarkerAlt color="#4f46e5" />
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

