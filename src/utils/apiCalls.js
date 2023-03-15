// fetch genre categories
export const fetchGenres = () => {
    fetch('https://api.watchmode.com/v1/genres/?apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

// fetch titles by genre
export const searchByGenre = (query) => {
  return fetch(`https://api.watchmode.com/v1/list-titles?genres=${query}&limit=10&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp`);
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
      
 