// components/Navbar/NavbarElements.js


import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
export const Nav = styled.nav`
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.25);
`;

export const NavLink = styled(Link)`
    color: #f5f5f5;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.6rem 1rem;
    margin: 0 0.3rem;
    border-radius: 999px;
    transition: all 0.25s ease;
    font-weight: 500;
    position: relative;

    /* smoother hover highlight */
    &:hover {
        background: rgba(255, 255, 255, 0.25);
        transform: translateY(-2px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }

    /* active route */
    &.active {
        background: #ffffff;
        color: #2f2f2f;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #ffffff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 50%;
        right: 1.5rem;
        transform: translateY(-50%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 999px;
    background: #ffffff;
    padding: 10px 20px;
    color: #2f2f2f;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.25s ease;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);

    &:hover {
        background: #f1f1f1;
        transform: translateY(-2px);
    }

    &:active {
        transform: scale(0.96);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    }
`;

export const MobileNavLink = styled(NavLink)`
    padding: 1rem;
    width: 100%;
    text-align: center;
    border-radius: 0;
    transition: all 0.2s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: scale(1.02);
    }

    &:active {
        background: rgba(255, 255, 255, 0.4);
        transform: scale(0.97);
    }
`;

export const MobileMenu = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        background: linear-gradient(135deg, #2563eb, #1d4ed8);
        padding: 1rem 0;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        z-index: 998;
    }
`;