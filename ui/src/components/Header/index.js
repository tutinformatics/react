import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

export default class extends Component {

  render() {
    return (
      <nav className='nav-container container-fluid'>
        <div className='container'>
          <div className='row'>
        <ul className='custom-nav col-12 col-lg-8'>
          <li>
            <NavLink to='/item1' activeClassName='active'>Menu item #1</NavLink>
          </li>
          <li>
            <NavLink to='/item2/42' activeClassName='active'>Menu item #2</NavLink>
          </li>
        </ul>
          </div>
        </div>
      </nav>
    );
  }
}
