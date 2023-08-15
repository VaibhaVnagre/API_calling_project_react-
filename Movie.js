import React, { Fragment } from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
   
function onDeleted(){
     props.onDel(props.id)
}

 
  return (
    <Fragment>
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
    
<button onClick={onDeleted}>Delete-Movie</button>

    </Fragment>
    
  );
};

export default Movie;
