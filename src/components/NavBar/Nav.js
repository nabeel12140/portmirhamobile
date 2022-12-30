import React from 'react'
import { useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {AiOutlineCustomerService} from 'react-icons/ai'
import {BiMessageError} from 'react-icons/bi'
const Nav = () => {
  const [activenav,setnav]=useState("#")
  return (
    <nav className='nav__a icon__color'>
       <a href='#' className={activenav==='#' ? 'active': ''} ><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setnav("#")} className={activenav==='#' ? 'active': ''}><BsBook/></a>
      <a href='#experience' onClick={()=>setnav("#")} className={activenav==='#' ? 'active': ''}><AiOutlineUser/></a>
      <a href='#contact' onClick={()=>setnav("#")} className={activenav==='#' ? 'active': ''}><AiOutlineCustomerService/></a>
      <a href='#link' onClick={()=>setnav("#")} className={activenav==='#' ? 'active': ''}><BiMessageError/></a>
    </nav>
  )
}

export default Nav