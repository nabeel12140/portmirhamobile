import React from 'react'
import { useState} from 'react';
import "aos/dist/aos.css"
import pic from '../../me3.jpg';
import Axios from 'axios';
const Contact = () => {

  const [user,setuser]=useState("");
  const handle=(e)=>
  {
      setuser({... user,[e.target.name]:e.target.value})
  }
  const sendEmail=async(e)=>{
    e.preventDefault();
    const response=await Axios.post("http://localhost:4000/api/email",user);
    console.log(response.user)
    alert("Email Has been sent")
  }
  return (
    <div className='containe About__containe' id="contact">
      <div className='background-imag'>
        <h1 className='text-center padding'>Contact Me</h1>
        <div className='contact__cards'data-aos="zoom-in">
            <div className='divs'>
                <div className='contact__t padding'>
                <h3 className='text-center icon__color'>
                Talk to Us
                </h3>
                <p >"We'll help you find the right path andn solution for your problem.
                With Our Website you will Be able to identify Error easily
              which may lead you to right path and save your time"</p>
              <div className='contact__img'>
              <img src={pic} alt='i'/><br/>
              <h6>Muhammad Nabeel</h6>
              </div>
              <div className='contact__t_display'>
            <h3 className='icon__color'>Looking for customer support?</h3>
            <h6>
            We’re here to help! Get in touch if you have technical, account, or billing questions.
            </h6>
            <div className='col-md-12 login__points'>
          
        <p className='icon__color'><i className='fa fa-check icon__color'></i> Have a complex company use case?</p>
        <p className='icon__color'><i className='fa fa-check icon__color'></i> Want to heir meh...! for project</p>
        <p className='icon__color'><i className='fa fa-check icon__color'></i> Have any query..!</p>
        </div>
          
          </div>
          
                </div>
            </div>
            <div className='divs'>
            <div className='contact__f'>
            
            <form onSubmit={sendEmail}>
        <label><i class="fa-solid fa-house-user icon__color"></i> Your Email </label>
            <input placeholder='@email.com'
              class="form-control contact__inputs1"
              type='email' name='email' value={user.email} onChange={handle}
            />
            <label><i class="fa-solid fa-house-user icon__color"></i> Company Name</label>
            <input
              class="form-control contact__inputs1"
              type='text' name='name'
            />
            <label><i class="fa-solid fa-house-user icon__color"></i> Company Email</label>
            <input 
              class="form-control contact__inputs1"
              type='email' 
              
            />
            <label><i class="fa-solid fa-house-user icon__color"></i> How can i help?</label>
            <textarea class="form-control contact__textare"> 

            </textarea>
            <button
              type='submit'
              className='conatct__bu btn'
            
            >Send</button>
          </form>
            
        </div>
            </div>
            <div className='kkk divs padding'>
                <p>
                By submitting this form, I confirm that I have read
               and understood the<a href='#'> Privacy</a> Statement.
                </p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Contact