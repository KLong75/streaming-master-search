import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';



const TitleDetails = () => {


  const [selectedTitleDetails, setSelectedTitleDetails] = useState({});

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const titleDetailsParam = urlParams.get('titleDetails');

    if (titleDetailsParam) {
      const parsedTitleDetails = JSON.parse(decodeURIComponent(titleDetailsParam));
      setSelectedTitleDetails(parsedTitleDetails);
    }
  }, []);

  console.log(selectedTitleDetails)




  return (
    <>
    
    <div>Title Details Page</div>
    <h2>Title: {selectedTitleDetails.title}</h2>
    <span>Type: {selectedTitleDetails.type}</span>
    <p>Released in: {selectedTitleDetails.year}</p>
    <img src={selectedTitleDetails.backdrop} alt='show backdrop'/>
    <p>Critic Score: {selectedTitleDetails.critic_score}</p>
    <p>Genres: {selectedTitleDetails.genre_names}</p>
    <p>Network: {selectedTitleDetails.network_names}</p>
    <p>Plot Overview: {selectedTitleDetails.plot_overview}</p>
    <img src={selectedTitleDetails.poster} alt='show poster'/>
    <p>Release Date: {selectedTitleDetails.release_date}</p>
    <p>Runtime: {selectedTitleDetails.runtime}</p>
    <p>Similar Titles: {selectedTitleDetails.similar_titles}</p>
    {/* <p>{selectedTitleDetails.sources}</p> */}
    <a href={selectedTitleDetails.trailer} target='_blank' rel='noreferrer'><img src={selectedTitleDetails.trailer_thumbnail} alt='trailer thumbnail'/></a>
    
    <p>Rating:{selectedTitleDetails.us_rating}</p>
    <p>User Score: {selectedTitleDetails.user_rating}</p>

  
    </>
  )
  
};

export default TitleDetails;