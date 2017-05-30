
import {movie_list} from "../requests/movielist";



const movieList = (state =movie_list(), action) => {
   
  switch (action.type) {
    case 'LOAD_MOVIE': {
  
    var new_state=action.movies;
    return new_state ;

    }

    case 'ADD_MOVIE': {
  
     var new_state={...state };
     new_state.selected.id= action.movie.id;
     new_state.selected.title =  action.movie.title,
     new_state.selected.rank  =new_state.next_rank++
    
    new_state.list.push(new_state.selected);
    console.log(new_state);
     
    return {...new_state} ;
  }
   case 'EDIT_MOVIE': {
  
     var new_state={...state };
     var select=new_state.list
     .findIndex(function(movie){
      return movie.id==new_state.selected.id;
     });
     new_state.list[select].title=action.title;    
     new_state.selected.title=action.title;
    return {...new_state} ;
  }
  
    case 'DELETE_MOVIE': {

     var new_state={...state };
     new_state.list=new_state.list
     .filter(function(movie){
        return movie.id!=action.id;
     });
     return {...new_state} ;
    }
  
  
    case 'LOAD_SELECTED_MOVIE': {
     
     var new_state={...state };
     var select=new_state.list
     .filter(function(movie)
     {
       return movie.id==action.id;
     });
     new_state.selected.id=select[0].id;
     new_state.selected.rank=select[0].rank;
     new_state.selected.title=select[0].title;
    return new_state ;

    }
    
  
  }
   return state
}

export default {movieList}