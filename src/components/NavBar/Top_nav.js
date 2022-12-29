import React from 'react'

const Top_nav = () => {
  
  const spinnerW=document.querySelector('.spinner-wrapper');
  window.addEventListener('load',()=>{
    spinnerW.style.opacity='0'
setTimeout(()=>{
    spinnerW.style.display='none';
},6000);
});
  return (
    <>
    <div class="spinner-wrapper">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">  
    <a className="navbar-brand" href="#">NabeelCh</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse bg-light" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item  active"> 
          <a className="nav-link" href="#"><i class="fa-solid fa-house-user icon__color"></i> Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" ><i class="fa-solid fa-bars icon__color"></i> About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i class="fa-solid fa-pen-nib icon__color"></i> Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i class="fa-regular fa-user icon__color"></i> Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i class="fa-solid fa-link icon__color"></i> Link</a>
        </li>
      </ul>
    </div>

</nav>
</>
    
  )
}

export default Top_nav