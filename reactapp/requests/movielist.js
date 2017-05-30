import {store} from '../store';
import Axios from 'axios';

export const movie_list=function () {
 
  Axios.get('https://raw.githubusercontent.com/hjorturlarsen/IMDB-top-100/master/data/movies.json')
    .then(function (response) {
        var movies=response.data;
         store.dispatch(
    {type: 'LOAD_MOVIE',
    movies: {
      load: true,
      selected:{},
      next_rank: parseInt(movies[movies.length-1].rank)+1,
      list: movies
    }});
 
      })
    .catch(function(error){
      console.log(error);
    });

    return {selected:{}, load:false, list:[]};
};
