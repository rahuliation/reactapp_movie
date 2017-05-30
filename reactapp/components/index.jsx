import React from 'react';
import { Route, Link } from 'react-router-dom';
import CREATE from './create.jsx'
import MOVIE from './movie.jsx'
import EDIT from './edit.jsx'

class App extends React.Component {
   render() {
      return (
        <div>
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#"> Rahul React</a>
    </div>

  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
         <li className="active"><Link to="/"  >Movie List</Link></li>
         <li><Link to="/create"  >Create Movie</Link></li>
      </ul>
    </div>
  </div> 
</nav>        
        <Route exact path="/" component={MOVIE} />   
        <Route path="/create" component={CREATE} />
          <Route path="/edit/:id" component={EDIT} />

         </div>

      );
   }
};

export default App;