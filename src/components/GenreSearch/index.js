import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const GenreSearch = () => {
  
    return (
      <div>Genre Search
        <FormControl sx={{ m: 1, minWidth: 160}} size='small'>
          <InputLabel>Genre</InputLabel>
            <Select>
              <MenuItem value='1'>Action</MenuItem>
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
            <FormHelperText>Select a Genre</FormHelperText>
        </FormControl>

      </div>
    );
  };
  
  export default GenreSearch;