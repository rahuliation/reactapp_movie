import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router';
import {Edit_movie,Load_selected_movie} from '../actions/index'
import {  Link } from 'react-router-dom';

class MovieEdit extends React.Component {

  constructor () {
      super();
     this.state={success_message:false};
  }
  componentDidMount (){
      
  
    this.props.Load_selected_movie(this.props.match.params.id)
    

  }


    submit_form(e) {
    e.preventDefault();
    this.props.Edit_movie(document.getElementById("title").value);
    this.setState({success_message:true});
  }

success_message(){
  return(
    <div className="alert alert-success">
  <strong>Success!</strong> Saved The Data
  
</div>
  );
}
   render() {
      return (
      <div className="container">
        {this.state.success_message? this.success_message(): ""}
      <form onSubmit={(e)=> this.submit_form(e) }  >
  <div className="form-group">
    <label htmlFor="title">Movie Title:</label>
    <input type="title" defaultValue={this.props.movieList.selected.title} id="title" className="form-control"/>
  </div>
  <button type="submit" className="btn btn-default">Submit</button>
  <Link className="btn  btn-block" to="/"  >Back</Link>
</form>

      </div>

      );
   }
};

function mapDispatch(dispatch) {
  return bindActionCreators({Edit_movie,Load_selected_movie}, dispatch);
}


function mapState(state,ownProps) {
  const { movieList } = state;
 
  return { movieList };
}




export default withRouter(connect(mapState,mapDispatch)(MovieEdit));