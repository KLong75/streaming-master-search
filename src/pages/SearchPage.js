import React from 'react';
// import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GenreSearch from '../components/GenreSearch';
import TitleSearch from '../components/TitleSearch';



const SearchPage = () => {

  return (
    <>
    <Header/>
    <div>Search Page
      <GenreSearch></GenreSearch>
      <TitleSearch></TitleSearch>
    </div>
    <Footer/>
    </>
  )
  
};

export default SearchPage;