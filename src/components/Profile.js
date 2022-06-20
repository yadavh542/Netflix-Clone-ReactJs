import React from 'react';
import './Profile.css';
import Nav from './Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { signOut } from "firebase/auth";
import {auth} from './firebase'

function Profile() {
    const user = useSelector(selectUser);

  return (
    <div className='profile'>
        <Nav/>
        <div className="profile__body">
            <h1>Edit Profile</h1>
            <div className="profile__info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                <div className="profile__details">
                    <h2>{user.email}</h2>
                    <div className="profile__plans">
                        <h3>Plans ( Current Plan: )</h3>
                        <h4>Renewal Date:</h4>
                             <div className="profile__allplans">
                                 <div className="planwise">
                                     <h5>Netflix Standard <br/>1080p</h5>
                                     
                                     <button className='subscribe'>Subscribe</button>
                                 </div>
                                 <div className="planwise">
                                 <h5>Netflix Basic <br/> 480p</h5>
                                     
                                     <button className='subscribe'>Subscribe</button>
                                 </div>
                                 <div className="planwise">
                                 <h5>Netflix Premium <br/> 4K+HDR</h5>
                                    
                                     <button className='subscribe'>Subscribe</button>
                                 </div>
                             </div>
                        <button onClick={()=>signOut(auth)} className='profile__signout'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile