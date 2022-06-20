import React, {useEffect, useState} from 'react';
import "./Nav.css";

import {  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


function Nav() {
  const user = useSelector(selectUser);
  const {show, handleShow} = useState(false);
  const navigate = useNavigate();

  let text = user.email;
  const myArray = text.split("@");
  

  const transitionNavBar = () =>{
        if (window.scrollY > 100){
          handleShow(true);
        }else{
          handleShow(false);
        }
  };

  useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    return ()=>window.removeEventListener('scroll',transitionNavBar);
  },[]);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className="nav__contents"> 
        
        
        <img onClick={()=>navigate("/")} className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />

        <div className='nav__avator'> 
        <h3 id='userName'>{myArray[0]}</h3>
        <img onClick={()=>navigate("/profile")}   src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
        </div>

        </div>
    </div>
  )
}

export default Nav