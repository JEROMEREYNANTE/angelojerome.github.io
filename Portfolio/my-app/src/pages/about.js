// pages/about.js

import Grainient from "../components/Background/Grainient";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaPalette,
  FaRocket,
} from "react-icons/fa";


const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};


const pageTransition = {
  duration: 0.4,
};



const timelineData = [
  {
    icon: FaUserGraduate,
    title: "Recent Graduate",
    text:
      "I am a recent Software Engineering graduate with practical experience in academic and personal web development, programming, and UI/UX projects.",
  },
  {
    icon: FaLaptopCode,
    title: "Development Experience",
    text:
      "I have developed software using JavaScript, React, Python, Java, HTML, and CSS, with a strong focus on building responsive front-end interfaces and improving user experience through research and user feedback.",
  },
  {
    icon: FaPalette,
    title: "Interests",
    text:
      "My interests include web application development, Human-Computer Interaction, 3D modeling, and UI/UX research, combining both technical and creative skills.",
  },
  {
    icon: FaRocket,
    title: "Career Goals",
    text:
      "My goal is to grow as a software engineer by gaining industry experience, refining my development skills, and delivering impactful, user-centered solutions.",
  },
];



function TimelineItem({ item, styles }) {

  const Icon = item.icon;

  return (
    <motion.div
      style={styles.timelineItem}
      initial={{
        opacity: 0,
        y: 30
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
    >

      <div style={styles.dot}></div>


      <div style={styles.content}>

        <h3 style={styles.heading}>
          <Icon style={styles.icon} />
          {item.title}
        </h3>


        <p style={styles.text}>
          {item.text}
        </p>

      </div>

    </motion.div>
  );
}




export default function About() {

  const fullText = "About Me";

  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(false);



  // Typing animation
  useEffect(() => {

    if (index < fullText.length) {

      const timeout = setTimeout(() => {

        setTypedText(prev => prev + fullText[index]);
        setIndex(index + 1);

      }, 70);


      return () => clearTimeout(timeout);

    }

  }, [index]);





  // Responsive detection
  useEffect(() => {

    const resize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };

  }, []);





  const styles = {


    pageWrapper: {
      position: "relative",
      width: "100%",
      minHeight: "100vh",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      padding: isMobile ? "90px 15px 50px" : "120px 30px",
    },



    backgroundLayer: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
      pointerEvents: "none",
    },



    timelineContainer: {
      position: "relative",
      zIndex: 10,
      width: "100%",
      maxWidth: "850px",
      boxSizing: "border-box",
    },


    timelineTitle: {
      display: "flex",
      alignItems: "center",
      justifyContent: isMobile ? "center" : "flex-start",
      gap: "12px",
      marginBottom: "20px",
      fontSize: isMobile ? "2rem" : "3.5rem",
      color: "rgba(255,255,255,0.95)",
      fontWeight: "700",
      textAlign: isMobile ? "center" : "left",
      lineHeight: "1.2",
      wordBreak: "break-word",
    },



    subtitle: {
      color: "rgba(255,255,255,0.75)",
      fontSize: isMobile ? "1rem" : "1.15rem",
      lineHeight: "1.8",

      maxWidth: "700px",

      marginBottom: isMobile ? "40px" : "70px",

      textAlign: isMobile ? "center" : "left",

      overflowWrap: "break-word",
    },



    timeline: {
      position: "relative",
      width: "100%",
      boxSizing: "border-box",
      paddingLeft: isMobile ? "28px" : "50px",
    },


    timelineLine: {
      position: "absolute",
      left: isMobile ? "2px" : "7px",
      top: "10px",
      bottom: "10px",
      width: "2px",
      background: "rgba(255,255,255,0.25)",
    },



    timelineItem: {
      position: "relative",
      paddingBottom: isMobile ? "40px" : "70px",
    },



    dot: {
      position: "absolute",
      left: isMobile ? "-30px" : "-50px",
      top: "15px",
      width: isMobile ? "12px" : "16px",
      height: isMobile ? "12px" : "16px",
      borderRadius: "50%",
      background: "#4f46e5",
      boxShadow: "0 0 15px rgba(79,70,229,0.9)",
    },



    content: {
      width: "100%",
      maxWidth: "100%",
      boxSizing: "border-box",
      overflow: "hidden",

      background: "rgba(255,255,255,0.08)",
      backdropFilter: "blur(15px)",
      borderRadius: "18px",

      padding: isMobile ? "18px" : "28px",

      border: "1px solid rgba(255,255,255,0.08)",
    },



    heading: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "10px",
      marginBottom: "15px",
      color: "#fff",
      fontSize: isMobile ? "1.1rem" : "1.25rem",
    },



    icon: {
      color: "#4f46e5",
    },



    text: {
      margin: 0,
      color: "rgba(255,255,255,0.85)",
      lineHeight: "1.8",
      fontSize: isMobile ? "0.95rem" : "1.05rem",
    },

  };





  return (

    <motion.div
      style={{ width: "100%", overflowX: "hidden" }}
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




        <div style={styles.timelineContainer}>


          <h1 style={styles.timelineTitle}>

            <FaUserGraduate color="#4f46e5" />

            {typedText}

            <span
              style={{
                borderRight: "2px solid #4f46e5",
              }}
            />

          </h1>



          <p style={styles.subtitle}>
            Building user-focused digital experiences through software
            engineering, front-end development, and thoughtful design.
          </p>




          <div style={styles.timeline}>


            <div style={styles.timelineLine} />



            {timelineData.map((item, index) => (

              <TimelineItem
                key={index}
                item={item}
                styles={styles}
              />

            ))}



          </div>


        </div>


      </div>


    </motion.div>

  );
}