// components/Navbar/Index.js

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavItem } from "./NavbarElements.js"
import { useEffect } from "react";

import {
    Nav,
    NavLink,
    NavFade,
    Bars,
    NavMenu,
    MobileMenu,
    MobileNavLink
} from "./NavbarElements";

import {
  FaLaptopCode,
  FaUserGraduate,
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
} from "react-icons/fa";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // run initially
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    
const Wrapper = isMobile ? Nav : NavFade;

    return (
        <Wrapper>
            {/* Hamburger */}
            <Bars onClick={() => setIsOpen(!isOpen)} />

            {/* Desktop Menu */}
            <NavMenu>
<NavLink to="/" end>
  <NavItem>
    <FaLaptopCode color="#000000" />
    Home
  </NavItem>
</NavLink>
                <NavLink to="/about">
                  <NavItem>
                  <FaUserGraduate color="#000000" />
                    About
                      </NavItem>
                </NavLink>
                <NavLink to="/skills">
                                  <NavItem>                    <FaCode color="#000000" size={32}/>  
                    Skills</NavItem>

                </NavLink>
                <NavLink to="/projects">
                <NavItem>                  <FaProjectDiagram color="#000000" />
                    Projects & Experience</NavItem>

                </NavLink>
                <NavLink to="/contact">
                <NavItem>                  <FaBriefcase color="#000000" />
                    Contact</NavItem>

                </NavLink>
            </NavMenu>

            {/* Mobile Menu */}
<AnimatePresence>
    {isOpen && (
        <MobileMenu
            as={motion.div}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
        >
            
                    <MobileNavLink to="/" onClick={closeMenu}>
                    <NavItem>                                      <FaLaptopCode color="#000000" />

                        Home</NavItem>

                    </MobileNavLink>
                    <MobileNavLink to="/about" onClick={closeMenu}>
                    <NavItem>                                    <FaUserGraduate color="#000000" />

                        About</NavItem>
  
                    </MobileNavLink>
                    <MobileNavLink to="/skills" onClick={closeMenu}>
                    <NavItem>                                        <FaCode color="#000000" size={32}/>  

                        Skills</NavItem>

                    </MobileNavLink>
                    <MobileNavLink to="/projects" onClick={closeMenu}>
                    <NavItem>                                      <FaProjectDiagram color="#000000" />

                        Projects & Experience</NavItem>

                    </MobileNavLink>
                    <MobileNavLink to="/contact" onClick={closeMenu}>
                    <NavItem>                                      <FaBriefcase color="#000000" />

                        Contact</NavItem>

                    </MobileNavLink>
        </MobileMenu>
    )}
</AnimatePresence>

        </Wrapper>
    );
};

export default Navbar;