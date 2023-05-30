import React from 'react';
// import { Link } from 'react-router-dom';


import GenreSearch from '../components/GenreSearch';
import TitleSearch from '../components/TitleSearch';
import SavedTitleList from '../components/SavedTitleList';

const HomePage = () => {

  return (
    <>
    
    <div>Home Page
      <GenreSearch/>
      <TitleSearch/>
      <SavedTitleList/>
    </div>
    
    </>
  )
  
};

export default HomePage;