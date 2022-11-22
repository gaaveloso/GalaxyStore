import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import GlobalStyled from './GlobalStyled';

function App() {

  return (
    <>
      <Header/>
      <Main />
      <Footer/>
      <GlobalStyled/>
    </>
  );
}

export default App;