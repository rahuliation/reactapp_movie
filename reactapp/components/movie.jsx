import React from 'react'
import MovieList from '../containers/movielist.jsx'

class Movie extends React.Component {

 
   render() {
      return (
      <div>
           <h1>Movie List</h1>
           <MovieList/>
      </div>
      );
   }
};

export default Movie;