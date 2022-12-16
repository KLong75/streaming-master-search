import React, { useState } from 'react';

import { Box, TextField, MenuItem } from '@mui/material';

const genreOptions = [
  {
    value: '1',
    label: 'Action'
  },
  {
    value: '39',
    label: 'Action & Adventure'
  },
  {
    value: '2',
    label: 'Adventure'
  },
  {
    value: '3',
    label: 'Animation'
  },
  {
    value: '33',
    label: 'Anime'
  },
  {
    value: '31',
    label: 'Biography'
  },
  {
    value: '4',
    label: 'Comedy'
  },
  {
    value: '5',
    label: 'Crime'
  },
  {
    value: '6',
    label: 'Documentary'
  },
  {
    value: '7',
    label: 'Drama'
  },
  {
    value: '8',
    label: 'Family'
  },
  {
    value: '9',
    label: 'Fantasy'
  },
  {
    value: '34',
    label: 'Food'
  },
  {
    value: '28',
    label: 'Game Show'
  },
  {
    value: '10',
    label: 'History'
  },
  {
    value: '11',
    label: 'Horror'
  },
  {
    value: '21',
    label: 'Kids'
  },
  {
    value: '12',
    label: 'Music'
  },
  {
    value: '32',
    label: 'Musical'
  },
  {
    value: '13',
    label: 'Mystery'
  },
  {
    value: '36',
    label: 'Nature'
  },
  {
    value: '22',
    label: 'News'
  },
  {
    value: '23',
    label: 'Reality'
  },
  {
    value: '14',
    label: 'Romance'
  },
  {
    value: '40',
    label: 'Sci-Fi & Fantasy'
  },
  {
    value: '15',
    label: 'Science Fiction'
  },
  {
    value: '25',
    label: 'Soap'
  },
  {
    value: '29',
    label: 'Sports'
  },
  {
    value: '37',
    label: 'Supernatural'
  },
  {
    value: '26',
    label: 'Talk'
  },
  {
    value: '17',
    label: 'Thriller'
  },
  {
    value: '35',
    label: 'Travel'
  },
  {
    value: '38',
    label: 'TV Movie'
  },
  {
    value: '18',
    label: 'War'
  },
  {
    value: '41',
    label: 'War & Politics'
  },
  {
    value: '19',
    label: 'Western'
  },
];

const GenreSearch = () => {

  const [genreSearchResults, setGenreSearchResults] = useState([]);

  const [selectedGenre, setSelectedGenre] = useState('');

  // const handleChange = (event) => {
  //   setSelectedGenre(event.target.value);
  //   console.log(event.target.value);
  //   const selectedGenreCode = event.target.value;
    
  //   fetch('https://api.watchmode.com/v1/list-titles?genres=' + selectedGenreCode + '&limit=10&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp')

  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data)
  //     const titleData = data;
  //     console.log(titleData)
  //     console.log(titleData.titles[0].title)
  //     setGenreSearchResults(titleData)
  //     setSelectedGenre('');
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //   });
  // }


  const handleChange = async (event) => {
    event.preventDefault();
    setSelectedGenre(event.target.value);
    console.log(event.target.value);
    const selectedGenreCode = event.target.value;
    
    try {

    const response = await fetch('https://api.watchmode.com/v1/list-titles?genres=' + selectedGenreCode + '&limit=10&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp')

    if (!response.ok) {
      throw new Error('Something went wrong')
    }

    const { items } = await response.json();
    
    const titleData = items.map((title) => ({
      id: title.id,
      title: title.titleInfo.title,
      type: title.titleInfo.type,
      year: title.titleInfo.year
    }));

    console.log(titleData);

    setGenreSearchResults(titleData);
    setSelectedGenre('');
  } catch (err) {
    console.error(err);
  }
};

  

  



  return (
    <div>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <div>
          <TextField
            id='genre-select'
            select
            size='small'
            label='Select Genre'
            value={selectedGenre}
            onChange={handleChange}
            helperText='Please select a genre'
          >
            {genreOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField> 
        </div>
      </Box>








      <div>
        {genreSearchResults.length
          ? `Viewing ${genreSearchResults.length} results:`
          : 'Select a genre to begin'}

        {genreSearchResults.map((title) => {
          return (
            <div key = {title.id}>
              {title.title}
              {title.type}
              {title.year}


            </div>
          )
        })}
     
    
      </div>
    </div>

);
};
  
export default GenreSearch;


   