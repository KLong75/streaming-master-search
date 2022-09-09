import React from 'react';
// import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GenreSearch from '../components/GenreSearch';
import TitleSearch from '../components/TitleSearch';
import SavedTitleList from '../components/SavedTitleList';

const HomePage = () => {

  return (
    <>
    <Header></Header>
    <div>Home Page
      <GenreSearch/>
      <TitleSearch/>
      <SavedTitleList/>
    </div>
    <Footer></Footer>
    </>
  )
  
};

export default HomePage;