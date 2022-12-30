import React from 'react'
const Script = () => {
    
    window.addEventListener('load',()=>{
        document.querySelector('.spinner-wrapper').style.opacity='0'
    setTimeout(()=>{
      document.querySelector('.spinner-wrapper').style.display="none";
    },2000);
});
  return (
    <div class="spinner-wrapper" id="home">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div> 
  )
}

export default Script
