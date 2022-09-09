import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage = () => {

  return (
    <>
    <Header></Header>
    <div>Landing Page
      <Link to='signup'><button>Sign Up</button></Link>
      <Link to='login'><button>Login</button></Link>
    </div>
    <Footer></Footer>
    </>
  )
  
};

export default LandingPage;