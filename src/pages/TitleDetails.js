import React, { useEffect, useState } from 'react';
import { fetchMoreTitleDetailsMovie, fetchTitleDetails } from '../utils/apiCalls';

import Button from '@mui/material/Button';


const TitleDetails = () => {

  const [selectedTitle, setSelectedTitle] = useState('');

  const [selectedTitleDetails, setSelectedTitleDetails] = useState({});

  const [similarTitlesDetails, setSimilarTitlesDetails] = useState([]);

  // const [similarTitlesDetails, setSimilarTitlesDetails] = useState([]);

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

  useEffect(() => {

    const getMoreDetailsMovie = async () => {
  
      const imdbId = selectedTitleDetails.imdb_id;
      console.log(imdbId);
  
      try {
        const response = await fetchMoreTitleDetailsMovie(imdbId);
        console.log(response);
  
        if (!response.ok) {
          throw new Error('Something went wrong')
        }
  
        const moreDetails = await response.json();
  
        console.log(moreDetails)
  
      } catch (err) {
        console.error(err);
      }
    };

    // const getMoreDetailsTV = async () => {
  
    //   const imdbId = selectedTitleDetails.imdb_id;
    //   console.log(imdbId);
  
    //   try {
    //     const response = await fetchMoreTitleDetailsTV(imdbId);
    //     console.log(response);
  
    //     if (!response.ok) {
    //       throw new Error('Something went wrong')
    //     }
  
    //     const moreDetails = await response.json();
  
    //     console.log(moreDetails)
  
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };

    if (selectedTitleDetails.imdb_id && selectedTitleDetails.type === 'movie') {
      getMoreDetailsMovie();
    }

    // if (selectedTitleDetails.imdb_id && selectedTitleDetails.type === 'tv_series') {
    //   getMoreDetailsTV();
    // }
  }, [selectedTitleDetails]);

  useEffect(() => {

    // const getSimilarTitleOne = async () => {

    //   if (!selectedTitleDetails.similar_titles || selectedTitleDetails.similar_titles.length === 0) {
    //     return; // Don't proceed if there are no similar titles
    //   }


    //   console.log( selectedTitleDetails )
    //   const similarTitleOneId = selectedTitleDetails.similar_titles[0];
    //   console.log(similarTitleOneId);

    //   try {
      
    //     const response = await fetchTitleDetails(similarTitleOneId);
      
      
    //     if (!response.ok) {
    //       throw new Error('Something went wrong')
    //     }
      
    //     const  similarTitleOneData  = await response.json();

    //     console.log(similarTitleOneData)

    //     const similarTitleOneDetails = {
    //       id: similarTitleOneData.id,
    //       title: similarTitleOneData.title,
    //       type: similarTitleOneData.type,
    //       poster: similarTitleOneData.poster,
    //       trailer: similarTitleOneData.trailer,
    //     }

    //     console.log(similarTitleOneDetails)

    //   } catch (err) {
    //     console.error(err);
    //   }
    // };
    // getSimilarTitleOne();

    const getSimilarTitles = async () => {
      if (!selectedTitleDetails.similar_titles || selectedTitleDetails.similar_titles.length === 0) {
        return; // Don't proceed if there are no similar titles
      }
    
      const similarTitles = selectedTitleDetails.similar_titles.slice(0, 1); // Get the first three similar titles
      const fetchedSimilarTitles = [];
    
      for (const similarTitleId of similarTitles) {
        try {
          const response = await fetchTitleDetails(similarTitleId);
    
          if (!response.ok) {
            throw new Error('Something went wrong');
          }
    
          const similarTitleData = await response.json();
    
          const similarTitleDetails = {
            id: similarTitleData.id,
            title: similarTitleData.title,
            type: similarTitleData.type,
            plot_overview: similarTitleData.plot_overview,
            poster: similarTitleData.poster,
            trailer: similarTitleData.trailer,
          };

          fetchedSimilarTitles.push(similarTitleDetails);
    
          console.log(similarTitleDetails);
        } catch (err) {
          console.error(err);
        }
      }

      setSimilarTitlesDetails(fetchedSimilarTitles);
    };
    
    getSimilarTitles();
    


    }, [selectedTitleDetails]);


    const handleTitleSelected = async (event) => {
      event.preventDefault();
      setSelectedTitle(event.target.value);
      console.log(event.target.value);
      const selectedTitleId = event.target.value;
      console.log(selectedTitle)
      
      try {
    
      // const response = await fetch('https://api.watchmode.com/v1/list-titles?genres=' + selectedGenreCode + '&limit=2&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp')
    
      const response = await fetchTitleDetails(selectedTitleId);
    
      console.log(fetchTitleDetails(selectedTitleId));
    
      if (!response.ok) {
        throw new Error('Something went wrong')
      }
    
      const  titleDetails  = await response.json();
    
      console.log(titleDetails)
    
      const titleDetailsData = {
        id: titleDetails.id,
        title: titleDetails.title,
        type: titleDetails.type,
        year: titleDetails.year,
        backdrop: titleDetails.backdrop,
        critic_score: titleDetails.critic_score,
        genre_names: titleDetails.genre_names,
        network_names: titleDetails.network_names,
        plot_overview: titleDetails.plot_overview,
        poster: titleDetails.poster,
        release_date: titleDetails.release_date,
        runtime: titleDetails.runtime,
        similar_titles: titleDetails.similar_titles,
        sources: titleDetails.sources,
        trailer: titleDetails.trailer,
        trailer_thumbnail: titleDetails.trailer_thumbnail,
        us_rating: titleDetails.us_rating,
        user_rating: titleDetails.user_rating,
        imdb_id: titleDetails.imdb_id,
      }
      
      
      console.log(titleDetailsData);
    
      setSelectedTitleDetails(titleDetailsData);
      // setSelectedTitle('');
      // window.location.href = '/title_details';
      window.location.href = '/title_details?titleDetails=' + encodeURIComponent(JSON.stringify(titleDetailsData));
    
    
      } catch (err) {
        console.error(err);
      }
    };


  
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
    
   
    {/* <p>{selectedTitleDetails.sources}</p> */}
    <a href={selectedTitleDetails.trailer} target='_blank' rel='noreferrer'><img src={selectedTitleDetails.trailer_thumbnail} alt='trailer thumbnail'/></a>
    
    <p>Rating:{selectedTitleDetails.us_rating}</p>
    <p>User Score: {selectedTitleDetails.user_rating}</p>
    <p>Similar Titles: </p>
    {similarTitlesDetails.map((similarTitle) => (
      <React.Fragment key={similarTitle.id}>
        <p>{similarTitle.title}</p>
        <img src={similarTitle.poster} alt='similar title poster'/>
        <Button value={similarTitle.id} onClick={handleTitleSelected} >Select Title</Button>
      </React.Fragment>
      ))}
    
    </>
  )
  
};

export default TitleDetails;