import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import './App.css';
import styled from '@emotion/styled/macro';
import NavBar from './components/NavBar';
import Hero from './components/HeroSection';
import Expertise from './components/Expertise';
import Education from './components/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/Experience';
import Projects from './components/Projects';

// Define light and dark themes
const lightTheme = {
  primary: '#3498db',  // Blue
  white: '#fff',       // White
  text_primary: '#333', // Dark text
  card_light: '#D3D3D3', // Light background
  bg: '#fff'           // Background color for light mode
};

const darkTheme = {
  primary: '#2980b9',  // Darker blue
  white: '#eee',       // Light text
  text_primary: '#f0f0f0', // Light text
  card_light: '#2c3e50', // Darker background
  bg: '#1c1c1c'        // Background color for dark mode
};

// Styled components
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
              linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  z-index: 1000;  // Ensure it's on top of other elements
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    filter: brightness(0.9);
  }
`;

// const theme = lightTheme; // Default theme

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <NavBar />
        <Body>
          <ToggleButton onClick={toggleTheme}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </ToggleButton>
          <Hero />
          <Wrapper>
            <Expertise />
            <br />
            <Experience />
            <br />
            <Projects />
            <Education />
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
};

export default App;
