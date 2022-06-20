import React, { useEffect } from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { auth } from './components/firebase';
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { login,logout, selectUser } from './features/userSlice';
import Profile from './components/Profile';

function App() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
          if (userAuth) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
          dispatch(login({
              uid:userAuth.uid,
              email:userAuth.email,
          }))
          } else {
            // User is signed out
            dispatch(logout())
          }
        });
        return unsubscribe;
  },[dispatch]);

  return (
    <div className='app'>
      
    <BrowserRouter>

    {!user?(<Login/>):
    (
      <Routes>

      <Route path="/" element={<HomeScreen/>}/> 
      <Route path='/profile' element={<Profile/>}/>

    </Routes>
    )}
    
    </BrowserRouter>

    </div>
  );
}

export default App;
