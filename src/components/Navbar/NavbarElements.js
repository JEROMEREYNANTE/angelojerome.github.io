// components/Navbar/NavbarElements.js


import styled from "styled-components";

export const Dock = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;

    display: flex;
    gap: 12px;
    padding: 10px 14px;

    border-radius: 12px;
    z-index: 1000;
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.3);
`;

export const DockIcon = styled.button`
  width: 52px;
  height: 52px;

  border: none;
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  font-size: 1.4rem;

  color: ${({ active }) => (active ? "#60a5fa" : "#ffffff")};

  background: ${({ active }) =>
    active
      ? "rgba(96, 165, 250, 0.18)"
      : "rgba(255,255,255,0.05)"};

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-8px) scale(1.15);
    background: rgba(255, 255, 255, 0.15);
  }

  &:active {
    transform: translateY(-4px) scale(1.05);
  }

  svg {
    pointer-events: none;
  }
`;