import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GlobalStyles from "./styles/global";

import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <GlobalStyles />
    </>
  )
}

export default App
