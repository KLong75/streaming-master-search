import React, { useEffect, useState } from 'react';
import { fetchMoreTitleDetailsMovie, fetchTitleDetails } from '../utils/apiCalls';

import Button from '@mui/material/Button';

// fetchSources();


const TitleDetails = () => {

  const [selectedTitle, setSelectedTitle] = useState('');

  const [selectedTitleDetails, setSelectedTitleDetails] = useState({});

  const [similarTitlesDetails, setSimilarTitlesDetails] = useState([]);

  const [appleTvUrl, setAppleTvUrl] = useState('');

  const [netflixUrl, setNetflixUrl] = useState('');

  const [huluUrl, setHuluUrl] = useState('');

  const [amazonPrimeUrl, setAmazonPrimeUrl] = useState('');

  const [maxUrl, setMaxUrl] = useState('');

  const [disneyPlusUrl, setDisneyPlusUrl] = useState('');

  const [peacockUrl, setPeacockUrl] = useState('');

  const [hayuUrl, setHayuUrl] = useState('');

  const [paramountPlusUrl, setParamountPlusUrl] = useState('');

  const [showtimeUrl, setShowtimeUrl] = useState('');

  const [craveUrl, setCraveUrl] = useState('');

  const [craveStarzUrl, setCraveStarzUrl] = useState('');

  const [stanUrl, setStanUrl] = useState('');

  const [starzUrl, setStarzUrl] = useState('');

  const [foxtelNowUrl, setFoxtelNowUrl] = useState('');

  const [skyGoUrl, setSkyGoUrl] = useState('');

  const [mgmPlusUrl, setMgmPlusUrl] = useState('');

  const [nowTvUrl, setNowTvUrl] = useState('');

  const [bingeUrl, setBingeUrl] = useState('');

  const [britboxUrl, setBritboxUrl] = useState('');

  const [kanopyUrl, setKanopyUrl] = useState('');

  const [huluWithShowtimeUrl, setHuluWithShowtimeUrl] = useState('');

  const [youTubePremiumUrl, setYouTubePremiumUrl] = useState('');

  const [showtimeAmazonPrimeUrl, setShowtimeAmazonPrimeUrl] = useState('');

  const [cbsAllAccessUrl, setCbsAllAccessUrl] = useState('');

  const [notAvailable, setNotAvailable] = useState('');





  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const titleDetailsParam = urlParams.get('titleDetails');

    if (titleDetailsParam) {
      const parsedTitleDetails = JSON.parse(decodeURIComponent(titleDetailsParam));
      setSelectedTitleDetails(parsedTitleDetails);


      const sources = parsedTitleDetails.sources || [];
      console.log(sources)
      const appleTv = sources.filter(source => source.source_id === 371);
      console.log(appleTv)
      const netflix = sources.filter(source => source.source_id === 203);
      const hulu = sources.filter(source => source.source_id === 157);
      const amazonPrime = sources.filter(source => source.source_id === 26);
      const max = sources.filter(source => source.source_id === 387);
      const disneyPlus = sources.filter(source => source.source_id === 372);
      const peacock = sources.filter(source => source.source_id === 389);
      const hayu = sources.filter(source => source.source_id === 392);
      const paramountPlus = sources.filter(source => source.source_id === 444);
      const showtime = sources.filter(source => source.source_id === 248);
      const crave = sources.filter(source => source.source_id === 393);
      const craveStarz = sources.filter(source => source.source_id === 395);
      const stan = sources.filter(source => source.source_id === 425);
      const starz = sources.filter(source => source.source_id === 232);
      const foxtelNow = sources.filter(source => source.source_id === 424);
      const skyGo = sources.filter(source => source.source_id === 408);
      const mgmPlus = sources.filter(source => source.source_id === 108);
      const nowTv = sources.filter(source => source.source_id === 406);
      const binge = sources.filter(source => source.source_id === 423);
      const britbox = sources.filter(source => source.source_id === 419);
      const kanopy = sources.filter(source => source.source_id === 367);
      const huluWithShowtime = sources.filter(source => source.source_id === 159);
      const youTubePremium = sources.filter(source => source.source_id === 368);
      const showtimeAmazonPrime = sources.filter(source => source.source_id === 249);
      const cbsAllAccess = sources.filter(source => source.source_id === 51);

      if (sources.length === 0) {
        const notAvailable = 'Not Available on Subscription Streaming Services';
        setNotAvailable(notAvailable);
      }

      if (appleTv.length >= 1) {
        const appleTvUrl = appleTv[0].web_url;
        setAppleTvUrl(appleTvUrl);
        console.log(appleTvUrl)
      }
      if (netflix.length >= 1) {
        const netflixUrl = netflix[0].web_url;
        setNetflixUrl(netflixUrl);
      }
      if (hulu.length >= 1) {
        const huluUrl = hulu[0].web_url;
        setHuluUrl(huluUrl);
      }
      if (amazonPrime.length >= 1) {
        const amazonPrimeUrl = amazonPrime[0].web_url;
        setAmazonPrimeUrl(amazonPrimeUrl);
      }
      if (max.length >= 1) {
        const maxUrl = max[0].web_url;
        setMaxUrl(maxUrl);
      }
      if (disneyPlus.length >= 1) {
        const disneyPlusUrl = disneyPlus[0].web_url;
        setDisneyPlusUrl(disneyPlusUrl);
      }
      if (peacock.length >= 1) {
        const peacockUrl = peacock[0].web_url;
        setPeacockUrl(peacockUrl);
      }
      if (hayu.length >= 1) {
        const hayuUrl = hayu[0].web_url;
        setHayuUrl(hayuUrl);
      }
      if (paramountPlus.length >= 1) {
        const paramountPlusUrl = paramountPlus[0].web_url;
        setParamountPlusUrl(paramountPlusUrl);
      }
      if (showtime.length >= 1) {
        const showtimeUrl = showtime[0].web_url;
        setShowtimeUrl(showtimeUrl);
      }
      if (crave.length >= 1) {
        const craveUrl = crave[0].web_url;
        setCraveUrl(craveUrl);
      }
      if (craveStarz.length >= 1) {
        const craveStarzUrl = craveStarz[0].web_url;
        setCraveStarzUrl(craveStarzUrl);
      }
      if (stan.length >= 1) {
        const stanUrl = stan[0].web_url;
        setStanUrl(stanUrl);
      }
      if (starz.length >= 1) {
        const starzUrl = starz[0].web_url;
        setStarzUrl(starzUrl);
      }
      if (foxtelNow.length >= 1) {
        const foxtelNowUrl = foxtelNow[0].web_url;
        setFoxtelNowUrl(foxtelNowUrl);
      }
      if (skyGo.length >= 1) {
        const skyGoUrl = skyGo[0].web_url;
        setSkyGoUrl(skyGoUrl);
      }
      if (mgmPlus.length >= 1) {
        const mgmPlusUrl = mgmPlus[0].web_url;
        setMgmPlusUrl(mgmPlusUrl);
      }
      if (nowTv.length >= 1) {
        const nowTvUrl = nowTv[0].web_url;
        setNowTvUrl(nowTvUrl);
      }
      if (binge.length >= 1) {
        const bingeUrl = binge[0].web_url;
        setBingeUrl(bingeUrl);
      }
      if (britbox.length >= 1) {
        const britboxUrl = britbox[0].web_url;
        setBritboxUrl(britboxUrl);
      }
      if (kanopy.length >= 1) {
        const kanopyUrl = kanopy[0].web_url;
        setKanopyUrl(kanopyUrl);
      }
      if (huluWithShowtime.length >= 1) {
        const huluWithShowtimeUrl = huluWithShowtime[0].web_url;
        setHuluWithShowtimeUrl(huluWithShowtimeUrl);
      }
      if (youTubePremium.length >= 1) {
        const youTubePremiumUrl = youTubePremium[0].web_url;
        setYouTubePremiumUrl(youTubePremiumUrl);
      }
      if (showtimeAmazonPrime.length >= 1) {
        const showtimeAmazonPrimeUrl = showtimeAmazonPrime[0].web_url;
        setShowtimeAmazonPrimeUrl(showtimeAmazonPrimeUrl);
      }
      if (cbsAllAccess.length >= 1) {
        const cbsAllAccessUrl = cbsAllAccess[0].web_url;
        setCbsAllAccessUrl(cbsAllAccessUrl);
      }
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
        similar_titles: titleDetails.similar_titles.slice(0, 5),
        sources: titleDetails.sources.filter(source => source.type==='sub'),
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
    <p>Streaming Sources:</p>

    {/* Not Available} */}
    {notAvailable && (
      <span>{notAvailable}</span>
    )}

    {/* Netflix button */}
    {netflixUrl && (
        <Button variant="contained" color="primary" href={netflixUrl} target="_blank" rel="noopener noreferrer">
          Watch on Netflix
        </Button>
    )}

    {/* Amazon Prime button */}
    {amazonPrimeUrl && (
        <Button variant="contained" color="primary" href={amazonPrimeUrl} target="_blank" rel="noopener noreferrer">
          Watch on Amazon Prime
        </Button>
    )}

    {/* Hulu button */}
    {huluUrl && (
      <Button variant="contained" color="primary" href={huluUrl} target="_blank" rel="noopener noreferrer">
        Watch on Hulu
      </Button>
    )}

    {/* Max button */}
    {maxUrl && (
      <Button variant="contained" color="primary" href={maxUrl} target="_blank" rel="noopener noreferrer">
        Watch on Max
      </Button>
    )}

    {/* Disney Plus button */}
    {disneyPlusUrl && (
      <Button variant="contained" color="primary" href={disneyPlusUrl} target="_blank" rel="noopener noreferrer">
        Watch on Disney Plus
      </Button>
    )}

    {/* Apple TV button */}
    {appleTvUrl && (
        <Button variant="contained" color="primary" href={appleTvUrl} target="_blank" rel="noopener noreferrer">
          Watch on Apple TV
        </Button>
    )}

    {/* Peacock Button */}
    {peacockUrl && (
      <Button variant='contained' color="primary" href={peacockUrl} target="_blank" rel="noopener noreferrer">
        Watch on Peacock
      </Button>
    )}

    {/* Hayu Button */}
    {hayuUrl && (
      <Button variant='contained' color="primary" href={hayuUrl} target="_blank" rel="noopener noreferrer">
        Watch on Hayu
      </Button>
    )}

    {/* Paramount Plus Button */}
    {paramountPlusUrl && (
      <Button variant='contained' color="primary" href={paramountPlusUrl} target="_blank" rel="noopener noreferrer">
        Watch on Paramount Plus
      </Button>
    )}

    {/* Showtime Button */}
    {showtimeUrl && (
      <Button variant='contained' color="primary" href={showtimeUrl} target="_blank" rel="noopener noreferrer">
        Watch on Showtime
      </Button>
    )}

    {/* Crave Button */}
    {craveUrl && (
      <Button variant='contained' color='primary' href={craveUrl} target='_blank' rel='noopener noreferrer'>
        Watch on Crave
      </Button>
    )}

    {/* Crave Starz Button */}
    {craveStarzUrl && (
      <Button variant='contained' color='primary' href={craveStarzUrl} target='_blank' rel='noopener noreferrer'>
        Watch on Crave Starz
      </Button>
    )}

    {/* Stan Button */}
    {stanUrl && (
      <Button variant='contained' color='primary' href={stanUrl} target='_blank' rel='noopener noreferrer'>
        Watch on Stan
      </Button>
    )}

    {/* Starz Button */}
    {starzUrl && (
      <Button variant='contained' color='primary' href={starzUrl} target='_blank' rel='noopener noreferrer'>
        Watch on Starz
      </Button>
    )}

    {/* Foxtel Now Button */}
    {foxtelNowUrl && (
      <Button variant='contained' color='primary' href={foxtelNowUrl} target='_blank' rel='noopener noreferrer'>
        Watch on Foxtel Now
      </Button>
    )}

    {/* Sky Go Button */}
    {skyGoUrl && (
      <Button variant='contained' color='primary' href={skyGoUrl} target='_blank' rel='noopener noreferrer'>
        Watch on Sky Go
      </Button>
    )}

    {/*MGM Plus Button */}
    {mgmPlusUrl && (
      <Button variant='contained' color='primary' href={mgmPlusUrl} target='_blank' rel='noopener noreferrer'>
        Watch on MGM Plus
      </Button>
    )}

    {/* Now TV Button */}
    {nowTvUrl && (
      <Button variant='contained' color='primary' href={nowTvUrl} target='_blank' rel='noopener noreferrer'>
        Watch on Now TV
      </Button>
    )}

    {/* Binge Button */}
    {bingeUrl && (
      <Button variant='contained' color='primary' href={bingeUrl} target='_blank' rel='noopener noreferrer'>
        Watch on Binge
      </Button>
    )}

    {/* Britbox Button */}
    {britboxUrl && (
      <Button variant='contained' color='primary' href={britboxUrl} target='_blank' rel='noopener noreferrer'>
        Watch on Britbox UK
      </Button>
    )}

    {/* Kanopy Button */}
    {kanopyUrl && (
      <Button variant='contained' color='primary' href={kanopyUrl} target='_blank' rel='noopener noreferrer'>
        Watch on Kanopy
      </Button>
    )}

    {/* Hulu With Showtime Button */}
    {huluWithShowtimeUrl && (
      <Button variant='contained' color='primary' href={huluWithShowtimeUrl} target='_blank' rel='noopener noreferrer'>
        Watch on Hulu With Showtime
      </Button>
    )}

    {/* Youtube Premium Button */}
    {youTubePremiumUrl && (
      <Button variant='contained' color='primary' href={youTubePremiumUrl} target='_blank' rel='noopener noreferrer'>
        Watch on Youtube Premium
      </Button>
    )}

    {/* Showtime via Amazon Prime Button */}
    {showtimeAmazonPrimeUrl && (
      <Button variant='contained' color='primary' href={showtimeAmazonPrimeUrl} target='_blank' rel='noopener noreferrer'>
        Watch on Showtime via Amazon Prime
      </Button>
    )}

    {/* CBS All Access Button */}
    {cbsAllAccessUrl && (
      <Button variant='contained' color='primary' href={cbsAllAccessUrl} target='_blank' rel='noopener noreferrer'>
        Watch on CBS All Access
      </Button>
    )}


    <p>Trailer:</p>
    <a href={selectedTitleDetails.trailer} target='_blank' rel='noreferrer'><img src={selectedTitleDetails.trailer_thumbnail} alt='trailer thumbnail'/></a>
    
    <p>Rating:{selectedTitleDetails.us_rating}</p>
    <p>User Score: {selectedTitleDetails.user_rating}</p>
    <Button value={selectedTitleDetails.id} variant='contained'>Save to Watchlist</Button>
    <p>Similar Titles: </p>
    {similarTitlesDetails.map((similarTitle) => (
      <React.Fragment key={similarTitle.id}>
        <p>{similarTitle.title}</p>
        <img src={similarTitle.poster} alt='similar title poster'/>
        <p>{similarTitle.plot_overview}</p>
        <a href={similarTitle.trailer} target='_blank' rel='noreferrer'>Watch Trailer</a>
        <Button variant='contained' value={similarTitle.id} onClick={handleTitleSelected} >More Details</Button>
        <Button variant='contained' value={similarTitle.id}>Save to Watchlist</Button>
      </React.Fragment>
      ))}
    
    </>
  )
  
};

export default TitleDetails;