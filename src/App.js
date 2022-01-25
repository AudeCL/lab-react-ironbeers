import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './components/Homepage';
import AllBeer from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/allbeers" component={AllBeer} />
          <Route exact path="/randombeer" component={RandomBeer} />
          <Route exact path="/newbeer" component={NewBeer} />
        </Switch>
      </div>
    );

  }
  
}

export default App; 