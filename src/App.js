import { ThemeProvider } from '@emotion/react';
import './App.css';
import styled from '@emotion/styled/macro';
// import { darkTheme } from './utils/Theme';
import NavBar from './components/NavBar';
import Hero from './components/HeroSection';
import Expertise from './components/Expertise';
import Education from './components/Education';
import { BrowserRouter as Route} from 'react-router-dom';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
  linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

const theme = {
  primary: '#3498db',  // Example primary color (blue)
  white: '#fff',       // White color for the hover text
  text_primary: '#333', // Dark text color
  card_light: '#D3D3D3' // Beige/light background color for the navbar
};

function App() {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <Route>
      <NavBar/>
      <Body>
        <Hero />
        <Wrapper>
          <Expertise/>
          <Education/>
        </Wrapper>
      </Body>
      </Route>
    </ThemeProvider>
  );
}

export default App;
