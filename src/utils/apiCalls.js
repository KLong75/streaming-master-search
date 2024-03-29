// fetch genre categories
export const fetchGenres = () => {
    fetch('https://api.watchmode.com/v1/genres/?apiKey=WIu3mU2xnsXe9BTf7WlTqfAmFnw3uwR5kTG1RtbB')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      
    })
    .catch((err) => {
      console.log(err.message);
    });
}

// fetch sources
export const fetchSources = () => {
    fetch('https://api.watchmode.com/v1/sources/?apiKey=WIu3mU2xnsXe9BTf7WlTqfAmFnw3uwR5kTG1RtbB')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const subSources = data.filter((source => source.type === 'sub'))
      console.log(subSources)
    })
    .catch((err) => {
      console.log(err.message);
    });
    
}



// fetch titles by genre
// export const searchByGenre = (query) => { return fetch(`https://api.watchmode.com/v1/list-titles?genres=${query}&limit=2&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp`);
// }

export const searchByGenre = (query) => { return fetch(`https://api.watchmode.com/v1/list-titles?genres=${query}&limit=2&apiKey=sFxufTNO6mll5jhlTreUc9sdhug5Ct6XfsxBroaO`);
}


// fetch titles by title
export const searchByTitle = (query) => { return fetch(`https://api.watchmode.com/v1/autocomplete-search/?apiKey=sFxufTNO6mll5jhlTreUc9sdhug5Ct6XfsxBroaO&search_value=${query}`);
}

// export const searchByName = (query) => { return fetch(`https://api.watchmode.com/v1/search/?apiKey=WIu3mU2xnsXe9BTf7WlTqfAmFnw3uwR5kTG1RtbB&search_field=name&search_value=${query}`);
// }

export const searchByName = (query) => { return fetch(`https://api.themoviedb.org/3/search/person?query=${query}&api_key=9800abc2c4bf02eb04e906d6de333800&include_adult=false&language=en-US&page=1`);
}

export const searchTitlesByImdbId = (query) => { return fetch(`https://api.watchmode.com/v1/title/${query}/details?apiKey=sFxufTNO6mll5jhlTreUc9sdhug5Ct6XfsxBroaO&append_to_response=sources`);
}



// fetch details by title id
// export const fetchTitleDetails = (query) => { return fetch(`https://api.watchmode.com/v1/title/${query}/details/?append_to_response=sources&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp`);
// } 

export const fetchTitleDetails = (query) => { return fetch(`https://api.watchmode.com/v1/title/${query}/details/?append_to_response=sources&apiKey=sFxufTNO6mll5jhlTreUc9sdhug5Ct6XfsxBroaO`);
} 

// fetch motre title details by IMBD id from TMDB API
export const fetchMoreTitleDetailsMovie = (query) => { return fetch(`https://api.themoviedb.org/3/movie/${query}/credits?api_key=9800abc2c4bf02eb04e906d6de333800&language=en-US`);
} 

export const fetchMoreTitleDetailsTV = (query) => { return fetch(`https://api.themoviedb.org/3/tv/${query}/credits?api_key=9800abc2c4bf02eb04e906d6de333800&language=en-US`);
} 

// fetch top movies
export const fetchTopMoviesPageOne = () => { return fetch ('https://api.themoviedb.org/3/movie/top_rated?api_key=9800abc2c4bf02eb04e906d6de333800&language=en-US&page=1');
}

export const fetchTopMoviesPageTwo = () => { return fetch ('https://api.themoviedb.org/3/movie/top_rated?api_key=9800abc2c4bf02eb04e906d6de333800&language=en-US&page=2');
}

// fetch top people
export const fetchTopPeoplePageOne = () => { return fetch ('https://api.themoviedb.org/3/person/popular?api_key=9800abc2c4bf02eb04e906d6de333800&language=en-US&page=1');
}

export const fetchTopPeoplePageTwo = () => { return fetch ('https://api.themoviedb.org/3/person/popular?api_key=9800abc2c4bf02eb04e906d6de333800&language=en-US&page=2');
}

export const fetchTopPeoplePageThree = () => { return fetch ('https://api.themoviedb.org/3/person/popular?api_key=9800abc2c4bf02eb04e906d6de333800&language=en-US&page=3');
}

export const fetchTopPeoplePageFour = () => { return fetch ('https://api.themoviedb.org/3/person/popular?api_key=9800abc2c4bf02eb04e906d6de333800&language=en-US&page=4');
}

export const fetchTopPeoplePageFive = () => { return fetch ('https://api.themoviedb.org/3/person/popular?api_key=9800abc2c4bf02eb04e906d6de333800&language=en-US&page=5');
}

















// Action
export const fetchActionTitles = () => {
    fetch('https://api.watchmode.com/v1/list-titles?genres=1&limit=10&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
     
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

// Comedy
export const fetchComedyTitles = () => {
  fetch('https://api.watchmode.com/v1/list-titles?genres=4&limit=10&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
     
    })
    .catch((err) => {
      console.log(err.message);
    });
}

export const fetchDocumentaryTitles = () => {
  fetch('https://api.watchmode.com/v1/list-titles?genres=6&limit=10&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
     
    })
    .catch((err) => {
      console.log(err.message);
    });
}

export const fetchDramaTitles = () => {
  fetch('https://api.watchmode.com/v1/list-titles?genres=7&limit=10&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
     
    })
    .catch((err) => {
      console.log(err.message);
    });
}

export const fetchFantasyTitles= () => {
  fetch('https://api.watchmode.com/v1/list-titles?genres=40&limit=10&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp')
    .then((response) => response.json())
    .then((data) => {
    console.log(data)    
    })
    .catch((err) => {
     console.log(err.message);
    });
}
    
export const fetchHistoryTitles= () => {
  fetch('https://api.watchmode.com/v1/list-titles?genres=10&limit=10&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
      console.log(err.message);
    });
}

export const fetchHorrorTitles = () => {
    fetch('https://api.watchmode.com/v1/list-titles?genres=11&limit=10&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
       
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  
export const fetchMusicalTitles = () => {
  fetch('https://api.watchmode.com/v1/list-titles?genres=32&limit=10&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp')
    .then((response) => response.json())
    .then((data) => {
    console.log(data) 
    })
    .catch((err) => {
    console.log(err.message);
    });
}
  
export const fetchMysteryTitles = () => {
  fetch('https://api.watchmode.com/v1/list-titles?genres=13&limit=10&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp')
    .then((response) => response.json())
    .then((data) => {
    console.log(data)    
    })
    .catch((err) => {
    console.log(err.message);
    });
}
      
export const fetchRomanceTitles = () => {
  fetch('https://api.watchmode.com/v1/list-titles?genres=14&limit=10&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err.message);
    });
}

export const fetchScifiTitles = () => {
  fetch('https://api.watchmode.com/v1/list-titles?genres=15&limit=10&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp')
    .then((response) => response.json())
    .then((data) => {
      console.log(data) 
    })
    .catch((err) => {
    console.log(err.message);
    });
}
  
export const fetchThrillerTitles = () => {
  fetch('https://api.watchmode.com/v1/list-titles?genres=17&limit=10&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp')
    .then((response) => response.json())
    .then((data) => {
    console.log(data)   
    })
    .catch((err) => {
    console.log(err.message);
    });
}
  
export const fetchWarTitles = () => {
  fetch('https://api.watchmode.com/v1/list-titles?genres=18&limit=10&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp')
    .then((response) => response.json())
    .then((data) => {
    console.log(data)    
    })
    .catch((err) => {
    console.log(err.message);
    });
}
      
 