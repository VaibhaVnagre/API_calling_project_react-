import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
const [movies, setMovies] = useState([]);

const [isloading, setIsloading] = useState(false);

  async function fetchmovieHandeler () {
    
    setIsloading(true);

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
      setIsloading(false);
    
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmovieHandeler}>Fetch Movies</button>
      </section>
      <section>
        {!isloading && <MoviesList movies={movies} />}
        {isloading && <h1>...isloading</h1>}
      </section>
    </React.Fragment>
  );
}

export default App;
