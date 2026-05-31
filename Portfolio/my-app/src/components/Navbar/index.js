// components/Navbar/Index.js

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    MobileMenu,
    MobileNavLink
} from "./NavbarElements";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    

    return (
        <Nav>
            {/* Hamburger */}
            <Bars onClick={() => setIsOpen(!isOpen)} />

            {/* Desktop Menu */}
            <NavMenu>
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/skills">
                    Skills
                </NavLink>
                <NavLink to="/projects">
                    Projects & Experience
                </NavLink>
                <NavLink to="/contact">
                    Contact
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
                        Home
                    </MobileNavLink>
                    <MobileNavLink to="/about" onClick={closeMenu}>
                        About
                    </MobileNavLink>
                    <MobileNavLink to="/skills" onClick={closeMenu}>
                        Skills
                    </MobileNavLink>
                    <MobileNavLink to="/projects" onClick={closeMenu}>
                        Projects & Experience
                    </MobileNavLink>
                    <MobileNavLink to="/contact" onClick={closeMenu}>
                        Contact
                    </MobileNavLink>
        </MobileMenu>
    )}
</AnimatePresence>

        </Nav>
    );
};

export default Navbar;