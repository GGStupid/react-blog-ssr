import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './containers/Login/Login'
import Posts from './containers/Posts/Posts'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    const { dispatch } = this.props
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={Login} />
            <Route path='/posts' component={Posts} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
