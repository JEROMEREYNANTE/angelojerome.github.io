// components/Navbar/NavbarElements.js


import styled from "styled-components";

export const Dock = styled.div`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 12px 18px;

  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(18px);

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.25),
    inset 0 1px rgba(255, 255, 255, 0.1);

  z-index: 1000;
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