import React from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import {Load_movie,Delete_movie} from '../actions/index'
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router';
import {  Link } from 'react-router-dom';


class MovieList extends React.Component {

  constructor () {
      super();     
  }
  componentWillMount(){

    var load_movie=this.props.Load_movie;

    if(!this.props.movieList.load)
    {
      Axios.get('https://raw.githubusercontent.com/hjorturlarsen/IMDB-top-100/master/data/movies.json')
    .then(function (response) {
      load_movie(response.data);
    
 
      })
    .catch(function(error){
      console.log(error);
    });

    }
    

  }
 

   body_render() {
     var delete_movie=this.props.Delete_movie;

    return  this.props.movieList.list.map(function(obj){
       return (
        <tr key={obj.id}>
           <td>{obj.id}</td>
        <td>{obj.title}</td>
         <td>{obj.rank}</td>
          <td> 
            <Link className="btn  btn-link" to={"/edit/"+obj.id}  >EDIT</Link>
              <button className="btn  btn-link" onClick={()=> delete_movie(obj.id)} >Delete</button>
          </td>
        </tr>
        );
    });
   }

   render() {
      return (
      <div className='container'>
      
    		  <table className="table table-striped">
            <thead>
              <tr>
                <th>
                  ID
                  </th>
                <th>
                  Titile
                  </th>
                <th>
                  Rank
                </th>
                   <th>
                  Action
                  </th>
              </tr>
             </thead>
            <tbody> 
                { this.body_render() }
              </tbody>
    	     
    	    </table>
      </div>

      );
   }
};

function mapDispatch(dispatch) {
  return bindActionCreators({Load_movie,Delete_movie}, dispatch);
}


function mapState(state,ownProps) {
  const { movieList } = state;
 
  return { movieList };
}




export default withRouter(connect(mapState,mapDispatch)(MovieList));