import React,{useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
const About = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  return (
    <div className='exp__main padding'>
      <h1 className='text-center padding'>Experience</h1>
        <div className='exp'>
          <div className='exp__text' >
            
              <div className='kk padding'data-aos="fade-left">
                <h2 className='icon__color'>Skills</h2>
                <ul data-aos="fade-left">
                  <li>Web Development :
                    <div class="progress">
                        <div class="progress-bar-striped progress-bar-animated progress-bar w-75 bg-danger" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div></li>
                  <li>Andriod Development :
                  <div class="progress">
                        <div class="progress-bar-striped progress-bar-animated progress-bar w-25 bg-danger" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="50">25%</div>
                    </div>
                  </li>
                  <li>Machine Learning :
                  <div class="progress">
                        <div class="progress-bar-striped progress-bar-animated progress-bar w-50 bg-danger" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">55%</div>
                    </div>
                  </li>
                  <li>Paython :<div class="progress">
                        <div class="progress-bar-striped progress-bar-animated progress-bar w-75 bg-danger" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div></li>
                  <li>Java :<div class="progress">
                        <div class="progress-bar-striped progress-bar-animated progress-bar w-50 bg-danger" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="200">50%</div>
                    </div></li>
                </ul>
              </div>

            
              <div className='jj padding'data-aos="fade-left">
                <h2 className="icon__color">Working Experience</h2>
                <div className='exp__nust padding'data-aos="fade-left">
                  <h5><i class="fa-solid fa-briefcase"></i> Internships</h5>
                  <ul>
                    <li><b className='icon__color'>Artificial Intelligence</b> Three month Internship from <small>Nust Nstp</small> </li>
                    <li><b className='icon__color'>Call Center</b> 5+ Month as an Crs agent and as Team lead</li>
                  </ul>
                  <h5><i class="fa-solid fa-car"></i> Fiverr</h5>
                  <ul>
                    <li><b className='icon__color'>Project Made</b> 4 month Experience as a <small>Free-lancer</small> </li>
                    <li><b className='icon__color'>Project Team</b> Good understanding with team mate</li>
                    <li><b className='icon__color'>Customers</b> %/5 rating from my customers</li>
                  </ul>
                </div>

              </div>
              <div className='mm padding'data-aos="fade-left">
              <h2 className="icon__color">Language</h2>
              <ul>
                <li>English</li>
                <li>German</li>
                <li>Urdu</li>
                <li>Punjabi</li>
              </ul>
              <h2 className="icon__color">Sports</h2>
              <ul>
                <li>GYM Freak</li>
                <li>Cricket</li>
                <li>Footballs</li>
                <li>Ches</li>
                
              </ul>
              </div>
          </div>
          <div className='exp__card__column padding'data-aos="zoom-in">
            <div className='exp__img'>
              <p><h2 className='icon__color'>LETS EXPERIENCE<br/></h2><small>My Name is jesus And I work For God</small></p>
            </div>
            <div className='Social__icons padding icon__color' >
              <ul data-aos="fade-left">
                <li><i class="fa-brands fa-github"></i></li>
                <li><i class="fa-brands fa-linkedin"></i></li>
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-free-code-camp"></i></li>
              </ul>
            </div>
            
          </div>
        </div>
        
    </div>
  )
}

export default About