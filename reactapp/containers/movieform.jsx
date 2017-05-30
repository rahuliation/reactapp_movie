import React from 'react';
import {connect} from 'react-redux';
import {Add_movie} from '../actions/index'
import {bindActionCreators} from 'redux'
import { store } from '../store';
import { push } from 'react-router-redux'


class MovieForm extends React.Component {
  submit_form(e) {
    e.preventDefault();
    this.props.Add_movie(document.getElementById("title").value);
      console.log(this.props);
       store.dispatch(push("/edit/"+this.props.movieList.selected.id));
  }
   render() {
      return (
      <div className="container">
      <form onSubmit={(e)=> this.submit_form(e) }  >
  <div className="form-group">
    <label htmlFor="title">Movie Title:</label>
    <input type="title" id="title" className="form-control"/>
  </div>
  <button type="submit" className="btn btn-default">Submit</button>
</form>

      </div>

      );
   }
};

function mapDispatch(dispatch) {
  return bindActionCreators({Add_movie}, dispatch);
}

function mapState(state) {
  const { movieList } = state;
 
  return { movieList };
}

export default connect(mapState,mapDispatch)(MovieForm);