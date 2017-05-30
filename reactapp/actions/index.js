export const Add_movie = (title) => {
  return {
    type: 'ADD_MOVIE',
    movie:{
            id : new Date().getTime(),
            title: title,
        }
  }
}
export const Edit_movie = (title) => {
  return {
    type: 'EDIT_MOVIE',
    title: title  
  }
}

export const Delete_movie = (id) => {
  console.log(id);
  return {
    type: 'DELETE_MOVIE',
    id: id  
  }
}


export const Load_movie = (movies) => {

  return {
    type: 'LOAD_MOVIE',
    movies: {
      load: true,
      selected:{},
      next_rank: parseInt(movies[movies.length-1].rank)+1,
      list: movies
    }
    
  }
}

export const Load_selected_movie= (id) => {

  return {
    type: 'LOAD_SELECTED_MOVIE',
    id: id
    
  }
}



