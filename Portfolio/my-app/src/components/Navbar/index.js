// components/Navbar/Index.js

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
    FaLaptopCode,
    FaUserGraduate,
    FaCode,
    FaProjectDiagram,
    FaBriefcase,
} from "react-icons/fa";

import { Dock, DockIcon } from "./NavbarElements";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const items = [
        {
            icon: <FaLaptopCode />,
            label: "Home",
            path: "/",
        },
        {
            icon: <FaUserGraduate />,
            label: "About",
            path: "/about",
        },
        {
            icon: <FaCode />,
            label: "Skills",
            path: "/skills",
        },
        {
            icon: <FaProjectDiagram />,
            label: "Projects",
            path: "/projects",
        },
        {
            icon: <FaBriefcase />,
            label: "Contact",
            path: "/contact",
        },
    ];

    return (
        <Dock>
            {items.map((item) => (
                <DockIcon
                    key={item.path}
                    active={location.pathname === item.path}
                    title={item.label}
                    onClick={() => navigate(item.path)}
                >
                    {item.icon}
                </DockIcon>
            ))}
        </Dock>
    );
};

export default Navbar;