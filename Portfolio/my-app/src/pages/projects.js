// pages/projects.js

import Waves from "../components/Background/Waves";
import { motion, AnimatePresence, color } from "framer-motion";
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
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const projects = [
    {
      title: "Lotion Website Application",
      description:
        "A full-stack note-taking web application built using React for the front-end and AWS for backend services. The project focused on creating a smooth and responsive user experience while ensuring reliable data storage and retrieval.",
      tags: "React • AWS • Full-Stack Development",
      images: [
        { src: "/LotionWebsite/Login.png", desc: "Login page with secure authentication flow" },
        { src: "/LotionWebsite/Home.png", desc: "Dashboard showing user notes overview" },
        { src: "/LotionWebsite/Save.png", desc: "Save note modal with validation" },
        { src: "/LotionWebsite/View.png", desc: "Detailed note view screen" },
      ],
    },
    {
      title: "Tartigrade File Management System (Capstone)",
      description:
        "A collaborative capstone project designed to manage and organize files efficiently for the Tardigrade system. Responsible for front-end development, UI design compliance, and assisting team members in bug fixing and code optimization.",
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
      description:
        "A healthcare appointment booking system designed with both initial and final UI prototypes. The project focused on improving user experience, simplifying appointment scheduling, and refining interface usability through iterative design.",
      tags: "UI/UX Design • Prototyping • User Research • Figma",
      images: [
        { src: "/MedicalClinicWebsite/Prototype1.png", desc: "Early wireframe prototype of booking flow" },
        { src: "/MedicalClinicWebsite/Prototype2.png", desc: "Improved UI iteration with layout refinement" },
        { src: "/MedicalClinicWebsite/Final.png", desc: "Final appointment booking interface" },
        { src: "/MedicalClinicWebsite/Final2.png", desc: "Responsive layout adaptation for usability" },
      ],
    },
  ];

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
          alignItems: "flex-start",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          padding: isMobile ? "20px" : "60px",
          zIndex: 2
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            zIndex: 3,
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

          }}
        >
          {/* TITLE */}
          <h1
            style={{
              fontSize: isMobile ? "2rem" : "2.5rem",
              textAlign: isMobile ? "center" : "left",
              marginBottom: "10px",
              color: "#f5f5f5"
            }}
          >
                                                  <FaProjectDiagram color="#5048e5" />
            
            Projects & Experience
          </h1>

          {/* PROJECT LIST */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {projects.map((project, index) => {
              const isActive = activeCard === index;
              const isHovered = hoveredCard === index;

              return (
                <div
                  key={index}
                  onClick={() => toggleCard(index)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    backgroundColor: isActive ? "#f8fff9" : "#fff",
                    borderRadius: "16px",
                    padding: isMobile ? "16px" : "28px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    border: isActive ? "2px solid #1e63f9" : "1px solid #eee",
                    boxShadow: isActive
                      ? "0 16px 30px rgba(30,99,249,0.15)"
                      : isHovered
                      ? "0 10px 22px rgba(0,0,0,0.12)"
                      : "0 6px 16px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* TITLE */}
                  <h2
                    style={{
                      fontSize: isMobile ? "1.4rem" : "2rem",
                      margin: 0,
                      color: isActive || isHovered ? "#1e63f9" : "#222",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {project.title}
                  </h2>

                  {/* EXPAND CONTENT */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden", marginTop: isActive ? 12 : 0 }}
                  >
                    <p
                      style={{
                        fontSize: isMobile ? "0.95rem" : "1rem",
                        color: "#555",
                        lineHeight: 1.6,
                      }}
                    >
                      {project.description}
                    </p>

                    <p style={{ fontSize: "0.9rem", color: "#888", fontStyle: "italic" }}>
                      {project.tags}
                    </p>

                    {/* IMAGES */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                        gap: "14px",
                        marginTop: "12px",
                      }}
                    >
                      {project.images.map((img, i) => (
                        <div
                          key={i}
                          onMouseEnter={() => setHoveredImage(i)}
                          onMouseLeave={() => setHoveredImage(null)}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(img);
                          }}
                          style={{
                            borderRadius: "12px",
                            overflow: "hidden",
                            backgroundColor: "#f2f2f2",
                            boxShadow:
                              hoveredImage === i
                                ? "0 12px 24px rgba(30,99,249,0.2)"
                                : "0 6px 14px rgba(0,0,0,0.08)",
                            transform:
                              hoveredImage === i ? "translateY(-4px)" : "none",
                            transition: "all 0.25s ease",
                          }}
                        >
                          <img
                            src={img.src}
                            alt={img.desc}
                            style={{
                              width: "100%",
                              height: isMobile ? "150px" : "180px",
                              objectFit: "cover",
                            }}
                          />
                          <p
                            style={{
                              fontSize: "0.8rem",
                              padding: "8px",
                              color: "#666",
                              textAlign: "center",
                            }}
                          >
                            {img.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
              padding: "20px",
            }}
          >
            <motion.img
              src={selectedImage.src}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "95%",
                maxHeight: "80vh",
                borderRadius: "10px",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
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