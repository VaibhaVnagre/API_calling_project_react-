import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
const [movies, setMovies] = useState([]);

  async function fetchmovieHandeler () {

   const response = await fetch('https://swapi.dev/api/films/')

   const data = await response.json();
  
      const transformMovies = data.results.map((moviesData)=>{
        return {
          id : moviesData.episode_id,
          title : moviesData.title,
          openingText : moviesData.opening_crowl,
          releaseDate : moviesData.release_date
        }
      })
      setMovies(transformMovies);
    
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmovieHandeler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
