import React from 'react';
// import { Link } from 'react-router-dom';


import GenreSearch from '../components/GenreSearch';
import TitleSearch from '../components/TitleSearch';



const SearchPage = () => {

  return (
    <>
    
    <div>Search Page
      <div>
        <GenreSearch />
      </div>
      <div>
        <TitleSearch/>
      </div>
    </div>
   
    </>
  )
  
};

export default SearchPage;