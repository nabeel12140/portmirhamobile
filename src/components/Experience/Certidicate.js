import React ,{useEffect}from 'react'
import pic from '../../me3.jpg';
import Typed from "react-typed"
import AOS from 'aos'
import "aos/dist/aos.css"
const Certificate = () => {
  useEffect(()=>{
    AOS.init({duration:3000});
  },[])
  
  return (
    
    <div className='containe About__containe ' id="about">
      <div className='background-imag'>
      <h1 className='text-center'> About Me</h1>
      <div className=' about__container'data-aos="zoom-in">
        <div className="about__me">
          <div className="about__img">  
            <img src={pic} alt='About img'/>
          </div>
        </div>
        
        <div className="about__content ">
          <div className="about__cards">
            <article className='about__card'>

              <h5 className='icon__color' >Certificate</h5>
              <small>4+ Docs</small>
            </article>
            <article className='about__card'>
             
              <h5 className='icon__color'>Microsoft</h5>
              <small>@ Month</small>
            </article>
            <article className='about__card'>
          
              <h5 className='icon__color'>Experience</h5>
              <small>3+ year working Experibece</small>
            </article>
            
            </div>
            <div className='about__card-long'>
            <div className='about__card-4grid'>
              <div className='about__card-4grid-w'>
              <i class=" fa-solid fa-computer"></i>
              <h6 className="icon__color">
                   Business Stratyegy
              </h6>
              </div>
              <div className='about__card-4grid-t'data-aos="fade-left">
               
                <small >
                  sdkfjlsdnfsjngjdbn kjasd vfjksbd kjdbfjkbasdf jkabsfjkb
                </small>
              </div>
              </div>
              <div className='about__card-4grid'>
              <div className='about__card-4grid-w'>
              <i class="fa-solid fa-business-time"></i>
              <h6 className='icon__color'>
                   Business Marketing
                </h6>
              </div>
              <div className='about__card-4grid-t'data-aos="fade-left">
                
                <small>
                  sdkfjlsdnfsjngjdbn kjasd vfjksbd kjdbfjkbasdf jkabsfjkb
                </small>
              </div>
              </div>
              <div className='about__card-4grid'>
              <div className='about__card-4grid-w'>
              <i class="fa-brands fa-teamspeak"></i>
              <h6 className='icon__color'>
                   Team Mangement
                </h6>
              </div>
              <div className='about__card-4grid-t'data-aos="fade-left">
                <small>
                  sdkfjlsdnfsjngjdbn kjasd vfjksbd kjdbfjkbasdf jkabsfjkb
                </small>
              </div>
              </div>
              <div className='about__card-4grid'>
              <div className='about__card-4grid-w'>
              <i class="fa-regular fa-folder"></i>
              <h6 className='icon__color'>
                   Project Profit
                </h6>
              </div>
              <div className='about__card-4grid-t'data-aos="fade-left">
              
                <small>
                  sdkfjlsdnfsjngjdbn kjasd vfjksbd kjdbfjkbasdf jkabsfjkb
                </small>
              </div>
              </div>
              </div>
              
        </div>
    </div>
  <div className='bg__card_icon padding ' data-aos="fade-left">
    
      <p data-aos="fade-left">I am a software engineer student of 8th semester from National
      University Of Modern Language (NUML) with 3.0 Cgpa. Currently
      looking for a job or a internship.<br/>I would like to explore the bit of Knowledge I posses and try to
      learn as much as possible by putting efforts and being committed
      to my work
      </p>
    
    <div className='card__icon'data-aos="fade-left">
                <div className='small_img'>
                  <div className='about__text-customer'>
                   <h3 className='icon__color'>143</h3>Compiled Project
                  </div>
                  <div className='about__text-customer'>
                  <h3 className='icon__color'>114</h3> Happy Customer
                  </div>
                  <div className='about__text-customer'>
                  <h3 className='icon__color'>5+</h3>Honors & Rewards
                  </div>
                  <div className='about__text-customer'>
                  <h3 className='icon__color'>20+</h3>Assist Projects
                  </div>
                  <div className='about__text-customer'>
                  <h3 className='icon__color'>3</h3>Team Members
                  </div>
                </div>
                <div className='c small_img'>
                    <div className='about__text-customer'>
                     <h3 className='icon__color'>BS Software Engineering</h3>
                    National University Of Modern
                    </div>
                    <div className='about__text-customer'>
                    <h3 className='icon__color'>Certificate's</h3>
                    <ul>
                    <li>Microsoft Word,<small> Excel, Power Point</small></li>
                    <li>C++ <small>3 Month Course</small></li>
                    <li>Java <small>3 Month Course</small></li>
                      
                      
                    </ul>
                  
                    </div>
                    <div className='about__text-customer'>
                     <h3 className='icon__color'>Courses<small> "online" </small></h3>
                    <ul>
                      <li>Machine Learning,<small>Udemy</small> </li>
                      <li>Html,Css,Bootstrap,<small>Udemy</small></li>
                    </ul>
                    
                    </div>
                </div>
                <div className='a small_img'>
                  <div className='about__text-customer'>
                      <h3 className='icon__color'>Projects</h3>
                      <ul>
                        <li><b className='icon__color'>Intelligent IDE:</b><small> Final Year Project<br/>Error solution Website For Biggners <b >Languages:</b>Python,React,Nodes,MongoDb</small></li>
                        <li><b className='icon__color'>Neutral:</b><small> E-Commerece website React,Nodes,MongoDb</small></li>
                        <li><b className='icon__color'>Fortune.com: </b>(replica) <small>Html,css,Bootstrap</small></li>
                      </ul>
                  </div>
                  <div className='about__text-customer'>
                      <h3 className='icon__color'>Awards</h3>
                      <ul>
                        <li><b className='icon__color'>Final year project:</b><small> 3rd position team-lead</small></li>
                        <li><b className='icon__color'>Programing Competition Senior Category:</b><small> Runner Up</small></li>
                      </ul>
                  </div>
                </div>
      </div>
    </div>
    <div className='pp'></div>
  </div>
  
 </div>
 
  )
}

export default Certificate