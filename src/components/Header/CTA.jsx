import React from 'react'
import CV from "../../cv.pdf"

const CTA = () => {
  return (
    
    <div className='cta'>
        <button href={CV} download className='btn btn-light'><i class="fa-solid fa-file"></i> Download CV</button>
        <button href='#app' className='btn btn-talk'><i class="fa-regular fa-address-book"></i> Let's Talk</button>
    </div>
  )
}

export default CTA