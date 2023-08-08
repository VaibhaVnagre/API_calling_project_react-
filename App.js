import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
const [movies, setMovies] = useState([]);
const [isloading, setIsloading] = useState(false);
const [error, setError] = useState(null);



  const fetchmovieHandeler = useCallback(async() => {
    
    setIsloading(true);
    setError(null);

    try{

      const response = await fetch('https://swapi.dev/api/films/')

      if(!response.ok){
        throw new Error('something went wrong');
      }

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
    } catch(error){
       setError(error.message)
    }
    setIsloading(false);
  })

  useEffect(()=>{
    fetchmovieHandeler();
  },[fetchmovieHandeler])

  let content = <p>Found no movies</p>;

  if(isloading){
    content = <p>...Loading</p>;
  }

  if(error){
    content = error;
  }

  if(movies.length>0){
      content = <MoviesList movies={movies} />
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmovieHandeler}>Fetch Movies</button>
      </section>
      <section>
     
     {content}
        
      </section>
    </React.Fragment>
  );
}

export default App;
