import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import './Login.css';


import backgroundImage from '../../assets/backgroun.jpg';

function Login() {
  return (
    <div>
      <Navbar />
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Logo />
      </div>
      <Footer />
    </div>
  );
}

export default Login;