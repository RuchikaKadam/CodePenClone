import React, { useState, useEffect } from 'react';
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import { Home, Spinner } from './components';
import { auth, db } from './config/firebase.config';
import { doc, setDoc } from 'firebase/firestore';

const App = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userCred) => {
      if(userCred){
        console.log(userCred?.providerData[0]);
        setDoc(doc(db, "users", userCred?.uid), userCred?.providerData[0]).then(() => {
          //dispatch the action to the redux store
        })
      } else {
        navigate("/home/auth", {replace: true })
      }
      setInterval(() => {
        setIsLoading(false);
      }, 2000)
    })
  
    //clean up the listenerEvent to avoid constant-re-rendering of this code
     return ()=> unsubscribe();
  }, [])
  
  return (
    <>
    {isLoading ? (
      <div className='w-screen h-screen flex items-center justify-center overflow-hidden' >
          <Spinner/>
    </div>
    ) : (
    <div className='w-screen h-screen flex items-start justify-start overflow-hidden'>
        <Routes>
            <Route path="/home/*" element={<Home />} />

            {/* re-route the user completely on the refresh if the route is not matching.
use Navigate from react-router-dom to re-direct the user. 
 */}
            <Route path="*" element={<Navigate to ={"/home"}/>} />
        </Routes>
    </div>)
    }
    </>
  );
}

export default App