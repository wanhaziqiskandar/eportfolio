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
import Footer from './components/Footer';
import { darkTheme, lightTheme } from './utils/Theme'; // Import themes

// Styled components
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary}; // Set text color based on theme
  width: 100%;
  height: 100%;
  overflow-x: hidden;
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

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div>
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <NavBar />
        <Body>
          <ToggleButton onClick={toggleTheme}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </ToggleButton>
          <Hero />
            <Expertise />
            <br />
            <Experience />
            <br />
            <Projects />
            <Education />
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
    </div>
  );
};

export default App;
