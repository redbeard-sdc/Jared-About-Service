import React from 'react';
import { Component } from 'react';
import Header from '../header/header.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: {
        name: 'Stanley Hotel'
      }
    };
  }

  getHotel() {
    fetch('http://localhost:3000/hotels/Stanly%20Hotel', () => {

    });
  }
  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

export default App;