import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import Register from './Pages/auth/register';
import Login from './Pages/auth/login';
import HomePage from './Pages/Layout/home';

// import RoutGuard from './Components/route-guard/route.guard';


function App() {
  // const {isLoggedIn } = useSelector((state)=> state.auth)
  
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/sign-up' element={<Register />} />
        <Route path='/sign-in' element={<Login />} />
        
        <Route  path='/' element={<HomePage />} />
          {/* <Route path='/' element={
          // <RoutGuard>
          isLoggedIn ? (
            <HomePage />
          ): (
            <Navigate to='/sign-in' />
          )
          // </RoutGuard>
            }
          /> */}
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
