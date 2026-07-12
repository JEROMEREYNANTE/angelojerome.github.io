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

  const [isMobile, setIsMobile] = useState(false);


  // Typing animation
  useEffect(() => {
    if (index < fullText.length) {

      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 70);

      return () => clearTimeout(timeout);
    }

  }, [index]);



  // Responsive detection
  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);

  }, []);



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
      flexDirection: isMobile ? "column-reverse" : "row",
      alignItems: "center",
      justifyContent: "center",
      padding: isMobile ? "80px 25px 50px" : "0 8vw",
      gap: isMobile ? "40px" : "60px",
      textAlign: isMobile ? "center" : "left",
    },


    left: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: isMobile ? "center" : "flex-start",
      maxWidth: "650px",
    },


    right: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },


    name: {
      fontSize: isMobile ? "2.2rem" : "3.2rem",
      fontWeight: "700",
      margin: 0,
      color: "rgba(255,255,255,0.9)",
      lineHeight: "1.2",
    },


    title: {
      fontSize: isMobile ? "1.2rem" : "1.6rem",
      fontWeight: "400",
      marginTop: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: isMobile ? "center" : "flex-start",
      flexWrap: "wrap",
      color: "rgba(255,255,255,0.85)",
    },


    cursor: {
      borderRight: "2px solid #4f46e5",
      marginLeft: "6px",
      height: "22px",
    },


    description: {
      marginTop: "24px",
      fontSize: isMobile ? "1rem" : "1.15rem",
      lineHeight: "1.8",
      color: "rgba(255,255,255,0.85)",
    },


    imageWrapper: {
      width: isMobile ? "220px" : "320px",
      height: isMobile ? "220px" : "320px",
      borderRadius: "50%",
      padding: "6px",
      background:
        "linear-gradient(135deg, #4f46e5, #2563eb, #94a3b8)",
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



        <div style={styles.hero}>


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
              Passionate about building modern web applications and scalable
              software solutions. Experienced in front-end development,
              UI implementation, and collaborative development through
              academic and team-based projects. Focused on writing clean,
              maintainable code and delivering reliable, user-focused
              features across the stack.
            </p>


          </div>




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