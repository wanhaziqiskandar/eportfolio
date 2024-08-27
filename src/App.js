import { ThemeProvider } from '@emotion/react';
import './App.css';
import styled from '@emotion/styled/macro';
// import { darkTheme } from './utils/Theme';
import NavBar from './components/NavBar';
import Hero from './components/HeroSection';
import Expertise from './components/Expertise';
import Education from './components/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/Experience';
import Projects from './components/Projects';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg || '#fff'}; // Default to white if theme.bg is not defined
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: ${({ theme }) => theme.bg}; // Use theme.bg if you want to use the same background color as Body
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

const theme = {
  primary: '#3498db',  // Example primary color (blue)
  white: '#fff',       // White color for the hover text
  text_primary: '#333', // Dark text color
  card_light: '#D3D3D3', // Beige/light background color for the navbar
  bg: '#fff'           // Background color set to white
};

function App() {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Body>
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
}

export default App;
