import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { Home } from './components';

const App = () => {
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