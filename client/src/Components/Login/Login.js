import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import './Login.css';
import Login1 from "../components/Login";



function Login() {
  return (
    <div>
      <Navbar />
<<<<<<< HEAD
   
      
      <Logo/>
      
=======
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className='login-box-container'>
          <div className='login-box'>
            <Login1 />
          </div>
        </div>
      </div>
>>>>>>> 20cb7624cde8666436642dd25cc771c9945037bb
      <Footer />
    </div>
  );
}

export default Login;
