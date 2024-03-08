import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Skills from './pages/Skills';
import History from './pages/History';
import Footer from './components/Footer';
import Practice from './pages/Practice';
import Project from './pages/Project';


const GlobalStyle = createGlobalStyle`

  ${reset}

  body {
    background: #e9ecef;
    box-sizing: border-box;
  }
  
  * {
  box-sizing: inherit;
  }
`;

  /* @media screen and (max-width: 1055px) {
    width: 100%;
  }
  @media screen and (max-width: 1440px) {
    width: 1024px;
  }
  @media screen and (max-width: 1728px) {
    width: 1376px;
  } */


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<History />}/>
        <Route path='/skills' element={<Skills />} />
        <Route path='/project' element={<Project />} />
        <Route path='/practice' element={<Practice />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
