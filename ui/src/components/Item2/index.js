import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div className="Page2">
        <h3>Hello, this is second page with slug: {this.props.match.params.slug}</h3>
       </div>
    );
  }
}