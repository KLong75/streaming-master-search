import React, {  useState } from 'react';

import { Button, InputLabel, MenuItem, FormControl, Select  } from '@mui/material';

import { 
  fetchActionTitles, 
  fetchComedyTitles, 
  fetchDocumentaryTitles, 
  fetchDramaTitles, 
  fetchFantasyTitles, 
  fetchHistoryTitles,
  fetchHorrorTitles,
  fetchMusicalTitles,
  fetchMysteryTitles,
  fetchRomanceTitles,
  fetchScifiTitles,
  fetchThrillerTitles,
  fetchWarTitles
} from '../../utils/apiCalls';

const GenreSearch = () => {
  const [genreSearchResults, setGenreSearchResults] = useState([]);
  const [formState, setFormState] = useState({
    genre: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  async function fetchGenres() {
    fetch('https://api.watchmode.com/v1/genres/?apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

  async function fetchResults() {
    fetch('https://api.watchmode.com/v1/list-titles?genres=39&limit=10&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setGenreSearchResults(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

  const handleFormSubmit = async (event)=> {
    event.preventDefault();
    fetchResults();
    fetchGenres();
    setFormState({
      genre: ''
    });
    // window.location.assign('/search_results');
  };


  const handleActionBtnClick = async(event)=> {
    event.preventDefault();
    fetchActionTitles();
  }

  const handleComedyBtnClick = async(event)=> {
    event.preventDefault();
    fetchComedyTitles();
  }

  const handleDocBtnClick = async(event)=> {
    event.preventDefault();
    fetchDocumentaryTitles();
  }

  const handleDramaBtnClick = async(event)=> {
    event.preventDefault();
    fetchDramaTitles();
  }

  const handleFantasyBtnClick = async(event)=> {
    event.preventDefault();
    fetchFantasyTitles();
  }

  const handleHistoryBtnClick = async(event)=> {
    event.preventDefault();
    fetchHistoryTitles();
  }

  const handleHorrorBtnClick = async(event)=> {
    event.preventDefault();
    fetchHorrorTitles();
  }

  const handleMusicalBtnClick = async(event)=> {
    event.preventDefault();
    fetchMusicalTitles();
  }

  const handleMysteryBtnClick = async(event)=> {
    event.preventDefault();
    fetchMysteryTitles();
  }

  const handleRomanceBtnClick = async(event)=> {
    event.preventDefault();
    fetchRomanceTitles();
  }

  const handleScifiBtnClick = async(event)=> {
    event.preventDefault();
    fetchScifiTitles();
  }

  const handleThrillerBtnClick = async(event)=> {
    event.preventDefault();
    fetchThrillerTitles();
  }

  const handleWarBtnClick = async(event)=> {
    event.preventDefault();
    fetchWarTitles();
  }

 



  return (
    <>
    <div>
      <form onSubmit={handleFormSubmit}>
      <FormControl sx={{ m: 1, minWidth: 160}} size='small' >
        <InputLabel>Select Genre</InputLabel>
        <Select 
          label='genre'
          value={formState.genre}
          name='genre'
          onChange={handleChange}
        >
          <MenuItem value='1' genre='1'>Action</MenuItem>       
          <MenuItem value='4'>Comedy</MenuItem>
          <MenuItem value='6'>Documentary</MenuItem>
          <MenuItem value='7'>Drama</MenuItem>
          <MenuItem value='40'>Fantasy</MenuItem>
          <MenuItem value='10'>History</MenuItem>
          <MenuItem value='11'>Horror</MenuItem>
          <MenuItem value='32'>Musical</MenuItem>
          <MenuItem value='13'>Mystery</MenuItem>
          <MenuItem value='14'>Romance</MenuItem>
          <MenuItem value='15'>Science Fiction</MenuItem>
          <MenuItem value='17'>Thriller</MenuItem>
          <MenuItem value='18'>War</MenuItem>
        </Select>           
      </FormControl>
      <Button variant='contained' type='submit'>Submit</Button>
      </form>
      </div>
      <div>
        <form onSubmit={handleActionBtnClick}>
          <Button variant='contained' type='submit'>Action</Button>
        </form>
        <form onSubmit={handleComedyBtnClick}>
          <Button variant='contained' type='submit'>Comedy</Button>
        </form>
        <form onSubmit={handleDocBtnClick}>
          <Button variant='contained' type='submit'>Documentary</Button>
        </form>
        <form onSubmit={handleDramaBtnClick}>
          <Button variant='contained' type='submit'>Drama</Button>
        </form>
        <form onSubmit={handleFantasyBtnClick}>
          <Button variant='contained' type='submit'>Fantasy</Button>
        </form>
        <form onSubmit={handleHistoryBtnClick}>
          <Button variant='contained' type='submit'>History</Button>
        </form>
        <form onSubmit={handleHorrorBtnClick}>
          <Button variant='contained' type='submit'>Horror</Button>
        </form>
        <form onSubmit={handleMusicalBtnClick}>
          <Button variant='contained' type='submit'>Musical</Button>
        </form>
        <form onSubmit={handleMysteryBtnClick}>
          <Button variant='contained' type='submit'>Mystery</Button>
        </form>
        <form onSubmit={handleRomanceBtnClick}>
          <Button variant='contained' type='submit'>Romance</Button>
        </form>
        <form onSubmit={handleScifiBtnClick}>
          <Button variant='contained' type='submit'>Science Fiction</Button>
        </form>
        <form onSubmit={handleThrillerBtnClick}>
          <Button variant='contained' type='submit'>Thriller</Button>
        </form>
        <form onSubmit={handleWarBtnClick}>
          <Button variant='contained' type='submit'>War</Button>
        </form>

      </div>
      </>
    );
};
  
export default GenreSearch;