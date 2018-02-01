import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({movies}) => {
  const renderMovies = movies.map(movie =>
    <Link style={{
      background: 'lightblue',
       color: 'black',
        padding: 8,
         marginRight: 10,
         borderRadius: 12,
         textDecoration: 'none'
       }} key={movie.id} to={`/movies/${movie.id}`}>{movie.title}</Link>
  );

  return (
    <div>
      {renderMovies}
    </div>
  );
}

export default MoviesList;
