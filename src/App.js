import React, { useEffect, useState } from 'react'
import './App.css';
import Top_nav from './components/NavBar/Top_nav';
import Nav from './components/NavBar/Nav';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experiences/Experience';
import Contact from './components/contact/Contact';
import Footer from './footer/Footer';
import Script from './components/NavBar/Script';
function App() {
  
  return (
    <>
    <Script/>
    <Top_nav/>
    <Nav/>
    <Header/>
    <About/>
    <Experience/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
