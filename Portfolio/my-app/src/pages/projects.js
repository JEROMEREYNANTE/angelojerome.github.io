// pages/projects.js

import Grainient from "../components/Background/Grainient";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import {
  FaProjectDiagram,
} from "react-icons/fa";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.4,
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);


  const projects = [
    {
      title: "Lotion Website Application",
      link: "https://github.com/JEROMEREYNANTE/Lotion-Plus.git",
      cover: "/LotionWebsite/Home.png",
      description:
        "A full-stack note-taking web application built using React on the front end and AWS cloud services for backend infrastructure. The application allows users to create, organize, and manage notes efficiently with a focus on responsiveness, performance, and usability. Emphasis was placed on ensuring seamless data persistence, secure storage, and smooth retrieval operations. The project highlights clean UI design principles and scalable cloud-based architecture.",
      tags: "React • AWS • Full-Stack Development • HTML • CSS • Javascript",
      images: [
        { src: "/LotionWebsite/Login.png", desc: "Login page with secure authentication flow" },
        { src: "/LotionWebsite/Home.png", desc: "Dashboard showing user notes overview" },
        { src: "/LotionWebsite/Save.png", desc: "Save note modal with validation" },
        { src: "/LotionWebsite/View.png", desc: "Detailed note view screen" },
      ],
    },
    {
      title: "Tartigrade File Management System (Capstone)",
      link: "https://github.com/JEROMEREYNANTE/ENGG-500A/tree/main",
      cover: "/Tartigrade/Homepage.png",
      description:
        "A collaborative capstone project focused on designing and developing a file management system for the Tardigrade storage architecture. The system was built to improve file organization, accessibility, and workflow efficiency within distributed storage environments. Responsible for front-end development and UI implementation aligned with design specifications, while also contributing to debugging, cross-team collaboration, and performance optimization. The project emphasized maintainability, modular design, and effective teamwork in a full development lifecycle.",
      tags: "Java • Team Collaboration • UI/App Development • Debugging",
      images: [
        { src: "/Tartigrade/Login.png", desc: "System login interface with authentication layer" },
        { src: "/Tartigrade/Homepage.png", desc: "Main dashboard for file navigation" },
        { src: "/Tartigrade/Highlight.png", desc: "File highlighting and selection system" },
        { src: "/Tartigrade/Search.png", desc: "Search functionality for file retrieval" },
        { src: "/Tartigrade/Upload.png", desc: "File upload interface with progress tracking" },
      ],
    },
    {
      title: "Medical Clinic Website Prototype",
      link: "https://github.com/yumiaery/CPSC481-PROJECT",
      cover: "/MedicalClinicWebsite/Final.png",
      description:
        "A healthcare-focused web application prototype designed to streamline appointment booking and improve patient interaction with clinic services. The project involved designing both initial and refined UI prototypes through iterative feedback cycles, with a strong focus on usability and accessibility. Key improvements included simplifying the scheduling workflow, enhancing navigation clarity, and optimizing the overall user experience for patients and clinic staff. The final design prioritizes efficiency, clarity, and user-centered design principles.",
      tags: "UI/UX Design • Prototyping • User Research • Figma • HTML • CSS • Javascript",
      images: [
        { src: "/MedicalClinicWebsite/Prototype1.png", desc: "Early wireframe prototype of booking flow" },
        { src: "/MedicalClinicWebsite/Prototype2.png", desc: "Improved UI iteration with layout refinement" },
        { src: "/MedicalClinicWebsite/Final.png", desc: "Final appointment booking interface" },
        { src: "/MedicalClinicWebsite/Final2.png", desc: "Responsive layout adaptation for usability" },
      ],
    },
    {
      title: "Wordie",
      link: "https://github.com/ucalgary-ensf381/assignment-05-wordle-JEROMEREYNANTE",
      cover: "/Wordie/Home.png",
      description:
        "Wordie is a word-guessing game built as a web application where players attempt to identify hidden words through a limited number of guesses. The game focuses on core mechanics such as input validation, real-time feedback, and interactive hint systems to guide gameplay. Key features include a structured game loop, a help section explaining rules and mechanics, and support for theme-based visual modes to enhance user experience. The design emphasizes simplicity, responsiveness, and engaging gameplay centered around logic and vocabulary skills.",
      tags: "HTML • CSS • Javascript",
      images: [
        { src: "/Wordie/Home.png", desc: "Wordie game home screen showing core gameplay entry point and main menu options" },
        { src: "/Wordie/Dark.png", desc: "Wordie gameplay feature demonstrating theme support and core game mechanics in action" },
        { src: "/Wordie/Help.png", desc: "Wordie help section explaining game rules, hints, and how to play the word-guessing system" },
      ],
    },
  ];

  const fullText = "Projects & Experience";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 70); // typing speed

      return () => clearTimeout(timeout);
    }
  }, [index]);
  const styles = {

    header: {
      textAlign: "center",
      marginBottom: "50px",
    },
    contentWrapper: {
      width: "100%",
      maxWidth: "1200px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      margin: "0 auto",
    },
    pageWrapper: {
      position: "relative",
      width: "100%",
      minHeight: "100vh",
      overflow: "hidden",
    },
    container: {
      display: "flex",
      justifyContent: "center",
      padding: "100px 20px 80px",
      position: "relative",
      zIndex: 2,
    },

    title: {
      fontSize: "2rem",
      fontWeight: "700",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start", // ✅ change here
      gap: "12px",
      color: "rgba(255,255,255,0.9)",
      textAlign: "left",
    },



    description: {
      maxWidth: "700px",
      fontSize: "1.1rem",
      lineHeight: "1.8",
      color: "rgba(255,255,255,0.8)",
      marginTop: "12px",
    },
    projectRow: {
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
      gap: "24px",
      flexWrap: "wrap",
      width: "100%",
    },

    projectCard: {
      width: "350px",
      background: "rgba(255,255,255,0.08)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderRadius: "20px",
      overflow: "hidden",
      cursor: "pointer",
      border: "1px solid rgba(255,255,255,0.1)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    },

    projectImage: {
      width: "100%",
      height: "240px",
      objectFit: "cover",
    },

    projectContent: {
      padding: "20px",
    },

    projectTitle: {
      color: "#fff",
      fontSize: "1.3rem",
      marginBottom: "10px",
    },
    backgroundLayer: {
      position: "fixed",
      inset: 0,
      zIndex: 0,
      pointerEvents: "none",
      transform: "translateZ(0)",
      willChange: "transform",
    },
    projectTags: {
      color: "rgba(255,255,255,0.7)",
      fontSize: "0.9rem",
    },
    modalOverlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.75)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      zIndex: 9999,
    },

    projectModal: {
      width: "100%",
      maxWidth: "1100px",
      maxHeight: "85vh",
      overflowY: "auto",
      borderRadius: "24px",
      padding: "30px",
      background: "rgba(15,23,42,0.95)",
      backdropFilter: "blur(20px)",
    },

    modalGallery: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: "16px",
      marginTop: "24px",
    },

    galleryImage: {
      width: "100%",
      borderRadius: "12px",
      cursor: "zoom-in",
      transition: "filter 0.2s ease",
    },
  }



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
          style={{
            ...styles.container,
            padding: isMobile ? "20px" : "60px",
          }}
        >
          <div style={styles.contentWrapper}>

            <div style={styles.header}>
              <h1 style={styles.title}>
                <FaProjectDiagram color="#5048e5" />
                {typedText}
                <span style={{ borderRight: "2px solid #4f46e5" }} />
              </h1>

              <p style={styles.description}>
                Here are my top four projects that showcase my experience in software
                development.
              </p>
            </div>

            <div style={styles.projectRow}>
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setSelectedProject(project)}
                  style={styles.projectCard}
                >
                  <img
                    src={project.cover}
                    alt={project.title}
                    style={styles.projectImage}
                  />

                  <div style={styles.projectContent}>
                    <h2 style={styles.projectTitle}>{project.title}</h2>
                    <p style={styles.projectTags}>{project.tags}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* IMAGE MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.modalOverlay}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              style={styles.projectModal}
            >
              <h2 style={{ color: "#fff" }}>
                {selectedProject.title}
              </h2>

              <p style={{ color: "#ddd", lineHeight: 1.8 }}>
                {selectedProject.description}
              </p>

              <p style={{ color: "#8fb3ff" }}>
                {selectedProject.tags}
              </p>
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "12px",
                    marginBottom: "24px",
                    padding: "10px 18px",
                    borderRadius: "10px",
                    background: "#4f46e5",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "600",
                  }}
                >
                  GitHub Repository →
                </a>
              )}
              <div style={styles.modalGallery}>
                {selectedProject.images.map((img, i) => (
                  <motion.div
                    key={i}
                    style={{ position: "relative" }}
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                  >
                    <motion.img
                      src={img.src}
                      alt={img.desc}
                      style={{
                        ...styles.galleryImage,
                        display: "block",
                      }}
                      onClick={() => setSelectedImage(img)}
                      variants={{
                        rest: { scale: 1, filter: "brightness(1)" },
                        hover: { scale: 1.05, filter: "brightness(0.7)" }
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.85)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 10000,
              cursor: "zoom-out",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "95%",
              }}
            >
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.desc}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                style={{
                  maxWidth: "90%",
                  maxHeight: "80vh",
                  borderRadius: "12px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                }}
              />

              <p
                style={{
                  color: "#fff",
                  marginTop: "16px",
                  textAlign: "center",
                  fontSize: "1rem",
                  maxWidth: "800px",
                  lineHeight: "1.6",
                }}
              >
                {selectedImage.desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

