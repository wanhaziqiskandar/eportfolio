import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import { DiCssdeck } from 'react-icons/di';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
// import { useTheme } from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

// const theme = {
//     primary: '#3498db',  // Example primary color (blue)
//     white: '#fff',       // White color for the hover text
//     text_primary: '#333', // Dark text color
//     card_light: '#D3D3D3' // Beige/light background color for the navbar
//   };

export const Nav = styled.div`
    background-color: white;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.8s all ease;
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  width: 80%;    
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
      padding: 0;
  }
`;


export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }

    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

export const GitHubButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 640px) {
    padding: 10px 16px;
    font-size: 16px;
  }
`;

export const GitHubIcon = styled(FaGithub)`
  font-size: 22px;
  color: ${({ theme }) => theme.white}; 
  transition: color 0.3s ease-in-out;

  ${GitHubButton}:hover & {
    color: ${({ theme }) => theme.accent}; /* Change icon color on hover */
  }

  margin-right: 8px; /* Space between icon and text */
`;



export const ButtonContainer = styled.div`
    width: 80%;  
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 6px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: rgba(211, 211, 211, 0.99); /* Correct way to add transparency */
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;


export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export  const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

// Sidebar-specific styled components

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 250px;
  height: 100%;
  background: #D3D3D3; // Set a solid background color
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; // Toggle sidebar visibility
  transition: 0.3s ease-in-out;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2); // Optional shadow
`;

export const SidebarCloseIcon = styled(FaTimes)`
  color: ${({ theme }) => theme.text_primary};
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  gap: 32px;
  text-align: center;
`;

export const SidebarLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const SidebarButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

// NavBar component

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    return (
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            <DiCssdeck size="3rem" />
            <Span>Portfolio</Span>
          </NavLogo>
          <MobileIcon onClick={() => setIsOpen(true)}>
            <FaBars />
          </MobileIcon>
          <NavItems>
            <NavLink href='#about'>About</NavLink>
            <NavLink href='#expertise'>Expertise</NavLink>
            <NavLink href='#experience'>Experience</NavLink>
            <NavLink href='#projects'>Projects</NavLink>
            <NavLink href='#education'>Education</NavLink>
          </NavItems>
          <ButtonContainer>
            <GitHubButton href={Bio.github} target="_blank">
              <GitHubIcon />
              Github Profile
            </GitHubButton>
          </ButtonContainer>
  
          {/* Sidebar */}
          <SidebarContainer isOpen={isOpen}>
            <SidebarCloseIcon onClick={() => setIsOpen(false)} />
            <SidebarMenu>
              <SidebarLink to="#about" onClick={() => setIsOpen(false)}>About</SidebarLink>
              <SidebarLink to="#expertise" onClick={() => setIsOpen(false)}>Skills</SidebarLink>
              <SidebarLink to="#experience" onClick={() => setIsOpen(false)}>Experience</SidebarLink>
              <SidebarLink to="#projects" onClick={() => setIsOpen(false)}>Projects</SidebarLink>
              <SidebarLink to="#education" onClick={() => setIsOpen(false)}>Education</SidebarLink>
            </SidebarMenu>
            <SidebarButton href={Bio.github} target="_blank">
              Github Profile
            </SidebarButton>
          </SidebarContainer>
        </NavContainer>
      </Nav>
    );
  };
  
  export default NavBar;