import React from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/auth/register';
import Login from './Pages/auth/login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/sign-up' element={<Register />} />
        <Route path='/sing-in' element={<Login />} />
        <Route path='/' element={<Login />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
