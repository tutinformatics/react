import React, { Component } from 'react';

export default class extends Component {
  state = {
    item3: 'loading...',
  };

  fetchUrl = '/static/item3.json';

  componentDidMount() {
    fetch(this.fetchUrl).then(
      response => {
          if (!response.ok) {
            throw Error(response.statusText);
          };

          return response.json();
        }).then(
        json => {
          this.setState({ item3: json.information });
        });
  };

  render()  {
    return (
      <div className="Page3">
       <h3>{this.state.item3}</h3>
      </div>
    );
  }
}
