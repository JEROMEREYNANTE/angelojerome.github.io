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
  FaLinkedin,
  FaBriefcase
} from "react-icons/fa";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

export default function Contact() {

  const fullText = "Contact Me";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 70);

      return () => clearTimeout(timer);
    }
  }, [index]);


  useEffect(() => {

    const resize = () => {
      setIsMobile(window.innerWidth <= 768);
    }

    resize();

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);

  }, []);



  const styles = {

    wrapper: {
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden"
    },


    background: {
      position: "absolute",
      inset: 0,
      zIndex: 0
    },


    container: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      justifyContent: "center",
      padding: isMobile ? "80px 20px" : "140px 20px"
    },


    status: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "20px",
      padding: "10px 22px",
      borderRadius: "999px",
      background: "rgba(34,197,94,0.12)",
      border: "1px solid rgba(34,197,94,0.4)",
      color: "#86efac",
      fontWeight: "600",
      fontSize: "1rem",
      width: "fit-content",
    },


    subtitle: {
      fontSize: isMobile ? "1rem" : "1.1rem",
      lineHeight: "1.8",
      color: "rgba(255,255,255,0.75)",
      maxWidth: "650px",
      marginBottom: "30px",
    },

    content: {
      maxWidth: "850px",
      width: "100%",
      textAlign: isMobile ? "center" : "left"
    },


    title: {
      fontSize: isMobile ? "2.2rem" : "3rem",
      color: "white",
      fontWeight: "700",
      display: "flex",
      justifyContent: isMobile ? "center" : "flex-start",
      alignItems: "center",
      gap: "12px"
    },


    cursor: {
      borderRight: "3px solid #4f46e5"
    },


    description: {
      marginTop: "20px",
      color: "rgba(255,255,255,.75)",
      fontSize: "1.1rem",
      lineHeight: "1.8",
      maxWidth: "650px"
    },


    buttons: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      marginTop: "35px",
      justifyContent: isMobile ? "center" : "flex-start"
    },


    button: {
      padding: "12px 18px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      textDecoration: "none",
      color: "white",
      fontWeight: "600",
      cursor: "pointer",
    },

    primary: {
      background: "#4f46e5"
    },


    secondary: {
      background: "rgba(255,255,255,.08)",
      border: "1px solid rgba(255,255,255,.15)"
    },


    hover: {
      transform: "translateY(-4px) scale(1.03)",
      boxShadow: "0 12px 25px rgba(79,70,229,0.35)",
    },


    cards: {
      marginTop: "50px",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "15px"
    },


    card: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "18px",
      borderRadius: "14px",
      background: "rgba(255,255,255,.07)",
      border: "1px solid rgba(255,255,255,.1)",
      color: "white"
    },


    link: {
      color: "white",
      textDecoration: "none"
    },


    footer: {
      marginTop: "60px",
      color: "rgba(255,255,255,.8)"
    }

  };


  const Button = ({ id, children, href, primary }) => (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      whileHover={{
        y: -4,
        scale: 1.05,
        boxShadow: "0 12px 25px rgba(79,70,229,0.35)",
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
      style={{
        ...styles.button,
        ...(primary ? styles.primary : styles.secondary),
      }}
    >
      {children}
    </motion.a>
  );

  return (

    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: .4 }}
    >

      <div style={styles.wrapper}>


        <div style={styles.background}>
          <Grainient
            color1="#0F172A"
            color2="#2563EB"
            color3="#94A3B8"
            timeSpeed={1.6}
          />
        </div>



        <div style={styles.container}>

          <div style={styles.content}>


            <h1 style={styles.title}>
              <FaBriefcase color="#4f46e5" />
              {typedText}
              <span style={styles.cursor} />
            </h1>

            <div style={styles.status}>
              <motion.span
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🟢
              </motion.span>

              Available for Job Opportunities
            </div>

            <p style={styles.subtitle}>
              I'm looking for opportunities to contribute to impactful products,
              work with collaborative teams, and continue growing as a developer.
            </p>



            <div style={styles.buttons}>

              <Button
                id="email"
                href="mailto:reynantejerome@yahoo.com"
                primary
              >
                <FaEnvelope />
                Email Me
              </Button>


              <Button
                id="linkedin"
                href="https://www.linkedin.com/in/angelo-jerome-reynante-308914379/"
              >
                <FaLinkedin />
                LinkedIn
              </Button>


              <Button
                id="github"
                href="https://github.com/JEROMEREYNANTE"
              >
                <FaGithub />
                GitHub
              </Button>



              <Button
                id="resume"
                href="/Resume.pdf"
              >
                <FaDownload />
                Resume
              </Button>


            </div>




            <div style={styles.cards}>


              <div style={styles.card}>
                <FaEnvelope />
                reynantejerome@yahoo.com
              </div>


              <div style={styles.card}>
                <FaPhone />
                +1 403 803 9286
              </div>


              <div style={styles.card}>
                <FaGithub />
                <a
                  href="https://github.com/JEROMEREYNANTE"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  github.com/JEROMEREYNANTE
                </a>
              </div>



              <div style={styles.card}>
                <FaLinkedin />
                <a
                  href="https://www.linkedin.com/in/angelo-jerome-reynante-308914379/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  linkedin.com/in/angelo-jerome-reynante
                </a>
              </div>



              <div style={styles.card}>
                <FaMapMarkerAlt />
                Calgary, Alberta, Canada
              </div>


            </div>



            <div style={styles.footer}>
              <h3>Looking forward to hearing from you.</h3>

              <p>
                Whether it's collaboration, development work, or a new opportunity,
                let's create something meaningful.
              </p>

            </div>


          </div>

        </div>


      </div>

    </motion.div>

  );

}