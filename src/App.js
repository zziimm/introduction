import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Header from './pages/Header';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Skills from './components/Skills';


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
        <Route path='/' element={<MainPage />}/>
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
