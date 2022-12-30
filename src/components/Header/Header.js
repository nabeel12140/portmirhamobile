import React, { useEffect, useState } from 'react'
import CTA from '../Header/CTA'
import Typed from "react-typed"


const Header = () => {
  
  return (
    <div className='Main__header' id="id">
        <div className='header__container'>
          <h1>Nabeel's PortFolio</h1>
          <Typed className="header__type-tex" 
          strings={["Welcome to my portfolio","I will provide you","Web Design","Web Development","in react"
        ,"mongoDb","python"]}
          typeSpeed={60}
          backSpeed={40}
          loop/>
          <CTA/>
        </div>
    </div>
  )
}

export default Header