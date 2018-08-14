import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Login from './containers/Login/Login'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    const { dispatch } = this.props
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={Login}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
