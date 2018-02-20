import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Item1 from './components/Item1';
import Item2 from './components/Item2';
import Item3 from './components/Item3';
import './App.css';

export default class extends Component {

  renderRoutes() {
    return (
            <Switch>
                <Route exact path='/item1' component={Item1}/>
                <Route exact path='/item2/:slug' component={Item2}/>
                <Route exact path='/item3' component={Item3}/>
            </Switch>
    );
  }

  render() {
    return (
        <HashRouter>
          <div className='App'>
            <Header />
              {(this.renderRoutes())}
          </div>
        </HashRouter>
        );
  }
}