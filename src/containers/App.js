import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import MoviesPage from './MoviesPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route exact path='/movies' component={MoviesPage}/>
        </div>
      </Router>
    );
  }
}
 
export default App;