import React, { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners/ClipLoader';
import './App.css';
import Nav from './components/NavBar/Nav';
import Header from './components/Header/Header';
import Certificate from './components/Experience/Certidicate';
import Top_nav from './components/NavBar/Top_nav';
import Particles from "react-tsparticles";
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './footer/Footer';

function App() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
      setLoading(true)
      setTimeout(() => {
          setLoading(false)
      }, 8000);
  },[])
  return (
    <div>
      {/* {
    loading ?
    <ClipLoader
    size={150}
    color={"#123abc"}
    loading={loading}
    />
     : */}
     <>
      <Top_nav/>
      <Nav/>
      <Header/>
      <Certificate/>
      <About/>
      <Contact/>
      <Footer/>
      </>
{/* } */}
    </div>
  );
}

export default App;
