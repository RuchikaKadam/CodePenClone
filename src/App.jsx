import React, { useEffect } from 'react';
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import { Home } from './components';
import { auth } from './config/firebase.config';

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userCred) => {
      if(userCred){
        console.log(userCred?.providerData[0].email);
      } else {
        navigate("/home/auth", {replace: true})
      }
    })
  
  }, [])
  
  return (
    <div className='w-screen h-screen flex items-start justify-start overflow-hidden'>
        <Routes>
            <Route path="/home/*" element={<Home />} />

            {/* re-route the user completely on the refresh if the route is not matching.
use Navigate from react-router-dom to re-direct the user. 
 */}
            <Route path="*" element={<Navigate to ={"/home"}/>} />
        </Routes>
    </div>
  );
}

export default App