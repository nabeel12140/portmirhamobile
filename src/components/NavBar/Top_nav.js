import React,{useState} from 'react'
import { Link } from 'react-router-dom';
const Top_nav = () => {
  const [activenav,setnav]=useState("#")
    
  return (
    <>
     
        <nav className="navbar navbar-expand-lg navbar-light bg-dark border-bottom" id='top'>
          
    <a className="navbar-brand" href="#">NabeelCh</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse bg-light" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item  active"> 
          <a className="nav-link" href='#top'><i class="fa-solid fa-house-user icon__color"></i> Home</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#about"  ><i class="fa-solid fa-bars icon__color"></i> About</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#experience"><i class="fa-solid fa-pen-nib icon__color"></i> Experience</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#contact"><i class="fa-regular fa-user icon__color"></i> Contact</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#link"><i class="fa-solid fa-link icon__color"></i> Link</a>
        </li>
      </ul>
    </div>

</nav>
</>
    
  )
}

export default Top_nav